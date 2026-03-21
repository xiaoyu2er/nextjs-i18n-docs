import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import { api, type Job } from '../lib/api';

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function JobItem({ job }: { job: Job }) {
  const qc = useQueryClient();
  const del = useMutation({
    mutationFn: () => api.deleteJob(job.id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['jobs'] }),
  });

  const pct =
    job.toTranslate > 0
      ? (job.translatedFiles / job.toTranslate) * 100
      : job.status === 'completed'
        ? 100
        : 0;

  let progress = '';
  if (job.toTranslate > 0) {
    progress = `${job.translatedFiles}/${job.toTranslate} translated`;
    if (job.totalFiles) progress += ` (${job.totalFiles} total)`;
  } else if (job.totalFiles > 0) {
    progress = `scanning ${job.totalFiles} files...`;
  }
  if (job.errorFiles > 0) progress += ` · ${job.errorFiles} errors`;

  const running = job.status === 'running';

  return (
    <div className="job-item">
      <div className="hdr">
        <span className={`status-badge ${job.status}`}>{job.status}</span>
        <strong>
          {job.lang}/{job.version}
        </strong>
        {job.currentFile && (
          <span style={{ color: 'var(--fg2)' }}>{job.currentFile}</span>
        )}
        <span className="spacer" />
        <button
          type="button"
          className="btn btn-sm btn-outline"
          onClick={() => del.mutate()}
        >
          {running ? '⏹' : '🗑'}
        </button>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="job-meta">
        {progress} · {new Date(job.startedAt).toLocaleTimeString()}
        {job.finishedAt &&
          ` · done ${new Date(job.finishedAt).toLocaleTimeString()}`}
        {job.exitCode != null &&
          job.exitCode !== 0 &&
          ` · exit ${job.exitCode}`}
      </div>
      {job.logLines && job.logLines.length > 0 && (
        <div className="log-viewer">
          {job.logLines.map((line, i) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: log lines
              key={i}
              className={
                line.includes('stderr') || line.includes('rror')
                  ? 'err'
                  : undefined
              }
              // biome-ignore lint/security/noDangerouslySetInnerHtml: escaped
              dangerouslySetInnerHTML={{ __html: escapeHtml(line) }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function JobPanel() {
  const qc = useQueryClient();
  const prevRunning = useRef(new Set<string>());

  const { data: jobs = [] } = useQuery({
    queryKey: ['jobs'],
    queryFn: api.jobs,
    refetchInterval: 3000,
  });

  // Detect completed jobs and refresh data
  useEffect(() => {
    const currentRunning = new Set(
      jobs.filter((j) => j.status === 'running').map((j) => j.id),
    );
    const justFinished = [...prevRunning.current].filter(
      (id) => !currentRunning.has(id),
    );
    if (justFinished.length > 0) {
      // Invalidate all file/status queries
      qc.invalidateQueries({ queryKey: ['files'] });
      qc.invalidateQueries({ queryKey: ['fileBlocks'] });
      qc.invalidateQueries({ queryKey: ['status'] });
    }
    prevRunning.current = currentRunning;
  }, [jobs, qc]);

  return (
    <div className="jobs-panel">
      <h3>Jobs</h3>
      {jobs.length === 0 ? (
        <span style={{ color: 'var(--fg2)', fontSize: '0.85rem' }}>
          No jobs
        </span>
      ) : (
        jobs.map((j) => <JobItem key={j.id} job={j} />)
      )}
    </div>
  );
}

const BASE = '/api';

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, init);
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
  return data as T;
}

// ── Types ──

export interface StatusOverview {
  versions: string[];
  langs: string[];
  data: Record<
    string,
    {
      enFileCount: number;
      langs: Record<
        string,
        {
          sections: Record<
            string,
            {
              totalFiles: number;
              translatedFiles: number;
              totalNodes: number;
              translatedNodes: number;
            }
          >;
          totalFiles: number;
          translatedFiles: number;
          totalNodes: number;
          translatedNodes: number;
        }
      >;
    }
  >;
}

export interface FileCoverage {
  file: string;
  total: number;
  translated: number;
}

export interface FileContent {
  file: string;
  lang: string;
  version: string;
  content: string;
}

export interface Job {
  id: string;
  lang: string;
  version: string;
  status: 'running' | 'completed' | 'failed' | 'cancelled';
  startedAt: string;
  finishedAt?: string;
  exitCode?: number | null;
  totalFiles: number;
  toTranslate: number;
  translatedFiles: number;
  errorFiles: number;
  currentFile?: string;
  logLines?: string[];
}

// ── API ──

export interface Model {
  id: string;
  name: string;
  promptPrice: number;
  completionPrice: number;
  contextLength: number;
  isFree: boolean;
}

export const api = {
  status: () => request<StatusOverview>('/status'),

  fileCoverage: (version: string, lang: string) =>
    request<FileCoverage[]>(`/status/${version}/${lang}`),

  fileContent: (version: string, lang: string, file: string) =>
    request<FileContent>(`/status/content/${version}/${lang}/${file}`),

  models: () => request<Model[]>('/models'),

  jobs: () => request<Job[]>('/jobs'),

  createJob: (body: {
    lang: string;
    version: string;
    max?: number;
    concurrency?: number;
    model?: string;
    files?: string[];
  }) =>
    request<Job>('/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }),

  deleteJob: (id: string) =>
    request<{ ok: boolean }>(`/jobs/${id}`, { method: 'DELETE' }),
};

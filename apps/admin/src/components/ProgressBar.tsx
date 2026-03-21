export function ProgressBar({
  value,
  color,
  height = 4,
}: {
  value: number;
  color?: string;
  height?: number;
}) {
  return (
    <div className="bar-bg" style={{ height }}>
      <div
        className="bar-fill"
        style={{
          width: `${Math.min(100, value)}%`,
          background: color || 'var(--accent)',
        }}
      />
    </div>
  );
}

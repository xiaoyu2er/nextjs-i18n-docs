export function getFileExtension(filename: string): string {
  const i = filename.lastIndexOf('.');
  return i < 0 ? '' : filename.slice(i + 1).toLowerCase();
}

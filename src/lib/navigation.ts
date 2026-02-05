const BASE_PATH = import.meta.env.BASE_URL;

export function getFullPath(path: string): string {
  if (BASE_PATH === '/' || path.startsWith('http')) return path;
  const basePath = BASE_PATH.endsWith('/') ? BASE_PATH.slice(0, -1) : BASE_PATH;
  return `${basePath}${path}`;
}

export function navigate(path: string): void {
  const fullPath = getFullPath(path);
  window.history.pushState({}, '', fullPath);
  window.dispatchEvent(new Event('popstate'));
}

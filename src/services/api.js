const API_BASE = '/api';

const defaultOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
};

export async function apiPost(path, body, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    ...defaultOptions,
    ...options,
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await res.text();
  let data;
  try {
    data = text ? JSON.parse(text) : {};
  } catch (err) {
    throw new Error('Invalid JSON response from server');
  }

  if (!res.ok) {
    const message = data?.message || res.statusText || 'Request failed';
    throw new Error(message);
  }

  return data;
}

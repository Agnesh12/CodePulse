import { apiPost } from './api';

const TOKEN_KEY = 'code_pulse_token';

export function saveToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function isAuthenticated() {
  return Boolean(getToken());
}

export async function login({ email, password }) {
  const data = await apiPost('/auth/login', { email, password });
  if (data?.token) {
    saveToken(data.token);
  }
  return data;
}

export async function register({ name, email, password }) {
  return apiPost('/auth/register', { name, email, password });
}

export async function forgotPassword({ email }) {
  return apiPost('/auth/forgot-password', { email });
}

export async function resetPassword({ token, password }) {
  return apiPost('/auth/reset-password', { token, password });
}

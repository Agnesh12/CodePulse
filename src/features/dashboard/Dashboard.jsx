import { useNavigate } from 'react-router-dom';
import { clearToken } from '../../services/authService';

export default function Dashboard() {
  const navigate = useNavigate();

  function handleSignOut() {
    clearToken();
    navigate('/login', { replace: true });
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Dashboard</h1>
          <p className="text-sm text-slate-600">Welcome back! Track your progress and study plans here.</p>
        </div>

        <button
          onClick={handleSignOut}
          className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
        >
          Sign out
        </button>
      </header>

      <main className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Recent Activity</h2>
              <p className="mt-2 text-sm text-slate-600">
                This is a placeholder dashboard. Replace with actual analytics and progress cards.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Study Plans</h2>
              <p className="mt-2 text-sm text-slate-600">
                Build your study plans here once the backend is connected.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">Admin Dashboard</h1>
      <p className="text-text-muted">Platform management, user verification, and dispute resolution.</p>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-2">Total Users</h2>
          <p className="text-4xl font-extrabold">12,450</p>
        </div>
        <div className="glass-panel p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-2">Active Workers</h2>
          <p className="text-4xl font-extrabold">840</p>
        </div>
        <div className="glass-panel p-6 rounded-xl border-l-4 border-l-red-500">
          <h2 className="text-xl font-bold mb-2">Open Disputes</h2>
          <p className="text-4xl font-extrabold text-red-400">12</p>
        </div>
      </div>
    </div>
  );
}

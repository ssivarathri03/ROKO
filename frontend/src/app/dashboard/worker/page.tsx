export default function WorkerDashboard() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">Worker Dashboard</h1>
      <p className="text-text-muted">Manage your availability, accept new bookings, and track your earnings.</p>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-xl border-l-4 border-l-primary">
          <h2 className="text-xl font-bold mb-2">Pending Requests</h2>
          <p className="text-4xl font-extrabold">3</p>
        </div>
        <div className="glass-panel p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-2">Today's Earnings</h2>
          <p className="text-4xl font-extrabold">$180</p>
        </div>
        <div className="glass-panel p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-2">Rating</h2>
          <p className="text-4xl font-extrabold text-primary">4.9 ★</p>
        </div>
      </div>
    </div>
  );
}

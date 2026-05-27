export default function ClientDashboard() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">Client Dashboard</h1>
      <p className="text-text-muted">Welcome to your dashboard. Here you can book new workers, track ongoing construction projects, and manage your payments.</p>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-2">Active Bookings</h2>
          <p className="text-4xl font-extrabold">2</p>
        </div>
        <div className="glass-panel p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-2">Total Spent</h2>
          <p className="text-4xl font-extrabold">$1,250</p>
        </div>
        <div className="glass-panel p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-2">Saved Workers</h2>
          <p className="text-4xl font-extrabold">5</p>
        </div>
      </div>
    </div>
  );
}

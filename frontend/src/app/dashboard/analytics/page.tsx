export default function AnalyticsDashboard() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">Analytics Engine</h1>
      <p className="text-text-muted">Real-time data insights powered by the ROKO C++ Analytics Service.</p>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6 rounded-xl h-64 flex flex-col items-center justify-center">
          <p className="text-text-muted mb-4">Revenue Growth (Chart Placeholder)</p>
          <div className="w-full h-32 bg-primary/10 rounded-lg border border-primary/20"></div>
        </div>
        <div className="glass-panel p-6 rounded-xl h-64 flex flex-col items-center justify-center">
          <p className="text-text-muted mb-4">Worker Demand Heatmap</p>
          <div className="w-full h-32 bg-roko-black rounded-lg border border-white/10"></div>
        </div>
      </div>
    </div>
  );
}

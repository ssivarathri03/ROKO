import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="glass-panel sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4">
        <div className="text-3xl font-extrabold tracking-tighter text-primary">ROKO</div>
        <nav className="hidden md:flex gap-8 font-medium">
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>
        <div className="flex gap-4">
          <Link href="/login" className="px-6 py-2.5 rounded-full border border-primary text-primary hover:bg-primary/10 transition font-semibold">Log In</Link>
          <Link href="/signup" className="px-6 py-2.5 rounded-full bg-primary text-roko-black font-bold hover:bg-primary-light hover-glow transition">Sign Up</Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-roko-surface via-roko-black to-roko-black relative overflow-hidden">
        
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 max-w-5xl leading-[1.1] relative z-10">
          Instant Construction Workers. <br/>
          <span className="gradient-text">Zero Hassle.</span>
        </h1>
        <p className="text-lg md:text-xl text-text-muted max-w-2xl mb-12 relative z-10">
          Book verified masons, electricians, plumbers, and complete construction teams in real-time. The ultimate platform for heavy-duty building.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 relative z-10">
          <Link href="/book" className="px-8 py-4 rounded-full bg-primary text-roko-black font-extrabold text-lg hover:bg-primary-light hover-glow transition shadow-lg shadow-primary/20">
            Book a Worker Now
          </Link>
          <Link href="/worker/apply" className="px-8 py-4 rounded-full glass-panel hover:border-primary hover:text-primary transition text-lg font-medium">
            Join as a Professional
          </Link>
        </div>
      </main>
      
      {/* Dashboard Links (For Dev Navigation) */}
      <section className="py-16 bg-roko-surface border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-10 text-center flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-primary/50"></span>
            Development Dashboards
            <span className="w-12 h-[1px] bg-primary/50"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             <DashboardCard title="Client Dashboard" link="/dashboard/client" desc="Book and track services in real-time" />
             <DashboardCard title="Worker Dashboard" link="/dashboard/worker" desc="Manage your schedule and earnings" />
             <DashboardCard title="Admin Dashboard" link="/dashboard/admin" desc="Platform moderation and management" />
             <DashboardCard title="Analytics" link="/dashboard/analytics" desc="AI-powered real-time metrics" />
          </div>
        </div>
      </section>
    </div>
  );
}

function DashboardCard({ title, link, desc }: { title: string, link: string, desc: string }) {
  return (
    <Link href={link} className="glass-panel p-6 rounded-2xl hover-glow group cursor-pointer block h-full flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition">{title}</h3>
        <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
      </div>
      <div className="mt-6 flex justify-end">
        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-roko-black transition-colors">
          →
        </div>
      </div>
    </Link>
  );
}

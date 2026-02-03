export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-zinc-800">
        <div className="text-2xl font-bold">
          <span className="text-emerald-400">OJT</span> Tracker
        </div>
        <div className="flex gap-8 items-center">
          <a href="#features" className="hover:text-emerald-400 transition-colors">
            Features
          </a>
          <a href="#about" className="hover:text-emerald-400 transition-colors">
            About
          </a>
          <button className="bg-emerald-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-emerald-500 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex items-center justify-between px-8 py-32 max-w-7xl mx-auto">
        {/* Left side - Visual */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-80 h-80">
            {/* Gradient circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-3xl opacity-20 blur-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl flex items-center justify-center">
              <div className="bg-black rounded-full w-40 h-40 flex items-center justify-center">
                <svg className="w-24 h-24 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex-1 pl-12">
          <p className="text-emerald-400 text-sm font-semibold mb-4">
            Internship Management Platform
          </p>
          <h1 className="text-6xl font-bold mb-8 leading-tight">
            Track Smarter.
            <br />
            Intern Better.
            <br />
            Graduate Stronger.
          </h1>
          <p className="text-xl text-zinc-400 mb-8 max-w-lg leading-relaxed">
            Manage your OJT experience with a powerful tracking platform designed for students and interns. Monitor progress, track hours, and showcase your professional growth.
          </p>
          <div className="flex gap-4">
            <button className="bg-emerald-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-emerald-500 transition-colors">
              Start Tracking
            </button>
            <button className="border border-zinc-600 text-white px-8 py-3 rounded-full font-semibold hover:border-emerald-400 hover:text-emerald-400 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="bg-zinc-900 py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Why Choose OJT Tracker?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Real-time Tracking",
                description: "Monitor your internship hours and progress in real-time with detailed analytics.",
              },
              {
                title: "Professional Insights",
                description: "Gain valuable insights into your skill development and professional growth.",
              },
              {
                title: "Easy Integration",
                description: "Connect with your institution and mentors seamlessly.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-black p-8 rounded-lg border border-zinc-800 hover:border-emerald-400 transition-colors">
                <div className="w-12 h-12 bg-emerald-400 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Internship?</h2>
          <p className="text-xl text-zinc-400 mb-8">
            Join thousands of students already tracking their professional journey.
          </p>
          <button className="bg-emerald-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-500 transition-colors">
            Get Started Free
          </button>
        </div>
      </section>
    </div>
  );
}

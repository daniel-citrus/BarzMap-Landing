const brandColors = [
  { name: 'Sky Blue', role: 'Primary', value: '#00AEEF' },
  { name: 'Vibrant Green', role: 'Accent', value: '#00C853' },
  { name: 'Dark Gray', role: 'Text / Base', value: '#222222' },
  { name: 'Background Gray', role: 'Background', value: '#F5F7FA' },
  { name: 'Highlight Orange', role: 'CTA Hover', value: '#FFA726' },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-6 pb-16 pt-20 text-center text-slate-100">
        <span className="text-sm uppercase tracking-[0.35em] text-sky-400">BarzMap</span>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Outdoor Calisthenics, Mapped.</h1>
        <p className="text-base text-slate-300 sm:text-lg">
          Kickstart the landing page build with Vite, React, and Tailwind. Replace this scaffolding with the real design as you iterate.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-slate-900">
          <button className="rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 transition hover:bg-sky-300">
            Join the Movement
          </button>
          <button className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-100 transition hover:border-slate-500">
            Explore the Plan
          </button>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 pb-24">
        <section className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-xl">
          <h2 className="text-xl font-semibold text-slate-100 sm:text-2xl">Color palette</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brandColors.map((color) => (
              <article
                key={color.name}
                className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4"
              >
                <span
                  className="h-16 w-16 rounded-xl border border-slate-800"
                  style={{ backgroundColor: color.value }}
                />
                <div className="space-y-1">
                  <p className="text-sm uppercase tracking-wide text-slate-400">{color.role}</p>
                  <p className="text-lg font-medium text-slate-100">{color.name}</p>
                  <p className="font-mono text-sm text-slate-400">{color.value}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

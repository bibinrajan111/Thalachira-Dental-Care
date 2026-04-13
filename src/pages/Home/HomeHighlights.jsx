function HomeHighlights() {
  const cards = [1, 2, 3];

  return (
    <section className="home-panel flex min-h-[calc(100vh-5rem)] items-center bg-dentalBlue/40" id="home-highlights">
      <div className="page-shell">
        <h2 className="mb-8 text-3xl font-bold">[Placeholder Highlights Heading]</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card}
              className="animate-fadeSlide rounded-2xl border border-dentalSky bg-white p-6 shadow-dental transition duration-300 hover:-translate-y-2"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-dentalSky">
                IMG
              </div>
              <h3 className="mb-3 text-xl font-semibold">[Placeholder Card Heading]</h3>
              <p className="text-slate-600">[Placeholder card text details.]</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeHighlights;

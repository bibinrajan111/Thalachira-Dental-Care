import RevealOnScroll from '../../components/RevealOnScroll';

const cards = [
  {
    title: 'Digital Smile Design',
    text: 'Preview your transformed smile using advanced digital simulations before treatment begins.',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Painless Dentistry',
    text: 'Comfort-first procedures with minimally invasive methods for anxiety-free visits.',
    image: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Family Dental Plans',
    text: 'Comprehensive plans for preventive, cosmetic, and restorative care for every age.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80',
  },
];

function HomeHighlights() {
  return (
    <section className="home-panel flex min-h-[calc(100vh-5rem)] items-center bg-gradient-to-br from-blue-100 via-cyan-50 to-sky-100" id="home-highlights">
      <div className="page-shell py-10">
        <RevealOnScroll>
          <h2 className="mb-2 text-3xl font-bold">Why Choose Thalachira Dental Care</h2>
          <p className="mb-8 text-slate-700">Where clinical excellence meets cinematic patient experience.</p>
        </RevealOnScroll>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <RevealOnScroll key={card.title} delay={i * 120}>
              <article className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-dental transition duration-500 hover:-translate-y-2 hover:shadow-xl">
                <img src={card.image} alt={card.title} className="mb-4 h-40 w-full rounded-xl object-cover" />
                <h3 className="mb-2 text-xl font-semibold">{card.title}</h3>
                <p className="text-slate-700">{card.text}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeHighlights;

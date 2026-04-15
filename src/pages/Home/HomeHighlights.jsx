import RevealOnScroll from '../../components/RevealOnScroll';

const careJourney = [
  {
    title: '1. Digital Diagnostics',
    text: '3D scans, intraoral imaging, and data-led assessments build a precise treatment blueprint.',
    image: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: '2. Personalized Procedure',
    text: 'Comfort anesthesia, minimally invasive methods, and continuous updates during treatment.',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: '3. Long-Term Maintenance',
    text: 'Custom preventive plan with reminders, nutrition guidance, and follow-up care cycles.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80',
  },
];

const testimonials = [
  {
    name: 'Aparna R.',
    role: 'Smile Design Patient',
    quote: 'The entire experience felt premium and painless. Their digital preview gave me confidence before starting treatment.',
  },
  {
    name: 'Sreekanth M.',
    role: 'Family Dental Plan',
    quote: 'From children to grandparents, our whole family now visits this clinic. Friendly team and outstanding hygiene.',
  },
];

function HomeHighlights() {
  return (
    <section className="home-panel flex min-h-[calc(100vh-6rem)] items-center bg-gradient-to-br from-dentalCloud/35 via-white to-dentalMist" id="home-highlights">
      <div className="page-shell space-y-12 py-14">
        <RevealOnScroll>
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">A Smarter Journey to Lifelong Oral Wellness</h2>
          <p className="max-w-3xl text-dentalInk/75">
            Our modern workflow blends clinical precision with design-led patient communication—so every visit feels clear, comfortable, and confidence-building.
          </p>
        </RevealOnScroll>

        <div className="grid gap-6 lg:grid-cols-3">
          {careJourney.map((step, i) => (
            <RevealOnScroll key={step.title} delay={i * 110}>
              <article className="group overflow-hidden rounded-3xl border border-dentalCloud bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-soft">
                <img src={step.image} alt={step.title} className="h-48 w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="space-y-3 p-5">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-dentalInk/75">{step.text}</p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {testimonials.map((item, idx) => (
            <RevealOnScroll key={item.name} delay={idx * 120}>
              <article className="rounded-2xl border border-dentalCloud bg-white/95 p-6 shadow-sm">
                <p className="mb-4 text-dentalInk/80">“{item.quote}”</p>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-dentalInk/60">{item.role}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeHighlights;

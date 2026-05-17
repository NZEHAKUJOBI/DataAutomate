import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'CIO, MedCore Health Systems',
    industry: 'Healthcare',
    color: 'rose',
    rating: 5,
    quote: 'DataAutomate completely transformed how we manage patient data. We went from weekly reports to live dashboards tracking 50+ KPIs across 12 hospitals. Clinical decision speed improved by 40% in the first quarter alone.',
  },
  {
    name: 'James Okonkwo',
    role: 'Head of Analytics, PrimeBank',
    industry: 'Finance',
    color: 'yellow',
    rating: 5,
    quote: 'We needed a platform that could unify trading data, risk metrics, and compliance feeds in real-time. DataAutomate delivered that and more. Our reporting cycles dropped from 3 days to under 2 hours.',
  },
  {
    name: 'Priya Sharma',
    role: 'VP Operations, FreightFlow Global',
    industry: 'Logistics',
    color: 'blue',
    rating: 5,
    quote: 'Tracking 1,400 vehicles across 28 countries was a nightmare before DataAutomate. Now we have a single dashboard that shows every asset, delay, and SLA breach in real-time. On-time delivery is up 28%.',
  },
  {
    name: 'Marcus Weber',
    role: 'Data Director, AutoTech Manufacturing',
    industry: 'Manufacturing',
    color: 'orange',
    rating: 5,
    quote: "Connecting our IoT sensors to our ERP was something we'd planned for years but never achieved. DataAutomate did it in 6 weeks. We now see OEE scores live on every shop floor screen.",
  },
  {
    name: 'Amara Diallo',
    role: 'Head of Digital, RetailCore Africa',
    industry: 'Retail',
    color: 'green',
    rating: 5,
    quote: 'Blending e-commerce, POS, and inventory data used to require a team of engineers. DataAutomate turned that into a self-service dashboard. Revenue grew 22% after we started acting on the insights.',
  },
  {
    name: 'Prof. Lin Zhang',
    role: 'Director, National Education Analytics',
    industry: 'Education',
    color: 'purple',
    rating: 5,
    quote: 'Monitoring student outcomes across 400 schools was impossibly complex. DataAutomate gave us a unified view overnight. Admin time fell by 35% and we finally have evidence-based policy decisions.',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="testimonials__header">
          <div className="section-badge">Client Stories</div>
          <h2 className="section-heading">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="testimonials__subtitle">
            Organisations across every sector rely on DataAutomate to unify their data
            and drive measurable business outcomes.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <div key={t.name} className={`testimonial-card card testimonial-card--${t.color}`}>
              <div className="testimonial-card__top">
                <Quote size={24} className="testimonial-card__quote-icon" />
                <span className={`testimonial-card__industry testimonial-card__industry--${t.color}`}>
                  {t.industry}
                </span>
              </div>
              <div className="testimonial-card__stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-card__quote">{t.quote}</p>
              <div className="testimonial-card__author">
                <div className={`testimonial-card__avatar testimonial-card__avatar--${t.color}`}>
                  {t.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

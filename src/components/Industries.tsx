import { Heart, DollarSign, Truck, Factory, ShoppingCart, GraduationCap } from 'lucide-react';
import './Industries.css';

const industries = [
  {
    icon: <Heart size={28} />,
    color: 'rose',
    title: 'Healthcare',
    desc: 'Unify patient records, clinical workflows, lab data, and billing systems to improve care quality and operational efficiency.',
    kpis: ['Patient wait times', 'Bed occupancy rates', 'Readmission rates', 'Revenue cycle'],
    stat: '40% faster clinical decisions',
  },
  {
    icon: <DollarSign size={28} />,
    color: 'yellow',
    title: 'Finance & Banking',
    desc: 'Consolidate trading data, risk metrics, compliance reports, and customer portfolios into a single regulated dashboard.',
    kpis: ['Portfolio performance', 'Risk exposure', 'Compliance status', 'Transaction volume'],
    stat: '3x faster reporting cycles',
  },
  {
    icon: <Truck size={28} />,
    color: 'blue',
    title: 'Logistics & Supply Chain',
    desc: 'Track fleets, inventory levels, delivery ETAs, and supplier performance in real-time across your entire supply network.',
    kpis: ['On-time delivery', 'Fleet utilisation', 'Inventory turnover', 'Cost per mile'],
    stat: '28% reduction in delays',
  },
  {
    icon: <Factory size={28} />,
    color: 'orange',
    title: 'Manufacturing',
    desc: 'Connect OT/IoT sensor data with ERP and MES systems to monitor production, quality, and OEE from the shop floor to the boardroom.',
    kpis: ['OEE score', 'Defect rate', 'Downtime hours', 'Yield efficiency'],
    stat: '18% OEE improvement',
  },
  {
    icon: <ShoppingCart size={28} />,
    color: 'green',
    title: 'Retail & E-Commerce',
    desc: 'Blend POS, e-commerce, inventory, and customer data to drive smarter merchandising, pricing, and marketing decisions.',
    kpis: ['Sales by channel', 'Cart abandonment', 'Inventory age', 'Customer LTV'],
    stat: '22% revenue uplift',
  },
  {
    icon: <GraduationCap size={28} />,
    color: 'purple',
    title: 'Education',
    desc: 'Aggregate student performance, attendance, resource allocation, and funding data to improve outcomes and governance.',
    kpis: ['Graduation rates', 'Attendance trends', 'Budget utilisation', 'Engagement scores'],
    stat: '35% admin time saved',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="industries section">
      <div className="container">
        <div className="industries__header">
          <div className="section-badge">Industries We Serve</div>
          <h2 className="section-heading">
            Built for Every <span className="gradient-text">Data-Driven</span> Sector
          </h2>
          <p className="industries__subtitle">
            DataAutomate adapts to the unique data landscape of your industry, delivering
            pre-built connectors, templates, and KPIs out of the box.
          </p>
        </div>

        <div className="industries__grid">
          {industries.map((ind) => (
            <div key={ind.title} className={`industry-card card industry-card--${ind.color}`}>
              <div className="industry-card__top">
                <div className={`industry-card__icon industry-card__icon--${ind.color}`}>
                  {ind.icon}
                </div>
                <span className={`industry-card__stat industry-card__stat--${ind.color}`}>
                  {ind.stat}
                </span>
              </div>
              <h3>{ind.title}</h3>
              <p>{ind.desc}</p>
              <div className="industry-card__kpis">
                <span className="industry-card__kpis-label">Key Metrics</span>
                <div className="industry-card__kpi-list">
                  {ind.kpis.map((k) => (
                    <span key={k} className={`industry-card__kpi industry-card__kpi--${ind.color}`}>{k}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

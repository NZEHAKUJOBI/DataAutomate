import { Database, BarChart2, Bell, RefreshCw, Shield, Cpu } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Database size={24} />,
    color: 'blue',
    title: 'Pain-Point Discovery',
    desc: 'We sit with your team, map the workflows that hurt most, and pinpoint where lost hours, errors, or missed revenue are quietly piling up — before writing a single line of code.',
    features: ['Process audit & shadowing', 'Bottleneck scoring', 'ROI-first roadmap'],
  },
  {
    icon: <BarChart2 size={24} />,
    color: 'purple',
    title: 'Analytics That Decide',
    desc: 'Every automation ships with the lightweight analytics layer it needs — KPIs, alerts, and dashboards that prove the pain is gone and surface the next one to tackle.',
    features: ['Outcome-focused KPIs', 'Live status dashboards', 'Anomaly alerts'],
  },
  {
    icon: <RefreshCw size={24} />,
    color: 'cyan',
    title: 'Workflow Automation',
    desc: 'We replace the spreadsheets, copy-paste rituals, and after-hours data wrangling with reliable automations that run quietly in the background — and never miss a step.',
    features: ['End-to-end orchestration', 'Cron & event triggers', 'Self-healing retries'],
  },
  {
    icon: <Bell size={24} />,
    color: 'yellow',
    title: 'Automated Reports & Alerts',
    desc: 'Stop chasing weekly status emails. The right report lands in the right inbox, Slack channel, or WhatsApp group — and the right person gets paged the moment numbers drift.',
    features: ['Scheduled deliveries', 'Threshold & AI alerts', 'PDF / CSV / Slack / WhatsApp'],
  },
  {
    icon: <Cpu size={24} />,
    color: 'green',
    title: 'Predictive Intelligence',
    desc: 'Layer lightweight ML on top of your automations to predict demand, churn, or downtime — so your team acts on tomorrow\'s pain today, not next quarter\'s post-mortem.',
    features: ['Demand & churn forecasts', 'Anomaly detection', 'Plain-English insights'],
  },
  {
    icon: <Shield size={24} />,
    color: 'red',
    title: 'Secure by Design',
    desc: 'Every solution we build is wrapped in role-based access, full audit trails, and compliance-ready controls — because automation should reduce risk, not add to it.',
    features: ['Row-level access control', 'Full audit trail', 'SOC 2 / GDPR ready'],
  },
];

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="services__header">
          <div className="section-badge">What We Do</div>
          <h2 className="section-heading">
            From <span className="gradient-text">pain point to automation</span>
            <br />
            — with analytics built in
          </h2>
          <p className="services__subtitle">
            We pair hands-on workflow automation with a lightweight analytics layer, so every
            solution we ship pays for itself and proves it in numbers.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s) => (
            <div key={s.title} className={`service-card service-card--${s.color} card`}>
              <div className={`service-card__icon service-card__icon--${s.color}`}>
                {s.icon}
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul>
                {s.features.map((f) => (
                  <li key={f}>
                    <span className="service-card__bullet" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

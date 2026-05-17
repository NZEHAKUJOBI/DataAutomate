import { Database, BarChart2, Bell, RefreshCw, Shield, Cpu } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Database size={24} />,
    color: 'blue',
    title: 'Data Integration',
    desc: 'Connect every data source in your organisation — databases, APIs, flat files, and cloud services — into one unified pipeline without writing a single line of code.',
    features: ['50+ native connectors', 'Real-time & batch modes', 'Conflict resolution'],
  },
  {
    icon: <BarChart2 size={24} />,
    color: 'purple',
    title: 'Automated Dashboards',
    desc: 'Create self-updating dashboards that reflect live business data. Drag-and-drop widgets, custom KPIs, and pixel-perfect charts all rendered automatically.',
    features: ['No-code dashboard builder', 'Custom KPI formulas', '15+ chart types'],
  },
  {
    icon: <RefreshCw size={24} />,
    color: 'cyan',
    title: 'Pipeline Automation',
    desc: 'Schedule, monitor, and manage your data pipelines end-to-end. From ingestion to transformation to delivery — all orchestrated on a single visual canvas.',
    features: ['Visual pipeline editor', 'Cron & event triggers', 'Error recovery'],
  },
  {
    icon: <Bell size={24} />,
    color: 'yellow',
    title: 'Smart Alerts & Reports',
    desc: 'Set threshold-based or AI-driven alerts that notify your team the moment something deviates from plan. Deliver automated reports to any channel.',
    features: ['Anomaly detection AI', 'Multi-channel delivery', 'PDF/CSV export'],
  },
  {
    icon: <Cpu size={24} />,
    color: 'green',
    title: 'AI & Forecasting',
    desc: 'Overlay machine learning models on your data streams to predict trends, identify patterns, and surface insights before they become problems.',
    features: ['Time-series forecasting', 'Pattern recognition', 'NLP query engine'],
  },
  {
    icon: <Shield size={24} />,
    color: 'red',
    title: 'Governance & Security',
    desc: 'Enterprise-grade security with row-level permissions, full audit trails, SOC 2 compliance, and data lineage tracking across every pipeline.',
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
            Everything You Need to <span className="gradient-text">Automate Data</span>
          </h2>
          <p className="services__subtitle">
            From raw ingestion to polished dashboards, DataAutomate covers the full data
            lifecycle so your analysts focus on insights — not infrastructure.
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

import { CheckCircle, Users, Award, Globe } from 'lucide-react';
import './About.css';

const pillars = [
  { icon: <Users size={18} />, title: 'Team of Experts', desc: 'Data scientists, engineers & analysts working for you.' },
  { icon: <Award size={18} />, title: 'Proven Results', desc: '500+ dashboards deployed across industries.' },
  { icon: <Globe size={18} />, title: 'Global Reach', desc: 'Serving clients across 30+ countries worldwide.' },
];

const values = [
  'Real-time data pipelines with zero-lag refresh',
  'Unified data lake from 50+ connector integrations',
  'AI-powered anomaly detection & forecasting',
  'Role-based access with enterprise-grade security',
  'Custom KPI builder with drag-and-drop logic',
  'Full API access for custom downstream integrations',
];

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container about__inner">
        <div className="about__left">
          <div className="section-badge">Who We Are</div>
          <h2 className="section-heading">
            One Platform to <span className="gradient-text">Unify</span> All Your Data
          </h2>
          <p className="about__text">
            DataAutomate was built to solve one of the most persistent problems in modern
            organisations: fragmented data living in dozens of disconnected systems. We
            aggregate, clean, and visualise your data — automatically.
          </p>
          <p className="about__text">
            Whether your data lives in spreadsheets, cloud databases, IoT sensors, or
            third-party SaaS platforms, DataAutomate normalises it into a single source of
            truth and keeps it fresh around the clock.
          </p>

          <ul className="about__values">
            {values.map((v) => (
              <li key={v}>
                <CheckCircle size={15} className="about__check" />
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="about__right">
          <div className="about__pillars">
            {pillars.map((p) => (
              <div key={p.title} className="about__pillar card">
                <div className="about__pillar-icon">{p.icon}</div>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about__platform-box">
            <div className="apb__header">
              <span className="apb__label">Platform Architecture</span>
            </div>
            <div className="apb__layers">
              <div className="apb__layer apb__layer--source">
                <span>Data Sources</span>
                <div className="apb__tags">
                  {['SQL', 'REST APIs', 'CSV', 'IoT', 'Cloud DBs', 'SaaS'].map(t => (
                    <span key={t} className="apb__tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="apb__arrow">↓ Ingest & Transform</div>
              <div className="apb__layer apb__layer--engine">
                <span>AutoPipeline Engine</span>
                <div className="apb__tags">
                  {['Cleanse', 'Normalise', 'Enrich', 'Model'].map(t => (
                    <span key={t} className="apb__tag apb__tag--engine">{t}</span>
                  ))}
                </div>
              </div>
              <div className="apb__arrow">↓ Render & Deliver</div>
              <div className="apb__layer apb__layer--output">
                <span>Live Dashboards & Alerts</span>
                <div className="apb__tags">
                  {['Web', 'Mobile', 'Email', 'Slack', 'API'].map(t => (
                    <span key={t} className="apb__tag apb__tag--output">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

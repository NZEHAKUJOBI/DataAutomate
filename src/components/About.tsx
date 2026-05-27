import { CheckCircle } from 'lucide-react';
import './About.css';

const values = [
  'Pain-point discovery workshop',
  'Lightweight analytics layer',
  'Role-based security',
  'End-to-end workflow automation',
  'Real-time alerts & reports',
  'Continuous improvement loop',
];

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container about__inner">
        <div className="about__left">
          <div className="section-badge">Who We Are</div>
          <h2 className="section-heading">
            We build automations
            <br />
            around <span className="gradient-text">your hardest problems</span>
          </h2>
          <p className="about__text">
            DataAutomate helps businesses and organisations design and ship automated
            solutions that address their most urgent pain points — the manual reports, the
            missed SLAs, the data trapped in spreadsheets — with a touch of analytics to keep
            every decision honest.
          </p>
          <p className="about__text">
            We don't sell a tool and walk away. We co-design the workflow, automate the
            messy parts, and instrument the result so your team always knows what changed,
            what improved, and where to aim next.
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

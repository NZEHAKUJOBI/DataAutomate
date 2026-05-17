import { ArrowRight, Play, TrendingUp, Database, Zap } from 'lucide-react';
import './Hero.css';

const stats = [
  { value: '10x', label: 'Faster Insights' },
  { value: '98%', label: 'Data Accuracy' },
  { value: '500+', label: 'Dashboards Built' },
  { value: '50+', label: 'Enterprise Clients' },
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Animated grid background */}
      <div className="hero__grid" aria-hidden />
      <div className="hero__glow hero__glow--1" aria-hidden />
      <div className="hero__glow hero__glow--2" aria-hidden />

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <Zap size={13} />
            <span>Intelligent Data Automation Platform</span>
          </div>

          <h1 className="hero__title">
            Transform Your Data Into
            <span className="hero__title-highlight"> Automated Intelligence</span>
          </h1>

          <p className="hero__subtitle">
            DataAutomate unifies siloed data across your entire organisation and delivers
            real-time, self-updating dashboards — so your teams can act on facts, not guesswork.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="hero__btn-primary">
              Start Automating <ArrowRight size={16} />
            </a>
            <a href="#dashboard" className="hero__btn-ghost">
              <Play size={14} /> See Demo
            </a>
          </div>

          <div className="hero__stats">
            {stats.map((s) => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__dashboard-card animate-float">
            <div className="hdc__header">
              <div className="hdc__dot hdc__dot--red" />
              <div className="hdc__dot hdc__dot--yellow" />
              <div className="hdc__dot hdc__dot--green" />
              <span className="hdc__title">Live Dashboard</span>
              <span className="hdc__live"><span className="hdc__live-dot" />LIVE</span>
            </div>

            <div className="hdc__metrics">
              <div className="hdc__metric hdc__metric--blue">
                <TrendingUp size={16} />
                <div>
                  <div className="hdc__metric-val">+24.8%</div>
                  <div className="hdc__metric-lbl">Revenue</div>
                </div>
              </div>
              <div className="hdc__metric hdc__metric--green">
                <Database size={16} />
                <div>
                  <div className="hdc__metric-val">3.2M</div>
                  <div className="hdc__metric-lbl">Records/s</div>
                </div>
              </div>
            </div>

            <div className="hdc__chart-preview">
              {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                <div key={i} className="hdc__bar" style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }} />
              ))}
            </div>

            <div className="hdc__sources">
              <span className="hdc__source-label">Data Sources</span>
              <div className="hdc__source-list">
                {['CRM', 'ERP', 'IoT', 'BI', '+12'].map((src) => (
                  <span key={src} className="hdc__source-tag">{src}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="hero__badge-float hero__badge-float--1">
            <Zap size={14} className="text-yellow" />
            <span>Auto-refresh: 5s</span>
          </div>
          <div className="hero__badge-float hero__badge-float--2">
            <span className="badge-dot badge-dot--green" />
            <span>99.9% uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
}

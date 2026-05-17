import { useEffect, useRef, useState } from 'react';
import './Stats.css';

const stats = [
  { value: 500, suffix: '+', label: 'Dashboards Deployed', desc: 'Across all industry verticals' },
  { value: 98, suffix: '%', label: 'Data Accuracy', desc: 'After automated cleansing' },
  { value: 3200000, suffix: '/s', label: 'Data Points Processed', desc: 'At peak throughput' },
  { value: 50, suffix: '+', label: 'Enterprise Clients', desc: 'Across 30+ countries' },
  { value: 99.9, suffix: '%', label: 'Platform Uptime', desc: 'SLA guaranteed' },
  { value: 10, suffix: 'x', label: 'Faster Insights', desc: 'vs. traditional BI tools' },
];

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatItem({ stat }: { stat: typeof stats[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const count = useCountUp(stat.value, 1800, active);

  const display = stat.value >= 1000000
    ? `${(count / 1000000).toFixed(1)}M`
    : stat.value < 100
    ? count.toFixed(stat.value % 1 !== 0 ? 1 : 0)
    : count.toLocaleString();

  return (
    <div ref={ref} className="stat-item card">
      <div className="stat-item__value">
        {display}
        <span className="stat-item__suffix">{stat.suffix}</span>
      </div>
      <div className="stat-item__label">{stat.label}</div>
      <div className="stat-item__desc">{stat.desc}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats-section section">
      <div className="stats-section__bg" aria-hidden />
      <div className="container">
        <div className="stats-section__header">
          <div className="section-badge">By The Numbers</div>
          <h2 className="section-heading">
            Results That <span className="gradient-text">Speak for Themselves</span>
          </h2>
        </div>
        <div className="stats-grid">
          {stats.map((s) => <StatItem key={s.label} stat={s} />)}
        </div>
      </div>
    </section>
  );
}

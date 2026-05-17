import { useState } from 'react';
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  PieChart, Pie, Cell, RadarChart, Radar, PolarGrid,
  PolarAngleAxis, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend,
} from 'recharts';
import { Activity, TrendingUp, DollarSign, Users } from 'lucide-react';
import './DashboardDemo.css';

/* ── sample data ── */
const revenueData = [
  { month: 'Jan', healthcare: 420, finance: 380, logistics: 290, retail: 310 },
  { month: 'Feb', healthcare: 480, finance: 420, logistics: 340, retail: 360 },
  { month: 'Mar', healthcare: 520, finance: 460, logistics: 390, retail: 410 },
  { month: 'Apr', healthcare: 580, finance: 510, logistics: 420, retail: 480 },
  { month: 'May', healthcare: 610, finance: 550, logistics: 460, retail: 520 },
  { month: 'Jun', healthcare: 680, finance: 620, logistics: 510, retail: 590 },
  { month: 'Jul', healthcare: 720, finance: 680, logistics: 560, retail: 640 },
  { month: 'Aug', healthcare: 800, finance: 740, logistics: 610, retail: 700 },
  { month: 'Sep', healthcare: 760, finance: 790, logistics: 650, retail: 730 },
  { month: 'Oct', healthcare: 840, finance: 850, logistics: 700, retail: 780 },
  { month: 'Nov', healthcare: 920, finance: 910, logistics: 760, retail: 840 },
  { month: 'Dec', healthcare: 1000, finance: 980, logistics: 820, retail: 910 },
];

const kpiData = [
  { month: 'Jan', value: 62 }, { month: 'Feb', value: 71 }, { month: 'Mar', value: 68 },
  { month: 'Apr', value: 79 }, { month: 'May', value: 85 }, { month: 'Jun', value: 82 },
  { month: 'Jul', value: 91 }, { month: 'Aug', value: 88 }, { month: 'Sep', value: 94 },
  { month: 'Oct', value: 97 }, { month: 'Nov', value: 103 }, { month: 'Dec', value: 112 },
];

const pieData = [
  { name: 'Healthcare', value: 28, color: '#f43f5e' },
  { name: 'Finance', value: 24, color: '#f59e0b' },
  { name: 'Logistics', value: 18, color: '#0ea5e9' },
  { name: 'Manufacturing', value: 14, color: '#f97316' },
  { name: 'Retail', value: 10, color: '#10b981' },
  { name: 'Education', value: 6, color: '#6366f1' },
];

const radarData = [
  { metric: 'Performance', A: 90, B: 72 },
  { metric: 'Accuracy', A: 95, B: 80 },
  { metric: 'Uptime', A: 99, B: 85 },
  { metric: 'Speed', A: 88, B: 70 },
  { metric: 'Coverage', A: 92, B: 68 },
  { metric: 'Security', A: 97, B: 78 },
];

const metricCards = [
  { icon: <DollarSign size={18} />, label: 'Total Revenue', value: '$8.4M', change: '+24.8%', up: true, color: 'blue' },
  { icon: <Users size={18} />, label: 'Active Clients', value: '512', change: '+12.3%', up: true, color: 'green' },
  { icon: <Activity size={18} />, label: 'Pipelines Running', value: '1,247', change: '+8.1%', up: true, color: 'purple' },
  { icon: <TrendingUp size={18} />, label: 'Data Points/s', value: '3.2M', change: '+31.5%', up: true, color: 'cyan' },
];

const TABS = ['Revenue Trends', 'Pipeline KPIs', 'Industry Share', 'Platform Benchmark'];

const customTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <p className="chart-tooltip__label">{label}</p>
        {payload.map((p: any) => (
          <p key={p.name} style={{ color: p.color }} className="chart-tooltip__item">
            <span>{p.name}:</span> <strong>{p.value}{typeof p.value === 'number' && p.value < 200 ? '%' : 'k'}</strong>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function DashboardDemo() {
  const [tab, setTab] = useState(0);

  return (
    <section id="dashboard" className="dashboard section">
      <div className="container">
        <div className="dashboard__header">
          <div className="section-badge">Live Demo</div>
          <h2 className="section-heading">
            Your Data — <span className="gradient-text">Visualised Automatically</span>
          </h2>
          <p className="dashboard__subtitle">
            This is what a DataAutomate dashboard looks like. All charts update in real-time
            from unified data pipelines across your organisation.
          </p>
        </div>

        {/* Metric cards */}
        <div className="dashboard__metrics">
          {metricCards.map((m) => (
            <div key={m.label} className={`metric-card card metric-card--${m.color}`}>
              <div className={`metric-card__icon metric-card__icon--${m.color}`}>{m.icon}</div>
              <div className="metric-card__body">
                <span className="metric-card__label">{m.label}</span>
                <span className="metric-card__value">{m.value}</span>
              </div>
              <span className={`metric-card__change metric-card__change--${m.up ? 'up' : 'down'}`}>
                {m.change}
              </span>
            </div>
          ))}
        </div>

        {/* Tab chart panel */}
        <div className="dashboard__panel card">
          <div className="dashboard__tabs">
            {TABS.map((t, i) => (
              <button
                key={t}
                className={`dashboard__tab${tab === i ? ' dashboard__tab--active' : ''}`}
                onClick={() => setTab(i)}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="dashboard__chart">
            {tab === 0 && (
              <ResponsiveContainer width="100%" height={320}>
                <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <defs>
                    {[['blue','#0ea5e9'],['purple','#6366f1'],['cyan','#06b6d4'],['green','#10b981']].map(([id,c]) => (
                      <linearGradient key={id} id={`grad-${id}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={c} stopOpacity={0.25} />
                        <stop offset="95%" stopColor={c} stopOpacity={0} />
                      </linearGradient>
                    ))}
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip content={customTooltip} />
                  <Legend wrapperStyle={{ fontSize: 13, color: '#94a3b8', paddingTop: 16 }} />
                  <Area type="monotone" dataKey="healthcare" name="Healthcare" stroke="#f43f5e" fill="url(#grad-blue)" strokeWidth={2} dot={false} />
                  <Area type="monotone" dataKey="finance" name="Finance" stroke="#f59e0b" fill="url(#grad-purple)" strokeWidth={2} dot={false} />
                  <Area type="monotone" dataKey="logistics" name="Logistics" stroke="#0ea5e9" fill="url(#grad-cyan)" strokeWidth={2} dot={false} />
                  <Area type="monotone" dataKey="retail" name="Retail" stroke="#10b981" fill="url(#grad-green)" strokeWidth={2} dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            )}

            {tab === 1 && (
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={kpiData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="bar-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity={1} />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity={0.8} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip content={customTooltip} />
                  <Bar dataKey="value" name="KPI Score" fill="url(#bar-grad)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}

            {tab === 2 && (
              <div className="dashboard__pie-wrap">
                <ResponsiveContainer width="50%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={120}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {pieData.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} stroke="transparent" />
                      ))}
                    </Pie>
                    <Tooltip formatter={(v) => `${v}%`} contentStyle={{ background: '#111827', border: '1px solid #1e293b', borderRadius: 8, color: '#e2e8f0', fontSize: 13 }} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="dashboard__pie-legend">
                  {pieData.map((d) => (
                    <div key={d.name} className="pie-legend-item">
                      <span className="pie-legend-dot" style={{ background: d.color }} />
                      <span className="pie-legend-name">{d.name}</span>
                      <span className="pie-legend-val">{d.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === 3 && (
              <ResponsiveContainer width="100%" height={320}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="rgba(255,255,255,0.08)" />
                  <PolarAngleAxis dataKey="metric" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <Radar name="DataAutomate" dataKey="A" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.2} strokeWidth={2} />
                  <Radar name="Industry Avg" dataKey="B" stroke="#6366f1" fill="#6366f1" fillOpacity={0.1} strokeWidth={2} />
                  <Legend wrapperStyle={{ fontSize: 13, color: '#94a3b8', paddingTop: 16 }} />
                  <Tooltip contentStyle={{ background: '#111827', border: '1px solid #1e293b', borderRadius: 8, color: '#e2e8f0', fontSize: 13 }} />
                </RadarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Bottom mini-charts row */}
        <div className="dashboard__mini-row">
          <div className="mini-chart card">
            <h4>Healthcare KPIs</h4>
            <p className="mini-chart__sub">Patient outcomes – 12 months</p>
            <ResponsiveContainer width="100%" height={100}>
              <LineChart data={revenueData}>
                <Line type="monotone" dataKey="healthcare" stroke="#f43f5e" strokeWidth={2} dot={false} />
                <Tooltip contentStyle={{ background: '#111827', border: '1px solid #1e293b', borderRadius: 8, color: '#e2e8f0', fontSize: 12 }} />
              </LineChart>
            </ResponsiveContainer>
            <div className="mini-chart__footer">
              <span className="mini-up">+18.4% YTD</span>
              <span className="mini-label">vs. last year</span>
            </div>
          </div>

          <div className="mini-chart card">
            <h4>Finance Metrics</h4>
            <p className="mini-chart__sub">Revenue pipeline – 12 months</p>
            <ResponsiveContainer width="100%" height={100}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="fin-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="finance" stroke="#f59e0b" fill="url(#fin-grad)" strokeWidth={2} dot={false} />
                <Tooltip contentStyle={{ background: '#111827', border: '1px solid #1e293b', borderRadius: 8, color: '#e2e8f0', fontSize: 12 }} />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mini-chart__footer">
              <span className="mini-up">+22.1% YTD</span>
              <span className="mini-label">vs. last year</span>
            </div>
          </div>

          <div className="mini-chart card">
            <h4>Logistics Network</h4>
            <p className="mini-chart__sub">Delivery performance – 12 months</p>
            <ResponsiveContainer width="100%" height={100}>
              <BarChart data={revenueData.slice(6)}>
                <Bar dataKey="logistics" fill="#0ea5e9" radius={[3, 3, 0, 0]} />
                <Tooltip contentStyle={{ background: '#111827', border: '1px solid #1e293b', borderRadius: 8, color: '#e2e8f0', fontSize: 12 }} />
              </BarChart>
            </ResponsiveContainer>
            <div className="mini-chart__footer">
              <span className="mini-up">+28.3% YTD</span>
              <span className="mini-label">vs. last year</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

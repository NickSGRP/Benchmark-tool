// Lucide React Icons - inline implementations
const Users = ({ size = 24, style, ...props }) => (
  React.createElement('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', style, ...props },
    React.createElement('path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' }),
    React.createElement('circle', { cx: '9', cy: '7', r: '4' }),
    React.createElement('path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87' }),
    React.createElement('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' })
  )
);

const Database = ({ size = 24, style, ...props }) => (
  React.createElement('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', style, ...props },
    React.createElement('ellipse', { cx: '12', cy: '5', rx: '9', ry: '3' }),
    React.createElement('path', { d: 'M3 5V19A9 3 0 0 0 21 19V5' }),
    React.createElement('path', { d: 'M3 12A9 3 0 0 0 21 12' })
  )
);

const Cpu = ({ size = 24, style, ...props }) => (
  React.createElement('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', style, ...props },
    React.createElement('rect', { x: '4', y: '4', width: '16', height: '16', rx: '2' }),
    React.createElement('rect', { x: '9', y: '9', width: '6', height: '6' }),
    React.createElement('path', { d: 'M15 2v2' }),
    React.createElement('path', { d: 'M15 20v2' }),
    React.createElement('path', { d: 'M2 15h2' }),
    React.createElement('path', { d: 'M2 9h2' }),
    React.createElement('path', { d: 'M20 15h2' }),
    React.createElement('path', { d: 'M20 9h2' }),
    React.createElement('path', { d: 'M9 2v2' }),
    React.createElement('path', { d: 'M9 20v2' })
  )
);

const FileText = ({ size = 24, style, ...props }) => (
  React.createElement('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', style, ...props },
    React.createElement('path', { d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' }),
    React.createElement('polyline', { points: '14 2 14 8 20 8' }),
    React.createElement('line', { x1: '16', y1: '13', x2: '8', y2: '13' }),
    React.createElement('line', { x1: '16', y1: '17', x2: '8', y2: '17' }),
    React.createElement('polyline', { points: '10 9 9 9 8 9' })
  )
);

const Plus = ({ size = 24, style, ...props }) => (
  React.createElement('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', style, ...props },
    React.createElement('line', { x1: '12', y1: '5', x2: '12', y2: '19' }),
    React.createElement('line', { x1: '5', y1: '12', x2: '19', y2: '12' })
  )
);

const Download = ({ size = 24, style, ...props }) => (
  React.createElement('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', style, ...props },
    React.createElement('path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' }),
    React.createElement('polyline', { points: '7 10 12 15 17 10' }),
    React.createElement('line', { x1: '12', y1: '15', x2: '12', y2: '3' })
  )
);

const TrendingUp = ({ size = 24, style, ...props }) => (
  React.createElement('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', style, ...props },
    React.createElement('polyline', { points: '23 6 13.5 15.5 8.5 10.5 1 18' }),
    React.createElement('polyline', { points: '17 6 23 6 23 12' })
  )
);

const Lock = ({ size = 24, style, ...props }) => (
  React.createElement('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', style, ...props },
    React.createElement('rect', { x: '3', y: '11', width: '18', height: '11', rx: '2', ry: '2' }),
    React.createElement('path', { d: 'M7 11V7a5 5 0 0 1 10 0v4' })
  )
);

const { useState, useEffect } = React;

// ── Constants ────────────────────────────────────────────────────────────────
const ANALYSER_PASS = 'sgrp2026'; // Change before deployment
const STORAGE_KEY = 'bench-resp';
const IDENTITY_KEY = 'bench-identity';

// ── Identity Gate ─────────────────────────────────────────────────────────────
const ROLES = ['Partner / Director', 'Practice Manager', 'Senior Manager', 'Manager', 'Senior Accountant', 'Accountant', 'CFO / Finance Manager', 'Other'];

const IdentityGate = ({ onSubmit }) => {
  const [form, setForm] = useState({ name: '', email: '', firmName: '', role: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.firmName.trim()) e.firmName = 'Required';
    if (!form.role) e.role = 'Required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    const identity = { ...form, submittedAt: new Date().toISOString() };
    localStorage.setItem(IDENTITY_KEY, JSON.stringify(identity));
    onSubmit(identity);
  };

  const field = (key, label, placeholder, type = 'text') => (
    React.createElement('div', { key: key },
      React.createElement('label', { style: { display: 'block', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#6b7280', marginBottom: '5px' } }, label),
      React.createElement('input', {
        type,
        value: form[key],
        onChange: e => { setForm(p => ({ ...p, [key]: e.target.value })); setErrors(p => ({ ...p, [key]: undefined })); },
        placeholder,
        style: {
          width: '100%', padding: '10px 12px', border: errors[key] ? '1px solid #B5223B' : '1px solid #e5e7eb',
          borderRadius: '6px', fontSize: '14px', outline: 'none', boxSizing: 'border-box',
          fontFamily: 'inherit',
        }
      }),
      errors[key] && React.createElement('p', { style: { fontSize: '11px', color: '#B5223B', marginTop: '3px' } }, errors[key])
    )
  );

  return (
    React.createElement('div', { style: { minHeight: '100vh', background: '#f5f5f5', display: 'flex', flexDirection: 'column' } },
      // Header
      React.createElement('header', { style: { background: '#0d0d0d', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', borderBottom: '1px solid #333' } },
        React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '12px' } },
          React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
            React.createElement('svg', { width: '28', height: '28', viewBox: '0 0 40 40', fill: 'none' },
              React.createElement('rect', { width: '40', height: '40', rx: '4', fill: '#B5223B' }),
              React.createElement('path', { d: 'M10 10L22 20L10 30', stroke: 'white', strokeWidth: '4', strokeLinecap: 'round', strokeLinejoin: 'round' }),
              React.createElement('path', { d: 'M22 10L34 20L22 30', stroke: 'white', strokeWidth: '4', strokeLinecap: 'round', strokeLinejoin: 'round', opacity: '0.5' })
            ),
            React.createElement('div', { style: { display: 'flex', flexDirection: 'column', lineHeight: '1.1' } },
              React.createElement('span', { style: { fontSize: '12px', fontWeight: '700', color: '#fff', letterSpacing: '0.5px', textTransform: 'uppercase' } }, 'StrategicGroup'),
              React.createElement('span', { style: { fontSize: '8px', color: '#888', letterSpacing: '1px', textTransform: 'uppercase' } }, 'Your Trusted IT Partner')
            )
          ),
          React.createElement('div', { style: { width: '1px', height: '24px', background: '#333' } }),
          React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '4px' } },
            React.createElement('span', { style: { fontSize: '9px', fontWeight: '600', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#666' } }, 'POWERED BY'),
            React.createElement('span', { style: { fontSize: '11px', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#B5223B' } }, 'VAULT')
          )
        ),
        React.createElement('span', { style: { fontSize: '12px', color: '#555' } }, 'Dream Firm Benchmark')
      ),
      // Gate card
      React.createElement('div', { style: { flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' } },
        React.createElement('div', { style: { background: '#fff', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '40px', width: '100%', maxWidth: '460px', boxShadow: '0 8px 32px rgba(0,0,0,0.10)' } },
          React.createElement('div', { style: { fontSize: '10px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#B5223B', marginBottom: '8px' } }, '2025 / 26 APAC Benchmarks'),
          React.createElement('h2', { style: { fontSize: '22px', fontWeight: '700', color: '#1a1a1a', lineHeight: '1.2', marginBottom: '6px' } }, 'Dream Firm\nBenchmark Analysis'),
          React.createElement('p', { style: { fontSize: '13px', color: '#6b7280', marginBottom: '28px', lineHeight: '1.6' } },
            'Compare your firm\'s performance across People, Process, Data, and Technology against top-quartile APAC benchmarks. Enter your details below — we\'ll email you a copy of your results.'
          ),
          React.createElement('form', { onSubmit: handleSubmit, style: { display: 'flex', flexDirection: 'column', gap: '16px' } },
            field('name', 'Your name', 'e.g. Sarah Mitchell'),
            field('email', 'Work email', 'you@yourfirm.com.au', 'email'),
            field('firmName', 'Firm name', 'e.g. Mitchell & Associates'),
            React.createElement('div', null,
              React.createElement('label', { style: { display: 'block', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#6b7280', marginBottom: '5px' } }, 'Your role'),
              React.createElement('select', {
                value: form.role,
                onChange: e => { setForm(p => ({ ...p, role: e.target.value })); setErrors(p => ({ ...p, role: undefined })); },
                style: { width: '100%', padding: '10px 12px', border: errors.role ? '1px solid #B5223B' : '1px solid #e5e7eb', borderRadius: '6px', fontSize: '14px', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit', background: '#fff' }
              },
                React.createElement('option', { value: '' }, 'Select your role...'),
                ROLES.map(r => React.createElement('option', { key: r, value: r }, r))
              ),
              errors.role && React.createElement('p', { style: { fontSize: '11px', color: '#B5223B', marginTop: '3px' } }, errors.role)
            ),
            React.createElement('button', {
              type: 'submit',
              style: { width: '100%', padding: '11px', background: '#B5223B', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', marginTop: '4px' }
            }, 'Start the benchmark →')
          ),
          React.createElement('p', { style: { marginTop: '14px', fontSize: '11px', color: '#b0b0b0', textAlign: 'center' } },
            '🔒 Your results are private. We\'ll use your email to send results and relevant updates. Unsubscribe anytime.'
          )
        )
      )
    )
  );
};

// ── Analyser Login Modal ──────────────────────────────────────────────────────
const AnalyserModal = ({ onSuccess, onClose }) => {
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pass === ANALYSER_PASS) {
      sessionStorage.setItem('bench-analyser', 'true');
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    React.createElement('div', { style: { position: 'fixed', inset: '0', background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: '1000', backdropFilter: 'blur(4px)' } },
      React.createElement('div', { style: { background: '#fff', borderRadius: '10px', padding: '36px', width: '360px', boxShadow: '0 20px 60px rgba(0,0,0,0.2)' } },
        React.createElement('div', { style: { width: '40px', height: '40px', background: '#0d0d0d', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' } },
          React.createElement(Lock, { size: 20, style: { color: '#fff' } })
        ),
        React.createElement('h3', { style: { fontSize: '18px', fontWeight: '700', marginBottom: '4px' } }, 'Analyser Access'),
        React.createElement('p', { style: { fontSize: '13px', color: '#6b7280', marginBottom: '24px', lineHeight: '1.5' } },
          'This view is for the SGRP team only. Enter the workshop passphrase to continue.'
        ),
        React.createElement('form', { onSubmit: handleSubmit },
          React.createElement('label', { style: { display: 'block', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#6b7280', marginBottom: '5px' } }, 'Passphrase'),
          React.createElement('input', {
            type: 'password', value: pass, autoFocus: true,
            onChange: e => { setPass(e.target.value); setError(false); },
            placeholder: 'Enter passphrase',
            style: { width: '100%', padding: '10px 12px', border: error ? '1px solid #B5223B' : '1px solid #e5e7eb', borderRadius: '6px', fontSize: '14px', outline: 'none', boxSizing: 'border-box', marginBottom: error ? '4px' : '16px' }
          }),
          error && React.createElement('p', { style: { fontSize: '11px', color: '#B5223B', marginBottom: '12px' } }, 'Incorrect passphrase. Please try again.'),
          React.createElement('div', { style: { display: 'flex', gap: '10px' } },
            React.createElement('button', { type: 'submit', style: { flex: '1', padding: '9px', background: '#B5223B', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' } }, 'Unlock'),
            React.createElement('button', { type: 'button', onClick: onClose, style: { flex: '1', padding: '9px', background: '#fff', color: '#1a1a1a', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' } }, 'Cancel')
          )
        )
      )
    )
  );
};

// ── Main App ──────────────────────────────────────────────────────────────────
const BenchmarkTool = () => {
  // Identity state
  const [identity, setIdentity] = useState(() => {
    try { return JSON.parse(localStorage.getItem(IDENTITY_KEY)); } catch { return null; }
  });

  // Analyser state
  const [isAnalyser, setIsAnalyser] = useState(() => sessionStorage.getItem('bench-analyser') === 'true');
  const [showAnalyserModal, setShowAnalyserModal] = useState(false);

  const [activeTab, setActiveTab] = useState('details');
  const [selectedDomain, setSelectedDomain] = useState('People');
  const [responses, setResponses] = useState([]);
  const [currentResponse, setCurrentResponse] = useState({
    userId: '',
    date: new Date().toISOString().split('T')[0],
    metrics: {}
  });
  const [loading, setLoading] = useState(true);
  const [dashboardView, setDashboardView] = useState('all');
  const [selectedFirm, setSelectedFirm] = useState('all');
  const [hoveredDomain, setHoveredDomain] = useState(null);
  const [hoveredRadarDomain, setHoveredRadarDomain] = useState(null);
  const [hoveredMetric, setHoveredMetric] = useState(null);

  const m = {
    P1: { id: 'P1', name: 'P1: Staff turnover', domain: 'People', unit: 'pct', type: 'num', dir: 'low', typ: 15, hi: 10, desc: 'Retention proxy' },
    P2: { id: 'P2', name: 'P2: Revenue per employee', domain: 'People', unit: 'dol', type: 'num', dir: 'hi', typ: 327000, hi: 400000, desc: 'Productivity' },
    P3: { id: 'P3', name: 'P3: Staff per partner', domain: 'People', unit: 'rat', type: 'num', dir: 'hi', typ: 5.2, hi: 7.0, desc: 'Non-partner staff per equity partner' },
    P4: { id: 'P4', name: 'P4: Productivity rate', domain: 'People', unit: 'pct', type: 'num', dir: 'hi', typ: 67.5, hi: 75, desc: 'Billable vs available' },
    P5: { id: 'P5', name: 'P5: Billable staff', domain: 'People', unit: 'pct', type: 'num', dir: 'hi', typ: 57.5, hi: 65, desc: 'Billable percentage' },
    Pr1: { id: 'Pr1', name: 'Pr1: Net profit margin', domain: 'Process', unit: 'pct', type: 'num', dir: 'hi', typ: 31.5, hi: 38.1, desc: 'Process outcome' },
    Pr2: { id: 'Pr2', name: 'Pr2: Lock-up days', domain: 'Process', unit: 'day', type: 'num', dir: 'low', typ: 81.5, hi: 60, desc: 'WIP plus debtors' },
    Pr3: { id: 'Pr3', name: 'Pr3: Job turnaround', domain: 'Process', unit: 'day', type: 'num', dir: 'low', typ: 32.5, hi: 30, desc: 'Turnaround time' },
    Pr4: { id: 'Pr4', name: 'Pr4: WIP recovery', domain: 'Process', unit: 'pct', type: 'num', dir: 'hi', typ: 95, hi: 97, desc: 'Work to revenue' },
    Pr5: { id: 'Pr5', name: 'Pr5: Automated workflows', domain: 'Process', unit: 'cnt', type: 'num', dir: 'hi', typ: 2, hi: 4, desc: 'Number automated' },
    D1: { id: 'D1', name: 'D1: Data rework', domain: 'Data', unit: 'scl', type: 'scl', dir: 'hi', typ: 1, hi: 2, desc: 'Correction frequency', lab: ['Below: Frequent', 'At: Manageable', 'Above: Rare'] },
    D2: { id: 'D2', name: 'D2: Data for advisory', domain: 'Data', unit: 'scl', type: 'scl', dir: 'hi', typ: 1, hi: 2, desc: 'Client data usage', lab: ['Below: Confirms', 'At: Informs', 'Above: Starting'] },
    D3: { id: 'D3', name: 'D3: Analytics capability', domain: 'Data', unit: 'scl', type: 'scl', dir: 'hi', typ: 1, hi: 2, desc: 'BI capability', lab: ['Below: None', 'At: Planning', 'Above: Operational'] },
    D4: { id: 'D4', name: 'D4: Data automation', domain: 'Data', unit: 'scl', type: 'scl', dir: 'hi', typ: 1, hi: 2, desc: 'Capture automation', lab: ['Below: Manual', 'At: Partial', 'Above: Automated'] },
    D5: { id: 'D5', name: 'D5: Single source', domain: 'Data', unit: 'scl', type: 'scl', dir: 'hi', typ: 1, hi: 2, desc: 'Data clarity', lab: ['Below: Multiple', 'At: Primary', 'Above: Clear'] },
    T1: { id: 'T1', name: 'T1: Systems integrated', domain: 'Technology', unit: 'pct', type: 'num', dir: 'hi', typ: 57, hi: 75, desc: 'Core integration' },
    T2: { id: 'T2', name: 'T2: Tech roadmap', domain: 'Technology', unit: 'scl', type: 'scl', dir: 'hi', typ: 1, hi: 2, desc: 'Strategic planning', lab: ['Below: Ad-hoc', 'At: Documented', 'Above: Strategic'] },
    T3: { id: 'T3', name: 'T3: Workflow automation', domain: 'Technology', unit: 'cnt', type: 'num', dir: 'hi', typ: 2, hi: 4, desc: 'Automated workflows' },
    T4: { id: 'T4', name: 'T4: AI usage', domain: 'Technology', unit: 'scl', type: 'scl', dir: 'hi', typ: 1, hi: 2, desc: 'AI adoption', lab: ['Below: Rarely', 'At: Weekly', 'Above: Daily'] },
    T5: { id: 'T5', name: 'T5: AI use cases', domain: 'Technology', unit: 'cnt', type: 'num', dir: 'hi', typ: 2, hi: 5, desc: 'Production AI' }
  };

  const dom = {
    People: ['P1', 'P2', 'P3', 'P4', 'P5'],
    Process: ['Pr1', 'Pr2', 'Pr3', 'Pr4', 'Pr5'],
    Data: ['D1', 'D2', 'D3', 'D4', 'D5'],
    Technology: ['T1', 'T2', 'T3', 'T4', 'T5']
  };

  const icons = { People: Users, Process: FileText, Data: Database, Technology: Cpu };
  const info = {
    People: { desc: 'How effectively the firm converts talent into sustainable value', own: 'Capacity, leverage, sustainability', out: 'Higher productivity without burnout' },
    Process: { desc: 'How reliably and efficiently work moves through the firm', own: 'Flow, conversion, predictability', out: 'Faster turnaround, stronger margins' },
    Data: { desc: 'How trustworthy and usable information is for running the firm', own: 'Trustworthiness and timeliness', out: 'Better decisions, earlier intervention' },
    Technology: { desc: 'How systems and automation remove friction', own: 'Enablement, adoption, amplification', out: 'More capacity from same resources' }
  };

  useEffect(() => { load(); }, []);

  const load = async () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setResponses(JSON.parse(stored));
    } catch (e) { console.error('Failed to load data:', e); }
    setLoading(false);
  };

  const save = async (d) => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(d)); }
    catch (e) { console.error('Failed to save data:', e); }
  };

  const chg = (id, v) => {
    setCurrentResponse(p => ({
      ...p,
      metrics: { ...p.metrics, [id]: v === '' ? undefined : (m[id].type === 'scl' ? parseInt(v) : parseFloat(v)) }
    }));
  };

  const sub = () => {
    const totalMetrics = Object.keys(currentResponse.metrics).filter(k => currentResponse.metrics[k] !== undefined).length;
    if (currentResponse.userId && totalMetrics === 20) {
      // Tag submission with identity
      const submission = {
        ...currentResponse,
        id: Date.now(),
        identity: identity || null,
        // Use firm name from identity if userId is empty
        userId: currentResponse.userId || identity?.firmName || 'Unknown',
      };
      const n = [...responses, submission];
      setResponses(n);
      save(n);
      setCurrentResponse({ userId: identity?.firmName || '', date: new Date().toISOString().split('T')[0], metrics: {} });
      setActiveTab('analysis');
    } else {
      alert(`Please complete all fields. You have ${totalMetrics}/20 metrics filled.`);
    }
  };

  const gap = (id, v) => {
    const mt = m[id];
    return mt.dir === 'low' ? ((mt.typ - v) / mt.typ * 100) : ((v - mt.typ) / mt.typ * 100);
  };

  const fv = (id, v) => {
    const mt = m[id];
    if (mt.unit === 'dol') return '$' + (v / 1000).toFixed(0) + 'k';
    if (mt.unit === 'pct') return v.toFixed(1) + '%';
    if (mt.unit === 'day') return v.toFixed(0) + ' days';
    if (mt.unit === 'scl') return ['Below', 'At', 'Above'][Math.round(v)] || v;
    return v.toFixed(1);
  };

  const fb = (id) => {
    const mt = m[id]; const v = mt.typ;
    if (mt.unit === 'dol') return '$' + (v / 1000).toFixed(0) + 'k';
    if (mt.unit === 'pct') return v + '%';
    if (mt.unit === 'day') return v + ' days';
    if (mt.unit === 'scl') return 'At';
    return v;
  };

  const fh = (id) => {
    const mt = m[id]; const v = mt.hi;
    if (mt.unit === 'dol') return '$' + (v / 1000).toFixed(0) + 'k';
    if (mt.unit === 'pct') return v + '%';
    if (mt.unit === 'day') return v + ' days';
    if (mt.unit === 'scl') return 'Above';
    return v;
  };

  const ds = (d, dt) => {
    const sc = dom[d].map(id => { const v = dt[id]; return v !== undefined ? gap(id, v) : null; }).filter(s => s !== null);
    return sc.length > 0 ? sc.reduce((a, b) => a + b, 0) / sc.length : 0;
  };

  const exp = (rid = null) => {
    let d = rid ? responses.filter(r => r.id === rid) : responses;
    if (d.length === 0) { alert('No data'); return; }
    let csv = 'User,Email,Firm,Role,Date,Domain,ID,Metric,Value,Unit,Benchmark,Gap,Status\n';
    d.forEach(r => {
      Object.keys(dom).forEach(dn => {
        dom[dn].forEach(id => {
          const mt = m[id];
          const v = r.metrics[id];
          if (v !== undefined) {
            const g = gap(id, v);
            const s = g >= 10 ? 'High' : g >= 0 ? 'At' : 'Below';
            csv += '"' + (r.identity?.name || r.userId) + '","' + (r.identity?.email || '') + '","' + (r.identity?.firmName || r.userId) + '","' + (r.identity?.role || '') + '","' + r.date + '","' + dn + '","' + id + '","' + mt.name + '","' + v + '","' + mt.unit + '","' + mt.typ + '","' + g.toFixed(1) + '","' + s + '"\n';
          }
        });
      });
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'benchmark-' + (rid ? 'single' : 'all') + '-' + new Date().toISOString().split('T')[0] + '.csv';
    link.click();
  };

  // Email results via mailto
  const emailResults = () => {
    if (!identity?.email || responses.length === 0) return;
    const latest = myResponses.length > 0 ? myResponses[myResponses.length - 1] : responses[responses.length - 1];
    let body = `Dream Firm Benchmark Results\n\nFirm: ${identity.firmName}\nDate: ${latest.date}\n\n`;
    Object.keys(dom).forEach(d => {
      const sc = ds(d, latest.metrics);
      body += `${d}: ${sc >= 0 ? '+' : ''}${sc.toFixed(1)}% vs benchmark\n`;
      dom[d].forEach(id => {
        const v = latest.metrics[id];
        if (v !== undefined) body += `  ${id}: ${fv(id, v)} (target: ${fb(id)})\n`;
      });
      body += '\n';
    });
    body += 'Generated by Dream Firm Benchmark Tool — Strategic Group';
    const subject = encodeURIComponent(`Your Dream Firm Benchmark Results — ${identity.firmName}`);
    window.location.href = `mailto:${identity.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  // User's own responses only (matched by email or firmName)
  const myResponses = responses.filter(r =>
    (r.identity?.email && identity?.email && r.identity.email === identity.email) ||
    (r.identity?.firmName && identity?.firmName && r.identity.firmName === identity.firmName)
  );

  // The response to show in the public Analysis tab — always the user's latest
  const analysisResponse = myResponses.length > 0 ? myResponses[myResponses.length - 1] : null;

  const I = icons[selectedDomain];
  const comp = Object.keys(currentResponse.metrics).filter(k => currentResponse.metrics[k] !== undefined).length;

  // Show identity gate if no identity
  if (!identity) return React.createElement(IdentityGate, { onSubmit: setIdentity });
  if (loading) return React.createElement('div', { className: 'min-h-screen flex items-center justify-center' }, React.createElement('div', null, 'Loading...'));

  // Public tabs always visible; analyser tabs only when unlocked
  const publicTabs = [
    { id: 'details', label: 'Details & Assumptions' },
    { id: 'input', label: 'Input' },
    { id: 'analysis', label: 'Analysis' },
  ];
  const analyserTabs = [
    { id: 'history', label: '🔒 History' },
    { id: 'dashboard', label: '🔒 Dashboard' },
  ];
  const visibleTabs = isAnalyser ? [...publicTabs, ...analyserTabs] : publicTabs;

  return (
    React.createElement('div', { className: 'min-h-screen', style: { background: '#f5f5f5' } },

      // ── Header (AI Navigator style) ────────────────────────────────────────
      React.createElement('header', { style: { background: '#0d0d0d', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', borderBottom: '1px solid #333', position: 'sticky', top: '0', zIndex: '100' } },
        // Left: logo + powered by vault
        React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '12px' } },
          React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
            React.createElement('svg', { width: '28', height: '28', viewBox: '0 0 40 40', fill: 'none' },
              React.createElement('rect', { width: '40', height: '40', rx: '4', fill: '#B5223B' }),
              React.createElement('path', { d: 'M10 10L22 20L10 30', stroke: 'white', strokeWidth: '4', strokeLinecap: 'round', strokeLinejoin: 'round' }),
              React.createElement('path', { d: 'M22 10L34 20L22 30', stroke: 'white', strokeWidth: '4', strokeLinecap: 'round', strokeLinejoin: 'round', opacity: '0.5' })
            ),
            React.createElement('div', { style: { display: 'flex', flexDirection: 'column', lineHeight: '1.1' } },
              React.createElement('span', { style: { fontSize: '12px', fontWeight: '700', color: '#fff', letterSpacing: '0.5px', textTransform: 'uppercase' } }, 'StrategicGroup'),
              React.createElement('span', { style: { fontSize: '8px', color: '#888', letterSpacing: '1px', textTransform: 'uppercase' } }, 'Your Trusted IT Partner')
            )
          ),
          React.createElement('div', { style: { width: '1px', height: '24px', background: '#333' } }),
          React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '4px' } },
            React.createElement('span', { style: { fontSize: '9px', fontWeight: '600', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#666' } }, 'POWERED BY'),
            React.createElement('span', { style: { fontSize: '11px', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#B5223B' } }, 'VAULT')
          )
        ),
        // Right: identity info + analyser toggle
        React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '16px' } },
          isAnalyser && React.createElement('span', { style: { fontSize: '11px', fontWeight: '700', color: '#B5223B', textTransform: 'uppercase', letterSpacing: '1px' } }, '⬡ Analyser Mode'),
          isAnalyser && React.createElement('button', {
            onClick: () => { sessionStorage.removeItem('bench-analyser'); setIsAnalyser(false); setActiveTab('analysis'); },
            style: { fontSize: '11px', color: '#888', background: 'none', border: 'none', cursor: 'pointer' }
          }, 'Exit'),
          !isAnalyser && React.createElement('span', { style: { fontSize: '12px', color: '#888' } }, identity.firmName),
          !isAnalyser && React.createElement('button', {
            onClick: () => { localStorage.removeItem(IDENTITY_KEY); setIdentity(null); setActiveTab('details'); },
            style: { fontSize: '11px', color: '#666', background: 'none', border: 'none', cursor: 'pointer' }
          }, 'Start over'),
          // Hidden analyser unlock — subtle dot at far right
          !isAnalyser && React.createElement('button', {
            onClick: () => setShowAnalyserModal(true),
            title: 'SGRP team access',
            style: { fontSize: '10px', color: '#2a2a2a', background: 'none', border: 'none', cursor: 'pointer', opacity: '0.3' }
          }, '⬡')
        )
      ),

      // ── Analyser modal ─────────────────────────────────────────────────────
      showAnalyserModal && React.createElement(AnalyserModal, {
        onSuccess: () => { setIsAnalyser(true); setShowAnalyserModal(false); setActiveTab('history'); },
        onClose: () => setShowAnalyserModal(false)
      }),

      // ── Page title ─────────────────────────────────────────────────────────
      React.createElement('div', { style: { maxWidth: '1200px', margin: '0 auto', padding: '28px 24px 0' } },
        React.createElement('h1', { style: { fontSize: '26px', fontWeight: '700', color: '#1a1a1a', letterSpacing: '-0.3px', marginBottom: '2px' } }, 'Dream Firm Benchmark Analysis'),
        React.createElement('p', { style: { fontSize: '13px', color: '#6b7280' } }, 'Top 20 Accounting Industry Benchmarks 2025/26 — APAC')
      ),

      // ── Tab nav ────────────────────────────────────────────────────────────
      React.createElement('div', { style: { maxWidth: '1200px', margin: '0 auto', padding: '0 24px' } },
        React.createElement('div', { style: { display: 'flex', gap: '0', borderBottom: '1px solid #e5e7eb', marginTop: '16px' } },
          visibleTabs.map(t =>
            React.createElement('button', {
              key: t.id,
              onClick: () => setActiveTab(t.id),
              style: {
                padding: '10px 16px', fontSize: '13px', fontWeight: activeTab === t.id ? '600' : '500',
                color: activeTab === t.id ? '#B5223B' : '#6b7280',
                borderBottom: activeTab === t.id ? '2px solid #B5223B' : '2px solid transparent',
                background: 'none', border: 'none', borderBottom: activeTab === t.id ? '2px solid #B5223B' : '2px solid transparent',
                cursor: 'pointer', marginBottom: '-1px', whiteSpace: 'nowrap'
              }
            }, t.label)
          )
        )
      ),

      // ── Tab content ────────────────────────────────────────────────────────
      React.createElement('div', { style: { maxWidth: '1200px', margin: '24px auto', padding: '0 24px' } },

        // DETAILS TAB
        activeTab === 'details' && React.createElement('div', { className: 'space-y-6' },
          React.createElement('div', { className: 'bg-white rounded-xl shadow-sm border border-slate-100 p-6' },
            React.createElement('h2', { className: 'text-2xl font-light mb-4', style: { color: '#36454F' } }, 'Understanding the Benchmarks'),
            React.createElement('p', { className: 'text-slate-600 mb-6' }, 'These benchmarks support evidence-based conversations about high-performing firms.'),
            Object.keys(dom).map(d => {
              const inf = info[d];
              const IC = icons[d];
              return React.createElement('div', { key: d, className: 'mb-8 border-t border-slate-200 pt-6' },
                React.createElement('div', { className: 'flex items-start gap-4 mb-4' },
                  React.createElement(IC, { size: 32, style: { color: '#36454F', marginTop: '4px' } }),
                  React.createElement('div', { className: 'flex-1' },
                    React.createElement('h3', { className: 'text-2xl font-light mb-2', style: { color: '#36454F' } }, d),
                    React.createElement('p', { className: 'text-slate-700 mb-2' }, inf.desc),
                    React.createElement('div', { className: 'grid grid-cols-2 gap-4 mt-4 text-sm' },
                      React.createElement('div', { className: 'p-3 rounded', style: { backgroundColor: '#E8F5E9' } },
                        React.createElement('div', { className: 'font-medium text-slate-700 mb-1' }, 'Owns'),
                        React.createElement('div', { className: 'text-slate-600' }, inf.own)
                      ),
                      React.createElement('div', { className: 'p-3 rounded', style: { backgroundColor: '#E8F5E9' } },
                        React.createElement('div', { className: 'font-medium text-slate-700 mb-1' }, 'Outcome'),
                        React.createElement('div', { className: 'text-slate-600' }, inf.out)
                      )
                    )
                  )
                ),
                React.createElement('div', { className: 'mt-6' },
                  React.createElement('h4', { className: 'font-medium text-slate-700 mb-3' }, 'Metrics:'),
                  React.createElement('div', { className: 'space-y-3' },
                    dom[d].map(id => {
                      const mt = m[id];
                      return React.createElement('div', { key: id, className: 'bg-slate-50 border border-slate-200 rounded-lg p-4' },
                        React.createElement('div', { className: 'mb-2' },
                          React.createElement('div', { className: 'font-medium text-slate-800' }, mt.name),
                          React.createElement('div', { className: 'text-sm text-slate-600 mt-1' }, mt.desc)
                        ),
                        React.createElement('div', { className: 'grid grid-cols-3 gap-4 mt-3 text-sm' },
                          React.createElement('div', null, React.createElement('span', { className: 'text-slate-600' }, 'Unit: '), React.createElement('span', { className: 'font-medium', style: { color: '#36454F' } }, mt.unit === 'scl' ? 'Scale 0-2' : mt.unit)),
                          React.createElement('div', null, React.createElement('span', { className: 'text-slate-600' }, 'Typical: '), React.createElement('span', { className: 'font-medium', style: { color: '#36454F' } }, fb(id))),
                          React.createElement('div', null, React.createElement('span', { className: 'text-slate-600' }, 'High: '), React.createElement('span', { className: 'font-medium', style: { color: '#40BCA3' } }, fh(id)))
                        )
                      );
                    })
                  )
                )
              );
            })
          )
        ),

        // INPUT TAB
        activeTab === 'input' && React.createElement('div', { className: 'grid grid-cols-1 lg:grid-cols-3 gap-6' },
          React.createElement('div', { className: 'lg:col-span-1 bg-white rounded-xl shadow-sm border border-slate-100 p-6' },
            React.createElement('h3', { className: 'text-lg font-light mb-4', style: { color: '#36454F' } }, 'Domains'),
            Object.keys(dom).map(d => {
              const DI = icons[d];
              const sel = selectedDomain === d;
              return React.createElement('button', { key: d, onClick: () => setSelectedDomain(d), className: 'w-full flex items-center gap-3 p-4 rounded-lg mb-2 border-2', style: sel ? { background: 'linear-gradient(135deg,#F1F5F9,#E2E8F0)', borderColor: '#B5223B' } : { background: '#f8fafc', borderColor: '#e2e8f0' } },
                React.createElement(DI, { size: 20, style: { color: sel ? '#36454F' : '#64748b' } }),
                React.createElement('span', { className: 'font-light', style: { color: sel ? '#36454F' : '#475569' } }, d)
              );
            })
          ),
          React.createElement('div', { className: 'lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 p-6' },
            React.createElement('div', { className: 'flex items-center gap-3 mb-6' },
              React.createElement(I, { size: 24, style: { color: '#36454F' } }),
              React.createElement('h3', { className: 'text-xl font-light', style: { color: '#36454F' } }, selectedDomain + ' Metrics')
            ),
            // Pre-fill userId from identity
            React.createElement('div', { className: 'mb-6 grid grid-cols-2 gap-4' },
              React.createElement('div', null,
                React.createElement('label', { className: 'block text-sm text-slate-600 mb-2' }, 'Firm name'),
                React.createElement('input', { type: 'text', value: currentResponse.userId || identity.firmName, onChange: e => setCurrentResponse({ ...currentResponse, userId: e.target.value }), className: 'w-full px-4 py-2 border border-slate-300 rounded-lg', placeholder: 'Firm name' })
              ),
              React.createElement('div', null,
                React.createElement('label', { className: 'block text-sm text-slate-600 mb-2' }, 'Date'),
                React.createElement('input', { type: 'date', value: currentResponse.date, onChange: e => setCurrentResponse({ ...currentResponse, date: e.target.value }), className: 'w-full px-4 py-2 border border-slate-300 rounded-lg' })
              )
            ),
            React.createElement('div', { className: 'mb-4 p-3 rounded-lg', style: { background: 'linear-gradient(135deg,#F1F5F9,#E2E8F0)', border: '1px solid #CBD5E1' } },
              React.createElement('div', { className: 'flex justify-between mb-2' },
                React.createElement('span', { className: 'text-sm text-slate-700' }, 'Progress'),
                React.createElement('span', { className: 'text-sm font-medium', style: { color: '#36454F' } }, comp + ' / 20')
              ),
              React.createElement('div', { className: 'h-2 bg-white rounded-full overflow-hidden' },
                React.createElement('div', { className: 'h-full', style: { width: (comp / 20 * 100) + '%', background: 'linear-gradient(90deg,#40BCA3,#36454F)' } })
              ),
              comp < 20 && React.createElement('p', { className: 'text-xs text-slate-600 mt-2' }, 'Complete all 20 to save')
            ),
            React.createElement('div', { className: 'space-y-5' },
              dom[selectedDomain].map(id => {
                const mt = m[id];
                return React.createElement('div', { key: id, className: 'border-b border-slate-100 pb-4' },
                  React.createElement('label', { className: 'block text-slate-800 font-light mb-1' }, mt.name),
                  React.createElement('p', { className: 'text-xs text-slate-500 mb-2' }, mt.desc),
                  React.createElement('div', { className: 'flex items-center gap-3' },
                    mt.type === 'scl'
                      ? React.createElement('select', { value: currentResponse.metrics[id] !== undefined ? currentResponse.metrics[id] : '', onChange: e => chg(id, e.target.value), className: 'flex-1 px-3 py-2 border border-slate-300 rounded-lg' },
                          React.createElement('option', { value: '' }, 'Select...'),
                          mt.lab.map((l, i) => React.createElement('option', { key: i, value: i }, l))
                        )
                      : React.createElement(React.Fragment, null,
                          React.createElement('input', { type: 'number', step: mt.unit === 'dol' ? '1000' : '0.1', value: currentResponse.metrics[id] !== undefined ? currentResponse.metrics[id] : '', onChange: e => chg(id, e.target.value), className: 'w-32 px-3 py-2 border border-slate-300 rounded-lg' }),
                          React.createElement('span', { className: 'text-slate-500 text-sm' }, mt.unit === 'dol' ? '$' : mt.unit)
                        ),
                    React.createElement('span', { className: 'text-slate-400 text-sm ml-auto' }, 'Target: ' + fb(id))
                  )
                );
              })
            ),
            (() => {
              const domainOrder = ['People', 'Process', 'Data', 'Technology'];
              const currentDomainMetrics = dom[selectedDomain].filter(id => currentResponse.metrics[id] !== undefined).length;
              const currentIndex = domainOrder.indexOf(selectedDomain);
              const nextDomain = currentIndex < domainOrder.length - 1 ? domainOrder[currentIndex + 1] : null;
              const allCurrentDomainComplete = currentDomainMetrics === 5;
              const hasUserId = !!(currentResponse.userId || identity.firmName);

              if (comp === 20) {
                return React.createElement('button', { onClick: sub, disabled: !hasUserId, className: 'mt-6 w-full text-white py-3 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50', style: { background: hasUserId ? '#B5223B' : '#9CA3AF' } },
                  React.createElement(Plus, { size: 20 }), 'Save & view my results'
                );
              } else if (allCurrentDomainComplete && nextDomain) {
                return React.createElement('button', { onClick: () => setSelectedDomain(nextDomain), className: 'mt-6 w-full text-white py-3 rounded-lg flex items-center justify-center gap-2', style: { background: 'linear-gradient(135deg,#40BCA3,#36454F)' } },
                  'Continue to ' + nextDomain + ' →'
                );
              } else {
                return React.createElement('button', { disabled: true, className: 'mt-6 w-full text-white py-3 rounded-lg flex items-center justify-center gap-2 opacity-50', style: { background: '#9CA3AF' } },
                  'Complete ' + selectedDomain + ' (' + currentDomainMetrics + '/5)'
                );
              }
            })()
          )
        ),

        // ANALYSIS TAB — public users see ONLY their own latest response
        activeTab === 'analysis' && React.createElement('div', { className: 'space-y-6' },
          !analysisResponse ? (
            React.createElement('div', { className: 'bg-white rounded-xl shadow-sm border border-slate-100 p-12 text-center' },
              React.createElement('p', { style: { fontSize: '32px', marginBottom: '8px' } }, '📊'),
              React.createElement('p', { className: 'text-slate-600 font-medium mb-2' }, 'No results yet'),
              React.createElement('p', { className: 'text-slate-500 text-sm' }, 'Complete the Input tab to see your benchmark analysis here.'),
              React.createElement('button', { onClick: () => setActiveTab('input'), style: { marginTop: '16px', padding: '9px 20px', background: '#B5223B', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' } }, 'Go to Input →')
            )
          ) : (
            React.createElement(React.Fragment, null,
              React.createElement('div', { className: 'bg-white rounded-xl shadow-sm border border-slate-100 p-4' },
                React.createElement('div', { className: 'flex justify-between items-center' },
                  React.createElement('div', null,
                    React.createElement('h2', { className: 'text-xl font-light', style: { color: '#36454F' } }, identity.firmName),
                    React.createElement('p', { className: 'text-sm text-slate-500' }, analysisResponse.date)
                  ),
                  React.createElement('div', { style: { display: 'flex', gap: '8px' } },
                    React.createElement('button', { onClick: emailResults, className: 'flex items-center gap-2 px-6 py-3 text-white rounded-lg', style: { background: '#B5223B' } },
                      '✉ Email my results'
                    ),
                    React.createElement('button', { onClick: () => exp(analysisResponse.id), className: 'flex items-center gap-2 px-4 py-3 rounded-lg border border-slate-300 text-slate-700' },
                      React.createElement(Download, { size: 18 }), 'CSV'
                    )
                  )
                )
              ),
              React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-4 gap-4' },
                Object.keys(dom).map(d => {
                  const sc = ds(d, analysisResponse.metrics);
                  const DI = icons[d];
                  return React.createElement('div', { key: d, className: 'bg-white rounded-xl shadow-sm border border-slate-100 p-6' },
                    React.createElement('div', { className: 'flex items-center gap-3 mb-3' },
                      React.createElement(DI, { size: 20, style: { color: '#36454F' } }),
                      React.createElement('h4', { className: 'font-light text-slate-700' }, d)
                    ),
                    React.createElement('div', { className: 'text-3xl font-light', style: { color: sc >= 0 ? '#40BCA3' : '#D7335D' } },
                      (sc >= 0 ? '+' : '') + sc.toFixed(1) + '%'
                    )
                  );
                })
              ),
              Object.keys(dom).map(d =>
                React.createElement('div', { key: d, className: 'bg-white rounded-xl shadow-sm border border-slate-100 p-6' },
                  React.createElement('h3', { className: 'text-lg font-light mb-4', style: { color: '#36454F' } }, d + ' Details'),
                  React.createElement('div', { className: 'space-y-4' },
                    dom[d].map(id => {
                      const mt = m[id];
                      const v = analysisResponse.metrics[id];
                      if (v === undefined) return null;
                      const g = gap(id, v);
                      const pct = mt.dir === 'low' ? Math.min((mt.typ / v) * 100, 150) : Math.min((v / mt.typ) * 100, 150);
                      return React.createElement('div', { key: id },
                        React.createElement('div', { className: 'flex justify-between text-sm mb-1' },
                          React.createElement('span', { className: 'text-slate-700' }, mt.name),
                          React.createElement('span', { style: { color: g >= 0 ? '#40BCA3' : '#D7335D' } },
                            fv(id, v) + ' vs ' + fb(id) + ' (' + (g >= 0 ? '+' : '') + g.toFixed(1) + '%)'
                          )
                        ),
                        React.createElement('div', { className: 'h-2 bg-slate-100 rounded-full overflow-hidden' },
                          React.createElement('div', { className: 'h-full', style: { width: Math.min(pct, 100) + '%', background: pct >= 100 ? 'linear-gradient(90deg,#40BCA3,#36454F)' : 'linear-gradient(90deg,#FFD966,#D7335D)' } })
                        )
                      );
                    })
                  )
                )
              ),
              // Interpretation note
              React.createElement('div', { className: 'bg-white rounded-xl shadow-sm border border-slate-100 p-6' },
                React.createElement('h4', { className: 'font-medium text-slate-700 mb-3' }, 'Reading your results'),
                React.createElement('div', { style: { display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '12px', color: '#6b7280' } },
                  React.createElement('span', null, React.createElement('span', { style: { color: '#40BCA3', fontWeight: '700' } }, '● Green (+)'), ' — above the typical benchmark'),
                  React.createElement('span', null, React.createElement('span', { style: { color: '#D7335D', fontWeight: '700' } }, '● Red (−)'), ' — below the typical benchmark')
                )
              )
            )
          )
        ),

        // HISTORY TAB — analyser only
        activeTab === 'history' && isAnalyser && React.createElement('div', { className: 'space-y-6' },
          React.createElement('div', { style: { background: '#1a1a1a', color: '#fff', padding: '8px 16px', borderRadius: '8px 8px 0 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' } },
            React.createElement('span', null, '🔒 Analyser view — ', React.createElement('span', { style: { color: '#B5223B' } }, 'all firm submissions')),
            React.createElement('div', { style: { display: 'flex', gap: '8px', alignItems: 'center' } },
              React.createElement('span', { style: { color: '#888', fontSize: '10px' } }, responses.length + ' submission' + (responses.length !== 1 ? 's' : '')),
              responses.length > 0 && React.createElement('button', { onClick: () => exp(), style: { fontSize: '11px', padding: '5px 12px', background: '#fff', color: '#1a1a1a', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '600' } },
                '↓ Export all (CSV)'
              )
            )
          ),
          React.createElement('div', { className: 'bg-white rounded-b-xl shadow-sm border border-slate-100', style: { borderTop: 'none' } },
            responses.length === 0
              ? React.createElement('div', { style: { textAlign: 'center', padding: '60px', color: '#6b7280' } }, React.createElement('p', null, 'No submissions yet.'))
              : responses.slice().reverse().map((r, i) =>
                  React.createElement('div', { key: r.id, style: { padding: '16px 20px', borderBottom: i < responses.length - 1 ? '1px solid #e5e7eb' : 'none' } },
                    React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' } },
                      React.createElement('div', null,
                        React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '3px' } },
                          React.createElement('span', { style: { fontWeight: '700', fontSize: '14px' } }, '#' + (responses.length - i) + ' — ' + (r.identity?.firmName || r.userId)),
                          React.createElement('span', { style: { fontSize: '11px', color: '#6b7280' } }, r.date)
                        ),
                        r.identity && React.createElement('div', { style: { fontSize: '12px', color: '#6b7280', marginBottom: '10px' } },
                          r.identity.name + ' · ' + r.identity.email + ' · ' + r.identity.role
                        ),
                        React.createElement('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } },
                          Object.keys(dom).map(d => {
                            const sc = ds(d, r.metrics);
                            return React.createElement('span', { key: d, style: { fontSize: '11px', fontWeight: '700', color: sc >= 0 ? '#40BCA3' : '#D7335D', background: '#f8f8f8', border: '1px solid #e5e7eb', borderRadius: '4px', padding: '2px 8px' } },
                              d + ': ' + (sc >= 0 ? '+' : '') + sc.toFixed(1) + '%'
                            );
                          })
                        )
                      ),
                      React.createElement('button', { onClick: () => exp(r.id), style: { fontSize: '11px', padding: '5px 12px', background: '#fff', color: '#1a1a1a', border: '1px solid #e5e7eb', borderRadius: '4px', cursor: 'pointer' } },
                        '↓ Export'
                      )
                    )
                  )
                )
          )
        ),

        // DASHBOARD TAB — analyser only (original dashboard code, unchanged)
        activeTab === 'dashboard' && isAnalyser && React.createElement('div', { className: 'space-y-6' },
          React.createElement('div', { style: { background: '#1a1a1a', color: '#fff', padding: '8px 16px', borderRadius: '8px', marginBottom: '16px', fontSize: '11px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' } },
            '🔒 Analyser dashboard — ', React.createElement('span', { style: { color: '#B5223B' } }, 'aggregate view')
          ),
          responses.length === 0 ? (
            React.createElement('div', { className: 'bg-white rounded-xl shadow-sm border border-slate-100 p-12 text-center' },
              React.createElement('p', { className: 'text-slate-600' }, 'No submissions yet')
            )
          ) : (
            React.createElement(React.Fragment, null,
              React.createElement('div', { className: 'bg-white rounded-xl shadow-sm border border-slate-100 p-6' },
                React.createElement('div', { className: 'flex justify-between items-start mb-6' },
                  React.createElement('div', null,
                    React.createElement('h2', { className: 'text-2xl font-light mb-2', style: { color: '#36454F' } }, 'Benchmark Navigator'),
                    React.createElement('p', { className: 'text-slate-500 text-sm' }, 'Executive Dashboard')
                  ),
                  React.createElement('div', { className: 'flex gap-4' },
                    React.createElement('select', { value: dashboardView, onChange: e => setDashboardView(e.target.value), className: 'px-4 py-2 border border-slate-300 rounded-lg text-sm' },
                      React.createElement('option', { value: 'all' }, 'All Firms'),
                      React.createElement('option', { value: 'individual' }, 'Individual'),
                      React.createElement('option', { value: 'compare' }, 'Compare')
                    ),
                    dashboardView !== 'all' && React.createElement('select', { value: selectedFirm, onChange: e => setSelectedFirm(e.target.value), className: 'px-4 py-2 border border-slate-300 rounded-lg text-sm' },
                      React.createElement('option', { value: 'all' }, 'Select Firm'),
                      [...new Set(responses.map(r => r.identity?.firmName || r.userId))].map(f => React.createElement('option', { key: f, value: f }, f))
                    )
                  )
                ),
                // Radar + Distribution (original code preserved)
                React.createElement('div', { className: 'grid grid-cols-1 lg:grid-cols-2 gap-6' },
                  React.createElement('div', { className: 'bg-slate-50 rounded-lg p-6' },
                    React.createElement('h3', { className: 'text-lg font-light mb-4', style: { color: '#36454F' } }, 'Domain Performance'),
                    React.createElement('div', { className: 'relative' },
                      React.createElement('svg', { viewBox: '0 0 400 400', className: 'w-full', style: { height: '350px' } },
                        React.createElement('circle', { cx: '200', cy: '200', r: '150', fill: 'none', stroke: '#e2e8f0', strokeWidth: '1' }),
                        React.createElement('circle', { cx: '200', cy: '200', r: '100', fill: 'none', stroke: '#e2e8f0', strokeWidth: '1' }),
                        React.createElement('circle', { cx: '200', cy: '200', r: '50', fill: 'none', stroke: '#e2e8f0', strokeWidth: '1' }),
                        React.createElement('line', { x1: '200', y1: '50', x2: '200', y2: '350', stroke: '#cbd5e1', strokeWidth: '1' }),
                        React.createElement('line', { x1: '50', y1: '200', x2: '350', y2: '200', stroke: '#cbd5e1', strokeWidth: '1' }),
                        (() => {
                          const filt = dashboardView === 'all' ? responses : responses.filter(r => (r.identity?.firmName || r.userId) === selectedFirm);
                          if (filt.length === 0) return null;
                          const scores = Object.keys(dom).map((d, i) => {
                            const sc = filt.map(r => ds(d, r.metrics));
                            const avg = sc.reduce((a, b) => a + b, 0) / sc.length;
                            const norm = Math.max(0, Math.min(100, avg + 100));
                            const ang = (i * 90 - 90) * Math.PI / 180;
                            const rad = (norm / 100) * 150;
                            return { x: 200 + rad * Math.cos(ang), y: 200 + rad * Math.sin(ang), label: d, score: avg };
                          });
                          const path = scores.map((s, i) => `${i === 0 ? 'M' : 'L'} ${s.x},${s.y}`).join(' ') + ' Z';
                          return React.createElement(React.Fragment, null,
                            React.createElement('path', { d: path, fill: 'rgba(64,188,163,0.2)', stroke: '#40BCA3', strokeWidth: '2' }),
                            scores.map((s, i) => {
                              const ang = (i * 90 - 90) * Math.PI / 180;
                              const lx = 200 + 170 * Math.cos(ang);
                              const ly = 200 + 170 * Math.sin(ang);
                              return React.createElement('g', { key: i },
                                React.createElement('circle', { cx: s.x, cy: s.y, r: '4', fill: '#40BCA3' }),
                                React.createElement('text', { x: lx, y: ly, textAnchor: 'middle', fontSize: '14', fill: '#36454F', fontWeight: '500' }, s.label),
                                React.createElement('text', { x: lx, y: ly + 15, textAnchor: 'middle', fontSize: '12', fill: s.score >= 0 ? '#40BCA3' : '#D7335D' }, (s.score >= 0 ? '+' : '') + s.score.toFixed(0) + '%')
                              );
                            }),
                            React.createElement('circle', { cx: '200', cy: '200', r: '3', fill: '#36454F' })
                          );
                        })()
                      )
                    )
                  ),
                  React.createElement('div', { className: 'bg-slate-50 rounded-lg p-6' },
                    React.createElement('h3', { className: 'text-lg font-light mb-4', style: { color: '#36454F' } }, 'Distribution'),
                    Object.keys(dom).map(d => {
                      const all = responses.map(r => ds(d, r.metrics)).sort((a, b) => a - b);
                      const filt = dashboardView === 'all' ? responses : responses.filter(r => (r.identity?.firmName || r.userId) === selectedFirm);
                      const curr = filt.map(r => ds(d, r.metrics)).reduce((a, b) => a + b, 0) / filt.length;
                      const q1 = all[Math.floor(all.length * 0.25)];
                      const med = all[Math.floor(all.length * 0.5)];
                      const q3 = all[Math.floor(all.length * 0.75)];
                      return React.createElement('div', { key: d, className: 'mb-4 relative', onMouseEnter: () => setHoveredDomain(d), onMouseLeave: () => setHoveredDomain(null) },
                        React.createElement('div', { className: 'flex justify-between items-center mb-2' },
                          React.createElement('span', { className: 'text-sm font-medium text-slate-700' }, d),
                          React.createElement('span', { className: 'text-xs text-slate-500' }, (curr >= 0 ? '+' : '') + curr.toFixed(1) + '%')
                        ),
                        React.createElement('div', { className: 'relative h-8 bg-white rounded cursor-pointer' },
                          React.createElement('div', { className: 'absolute top-0 bottom-0 bg-slate-200 rounded', style: { left: '40%', right: '40%' } }),
                          React.createElement('div', { className: 'absolute top-0 bottom-0 bg-slate-300', style: { left: `${40 + (q1 / 100) * 20}%`, width: `${((q3 - q1) / 100) * 20}%` } }),
                          React.createElement('div', { className: 'absolute top-0 bottom-0 w-0.5 bg-slate-600', style: { left: `${50 + (med / 100) * 50}%` } }),
                          React.createElement('div', { className: 'absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2', style: { left: `${50 + (curr / 100) * 50}%`, backgroundColor: '#40BCA3', borderColor: '#36454F' } })
                        )
                      );
                    })
                  )
                )
              ),
              // Heatmap
              React.createElement('div', { className: 'bg-white rounded-xl shadow-sm border border-slate-100 p-6' },
                React.createElement('h3', { className: 'text-lg font-light mb-4', style: { color: '#36454F' } }, 'Heatmap'),
                React.createElement('div', { className: 'overflow-auto', style: { maxHeight: '300px' } },
                  React.createElement('table', { className: 'w-full text-xs' },
                    React.createElement('thead',
                      React.createElement('tr', { className: 'border-b' },
                        React.createElement('th', { className: 'text-left p-2 sticky top-0 bg-white', style: { color: '#36454F' } }, 'Firm'),
                        Object.keys(m).map(id => React.createElement('th', { key: id, className: 'text-center p-1 sticky top-0 bg-white', style: { color: '#36454F' } }, id))
                      )
                    ),
                    React.createElement('tbody',
                      responses.slice(-10).map(r =>
                        React.createElement('tr', { key: r.id, className: 'border-b' },
                          React.createElement('td', { className: 'p-2 font-medium text-xs sticky left-0 bg-white' }, r.identity?.firmName || r.userId),
                          Object.keys(m).map(id => {
                            const v = r.metrics[id];
                            if (v === undefined) return React.createElement('td', { key: id, className: 'p-1 text-center bg-slate-50' }, '-');
                            const g = gap(id, v);
                            const int = Math.min(Math.abs(g) / 50, 1);
                            const col = g >= 0 ? `rgba(64,188,163,${int})` : `rgba(215,51,93,${int})`;
                            return React.createElement('td', { key: id, className: 'p-1 text-center font-medium', style: { backgroundColor: col, color: int > 0.5 ? 'white' : '#36454F' } },
                              (g >= 0 ? '+' : '') + g.toFixed(0) + '%'
                            );
                          })
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );
};

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(BenchmarkTool));

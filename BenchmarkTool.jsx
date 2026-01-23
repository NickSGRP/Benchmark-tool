import React, { useState, useEffect } from 'react';
import { Users, Database, Cpu, FileText, Plus, Download, TrendingUp } from 'lucide-react';

const BenchmarkTool = () => {
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
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

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
      const stored = localStorage.getItem('bench-resp');
      if (stored) setResponses(JSON.parse(stored));
    } catch (e) {
      console.error('Failed to load data:', e);
    }
    setLoading(false);
  };

  const save = async (d) => {
    try { 
      localStorage.setItem('bench-resp', JSON.stringify(d));
    } catch (e) {
      console.error('Failed to save data:', e);
    }
  };

  const chg = (id, v) => {
    setCurrentResponse(p => ({ 
      ...p, 
      metrics: { 
        ...p.metrics, 
        [id]: v === '' ? undefined : (m[id].type === 'scl' ? parseInt(v) : parseFloat(v))
      } 
    }));
  };

  const sub = () => {
    const totalMetrics = Object.keys(currentResponse.metrics).filter(k => currentResponse.metrics[k] !== undefined).length;
    if (currentResponse.userId && totalMetrics === 20) {
      const n = [...responses, { ...currentResponse, id: Date.now() }];
      setResponses(n);
      save(n);
      setCurrentResponse({ userId: '', date: new Date().toISOString().split('T')[0], metrics: {} });
      alert('Saved!');
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
    if (mt.unit === 'dol') return '$' + (v/1000).toFixed(0) + 'k';
    if (mt.unit === 'pct') return v.toFixed(1) + '%';
    if (mt.unit === 'day') return v.toFixed(0) + ' days';
    if (mt.unit === 'scl') return ['Below', 'At', 'Above'][Math.round(v)] || v;
    return v.toFixed(1);
  };

  const fb = (id) => {
    const mt = m[id];
    const v = mt.typ;
    if (mt.unit === 'dol') return '$' + (v/1000).toFixed(0) + 'k';
    if (mt.unit === 'pct') return v + '%';
    if (mt.unit === 'day') return v + ' days';
    if (mt.unit === 'scl') return 'At';
    return v;
  };

  const fh = (id) => {
    const mt = m[id];
    const v = mt.hi;
    if (mt.unit === 'dol') return '$' + (v/1000).toFixed(0) + 'k';
    if (mt.unit === 'pct') return v + '%';
    if (mt.unit === 'day') return v + ' days';
    if (mt.unit === 'scl') return 'Above';
    return v;
  };

  const ds = (d, dt) => {
    const sc = dom[d].map(id => { const v = dt[id]; return v !== undefined ? gap(id, v) : null; }).filter(s => s !== null);
    return sc.length > 0 ? sc.reduce((a,b) => a+b, 0) / sc.length : 0;
  };

  const exp = (rid = null) => {
    let d = rid ? responses.filter(r => r.id === rid) : responses;
    if (d.length === 0) { alert('No data'); return; }
    let csv = 'User,Date,Domain,ID,Metric,Value,Unit,Benchmark,Gap,Status\n';
    d.forEach(r => {
      Object.keys(dom).forEach(dn => {
        dom[dn].forEach(id => {
          const mt = m[id];
          const v = r.metrics[id];
          if (v !== undefined) {
            const g = gap(id, v);
            const s = g >= 10 ? 'High' : g >= 0 ? 'At' : 'Below';
            csv += '"'+r.userId+'","'+r.date+'","'+dn+'","'+id+'","'+mt.name+'","'+v+'","'+mt.unit+'","'+mt.typ+'","'+g.toFixed(1)+'","'+s+'"\n';
          }
        });
      });
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'benchmark-'+(rid?'single':'all')+'-'+new Date().toISOString().split('T')[0]+'.csv';
    link.click();
  };

  const I = icons[selectedDomain];
  const comp = Object.keys(currentResponse.metrics).filter(k => currentResponse.metrics[k] !== undefined).length;

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div>Loading...</div></div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div style={{width:'50px',height:'50px',background:'linear-gradient(135deg,#9E1F40,#D7335D)',clipPath:'polygon(0 0,100% 0,100% 70%,70% 100%,0 100%)',position:'relative'}}>
              <div style={{position:'absolute',top:'12px',left:'8px',width:'25px',height:'15px',border:'2px solid white',borderRight:'none',borderBottom:'none',transform:'skewX(-10deg)'}}></div>
            </div>
            <div>
              <div style={{color:'#36454F',fontSize:'24px',fontWeight:'700',letterSpacing:'-0.5px'}}>STRATEGICGROUP</div>
              <div style={{color:'#9E1F40',fontSize:'11px',letterSpacing:'2px'}}>YOUR TRUSTED IT PARTNER</div>
            </div>
          </div>
          <h1 className="text-4xl font-light mb-2" style={{color:'#36454F'}}>Dream Firm Benchmark Analysis</h1>
          <p className="text-slate-600">Top 20 Accounting Industry Benchmarks 2026</p>
        </div>

        <div className="flex gap-2 mb-6 border-b border-slate-200 flex-wrap">
          {['details','input','analysis','history','dashboard'].map(t => (
            <button key={t} onClick={()=>setActiveTab(t)} className="px-6 py-3 font-light capitalize" style={activeTab===t?{borderBottom:'2px solid #9E1F40',color:'#36454F'}:{color:'#64748b'}}>
              {t === 'details' ? 'Details & Assumptions' : t}
            </button>
          ))}
        </div>

        {activeTab === 'details' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h2 className="text-2xl font-light mb-4" style={{color:'#36454F'}}>Understanding the Benchmarks</h2>
              <p className="text-slate-600 mb-6">These benchmarks support evidence-based conversations about high-performing firms.</p>
              {Object.keys(dom).map(d => {
                const inf = info[d];
                const IC = icons[d];
                return (
                  <div key={d} className="mb-8 border-t border-slate-200 pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <IC size={32} style={{color:'#36454F',marginTop:'4px'}} />
                      <div className="flex-1">
                        <h3 className="text-2xl font-light mb-2" style={{color:'#36454F'}}>{d}</h3>
                        <p className="text-slate-700 mb-2">{inf.desc}</p>
                        <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                          <div className="p-3 rounded" style={{backgroundColor:'#E8F5E9'}}>
                            <div className="font-medium text-slate-700 mb-1">Owns</div>
                            <div className="text-slate-600">{inf.own}</div>
                          </div>
                          <div className="p-3 rounded" style={{backgroundColor:'#E8F5E9'}}>
                            <div className="font-medium text-slate-700 mb-1">Outcome</div>
                            <div className="text-slate-600">{inf.out}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-medium text-slate-700 mb-3">Metrics:</h4>
                      <div className="space-y-3">
                        {dom[d].map(id => {
                          const mt = m[id];
                          return (
                            <div key={id} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                              <div className="mb-2">
                                <div className="font-medium text-slate-800">{mt.name}</div>
                                <div className="text-sm text-slate-600 mt-1">{mt.desc}</div>
                              </div>
                              <div className="grid grid-cols-3 gap-4 mt-3 text-sm">
                                <div><span className="text-slate-600">Unit: </span><span className="font-medium" style={{color:'#36454F'}}>{mt.unit === 'scl' ? 'Scale 0-2' : mt.unit}</span></div>
                                <div><span className="text-slate-600">Typical: </span><span className="font-medium" style={{color:'#36454F'}}>{fb(id)}</span></div>
                                <div><span className="text-slate-600">High: </span><span className="font-medium" style={{color:'#40BCA3'}}>{fh(id)}</span></div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'input' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-lg font-light mb-4" style={{color:'#36454F'}}>Domains</h3>
              {Object.keys(dom).map(d => {
                const DI = icons[d];
                const sel = selectedDomain === d;
                return (
                  <button key={d} onClick={()=>setSelectedDomain(d)} className="w-full flex items-center gap-3 p-4 rounded-lg mb-2 border-2" style={sel?{background:'linear-gradient(135deg,#F1F5F9,#E2E8F0)',borderColor:'#9E1F40'}:{background:'#f8fafc',borderColor:'#e2e8f0'}}>
                    <DI size={20} style={{color:sel?'#36454F':'#64748b'}} />
                    <span className="font-light" style={{color:sel?'#36454F':'#475569'}}>{d}</span>
                  </button>
                );
              })}
            </div>
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <div className="flex items-center gap-3 mb-6">
                <I size={24} style={{color:'#36454F'}} />
                <h3 className="text-xl font-light" style={{color:'#36454F'}}>{selectedDomain} Metrics</h3>
              </div>
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-600 mb-2">Firm / User ID</label>
                  <input type="text" value={currentResponse.userId} onChange={(e)=>setCurrentResponse({...currentResponse,userId:e.target.value})} className="w-full px-4 py-2 border border-slate-300 rounded-lg" placeholder="Partner name" />
                </div>
                <div>
                  <label className="block text-sm text-slate-600 mb-2">Date</label>
                  <input type="date" value={currentResponse.date} onChange={(e)=>setCurrentResponse({...currentResponse,date:e.target.value})} className="w-full px-4 py-2 border border-slate-300 rounded-lg" />
                </div>
              </div>
              <div className="mb-4 p-3 rounded-lg" style={{background:'linear-gradient(135deg,#F1F5F9,#E2E8F0)',border:'1px solid #CBD5E1'}}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-slate-700">Progress</span>
                  <span className="text-sm font-medium" style={{color:'#36454F'}}>{comp} / 20</span>
                </div>
                <div className="h-2 bg-white rounded-full overflow-hidden">
                  <div className="h-full" style={{width:(comp/20*100)+'%',background:'linear-gradient(90deg,#40BCA3,#36454F)'}} />
                </div>
                {comp < 20 && <p className="text-xs text-slate-600 mt-2">Complete all 20 to save</p>}
              </div>
              <div className="space-y-5">
                {dom[selectedDomain].map(id => {
                  const mt = m[id];
                  return (
                    <div key={id} className="border-b border-slate-100 pb-4">
                      <label className="block text-slate-800 font-light mb-1">{mt.name}</label>
                      <p className="text-xs text-slate-500 mb-2">{mt.desc}</p>
                      <div className="flex items-center gap-3">
                        {mt.type === 'scl' ? (
                          <select value={currentResponse.metrics[id]!==undefined?currentResponse.metrics[id]:''} onChange={(e)=>chg(id,e.target.value)} className="flex-1 px-3 py-2 border border-slate-300 rounded-lg">
                            <option value="">Select...</option>
                            {mt.lab.map((l,i)=><option key={i} value={i}>{l}</option>)}
                          </select>
                        ) : (
                          <>
                            <input type="number" step={mt.unit==='dol'?'1000':'0.1'} value={currentResponse.metrics[id]!==undefined?currentResponse.metrics[id]:''} onChange={(e)=>chg(id,e.target.value)} className="w-32 px-3 py-2 border border-slate-300 rounded-lg" />
                            <span className="text-slate-500 text-sm">{mt.unit==='dol'?'$':mt.unit}</span>
                          </>
                        )}
                        <span className="text-slate-400 text-sm ml-auto">Target: {fb(id)}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              {(() => {
                const domainOrder = ['People', 'Process', 'Data', 'Technology'];
                const currentDomainMetrics = dom[selectedDomain].filter(id => currentResponse.metrics[id] !== undefined).length;
                const currentIndex = domainOrder.indexOf(selectedDomain);
                const nextDomain = currentIndex < domainOrder.length - 1 ? domainOrder[currentIndex + 1] : null;
                const allCurrentDomainComplete = currentDomainMetrics === 5;
                
                if (comp === 20) {
                  return (
                    <button onClick={sub} disabled={!currentResponse.userId} className="mt-6 w-full text-white py-3 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50" style={{background:currentResponse.userId?'linear-gradient(135deg,#40BCA3,#36454F)':'#9CA3AF'}}>
                      <Plus size={20} />Save Complete Response
                    </button>
                  );
                } else if (allCurrentDomainComplete && nextDomain) {
                  return (
                    <button onClick={() => setSelectedDomain(nextDomain)} className="mt-6 w-full text-white py-3 rounded-lg flex items-center justify-center gap-2" style={{background:'linear-gradient(135deg,#40BCA3,#36454F)'}}>
                      Continue to {nextDomain} →
                    </button>
                  );
                } else if (allCurrentDomainComplete && !nextDomain) {
                  return (
                    <button onClick={sub} disabled={!currentResponse.userId} className="mt-6 w-full text-white py-3 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50" style={{background:currentResponse.userId?'linear-gradient(135deg,#40BCA3,#36454F)':'#9CA3AF'}}>
                      <Plus size={20} />Save Complete Response
                    </button>
                  );
                } else {
                  return (
                    <button disabled className="mt-6 w-full text-white py-3 rounded-lg flex items-center justify-center gap-2 opacity-50" style={{background:'#9CA3AF'}}>
                      Complete {selectedDomain} ({currentDomainMetrics}/5)
                    </button>
                  );
                }
              })()}
            </div>
          </div>
        )}

        {activeTab === 'analysis' && (
          <div className="space-y-6">
            {responses.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-12 text-center"><p className="text-slate-600">No data yet.</p></div>
            ) : (
              <>
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-xl font-light" style={{color:'#36454F'}}>Latest: {responses[responses.length-1].userId}</h2>
                      <p className="text-sm text-slate-500">{responses[responses.length-1].date}</p>
                    </div>
                    <button onClick={()=>exp(responses[responses.length-1].id)} className="flex items-center gap-2 px-6 py-3 text-white rounded-lg" style={{background:'linear-gradient(135deg,#40BCA3,#36454F)'}}>
                      <Download size={18} />Export
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {Object.keys(dom).map(d => {
                    const sc = ds(d, responses[responses.length-1].metrics);
                    const DI = icons[d];
                    return (
                      <div key={d} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <DI size={20} style={{color:'#36454F'}} />
                          <h4 className="font-light text-slate-700">{d}</h4>
                        </div>
                        <div className="text-3xl font-light" style={{color:sc>=0?'#40BCA3':'#D7335D'}}>
                          {sc>=0?'+':''}{sc.toFixed(1)}%
                        </div>
                      </div>
                    );
                  })}
                </div>
                {Object.keys(dom).map(d => {
                  const latest = responses[responses.length-1];
                  return (
                    <div key={d} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                      <h3 className="text-lg font-light mb-4" style={{color:'#36454F'}}>{d} Details</h3>
                      <div className="space-y-4">
                        {dom[d].map(id => {
                          const mt = m[id];
                          const v = latest.metrics[id];
                          if (v === undefined) return null;
                          const g = gap(id, v);
                          const pct = mt.dir==='low' ? Math.min((mt.typ/v)*100,150) : Math.min((v/mt.typ)*100,150);
                          return (
                            <div key={id}>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-slate-700">{mt.name}</span>
                                <span style={{color:g>=0?'#40BCA3':'#D7335D'}}>
                                  {fv(id,v)} vs {fb(id)} ({g>=0?'+':''}{g.toFixed(1)}%)
                                </span>
                              </div>
                              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full" style={{width:Math.min(pct,100)+'%',background:pct>=100?'linear-gradient(90deg,#40BCA3,#36454F)':'linear-gradient(90deg,#FFD966,#D7335D)'}} />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        )}

        {activeTab === 'history' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-light flex items-center gap-2" style={{color:'#36454F'}}>
                  <TrendingUp size={24} />History
                </h3>
                {responses.length>0 && (
                  <button onClick={()=>exp()} className="flex items-center gap-2 px-6 py-3 text-white rounded-lg" style={{background:'linear-gradient(135deg,#40BCA3,#36454F)'}}>
                    <Download size={18} />Export All
                  </button>
                )}
              </div>
              {responses.length === 0 ? (
                <p className="text-slate-600 text-center py-12">No responses yet.</p>
              ) : (
                <div className="space-y-4">
                  {responses.map((r,i) => (
                    <div key={r.id} className="border border-slate-200 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <span className="font-light text-slate-800">#{i+1} - {r.userId}</span>
                          <span className="text-sm text-slate-500 ml-4">{r.date}</span>
                        </div>
                        <button onClick={()=>exp(r.id)} className="flex items-center gap-2 px-4 py-2 text-white rounded-lg text-sm" style={{background:'linear-gradient(135deg,#9E1F40,#D7335D)'}}>
                          <Download size={16} />Export
                        </button>
                      </div>
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        {Object.keys(dom).map(d => {
                          const sc = ds(d, r.metrics);
                          return (
                            <div key={d} className="text-center p-3 bg-slate-50 rounded">
                              <div className="text-slate-600 mb-1">{d}</div>
                              <div className="text-lg font-light" style={{color:sc>=0?'#40BCA3':'#D7335D'}}>
                                {sc>=0?'+':''}{sc.toFixed(1)}%
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {responses.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-12 text-center">
                <p className="text-slate-600">Submit responses to view dashboard</p>
              </div>
            ) : (
              <>
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-2xl font-light mb-2" style={{color:'#36454F'}}>Benchmark Navigator</h2>
                      <p className="text-slate-500 text-sm">Executive Dashboard</p>
                    </div>
                    <div className="flex gap-4">
                      <select value={dashboardView} onChange={(e)=>setDashboardView(e.target.value)} className="px-4 py-2 border border-slate-300 rounded-lg text-sm">
                        <option value="all">All Firms</option>
                        <option value="individual">Individual</option>
                        <option value="compare">Compare</option>
                      </select>
                      {dashboardView !== 'all' && (
                        <select value={selectedFirm} onChange={(e)=>setSelectedFirm(e.target.value)} className="px-4 py-2 border border-slate-300 rounded-lg text-sm">
                          <option value="all">Select Firm</option>
                          {[...new Set(responses.map(r=>r.userId))].map(f=><option key={f} value={f}>{f}</option>)}
                        </select>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-slate-50 rounded-lg p-6">
                      <h3 className="text-lg font-light mb-4" style={{color:'#36454F'}}>Domain Performance</h3>
                      <div className="relative">
                        <svg viewBox="0 0 400 400" className="w-full" style={{height:'350px'}}>
                          <circle cx="200" cy="200" r="150" fill="none" stroke="#e2e8f0" strokeWidth="1"/>
                          <circle cx="200" cy="200" r="100" fill="none" stroke="#e2e8f0" strokeWidth="1"/>
                          <circle cx="200" cy="200" r="50" fill="none" stroke="#e2e8f0" strokeWidth="1"/>
                          <line x1="200" y1="50" x2="200" y2="350" stroke="#cbd5e1" strokeWidth="1"/>
                          <line x1="50" y1="200" x2="350" y2="200" stroke="#cbd5e1" strokeWidth="1"/>
                          {(() => {
                            const filt = dashboardView==='all'?responses:responses.filter(r=>r.userId===selectedFirm);
                            if(filt.length===0)return null;
                            const scores = Object.keys(dom).map((d,i)=>{
                              const sc=filt.map(r=>ds(d,r.metrics));
                              const avg=sc.reduce((a,b)=>a+b,0)/sc.length;
                              const norm=Math.max(0,Math.min(100,avg+100));
                              const ang=(i*90-90)*Math.PI/180;
                              const rad=(norm/100)*150;
                              return {x:200+rad*Math.cos(ang),y:200+rad*Math.sin(ang),label:d,score:avg};
                            });
                            const path=scores.map((s,i)=>`${i===0?'M':'L'} ${s.x},${s.y}`).join(' ')+' Z';
                            let peerPath=null;
                            if(dashboardView==='compare'&&selectedFirm!=='all'){
                              const peer=responses.filter(r=>r.userId!==selectedFirm);
                              const psc=Object.keys(dom).map((d,i)=>{
                                const sc=peer.map(r=>ds(d,r.metrics));
                                const avg=sc.reduce((a,b)=>a+b,0)/sc.length;
                                const norm=Math.max(0,Math.min(100,avg+100));
                                const ang=(i*90-90)*Math.PI/180;
                                const rad=(norm/100)*150;
                                return {x:200+rad*Math.cos(ang),y:200+rad*Math.sin(ang)};
                              });
                              peerPath=psc.map((s,i)=>`${i===0?'M':'L'} ${s.x},${s.y}`).join(' ')+' Z';
                            }
                            return(<>
                              {peerPath&&<path d={peerPath} fill="rgba(148,163,184,0.2)" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4"/>}
                              <path d={path} fill="rgba(64,188,163,0.2)" stroke="#40BCA3" strokeWidth="2"/>
                              {scores.map((s,i)=>{
                                const ang=(i*90-90)*Math.PI/180;
                                const lx=200+170*Math.cos(ang);
                                const ly=200+170*Math.sin(ang);
                                return(<g key={i}>
                                  <circle 
                                    cx={s.x} 
                                    cy={s.y} 
                                    r="8" 
                                    fill={hoveredRadarDomain===s.label?"#40BCA3":"transparent"}
                                    style={{cursor:'pointer'}}
                                    onMouseEnter={()=>setHoveredRadarDomain(s.label)}
                                    onMouseLeave={()=>setHoveredRadarDomain(null)}
                                  />
                                  <circle cx={s.x} cy={s.y} r="4" fill="#40BCA3"/>
                                  <text x={lx} y={ly} textAnchor="middle" fontSize="14" fill="#36454F" fontWeight="500">{s.label}</text>
                                  <text x={lx} y={ly+15} textAnchor="middle" fontSize="12" fill={s.score>=0?'#40BCA3':'#D7335D'}>{s.score>=0?'+':''}{s.score.toFixed(0)}%</text>
                                </g>);
                              })}
                            </>);
                          })()}
                          <circle cx="200" cy="200" r="3" fill="#36454F"/>
                        </svg>
                        {hoveredRadarDomain && (() => {
                          const filt = dashboardView==='all'?responses:responses.filter(r=>r.userId===selectedFirm);
                          const domainScore = filt.map(r=>ds(hoveredRadarDomain,r.metrics)).reduce((a,b)=>a+b,0)/filt.length;
                          const metrics = dom[hoveredRadarDomain].map(id => {
                            const vals = filt.map(r=>r.metrics[id]).filter(v=>v!==undefined);
                            const avg = vals.reduce((a,b)=>a+b,0)/vals.length;
                            return {id, name: m[id].name, value: avg, gap: gap(id, avg)};
                          });
                          return (
                            <div className="absolute bg-white border-2 border-slate-300 rounded-lg shadow-lg p-3 text-xs z-10" style={{top:'20px',right:'20px',minWidth:'220px'}}>
                              <div className="font-medium text-slate-700 mb-2">{hoveredRadarDomain}</div>
                              <div className="mb-2">
                                <span className="text-slate-600">Overall: </span>
                                <span className="font-medium" style={{color:domainScore>=0?'#40BCA3':'#D7335D'}}>
                                  {domainScore>=0?'+':''}{domainScore.toFixed(1)}%
                                </span>
                              </div>
                              <div className="border-t border-slate-200 pt-2 space-y-1">
                                {metrics.map(mt => (
                                  <div key={mt.id} className="flex justify-between text-xs">
                                    <span className="text-slate-600">{mt.id}:</span>
                                    <span style={{color:mt.gap>=0?'#40BCA3':'#D7335D'}}>
                                      {mt.gap>=0?'+':''}{mt.gap.toFixed(0)}%
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-6">
                      <h3 className="text-lg font-light mb-4" style={{color:'#36454F'}}>Distribution</h3>
                      {Object.keys(dom).map(d=>{
                        const all=responses.map(r=>ds(d,r.metrics)).sort((a,b)=>a-b);
                        const filt=dashboardView==='all'?responses:responses.filter(r=>r.userId===selectedFirm);
                        const curr=filt.map(r=>ds(d,r.metrics)).reduce((a,b)=>a+b,0)/filt.length;
                        const q1=all[Math.floor(all.length*0.25)];
                        const med=all[Math.floor(all.length*0.5)];
                        const q3=all[Math.floor(all.length*0.75)];
                        const min=all[0];
                        const max=all[all.length-1];
                        return(<div key={d} className="mb-4 relative" onMouseEnter={()=>setHoveredDomain(d)} onMouseLeave={()=>setHoveredDomain(null)}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-slate-700">{d}</span>
                            <span className="text-xs text-slate-500">{curr>=0?'+':''}{curr.toFixed(1)}%</span>
                          </div>
                          <div className="relative h-8 bg-white rounded cursor-pointer">
                            <div className="absolute top-0 bottom-0 bg-slate-200 rounded" style={{left:'40%',right:'40%'}}/>
                            <div className="absolute top-0 bottom-0 bg-slate-300" style={{left:`${40+(q1/100)*20}%`,width:`${((q3-q1)/100)*20}%`}}/>
                            <div className="absolute top-0 bottom-0 w-0.5 bg-slate-600" style={{left:`${50+(med/100)*50}%`}}/>
                            <div className="absolute top-0 bottom-0 w-1 bg-red-400 opacity-50" style={{left:'50%'}}/>
                            <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2" style={{left:`${50+(curr/100)*50}%`,backgroundColor:'#40BCA3',borderColor:'#36454F'}}/>
                          </div>
                          {hoveredDomain === d && (
                            <div className="absolute z-10 bg-white border-2 border-slate-300 rounded-lg shadow-lg p-3 text-xs" style={{top:'100%',left:'0',marginTop:'8px',minWidth:'200px'}}>
                              <div className="font-medium text-slate-700 mb-2">{d} Statistics</div>
                              <div className="space-y-1">
                                <div className="flex justify-between">
                                  <span className="text-slate-600">Your Score:</span>
                                  <span className="font-medium" style={{color:'#40BCA3'}}>{curr>=0?'+':''}{curr.toFixed(1)}%</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-slate-600">Median:</span>
                                  <span className="font-medium text-slate-700">{med>=0?'+':''}{med.toFixed(1)}%</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-slate-600">Q1 (25th):</span>
                                  <span className="text-slate-600">{q1>=0?'+':''}{q1.toFixed(1)}%</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-slate-600">Q3 (75th):</span>
                                  <span className="text-slate-600">{q3>=0?'+':''}{q3.toFixed(1)}%</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-slate-600">Min:</span>
                                  <span className="text-slate-600">{min>=0?'+':''}{min.toFixed(1)}%</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-slate-600">Max:</span>
                                  <span className="text-slate-600">{max>=0?'+':''}{max.toFixed(1)}%</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>);
                      })}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                    <h3 className="text-lg font-light mb-4" style={{color:'#36454F'}}>Domain Maturity vs Performance</h3>
                    <div className="relative">
                      <svg viewBox="0 0 400 300" style={{height:'300px'}}>
                        <rect x="50" y="30" width="300" height="220" fill="white" stroke="#e2e8f0"/>
                        <line x1="200" y1="30" x2="200" y2="250" stroke="#e2e8f0" strokeDasharray="4"/>
                        <line x1="50" y1="140" x2="350" y2="140" stroke="#e2e8f0" strokeDasharray="4"/>
                        
                        {/* Quadrant labels */}
                        <text x="125" y="80" fontSize="16" fill="#e2e8f0" fontWeight="300" textAnchor="middle">Fragile</text>
                        <text x="275" y="80" fontSize="16" fill="#e2e8f0" fontWeight="300" textAnchor="middle">Leading</text>
                        <text x="125" y="210" fontSize="16" fill="#e2e8f0" fontWeight="300" textAnchor="middle">Foundational</text>
                        <text x="275" y="210" fontSize="16" fill="#e2e8f0" fontWeight="300" textAnchor="middle">Under-utilised</text>
                        
                        <text x="190" y="275" fontSize="11" fill="#64748b" fontWeight="500">Maturity →</text>
                        <text x="25" y="145" fontSize="11" fill="#64748b" fontWeight="500" transform="rotate(-90 25 145)">Performance →</text>
                        {(() => {
                          const filt=dashboardView==='all'?responses:responses.filter(r=>r.userId===selectedFirm);
                          if(filt.length===0)return null;
                          const latest=filt[filt.length-1];
                          
                          // Define maturity and performance metrics for each domain
                          const maturityMetrics = {
                            People: ['P3'], // Staff per partner (leverage)
                            Process: ['Pr5'], // Automated workflows
                            Data: ['D3', 'D4', 'D5'], // Analytics, automation, single source
                            Technology: ['T1', 'T2', 'T3', 'T4', 'T5'] // All tech metrics
                          };
                          
                          const performanceMetrics = {
                            People: ['P1', 'P2', 'P4', 'P5'], // Turnover, revenue/employee, productivity, billable
                            Process: ['Pr1', 'Pr2', 'Pr3', 'Pr4'], // Profit margin, lock-up, turnaround, recovery
                            Data: ['D1', 'D2'], // Data rework, data for advisory
                            Technology: [] // Tech is pure enabler
                          };
                          
                          const cols={People:'#82735C',Process:'#5603AD',Data:'#6C8EAD',Technology:'#243E36'};
                          
                          return Object.keys(dom).map(domain => {
                            // Calculate maturity score
                            const matMetrics = maturityMetrics[domain];
                            const matScores = matMetrics.map(id => {
                              const v = latest.metrics[id];
                              return v !== undefined ? gap(id, v) : null;
                            }).filter(s => s !== null);
                            const matScore = matScores.length > 0 ? matScores.reduce((a,b) => a+b, 0) / matScores.length : 0;
                            
                            // Calculate performance score
                            const perfMetrics = performanceMetrics[domain];
                            const perfScores = perfMetrics.length > 0 ? perfMetrics.map(id => {
                              const v = latest.metrics[id];
                              return v !== undefined ? gap(id, v) : null;
                            }).filter(s => s !== null) : [];
                            const perfScore = perfScores.length > 0 ? perfScores.reduce((a,b) => a+b, 0) / perfScores.length : matScore;
                            
                            // Map to coordinates (maturity increases right, performance increases up)
                            const x = 50 + ((matScore + 100) / 200) * 300;
                            const y = 250 - ((perfScore + 100) / 200) * 220;
                            
                            return (<g key={domain}>
                              <circle 
                                cx={x} 
                                cy={y} 
                                r="12" 
                                fill="transparent"
                                style={{cursor:'pointer'}}
                                onMouseEnter={()=>setHoveredMetric(domain)}
                                onMouseLeave={()=>setHoveredMetric(null)}
                              />
                              <circle 
                                cx={x} 
                                cy={y} 
                                r="8" 
                                fill={cols[domain]} 
                                opacity={hoveredMetric===domain?"1":"0.8"}
                                stroke="white"
                                strokeWidth="2"
                              />
                              <text 
                                x={x} 
                                y={y-15} 
                                textAnchor="middle" 
                                fontSize="11" 
                                fill={cols[domain]}
                                fontWeight="600"
                              >
                                {domain}
                              </text>
                            </g>);
                          });
                        })()}
                      </svg>
                      {hoveredMetric && Object.keys(dom).includes(hoveredMetric) && (() => {
                        const filt=dashboardView==='all'?responses:responses.filter(r=>r.userId===selectedFirm);
                        if(filt.length===0)return null;
                        const latest=filt[filt.length-1];
                        const domain = hoveredMetric;
                        
                        const maturityMetrics = {
                          People: ['P3'],
                          Process: ['Pr5'],
                          Data: ['D3', 'D4', 'D5'],
                          Technology: ['T1', 'T2', 'T3', 'T4', 'T5']
                        };
                        
                        const performanceMetrics = {
                          People: ['P1', 'P2', 'P4', 'P5'],
                          Process: ['Pr1', 'Pr2', 'Pr3', 'Pr4'],
                          Data: ['D1', 'D2'],
                          Technology: []
                        };
                        
                        const matMetrics = maturityMetrics[domain];
                        const matScores = matMetrics.map(id => {
                          const v = latest.metrics[id];
                          return v !== undefined ? {id, gap: gap(id, v), name: m[id].name} : null;
                        }).filter(s => s !== null);
                        const matScore = matScores.length > 0 ? matScores.reduce((a,b) => a+b.gap, 0) / matScores.length : 0;
                        
                        const perfMetrics = performanceMetrics[domain];
                        const perfScores = perfMetrics.length > 0 ? perfMetrics.map(id => {
                          const v = latest.metrics[id];
                          return v !== undefined ? {id, gap: gap(id, v), name: m[id].name} : null;
                        }).filter(s => s !== null) : [];
                        const perfScore = perfScores.length > 0 ? perfScores.reduce((a,b) => a+b.gap, 0) / perfScores.length : matScore;
                        
                        // Determine quadrant
                        let quadrant = '';
                        if (perfScore >= 0 && matScore >= 0) quadrant = 'Leading';
                        else if (perfScore >= 0 && matScore < 0) quadrant = 'Fragile';
                        else if (perfScore < 0 && matScore >= 0) quadrant = 'Under-utilised';
                        else quadrant = 'Foundational';
                        
                        return (
                          <div className="absolute bg-white border-2 border-slate-300 rounded-lg shadow-lg p-3 text-xs z-10" style={{top:'20px',right:'20px',minWidth:'220px',maxWidth:'280px'}}>
                            <div className="font-medium text-slate-700 mb-1">{domain}</div>
                            <div className="text-xs mb-2 px-2 py-1 rounded inline-block" style={{backgroundColor:'#f1f5f9',color:'#64748b'}}>
                              {quadrant}
                            </div>
                            <div className="mb-2 pb-2 border-b border-slate-200">
                              <div className="flex justify-between mb-1">
                                <span className="text-slate-600">Maturity Score:</span>
                                <span className="font-medium" style={{color:matScore>=0?'#40BCA3':'#D7335D'}}>
                                  {matScore>=0?'+':''}{matScore.toFixed(1)}%
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-600">Performance Score:</span>
                                <span className="font-medium" style={{color:perfScore>=0?'#40BCA3':'#D7335D'}}>
                                  {perfScore>=0?'+':''}{perfScore.toFixed(1)}%
                                </span>
                              </div>
                            </div>
                            {matScores.length > 0 && (
                              <div className="mb-2">
                                <div className="text-slate-600 font-medium mb-1">Maturity Metrics:</div>
                                <div className="space-y-1">
                                  {matScores.map(mt => (
                                    <div key={mt.id} className="flex justify-between text-xs">
                                      <span className="text-slate-600">{mt.id}:</span>
                                      <span style={{color:mt.gap>=0?'#40BCA3':'#D7335D'}}>
                                        {mt.gap>=0?'+':''}{mt.gap.toFixed(0)}%
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                            {perfScores.length > 0 && (
                              <div>
                                <div className="text-slate-600 font-medium mb-1">Performance Metrics:</div>
                                <div className="space-y-1">
                                  {perfScores.map(mt => (
                                    <div key={mt.id} className="flex justify-between text-xs">
                                      <span className="text-slate-600">{mt.id}:</span>
                                      <span style={{color:mt.gap>=0?'#40BCA3':'#D7335D'}}>
                                        {mt.gap>=0?'+':''}{mt.gap.toFixed(0)}%
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })()}
                    </div>
                    <div className="flex gap-3 mt-4 text-xs justify-center">
                      <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full" style={{background:'#82735C'}}/><span>People</span></div>
                      <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full" style={{background:'#5603AD'}}/><span>Process</span></div>
                      <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full" style={{background:'#6C8EAD'}}/><span>Data</span></div>
                      <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full" style={{background:'#243E36'}}/><span>Tech</span></div>
                    </div>
                    <div className="mt-4 p-3 bg-slate-50 rounded text-xs text-slate-600">
                      <strong>Reading the chart:</strong> <span className="font-medium">Leading</span> (top-right) = high capability delivering results. <span className="font-medium">Fragile</span> (top-left) = delivers results despite low maturity (unsustainable). <span className="font-medium">Under-utilised</span> (bottom-right) = capability exists but is underused. <span className="font-medium">Foundational</span> (bottom-left) = needs investment in both.
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                    <h3 className="text-lg font-light mb-4" style={{color:'#36454F'}}>Heatmap</h3>
                    <div className="overflow-auto relative" style={{maxHeight:'300px'}}>
                      <table className="w-full text-xs">
                        <thead><tr className="border-b">
                          <th className="text-left p-2 sticky top-0 bg-white" style={{color:'#36454F'}}>Firm</th>
                          {Object.keys(m).map(id=><th key={id} className="text-center p-1 sticky top-0 bg-white" style={{color:'#36454F'}}>{id}</th>)}
                        </tr></thead>
                        <tbody>
                          {responses.slice(-5).map(r=>(
                            <tr key={r.id} className="border-b">
                              <td className="p-2 font-medium text-xs sticky left-0 bg-white">{r.userId}</td>
                              {Object.keys(m).map(id=>{
                                const v=r.metrics[id];
                                if(v===undefined)return <td key={id} className="p-1 text-center bg-slate-50">-</td>;
                                const g=gap(id,v);
                                const int=Math.min(Math.abs(g)/50,1);
                                const col=g>=0?`rgba(64,188,163,${int})`:`rgba(215,51,93,${int})`;
                                const hoverKey = id+'_'+r.id;
                                return (
                                  <td 
                                    key={id} 
                                    className="p-1 text-center font-medium relative cursor-pointer" 
                                    style={{backgroundColor:col,color:int>0.5?'white':'#36454F'}}
                                    onMouseEnter={()=>setHoveredMetric(hoverKey)}
                                    onMouseLeave={()=>setHoveredMetric(null)}
                                  >
                                    {g>=0?'+':''}{g.toFixed(0)}%
                                    {hoveredMetric === hoverKey && (
                                      <div className="absolute z-20 bg-white border-2 border-slate-300 rounded-lg shadow-lg p-3 text-xs" style={{top:'100%',left:'50%',transform:'translateX(-50%)',marginTop:'4px',minWidth:'180px',whiteSpace:'nowrap'}}>
                                        <div className="font-medium text-slate-700 mb-1">{m[id].name}</div>
                                        <div className="space-y-1">
                                          <div className="flex justify-between gap-3">
                                            <span className="text-slate-600">Firm:</span>
                                            <span className="font-medium">{r.userId}</span>
                                          </div>
                                          <div className="flex justify-between gap-3">
                                            <span className="text-slate-600">Value:</span>
                                            <span className="font-medium">{fv(id, v)}</span>
                                          </div>
                                          <div className="flex justify-between gap-3">
                                            <span className="text-slate-600">Target:</span>
                                            <span className="text-slate-600">{fb(id)}</span>
                                          </div>
                                          <div className="flex justify-between gap-3">
                                            <span className="text-slate-600">Gap:</span>
                                            <span className="font-medium" style={{color:g>=0?'#40BCA3':'#D7335D'}}>
                                              {g>=0?'+':''}{g.toFixed(1)}%
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </td>
                                );
                              })}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Render the component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(BenchmarkTool));

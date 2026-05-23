// halo-aurora/mobile/screens.jsx
// Native-mobile screen designs for the Halo Aurora theme.
// Each screen is sized to fit inside IOSDevice (402x874) or AndroidDevice (412x892).
//
// Exports on window: HSplash, HDashboard, HOptionsChain, HTradeFlow, HMovers, HLearn, HHaloPalette
//                   HBottomBar (tab bar shared across screens), HIcon (icon set)

const PAL_DARK = {
  bg: '#06070f',
  bgElev: '#0a0c1e',
  surface: '#0e1124',
  surface2: '#161a32',
  border: 'rgba(255,255,255,0.07)',
  borderStrong: 'rgba(255,255,255,0.15)',
  borderAccent: 'rgba(124,106,247,0.35)',
  fg1: '#f0f1f8',
  fg2: '#9ea3c0',
  fg3: '#585d7e',
  accent1: '#7c6af7',
  accent2: '#5b8af5',
  grad: 'linear-gradient(135deg, #7c6af7 0%, #5b8af5 100%)',
  gradH: 'linear-gradient(90deg, #7c6af7 0%, #5b8af5 100%)',
  gain: '#34d399',
  loss: '#f87171',
  glow: '0 12px 36px rgba(124,106,247,0.4)',
};

const FONT = "'DM Sans', system-ui, sans-serif";
const SERIF = "'DM Serif Display', Georgia, serif";
const MONO = "'JetBrains Mono', ui-monospace, monospace";
const TAMIL = "'Noto Sans Tamil', 'DM Sans', sans-serif";

// ── Icons (small, line, 1.5px) ───────────────────────────────
const HIcon = ({ name, size = 18, color = 'currentColor', sw = 1.6 }) => {
  const p = { fill: 'none', stroke: color, strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    activity:    <polyline {...p} points="22 12 18 12 15 21 9 3 6 12 2 12" />,
    layers:      <g {...p}><path d="M12 2L2 7l10 5 10-5-10-5z"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></g>,
    radar:       <g {...p}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><line x1="12" y1="12" x2="20" y2="6"/></g>,
    eye:         <g {...p}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></g>,
    trending:    <g {...p}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></g>,
    compass:     <g {...p}><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></g>,
    sparkles:    <g {...p}><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/><path d="M19 13l.7 2.1 2.1.7-2.1.7L19 18.6l-.7-2.1-2.1-.7 2.1-.7L19 13z"/></g>,
    arrow:       <g {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></g>,
    arrowUp:     <g {...p}><polyline points="6 14 12 8 18 14"/></g>,
    arrowDown:   <g {...p}><polyline points="6 10 12 16 18 10"/></g>,
    bell:        <g {...p}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></g>,
    settings:    <g {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></g>,
    search:      <g {...p}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></g>,
    play:        <polygon {...p} points="5 3 19 12 5 21 5 3"/>,
    book:        <g {...p}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></g>,
    grid:        <g {...p}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></g>,
    chevron:     <polyline {...p} points="9 18 15 12 9 6"/>,
    user:        <g {...p}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></g>,
    portfolio:   <g {...p}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></g>,
    bolt:        <polygon {...p} points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24">{paths[name] || paths.arrow}</svg>;
};

// ── Sparkline ────────────────────────────────────────────────
const Spark = ({ data, color = '#34d399', w = 200, h = 40, fill = true, sw = 1.6 }) => {
  const stepX = w / (data.length - 1);
  const pts = data.map((v, i) => [i * stepX, h - v * (h - 4) - 2]);
  const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
  const fillD = `${d} L${w} ${h} L0 ${h} Z`;
  const gid = `sg-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ display: 'block' }}>
      {fill && (
        <>
          <defs>
            <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.25" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={fillD} fill={`url(#${gid})`} />
        </>
      )}
      <path d={d} fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const SPARK_UP = [0.40,0.45,0.50,0.55,0.52,0.58,0.62,0.59,0.65,0.68,0.64,0.70,0.74,0.78,0.82,0.85,0.83,0.88,0.92,0.95];
const SPARK_DN = [0.85,0.82,0.78,0.80,0.75,0.72,0.68,0.65,0.62,0.55,0.50,0.45,0.42,0.38,0.30,0.25,0.28,0.22,0.18,0.15];

// ── Halo background (used in splash + dashboard top) ─────────
const HHaloBg = ({ height = 240 }) => (
  <div aria-hidden style={{
    position: 'absolute', inset: 0, height,
    background:
      'radial-gradient(60% 60% at 20% 0%, rgba(124,106,247,0.30) 0%, rgba(124,106,247,0) 60%),' +
      'radial-gradient(50% 60% at 80% 10%, rgba(91,138,245,0.24) 0%, rgba(91,138,245,0) 60%)',
    pointerEvents: 'none',
  }} />
);

// ── Shared bottom tab bar ────────────────────────────────────
const HBottomBar = ({ active = 'home', os = 'ios' }) => {
  const c = PAL_DARK;
  const tabs = [
    { id: 'home',  icon: 'grid',       label: 'Overview' },
    { id: 'flow',  icon: 'activity',   label: 'Flow' },
    { id: 'opt',   icon: 'layers',     label: 'Options' },
    { id: 'learn', icon: 'book',       label: 'Learn' },
    { id: 'me',    icon: 'user',       label: 'Account' },
  ];
  return (
    <div style={{
      position: 'absolute', left: 12, right: 12, bottom: os === 'ios' ? 18 : 32,
      background: 'rgba(14, 17, 36, 0.78)',
      backdropFilter: 'blur(18px)',
      WebkitBackdropFilter: 'blur(18px)',
      border: `1px solid ${c.border}`,
      borderRadius: 22,
      padding: '8px 6px',
      display: 'flex', justifyContent: 'space-around', alignItems: 'center',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
    }}>
      {tabs.map(t => {
        const on = t.id === active;
        return (
          <button key={t.id} style={{
            background: 'transparent', border: 'none', cursor: 'pointer',
            padding: '6px 10px', borderRadius: 14, minWidth: 44,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            color: on ? c.fg1 : c.fg3,
          }}>
            {on ? (
              <span style={{
                width: 36, height: 30, borderRadius: 10, background: c.grad,
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                boxShadow: c.glow,
              }}><HIcon name={t.icon} size={16} color="#fff" /></span>
            ) : (
              <HIcon name={t.icon} size={20} color={c.fg3} />
            )}
            <span style={{ fontFamily: FONT, fontSize: 9.5, fontWeight: on ? 600 : 500, letterSpacing: '0.04em' }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
};

// ============================================================
// 1. SPLASH
// ============================================================
const HSplash = ({ os = 'ios' }) => {
  const c = PAL_DARK;
  return (
    <div style={{ position: 'relative', height: '100%', background: c.bg, overflow: 'hidden', fontFamily: FONT }}>
      {/* big radial halo */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background:
          'radial-gradient(50% 40% at 50% 35%, rgba(124,106,247,0.55) 0%, rgba(124,106,247,0) 65%),' +
          'radial-gradient(40% 30% at 50% 70%, rgba(91,138,245,0.30) 0%, rgba(91,138,245,0) 60%)',
      }} />
      {/* grid */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(${c.border} 1px, transparent 1px), linear-gradient(90deg, ${c.border} 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(60% 50% at 50% 35%, black 0%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(60% 50% at 50% 35%, black 0%, transparent 75%)',
        opacity: 0.5,
      }} />

      <div style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', padding: '0 32px',
        textAlign: 'center', zIndex: 2,
      }}>
        {/* logo */}
        <div style={{
          width: 88, height: 88, borderRadius: 22, background: c.grad,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 20px 60px rgba(124,106,247,0.5)',
        }}>
          <svg width="46" height="46" viewBox="0 0 40 40">
            <path d="M10 12h9M14.5 12v15M21 12h9M21 21h9M30 12l-9 9" stroke="#0a0c18" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            <polyline points="21 20 24 16.5 27 18.5 30 13.5" stroke="#ffffff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 style={{ marginTop: 28, fontFamily: SERIF, fontSize: 56, lineHeight: 1, color: c.fg1, fontWeight: 400, letterSpacing: '-0.03em' }}>
          Trade<span style={{ fontStyle: 'italic' }}>Zen.</span>
        </h1>
        <p style={{ marginTop: 14, fontFamily: SERIF, fontStyle: 'italic', fontSize: 17, color: c.fg2, maxWidth: 280, lineHeight: 1.4 }}>
          Markets move. Stay still.
        </p>
      </div>

      {/* CTA fixed at bottom */}
      <div style={{ position: 'absolute', bottom: os === 'ios' ? 60 : 64, left: 24, right: 24, zIndex: 3, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <button style={{
          background: c.grad, color: '#fff', border: 'none', padding: '15px 18px',
          borderRadius: 14, fontFamily: FONT, fontSize: 15, fontWeight: 600,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          boxShadow: c.glow, cursor: 'pointer',
        }}>
          Open dashboard <HIcon name="arrow" size={16} color="#fff" />
        </button>
        <button style={{
          background: 'transparent', color: c.fg1, border: `1px solid ${c.borderStrong}`,
          padding: '13px 18px', borderRadius: 14, fontFamily: FONT, fontSize: 14, fontWeight: 500,
          cursor: 'pointer',
        }}>
          I have an account
        </button>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginTop: 8, fontFamily: MONO, fontSize: 10, color: c.fg3, letterSpacing: '0.16em' }}>
          <span>EN</span><span style={{ opacity: 0.4 }}> · </span><span style={{ fontFamily: TAMIL }}>தமிழ்</span>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// 2. DASHBOARD (Overview)
// ============================================================
const HDashboard = ({ os = 'ios' }) => {
  const c = PAL_DARK;
  return (
    <div style={{ position: 'relative', height: '100%', background: c.bg, overflow: 'hidden', fontFamily: FONT, color: c.fg1 }}>
      <HHaloBg height={300} />

      <div style={{ position: 'relative', padding: '12px 20px 110px', overflowY: 'auto', height: '100%' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
          <div>
            <div style={{ fontFamily: MONO, fontSize: 10.5, color: c.fg3, letterSpacing: '0.16em' }}>FRI · 22 MAY · 14:32</div>
            <h2 style={{ fontFamily: SERIF, fontSize: 28, color: c.fg1, lineHeight: 1.1, margin: '4px 0 0', fontWeight: 400, letterSpacing: '-0.02em' }}>
              Good <span style={{ fontStyle: 'italic' }}>afternoon</span>, Karthik
            </h2>
          </div>
          <button style={{
            width: 38, height: 38, borderRadius: 999, border: `1px solid ${c.border}`,
            background: c.surface, color: c.fg2, position: 'relative',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <HIcon name="bell" size={17} color={c.fg2} />
            <span style={{ position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderRadius: '50%', background: c.accent1, boxShadow: '0 0 0 2px ' + c.surface }} />
          </button>
        </div>

        {/* NIFTY hero card */}
        <div style={{
          background: c.surface, border: `1px solid ${c.borderAccent}`, borderRadius: 18,
          padding: 18, position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 80% at 0% 100%, rgba(124,106,247,0.18), transparent 70%)' }} />
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontFamily: MONO, fontSize: 10.5, color: c.fg3, letterSpacing: '0.16em' }}>NIFTY 50 · SPOT</div>
              <div style={{ fontFamily: MONO, fontSize: 38, color: c.fg1, fontWeight: 700, letterSpacing: '-0.02em', marginTop: 6, fontVariantNumeric: 'tabular-nums' }}>
                22,847.40
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
                <span style={{ fontFamily: MONO, fontSize: 11.5, fontWeight: 700, padding: '3px 8px', borderRadius: 5, background: 'rgba(52,211,153,0.15)', color: c.gain }}>
                  ▲ +315.20 · +1.40%
                </span>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', marginTop: 14 }}>
            <Spark data={SPARK_UP} color={c.gain} w={320} h={56} sw={1.7} />
          </div>
        </div>

        {/* Two-up secondary cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 10 }}>
          {[
            { l: 'BANKNIFTY', v: '48,440', d: '+0.92%', col: c.gain, spark: SPARK_UP },
            { l: 'INDIA VIX', v: '13.42',  d: '−2.10%', col: c.loss, spark: SPARK_DN },
          ].map(x => (
            <div key={x.l} style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: 14, padding: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontFamily: MONO, fontSize: 9.5, color: c.fg3, letterSpacing: '0.14em' }}>{x.l}</span>
                <span style={{ fontFamily: MONO, fontSize: 10.5, color: x.col, fontWeight: 700 }}>{x.d}</span>
              </div>
              <div style={{ fontFamily: MONO, fontSize: 18, color: c.fg1, fontWeight: 700, marginTop: 4, fontVariantNumeric: 'tabular-nums' }}>{x.v}</div>
              <div style={{ marginTop: 4 }}>
                <Spark data={x.spark} color={x.col} w={150} h={26} sw={1.4} />
              </div>
            </div>
          ))}
        </div>

        {/* AI insight card */}
        <div style={{
          marginTop: 14, background: 'rgba(124,106,247,0.06)',
          border: `1px solid ${c.borderAccent}`, borderRadius: 16, padding: 14,
          display: 'flex', gap: 12,
        }}>
          <div style={{
            width: 34, height: 34, borderRadius: 10, background: c.grad,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, boxShadow: '0 6px 16px rgba(124,106,247,0.4)',
          }}>
            <HIcon name="sparkles" size={16} color="#fff" />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: FONT, fontSize: 12.5, fontWeight: 700, color: c.fg1 }}>Zen Assistant</span>
              <span style={{ fontFamily: MONO, fontSize: 9.5, color: c.fg3, letterSpacing: '0.14em' }}>● LIVE</span>
            </div>
            <p style={{ margin: '6px 0 0', fontFamily: FONT, fontSize: 13, color: c.fg1, lineHeight: 1.5 }}>
              Holding above pivot. Watching <span style={{ fontFamily: MONO, color: c.accent1, fontWeight: 700 }}>22,866</span> — a clean break opens 22,975.
            </p>
            <div style={{ display: 'flex', gap: 8, marginTop: 10, fontFamily: MONO, fontSize: 10.5 }}>
              <span style={{ padding: '3px 8px', borderRadius: 4, background: 'rgba(52,211,153,0.15)', color: c.gain, fontWeight: 700 }}>BULLISH</span>
              <span style={{ padding: '3px 8px', borderRadius: 4, background: c.surface, color: c.fg2 }}>78% conviction</span>
              <span style={{ padding: '3px 8px', borderRadius: 4, background: c.surface, color: c.fg2 }}>R:R 1:2.4</span>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div style={{ marginTop: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h3 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: c.fg1, margin: 0, letterSpacing: '-0.01em' }}>Quick actions</h3>
          <span style={{ fontFamily: MONO, fontSize: 10, color: c.fg3, letterSpacing: '0.14em' }}>6 TOOLS</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 12 }}>
          {[
            ['activity', 'Trade Flow', 'CPR · ORB live'],
            ['layers',   'Options',    'Chain · Greeks'],
            ['radar',    'F&O Scanner','Live dominance'],
            ['trending', 'Movers',     'Top 10 daily'],
          ].map(([icon, title, sub]) => (
            <a key={title} style={{
              textDecoration: 'none', color: c.fg1,
              background: c.surface, border: `1px solid ${c.border}`,
              borderRadius: 14, padding: 14, display: 'flex', flexDirection: 'column', gap: 10,
            }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(124,106,247,0.1)', border: `1px solid ${c.borderAccent}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.accent1 }}>
                <HIcon name={icon} size={17} color={c.accent1} />
              </div>
              <div>
                <div style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: c.fg1, letterSpacing: '-0.01em' }}>{title}</div>
                <div style={{ fontFamily: MONO, fontSize: 10.5, color: c.fg3, marginTop: 2, letterSpacing: '0.06em' }}>{sub}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <HBottomBar active="home" os={os} />
    </div>
  );
};

// ============================================================
// 3. OPTIONS CHAIN
// ============================================================
const HOptionsChain = ({ os = 'ios' }) => {
  const c = PAL_DARK;
  const rows = [
    ['142.4K','0.62','105.10','22700','78.40','-0.32','88.1K', false],
    ['98.2K', '0.54','78.20', '22750','52.40','-0.38','98.1K', false],
    ['76.5K', '0.46','55.40', '22800','74.85','-0.46','120.6K',true],
    ['54.1K', '0.38','38.20', '22850','101.30','-0.54','156.8K',false],
    ['38.4K', '0.30','25.60', '22900','134.20','-0.62','192.0K',false],
  ];
  return (
    <div style={{ height: '100%', background: c.bg, overflow: 'hidden', fontFamily: FONT, color: c.fg1, display: 'flex', flexDirection: 'column' }}>
      {/* sub-header */}
      <div style={{ padding: '12px 20px 14px', borderBottom: `1px solid ${c.border}`, background: c.surface }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontFamily: MONO, fontSize: 10.5, color: c.fg3, letterSpacing: '0.16em' }}>NIFTY · 29 MAY · WEEKLY</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 4 }}>
              <span style={{ fontFamily: MONO, fontSize: 22, color: c.fg1, fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>22,847.40</span>
              <span style={{ fontFamily: MONO, fontSize: 12, color: c.gain, fontWeight: 700 }}>+1.40%</span>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: MONO, fontSize: 10, color: c.fg3, letterSpacing: '0.14em' }}>MAX PAIN</div>
            <div style={{ fontFamily: MONO, fontSize: 16, color: c.accent1, fontWeight: 700, marginTop: 2 }}>22,800</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6, marginTop: 12 }}>
          {['29 May', '5 Jun', '12 Jun', '26 Jun'].map((d, i) => (
            <span key={d} style={{
              padding: '6px 12px', borderRadius: 999, fontFamily: MONO, fontSize: 11, fontWeight: 600,
              background: i === 0 ? c.grad : c.surface2, color: i === 0 ? '#fff' : c.fg2,
              border: i === 0 ? 'none' : `1px solid ${c.border}`,
              boxShadow: i === 0 ? '0 6px 14px rgba(124,106,247,0.35)' : 'none',
            }}>{d}</span>
          ))}
        </div>
      </div>

      {/* Chain table */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 0 110px' }}>
        <div style={{
          padding: '8px 16px', background: c.bg, position: 'sticky', top: 0, zIndex: 2,
          borderBottom: `1px solid ${c.border}`,
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 56px 1fr 1fr 1fr',
          gap: 6, fontFamily: MONO, fontSize: 9, color: c.fg3, letterSpacing: '0.12em',
        }}>
          <div style={{ textAlign: 'right' }}>OI</div>
          <div style={{ textAlign: 'right' }}>Δ</div>
          <div style={{ textAlign: 'right' }}>LTP</div>
          <div style={{ textAlign: 'center' }}>STRIKE</div>
          <div style={{ textAlign: 'right' }}>LTP</div>
          <div style={{ textAlign: 'right' }}>Δ</div>
          <div style={{ textAlign: 'right' }}>OI</div>
        </div>
        <div style={{ padding: '0 16px', position: 'sticky', top: 26, background: c.bg, zIndex: 1, borderBottom: `1px solid ${c.border}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontFamily: MONO, fontSize: 10.5, color: c.fg2, letterSpacing: '0.1em' }}>
            <span style={{ color: c.gain }}>● CE · Calls</span>
            <span style={{ color: c.loss }}>Puts · PE ●</span>
          </div>
        </div>

        {rows.map((r, i) => {
          const atm = r[7];
          return (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 56px 1fr 1fr 1fr',
              gap: 6, padding: '12px 16px',
              background: atm ? 'rgba(124,106,247,0.08)' : 'transparent',
              borderBottom: `1px solid ${c.border}`,
              fontFamily: MONO, fontSize: 12, fontVariantNumeric: 'tabular-nums',
            }}>
              <div style={{ textAlign: 'right', color: c.fg2 }}>{r[0]}</div>
              <div style={{ textAlign: 'right', color: c.fg3 }}>{r[1]}</div>
              <div style={{ textAlign: 'right', color: c.gain, fontWeight: 600 }}>{r[2]}</div>
              <div style={{ textAlign: 'center', color: atm ? c.accent1 : c.fg1, fontWeight: 700 }}>{r[3]}</div>
              <div style={{ textAlign: 'right', color: c.loss, fontWeight: 600 }}>{r[4]}</div>
              <div style={{ textAlign: 'right', color: c.fg3 }}>{r[5]}</div>
              <div style={{ textAlign: 'right', color: c.fg2 }}>{r[6]}</div>
            </div>
          );
        })}

        {/* Greeks summary card */}
        <div style={{ margin: '14px 16px 0', background: c.surface, border: `1px solid ${c.border}`, borderRadius: 14, padding: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
            <span style={{ fontFamily: FONT, fontSize: 13, fontWeight: 700, color: c.fg1 }}>22800 CE · Greeks</span>
            <span style={{ fontFamily: MONO, fontSize: 10, color: c.accent1, letterSpacing: '0.14em' }}>RECOMMENDED</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
            {[['Delta','0.46'],['Gamma','0.012'],['Theta','-8.40'],['Vega','12.20']].map(([k,v]) => (
              <div key={k} style={{ background: c.surface2, borderRadius: 8, padding: '8px 10px' }}>
                <div style={{ fontFamily: MONO, fontSize: 9, color: c.fg3, letterSpacing: '0.14em' }}>{k.toUpperCase()}</div>
                <div style={{ fontFamily: MONO, fontSize: 13, color: c.fg1, fontWeight: 700, marginTop: 2 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <HBottomBar active="opt" os={os} />
    </div>
  );
};

// ============================================================
// 4. TRADE FLOW (CPR + scenarios)
// ============================================================
const HTradeFlow = ({ os = 'ios' }) => {
  const c = PAL_DARK;
  return (
    <div style={{ height: '100%', background: c.bg, overflow: 'hidden', fontFamily: FONT, color: c.fg1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 20px 110px' }}>

        {/* Timeframe pills */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
          {['Daily', 'Weekly', 'Monthly'].map((t, i) => (
            <button key={t} style={{
              padding: '8px 14px', borderRadius: 999, border: 'none', cursor: 'pointer',
              fontFamily: FONT, fontSize: 12.5, fontWeight: 600,
              background: i === 0 ? c.grad : c.surface, color: i === 0 ? '#fff' : c.fg2,
              boxShadow: i === 0 ? '0 6px 14px rgba(124,106,247,0.35)' : 'none',
              border: i === 0 ? 'none' : `1px solid ${c.border}`,
            }}>{t}</button>
          ))}
        </div>

        {/* Scenario card */}
        <div style={{
          background: c.surface, border: `1px solid ${c.borderAccent}`, borderRadius: 18,
          padding: 18, position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 80% at 0% 100%, rgba(52,211,153,0.12), transparent 70%)' }} />
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontFamily: MONO, fontSize: 10.5, color: c.fg3, letterSpacing: '0.16em' }}>SCENARIO · DAILY</div>
              <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 26, color: c.fg1, marginTop: 6, letterSpacing: '-0.02em' }}>
                Bull above pivot
              </div>
            </div>
            <span style={{ fontFamily: MONO, fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 6, background: 'rgba(52,211,153,0.15)', color: c.gain }}>
              ● ACTIVE
            </span>
          </div>

          {/* CPR canvas */}
          <div style={{ position: 'relative', height: 160, marginTop: 14 }}>
            <Spark data={[0.50,0.52,0.48,0.55,0.58,0.54,0.60,0.62,0.59,0.55,0.50,0.45,0.42,0.48,0.52,0.55,0.50,0.58,0.62,0.66,0.64,0.68,0.70,0.66,0.72,0.74,0.70,0.76,0.72,0.78,0.75,0.80]} color={c.accent1} w={320} h={160} sw={2} />
            {[
              [16, 'R1 22,921', c.fg2, false],
              [38, 'TC 22,867', c.accent1, false],
              [52, 'P 22,834', c.accent2, true],
              [68, 'BC 22,802', c.accent1, false],
              [90, 'S1 22,748', c.fg2, false],
            ].map(([y, label, col, bold]) => (
              <div key={label} style={{
                position: 'absolute', left: 0, right: 0, top: `${y}%`,
                borderTop: `1px ${bold ? 'solid' : 'dashed'} ${col}`, opacity: bold ? 0.75 : 0.4,
              }}>
                <span style={{
                  position: 'absolute', right: 0, top: -8,
                  fontFamily: MONO, fontSize: 9.5, color: col,
                  background: c.surface, padding: '1px 5px', borderRadius: 3,
                  fontWeight: bold ? 700 : 500,
                }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Signal stack */}
        <div style={{ marginTop: 18 }}>
          <h3 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: c.fg1, margin: 0, letterSpacing: '-0.01em' }}>Live signals</h3>
          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { time: '14:32', kind: 'ORB BREAK', desc: 'Above 22,866 with volume', tone: c.gain, icon: 'arrowUp' },
              { time: '14:21', kind: 'CPR HOLD',  desc: 'Defended pivot 22,834',    tone: c.accent1, icon: 'compass' },
              { time: '13:58', kind: 'EMA CROSS', desc: 'EMA20 > EMA50 · 5-min',     tone: c.gain, icon: 'trending' },
              { time: '13:42', kind: 'RSI 14',    desc: 'Crossed 60 · neutral+',     tone: c.fg2, icon: 'activity' },
            ].map(s => (
              <div key={s.time} style={{
                background: c.surface, border: `1px solid ${c.border}`, borderRadius: 12,
                padding: 12, display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10, background: 'rgba(124,106,247,0.08)',
                  border: `1px solid ${c.border}`, color: s.tone,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <HIcon name={s.icon} size={16} color={s.tone} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ fontFamily: MONO, fontSize: 10.5, color: s.tone, fontWeight: 700, letterSpacing: '0.12em' }}>{s.kind}</span>
                    <span style={{ fontFamily: MONO, fontSize: 10, color: c.fg3 }}>{s.time}</span>
                  </div>
                  <div style={{ fontFamily: FONT, fontSize: 13, color: c.fg1, marginTop: 2 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk/Reward */}
        <div style={{ marginTop: 18, background: c.surface, border: `1px solid ${c.border}`, borderRadius: 14, padding: 14 }}>
          <div style={{ fontFamily: MONO, fontSize: 10, color: c.fg3, letterSpacing: '0.16em' }}>SUGGESTED TRADE</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 6 }}>
            <span style={{ fontFamily: FONT, fontSize: 16, fontWeight: 700, color: c.fg1 }}>22850 CE · 50 lots</span>
            <span style={{ fontFamily: MONO, fontSize: 12, color: c.accent1, fontWeight: 700 }}>R:R 1 : 2.4</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginTop: 12 }}>
            {[['Entry','₹105'],['Stop','₹62'],['Target','₹148']].map(([k,v]) => (
              <div key={k} style={{ background: c.surface2, borderRadius: 8, padding: '8px 10px' }}>
                <div style={{ fontFamily: MONO, fontSize: 9, color: c.fg3, letterSpacing: '0.14em' }}>{k.toUpperCase()}</div>
                <div style={{ fontFamily: MONO, fontSize: 14, color: c.fg1, fontWeight: 700, marginTop: 2 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <HBottomBar active="flow" os={os} />
    </div>
  );
};

// ============================================================
// 5. MOVERS
// ============================================================
const HMovers = ({ os = 'ios' }) => {
  const c = PAL_DARK;
  const tabs = ['Nifty 50', 'F&O', 'IT', 'Midcap'];
  const rows = [
    { sym: 'RELIANCE', name: 'Reliance Inds.', ltp: '2,864.20', chg: '+3.42%',  up: true,  spark: SPARK_UP },
    { sym: 'HDFCBANK', name: 'HDFC Bank',      ltp: '1,584.10', chg: '+2.18%',  up: true,  spark: SPARK_UP },
    { sym: 'TCS',      name: 'Tata Cons. Svc', ltp: '3,792.40', chg: '+1.87%',  up: true,  spark: SPARK_UP },
    { sym: 'INFY',     name: 'Infosys',        ltp: '1,428.60', chg: '+1.12%',  up: true,  spark: SPARK_UP },
    { sym: 'TATAMOT',  name: 'Tata Motors',    ltp: '942.30',   chg: '−1.84%',  up: false, spark: SPARK_DN },
    { sym: 'WIPRO',    name: 'Wipro',          ltp: '468.20',   chg: '−2.10%',  up: false, spark: SPARK_DN },
  ];
  return (
    <div style={{ height: '100%', background: c.bg, overflow: 'hidden', fontFamily: FONT, color: c.fg1, display: 'flex', flexDirection: 'column' }}>
      {/* Search */}
      <div style={{ padding: '12px 20px 4px' }}>
        <div style={{
          background: c.surface, border: `1px solid ${c.border}`, borderRadius: 12,
          padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <HIcon name="search" size={16} color={c.fg3} />
          <span style={{ fontFamily: FONT, fontSize: 14, color: c.fg3 }}>Search stocks…</span>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ padding: '12px 20px 0', display: 'flex', gap: 6, overflowX: 'auto', borderBottom: `1px solid ${c.border}` }}>
        {tabs.map((t, i) => (
          <button key={t} style={{
            padding: '10px 4px', background: 'transparent', border: 'none',
            fontFamily: FONT, fontSize: 13.5, fontWeight: i === 0 ? 700 : 500,
            color: i === 0 ? c.fg1 : c.fg3, position: 'relative', marginRight: 12,
            borderBottom: i === 0 ? `2px solid ${c.accent1}` : '2px solid transparent',
            cursor: 'pointer', whiteSpace: 'nowrap',
          }}>{t}</button>
        ))}
      </div>

      {/* Section header */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 20px 110px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
          <span style={{ fontFamily: MONO, fontSize: 10, color: c.gain, letterSpacing: '0.16em', fontWeight: 700 }}>▲ TOP GAINERS · 10</span>
          <span style={{ fontFamily: MONO, fontSize: 10, color: c.fg3, letterSpacing: '0.14em' }}>22 MAY · 14:32</span>
        </div>

        {rows.filter(r => r.up).map(r => (
          <div key={r.sym} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '12px 0', borderBottom: `1px solid ${c.border}`,
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10, background: c.surface2,
              border: `1px solid ${c.border}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: MONO, fontSize: 11, color: c.fg2, fontWeight: 700, flexShrink: 0,
            }}>{r.sym.slice(0,2)}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: MONO, fontSize: 12, fontWeight: 700, color: c.fg1, letterSpacing: '0.04em' }}>{r.sym}</div>
              <div style={{ fontFamily: FONT, fontSize: 11.5, color: c.fg3, marginTop: 1 }}>{r.name}</div>
            </div>
            <div style={{ flexShrink: 0 }}>
              <Spark data={r.spark} color={r.up ? c.gain : c.loss} w={50} h={28} fill={false} sw={1.4} />
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0, minWidth: 76 }}>
              <div style={{ fontFamily: MONO, fontSize: 13, color: c.fg1, fontWeight: 600 }}>{r.ltp}</div>
              <div style={{ fontFamily: MONO, fontSize: 10.5, color: r.up ? c.gain : c.loss, fontWeight: 700, marginTop: 1 }}>{r.chg}</div>
            </div>
          </div>
        ))}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', margin: '22px 0 8px' }}>
          <span style={{ fontFamily: MONO, fontSize: 10, color: c.loss, letterSpacing: '0.16em', fontWeight: 700 }}>▼ TOP LOSERS · 10</span>
        </div>
        {rows.filter(r => !r.up).map(r => (
          <div key={r.sym} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '12px 0', borderBottom: `1px solid ${c.border}`,
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10, background: c.surface2,
              border: `1px solid ${c.border}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: MONO, fontSize: 11, color: c.fg2, fontWeight: 700, flexShrink: 0,
            }}>{r.sym.slice(0,2)}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: MONO, fontSize: 12, fontWeight: 700, color: c.fg1, letterSpacing: '0.04em' }}>{r.sym}</div>
              <div style={{ fontFamily: FONT, fontSize: 11.5, color: c.fg3, marginTop: 1 }}>{r.name}</div>
            </div>
            <div style={{ flexShrink: 0 }}>
              <Spark data={r.spark} color={c.loss} w={50} h={28} fill={false} sw={1.4} />
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0, minWidth: 76 }}>
              <div style={{ fontFamily: MONO, fontSize: 13, color: c.fg1, fontWeight: 600 }}>{r.ltp}</div>
              <div style={{ fontFamily: MONO, fontSize: 10.5, color: c.loss, fontWeight: 700, marginTop: 1 }}>{r.chg}</div>
            </div>
          </div>
        ))}
      </div>

      <HBottomBar active="home" os={os} />
    </div>
  );
};

// ============================================================
// 6. LEARN
// ============================================================
const HLearn = ({ os = 'ios' }) => {
  const c = PAL_DARK;
  return (
    <div style={{ height: '100%', background: c.bg, overflow: 'hidden', fontFamily: FONT, color: c.fg1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 20px 110px' }}>

        {/* lang pill */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
          <h2 style={{ fontFamily: SERIF, fontSize: 30, color: c.fg1, lineHeight: 1.05, margin: 0, fontWeight: 400, letterSpacing: '-0.02em' }}>
            Master the<br /><span style={{ fontStyle: 'italic',
              background: 'linear-gradient(90deg, #7c6af7, #5b8af5)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>markets.</span>
          </h2>
          <div style={{
            display: 'inline-flex', background: c.surface, border: `1px solid ${c.border}`,
            borderRadius: 999, padding: 3, fontFamily: FONT, fontSize: 11.5, fontWeight: 600,
          }}>
            <span style={{ padding: '5px 12px', borderRadius: 999, background: c.grad, color: '#fff', boxShadow: '0 6px 14px rgba(124,106,247,0.35)' }}>EN</span>
            <span style={{ padding: '5px 12px', borderRadius: 999, color: c.fg3, fontFamily: TAMIL }}>தமிழ்</span>
          </div>
        </div>

        {/* Featured course */}
        <a style={{
          textDecoration: 'none', color: c.fg1, display: 'block',
          background: c.surface, border: `1px solid ${c.borderAccent}`,
          borderRadius: 18, padding: 18, position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(60% 80% at 100% 0%, rgba(124,106,247,0.14), transparent 60%)' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', background: c.grad, borderRadius: 999, fontFamily: FONT, fontSize: 10.5, fontWeight: 700, color: '#fff' }}>
                EN · English
              </span>
              <HIcon name="play" size={16} color={c.fg3} />
            </div>
            <h3 style={{ fontFamily: SERIF, fontSize: 22, color: c.fg1, lineHeight: 1.15, fontWeight: 400, letterSpacing: '-0.02em', margin: '14px 0 8px' }}>
              Reading the market <span style={{ fontStyle: 'italic' }}>without a chart</span>
            </h3>
            <p style={{ fontFamily: FONT, fontSize: 13, color: c.fg2, lineHeight: 1.55, margin: 0 }}>
              Price action, ORB structure, when to step away. 28 lessons taught with NSE-first examples.
            </p>
            {/* Progress */}
            <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ flex: 1, height: 4, background: c.surface2, borderRadius: 999, overflow: 'hidden' }}>
                <div style={{ width: '32%', height: '100%', background: c.grad }} />
              </div>
              <span style={{ fontFamily: MONO, fontSize: 10.5, color: c.fg2 }}>9 / 28</span>
            </div>
          </div>
        </a>

        {/* Recent lessons */}
        <h3 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: c.fg1, margin: '22px 0 12px', letterSpacing: '-0.01em' }}>Continue learning</h3>
        {[
          { n: 'L 09', title: 'How CPR responds to gap-up opens', dur: '12 min', tag: 'EN' },
          { n: 'L 10', title: 'ஆப்ஷன்ஸ் கிரீக்ஸ் — டெல்டா & கேமா', dur: '18 நிமிடம்', tag: 'தமிழ்', ta: true },
          { n: 'L 11', title: 'Reading the option chain at 9:31', dur: '14 min', tag: 'EN' },
          { n: 'L 12', title: 'When EMA and RSI disagree', dur: '9 min', tag: 'EN' },
        ].map((l, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '12px 0', borderBottom: `1px solid ${c.border}`,
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12, background: c.surface,
              border: `1px solid ${c.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: MONO, fontSize: 11, color: c.accent1, fontWeight: 700, letterSpacing: '0.08em', flexShrink: 0,
            }}>{l.n}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: l.ta ? TAMIL : FONT, fontSize: 14, color: c.fg1, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.3 }}>{l.title}</div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 4 }}>
                <span style={{ fontFamily: l.ta ? TAMIL : MONO, fontSize: 10.5, color: c.fg3, letterSpacing: l.ta ? 0 : '0.1em' }}>{l.tag}</span>
                <span style={{ width: 3, height: 3, borderRadius: 999, background: c.fg3 }} />
                <span style={{ fontFamily: l.ta ? TAMIL : MONO, fontSize: 10.5, color: c.fg3 }}>{l.dur}</span>
              </div>
            </div>
            <HIcon name="chevron" size={16} color={c.fg3} />
          </div>
        ))}
      </div>

      <HBottomBar active="learn" os={os} />
    </div>
  );
};

// ============================================================
// PALETTE — quick reference card visible on the design canvas
// ============================================================
const HHaloPalette = () => {
  const c = PAL_DARK;
  const swatches = [
    ['Accent Purple', c.accent1, 'var(--tz-accent-1)'],
    ['Accent Blue', c.accent2, 'var(--tz-accent-2)'],
    ['BG Page', c.bg, 'var(--tz-bg)'],
    ['Surface', c.surface, 'var(--tz-surface)'],
    ['Surface 2', c.surface2, 'var(--tz-surface-2)'],
    ['FG Primary', c.fg1, 'var(--tz-fg-1)'],
    ['FG Secondary', c.fg2, 'var(--tz-fg-2)'],
    ['FG Tertiary', c.fg3, 'var(--tz-fg-3)'],
    ['Gain', c.gain, 'var(--tz-gain)'],
    ['Loss', c.loss, 'var(--tz-loss)'],
  ];
  return (
    <div style={{ width: 460, height: 880, background: c.bg, padding: 24, fontFamily: FONT, color: c.fg1, borderRadius: 18, border: `1px solid ${c.border}` }}>
      <div style={{ fontFamily: MONO, fontSize: 10, color: c.fg3, letterSpacing: '0.16em' }}>HALO AURORA · TOKEN REFERENCE</div>
      <h2 style={{ fontFamily: SERIF, fontSize: 36, margin: '6px 0 24px', fontWeight: 400, letterSpacing: '-0.03em' }}>
        Palette <span style={{ fontStyle: 'italic', color: c.fg3 }}>· dark</span>
      </h2>
      {swatches.map(([name, hex, varname]) => (
        <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '10px 0', borderTop: `1px solid ${c.border}` }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: hex, border: `1px solid ${c.border}` }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONT, fontSize: 13, fontWeight: 600 }}>{name}</div>
            <div style={{ fontFamily: MONO, fontSize: 10.5, color: c.fg3, marginTop: 2 }}>{hex}</div>
          </div>
          <span style={{ fontFamily: MONO, fontSize: 10.5, color: c.fg2 }}>{varname}</span>
        </div>
      ))}
      <div style={{ marginTop: 28, paddingTop: 16, borderTop: `1px solid ${c.border}` }}>
        <div style={{ fontFamily: MONO, fontSize: 10, color: c.fg3, letterSpacing: '0.16em', marginBottom: 12 }}>TYPE</div>
        <div style={{ fontFamily: SERIF, fontSize: 42, lineHeight: 1, marginBottom: 4 }}>Trade<span style={{ fontStyle: 'italic' }}>Zen</span></div>
        <div style={{ fontFamily: MONO, fontSize: 11, color: c.fg3, letterSpacing: '0.14em', marginBottom: 14 }}>DM SERIF DISPLAY · 42</div>
        <div style={{ fontFamily: FONT, fontSize: 16, marginBottom: 4 }}>The quick brown fox jumps</div>
        <div style={{ fontFamily: MONO, fontSize: 11, color: c.fg3, letterSpacing: '0.14em', marginBottom: 14 }}>DM SANS · 16</div>
        <div style={{ fontFamily: MONO, fontSize: 22, fontWeight: 600, fontVariantNumeric: 'tabular-nums', marginBottom: 4 }}>22,847.40</div>
        <div style={{ fontFamily: MONO, fontSize: 11, color: c.fg3, letterSpacing: '0.14em' }}>JETBRAINS MONO · 22</div>
      </div>
    </div>
  );
};

Object.assign(window, {
  HSplash, HDashboard, HOptionsChain, HTradeFlow, HMovers, HLearn,
  HHaloPalette, HBottomBar, HIcon,
});

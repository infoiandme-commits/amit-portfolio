'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

export default function AmitPortfolio() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const animFrameRef = useRef(null);
  const [activeSkill, setActiveSkill] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const [step, setStep] = useState(1);
  const [displayedCode, setDisplayedCode] = useState('');
  const [navOpen, setNavOpen] = useState(false);
  const [formData, setFormData] = useState({ business: '', name: '', mobile: '' });

  const submitProject = async () => {
  try {
    const response = await fetch("https://formspree.io/f/XXXXXXXX", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service: activeService?.name,
        business: formData.business,
        name: formData.name,
        mobile: formData.mobile,
      }),
    });

    if (response.ok) {
      setStep(3);
    } else {
      alert("Failed to submit form");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};

  
  const [glitchActive, setGlitchActive] = useState(false);

  const fullCode = `// Initializing Neural Interface...
const amit = new Developer({
  stack: ['WordPress','React','Shopify'],
  location: 'Pune, India',
  mode: 'FREELANCE_ACTIVE'
});

amit.buildWebsite({
  performance: 'ULTRA',
  seo: 'OPTIMIZED',
  design: 'FUTURISTIC'
});

// Status: DEPLOYED ✓
`;

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setDisplayedCode(fullCode.slice(0, i));
      i++;
      if (i > fullCode.length) clearInterval(t);
    }, 35);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 4000);
    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.r = Math.random() * 1.5 + 0.3;
        this.life = Math.random();
        this.hue = Math.random() > 0.5 ? 270 : 190;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          this.vx -= (dx / dist) * 0.04;
          this.vy -= (dy / dist) * 0.04;
        }
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${0.4 + this.life * 0.4})`;
        ctx.fill();
      }
    }

    particlesRef.current = Array.from({ length: 160 }, () => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach(p => { p.update(); p.draw(); });

      particlesRef.current.forEach((a, i) => {
        particlesRef.current.slice(i + 1).forEach(b => {
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(160,100,255,${(1 - d / 90) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    const onMouse = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener('mousemove', onMouse);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  const projects = [
    { title: 'Deep India', tech: 'WordPress • NGO', url: 'https://deepindia.org', color: '#a855f7', icon: '🌐' },
    { title: 'Ayurhitam', tech: 'WooCommerce Store', url: 'https://www.ayurhitam.com', color: '#06b6d4', icon: '🛒' },
    { title: 'Yira.ai', tech: 'HealthTech Platform', url: 'https://yira.ai', color: '#ec4899', icon: '🧬' },
    { title: 'Shree 1 Gram Gold', tech: 'Ecommerce Website', url: 'https://shree1gramgoldjewellery.shop', color: '#f59e0b', icon: '💎' },
    { title: 'Ash Accessories', tech: 'Shopify Store', url: 'https://ashaccessories.in', color: '#10b981', icon: '👗' },
    { title: 'Ocimum Dentistry', tech: 'Premium Dental Clinic', url: 'https://ocimumdental.in', color: '#3b82f6', icon: '🦷' },
  ];

  const skills = [
    { name: 'WordPress', icon: '⚡', level: 95, color: '#a855f7', desc: 'Fast, SEO-friendly and scalable business websites with easy management.' },
    { name: 'Shopify', icon: '🛍️', level: 90, color: '#06b6d4', desc: 'Premium ecommerce experience with smooth checkout and secure selling.' },
    { name: 'React.js', icon: '⚛️', level: 85, color: '#61dafb', desc: 'Interactive frontend experiences with fast performance and smooth animations.' },
    { name: 'HTML/CSS', icon: '🎨', level: 95, color: '#ec4899', desc: 'Responsive layouts and visually attractive website interfaces.' },
    { name: 'JavaScript', icon: '⚙️', level: 88, color: '#f59e0b', desc: 'Modern animations, interactions and dynamic website functionality.' },
    { name: 'WooCommerce', icon: '🏪', level: 88, color: '#a855f7', desc: 'Powerful ecommerce stores with flexible customization support.' },
    { name: 'SEO', icon: '📈', level: 92, color: '#10b981', desc: 'Google ranking, visibility and organic traffic for websites.' },
    { name: 'Webflow', icon: '🌊', level: 80, color: '#06b6d4', desc: 'Premium websites with modern UI and advanced animations.' },
    { name: 'Figma', icon: '🖌️', level: 85, color: '#ec4899', desc: 'Modern UI/UX design systems and prototypes.' },
    { name: 'Hosting & SSL', icon: '🔒', level: 90, color: '#3b82f6', desc: 'Secure hosting and SSL improve website trust, speed and security.' },
  ];

  const services = [
    { name: 'WordPress Development', icon: '⚡', desc: 'Custom WordPress sites built for speed, SEO & conversion.' },
    { name: 'Shopify Store Setup', icon: '🛍️', desc: 'End-to-end Shopify stores with payments, inventory & design.' },
    { name: 'Landing Page Design', icon: '🚀', desc: 'High-converting landing pages that capture leads & sales.' },
    { name: 'Website Speed Optimization', icon: '⚡', desc: 'Core Web Vitals tuning for blazing fast performance scores.' },
  ];

  return (
    <div style={{ background: '#020008', color: '#fff', minHeight: '100vh', fontFamily: "'Space Grotesk', 'Segoe UI', sans-serif", overflowX: 'hidden', position: 'relative' }}>

      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Orbitron:wght@400;700;900&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #020008; }
        ::-webkit-scrollbar-thumb { background: #7c3aed; border-radius: 2px; }

        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(124,58,237,0.4); }
          50% { box-shadow: 0 0 40px rgba(124,58,237,0.8), 0 0 80px rgba(124,58,237,0.3); }
        }
        @keyframes border-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes text-flicker {
          0%, 100% { opacity: 1; }
          92% { opacity: 1; }
          93% { opacity: 0.2; }
          94% { opacity: 1; }
          96% { opacity: 0.5; }
          97% { opacity: 1; }
        }
        @keyframes slide-in-right {
          from { transform: translateX(60px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes holo-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes grid-move {
          0% { transform: perspective(500px) rotateX(30deg) translateY(0); }
          100% { transform: perspective(500px) rotateX(30deg) translateY(60px); }
        }
        .nav-link {
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          transition: all 0.3s;
          position: relative;
          padding-bottom: 4px;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: linear-gradient(90deg, #7c3aed, #06b6d4);
          transition: width 0.3s;
        }
        .nav-link:hover { color: #fff; }
        .nav-link:hover::after { width: 100%; }
        .project-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: pointer;
          text-decoration: none;
          display: block;
          color: inherit;
        }
        .project-card:hover {
          transform: translateY(-10px) scale(1.01);
          border-color: rgba(124,58,237,0.4);
          box-shadow: 0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(124,58,237,0.15);
        }
        .skill-btn {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 18px 16px;
          cursor: pointer;
          transition: all 0.3s;
          text-align: left;
          color: #fff;
          width: 100%;
        }
        .skill-btn:hover {
          background: rgba(124,58,237,0.1);
          border-color: rgba(124,58,237,0.4);
          transform: translateY(-3px);
        }
        .btn-primary {
          background: linear-gradient(135deg, #7c3aed, #06b6d4);
          border: none;
          color: #fff;
          padding: 14px 32px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s;
          animation: glow-pulse 2s infinite;
        }
        .btn-primary:hover { transform: scale(1.05); }
        .btn-outline {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          padding: 14px 32px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .btn-outline:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.4); }
        .glass-card {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
        }
        .holo-text {
          background: linear-gradient(90deg, #a855f7, #06b6d4, #ec4899, #a855f7);
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: holo-shimmer 4s linear infinite;
        }
        .service-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          padding: 28px;
          cursor: pointer;
          transition: all 0.4s;
          text-align: left;
          color: #fff;
          width: 100%;
        }
        .service-card:hover {
          background: rgba(124,58,237,0.08);
          border-color: rgba(124,58,237,0.4);
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(124,58,237,0.15);
        }
        input[type="text"], input[type="tel"] {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 14px 18px;
          color: #fff;
          font-size: 14px;
          outline: none;
          transition: border-color 0.3s;
          margin-bottom: 14px;
          font-family: 'Space Grotesk', sans-serif;
        }
        input[type="text"]:focus, input[type="tel"]:focus {
          border-color: rgba(124,58,237,0.6);
        }
        input::placeholder { color: rgba(255,255,255,0.3); }
        @media (max-width: 768px) {
          .hero-title { font-size: 42px !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .code-section-grid { grid-template-columns: 1fr !important; }
          .nav-desktop { display: none !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      {/* Particle Canvas */}
      <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.7 }} />

      {/* Scanline effect */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)', animation: 'scanline 8s linear infinite', opacity: 0.5 }} />
      </div>

      {/* Grid Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', opacity: 0.8 }} />

      {/* Ambient Glows */}
      <div style={{ position: 'fixed', top: '-20%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', bottom: '-20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 2 }}>

        {/* NAVBAR */}
        <header style={{ position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(2,0,8,0.85)', backdropFilter: 'blur(20px)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '700', fontFamily: 'Orbitron, sans-serif', animation: 'glow-pulse 2s infinite' }}>A</div>
              <span style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: '700', fontSize: '18px', animation: glitchActive ? 'text-flicker 0.2s steps(1)' : 'none', letterSpacing: '2px' }}>AMIT<span style={{ color: '#7c3aed' }}>.</span></span>
            </div>

            <nav className="nav-desktop" style={{ display: 'flex', gap: '36px' }}>
              {['About', 'Projects', 'Services', 'Contact'].map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
              ))}
            </nav>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', display: 'none' }} className="status-text">AVAILABLE</span>
              <button className="btn-primary" style={{ padding: '10px 22px', fontSize: '12px' }}>HIRE ME</button>
              <button onClick={() => setNavOpen(!navOpen)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '22px', display: 'none' }} className="hamburger">☰</button>
            </div>

          </div>
        </header>

        {/* HERO */}
        <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 24px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
            <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

              <div style={{ animation: 'slide-up 0.8s ease forwards' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                  <div style={{ height: '1px', width: '40px', background: 'linear-gradient(90deg, #7c3aed, transparent)' }} />
                  <span style={{ fontSize: '11px', letterSpacing: '4px', color: '#7c3aed', textTransform: 'uppercase', fontFamily: 'Orbitron, sans-serif' }}>Freelance Web Developer</span>
                </div>

                <h1 className="hero-title" style={{ fontSize: '68px', fontWeight: '700', lineHeight: '1.05', marginBottom: '24px', fontFamily: 'Orbitron, sans-serif' }}>
                  Building
                  <br />
                  <span className="holo-text">Digital</span>
                  <br />
                  Universes
                </h1>

                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '16px', lineHeight: '1.8', maxWidth: '500px', marginBottom: '36px' }}>
                  WordPress & Frontend Developer from <span style={{ color: '#7c3aed' }}>Pune</span> crafting modern, responsive and SEO-optimized digital experiences for brands, ecommerce, NGOs and international clients.
                </p>

                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <button className="btn-primary">View Projects →</button>
                  <button className="btn-outline">Download Resume</button>
                </div>

                <div style={{ marginTop: '48px', display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                  {[['50+', 'Projects Done'], ['3+', 'Years Exp'], ['100%', 'Client Satisfaction']].map(([num, label]) => (
                    <div key={label}>
                      <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '28px', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>{num}</div>
                      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '2px', textTransform: 'uppercase' }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero Visual */}
              <div style={{ display: 'flex', justifyContent: 'center', animation: 'float 4s ease-in-out infinite' }}>
                <div style={{ position: 'relative', width: '380px', height: '380px' }}>

                  {/* Rotating rings */}
                  <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid rgba(124,58,237,0.3)', animation: 'border-spin 12s linear infinite' }} />
                  <div style={{ position: 'absolute', inset: '20px', borderRadius: '50%', border: '1px dashed rgba(6,182,212,0.2)', animation: 'border-spin 8s linear infinite reverse' }} />
                  <div style={{ position: 'absolute', inset: '40px', borderRadius: '50%', border: '1px solid rgba(236,72,153,0.15)', animation: 'border-spin 16s linear infinite' }} />

                  {/* Center orb */}
                  <div style={{ position: 'absolute', inset: '60px', borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%, rgba(124,58,237,0.6), rgba(6,182,212,0.3) 60%, transparent)', boxShadow: '0 0 60px rgba(124,58,237,0.4), inset 0 0 40px rgba(124,58,237,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '48px', fontWeight: '900', background: 'linear-gradient(135deg, #fff, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AP</span>
                  </div>

                  {/* Orbiting dots */}
                  {['#a855f7', '#06b6d4', '#ec4899', '#f59e0b'].map((c, i) => (
                    <div key={i} style={{ position: 'absolute', width: '12px', height: '12px', borderRadius: '50%', background: c, boxShadow: `0 0 12px ${c}`, top: '50%', left: '50%', transformOrigin: `${140 + i * 8}px 0`, animation: `border-spin ${6 + i * 2}s linear infinite`, marginTop: '-6px', marginLeft: '-6px' }} />
                  ))}

                  {/* Floating tech badges */}
                  {[
                    { label: 'WordPress', x: '-60px', y: '60px', c: '#a855f7' },
                    { label: 'Shopify', x: '330px', y: '80px', c: '#06b6d4' },
                    { label: 'React', x: '300px', y: '260px', c: '#61dafb' },
                    { label: 'SEO', x: '-40px', y: '280px', c: '#10b981' },
                  ].map(({ label, x, y, c }) => (
                    <div key={label} style={{ position: 'absolute', left: x, top: y, background: 'rgba(2,0,8,0.9)', border: `1px solid ${c}44`, borderRadius: '8px', padding: '6px 12px', fontSize: '11px', color: c, fontWeight: '600', letterSpacing: '1px', boxShadow: `0 0 16px ${c}22`, backdropFilter: 'blur(10px)' }}>
                      {label}
                    </div>
                  ))}

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" style={{ padding: '100px 24px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

            <div style={{ textAlign: 'center', marginBottom: '70px' }}>
              <span style={{ fontSize: '11px', letterSpacing: '4px', color: '#7c3aed', textTransform: 'uppercase', fontFamily: 'Orbitron, sans-serif' }}>// About Me</span>
              <h2 style={{ fontSize: '48px', fontWeight: '700', marginTop: '16px', fontFamily: 'Orbitron, sans-serif' }}>Who I Am</h2>
            </div>

            <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

              <div>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '17px', lineHeight: '1.9', marginBottom: '24px' }}>
                  I'm <span style={{ color: '#fff', fontWeight: '600' }}>Amit Patil</span>, a web developer focused on WordPress, Shopify and frontend development. I craft responsive, fast-loading and visually engaging websites that drive real business results.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', lineHeight: '1.9', marginBottom: '36px' }}>
                  My portfolio spans NGO websites, ecommerce stores, healthcare platforms, educational sites and international client projects — each built with precision and passion.
                </p>
                <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                  {[['50+', 'Projects', '#7c3aed'], ['3+', 'Years', '#06b6d4'], ['15+', 'Happy Clients', '#ec4899']].map(([n, l, c]) => (
                    <div key={l} className="glass-card" style={{ padding: '20px', textAlign: 'center', borderColor: `${c}22` }}>
                      <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '26px', fontWeight: '700', color: c, marginBottom: '6px' }}>{n}</div>
                      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '1px', textTransform: 'uppercase' }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Grid */}
              <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                {skills.map(skill => (
                  <button key={skill.name} className="skill-btn" onClick={() => setActiveSkill(skill)}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <span style={{ fontSize: '20px' }}>{skill.icon}</span>
                      <span style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.5px' }}>{skill.name}</span>
                    </div>
                    <div style={{ height: '3px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${skill.level}%`, background: `linear-gradient(90deg, ${skill.color}, transparent)`, borderRadius: '2px', transition: 'width 1s ease' }} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{ padding: '100px 24px', background: 'rgba(255,255,255,0.01)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

            <div style={{ marginBottom: '60px' }}>
              <span style={{ fontSize: '11px', letterSpacing: '4px', color: '#06b6d4', textTransform: 'uppercase', fontFamily: 'Orbitron, sans-serif' }}>// Featured Work</span>
              <h2 style={{ fontSize: '48px', fontWeight: '700', marginTop: '16px', fontFamily: 'Orbitron, sans-serif' }}>Selected Projects</h2>
            </div>

            <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {projects.map(p => (
                <a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer" className="project-card">
                  <div style={{ padding: '32px 28px' }}>
                    <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: `${p.color}18`, border: `1px solid ${p.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '20px' }}>
                      {p.icon}
                    </div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>{p.tech}</div>
                    <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '20px', lineHeight: '1.3' }}>{p.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: p.color, fontSize: '13px', fontWeight: '500' }}>
                      <span>Visit Website</span>
                      <span>→</span>
                    </div>
                    <div style={{ marginTop: '20px', height: '1px', background: `linear-gradient(90deg, ${p.color}44, transparent)` }} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" style={{ padding: '100px 24px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span style={{ fontSize: '11px', letterSpacing: '4px', color: '#ec4899', textTransform: 'uppercase', fontFamily: 'Orbitron, sans-serif' }}>// Services</span>
              <h2 style={{ fontSize: '48px', fontWeight: '700', marginTop: '16px', fontFamily: 'Orbitron, sans-serif' }}>What I Do</h2>
            </div>

            <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {services.map(svc => (
                <button key={svc.name} className="service-card" onClick={() => { setActiveService(svc); setStep(1); }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{ fontSize: '28px', flexShrink: 0 }}>{svc.icon}</div>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>{svc.name}</h3>
                      <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', lineHeight: '1.6' }}>{svc.desc}</p>
                    </div>
                    <div style={{ marginLeft: 'auto', color: 'rgba(124,58,237,0.6)', flexShrink: 0, fontSize: '20px' }}>→</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CODE ANIMATION */}
        <section style={{ padding: '100px 24px', background: 'rgba(255,255,255,0.01)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="code-section-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

              <div>
                <span style={{ fontSize: '11px', letterSpacing: '4px', color: '#7c3aed', textTransform: 'uppercase', fontFamily: 'Orbitron, sans-serif' }}>// Dev Process</span>
                <h2 style={{ fontSize: '44px', fontWeight: '700', marginTop: '16px', marginBottom: '20px', fontFamily: 'Orbitron, sans-serif', lineHeight: '1.1' }}>
                  Code That
                  <span className="holo-text"> Comes Alive</span>
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', lineHeight: '1.8' }}>
                  Every project is built with clean code, smooth animations, modern interactions and visually engaging UI design.
                </p>
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', inset: '-1px', background: 'linear-gradient(135deg, #7c3aed44, #06b6d444, #ec4899 22)', borderRadius: '25px', zIndex: 0 }} />
                <div style={{ position: 'relative', background: '#0a0015', borderRadius: '24px', overflow: 'hidden', zIndex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                    {['#ff5f57', '#ffbd2e', '#28c840'].map(c => <div key={c} style={{ width: '12px', height: '12px', borderRadius: '50%', background: c }} />)}
                    <span style={{ marginLeft: '10px', fontSize: '12px', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>amit.jsx</span>
                    <div style={{ marginLeft: 'auto', display: 'flex', gap: '4px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981', animation: 'glow-pulse 1.5s infinite' }} />
                      <span style={{ fontSize: '10px', color: '#10b981', letterSpacing: '1px' }}>LIVE</span>
                    </div>
                  </div>
                  <div style={{ padding: '24px', height: '320px', overflow: 'hidden' }}>
                    <pre style={{ fontSize: '13px', lineHeight: '1.8', color: '#a78bfa', fontFamily: '"Fira Code", monospace', whiteSpace: 'pre-wrap' }}>
                      {displayedCode.split('\n').map((line, i) => (
                        <div key={i}>
                          {line.startsWith('//') ? <span style={{ color: '#475569' }}>{line}</span>
                            : line.includes('new ') || line.includes('const ') ? <span><span style={{ color: '#7c3aed' }}>{line.includes('const ') ? 'const ' : ''}</span><span style={{ color: '#e2e8f0' }}>{line.replace('const ', '')}</span></span>
                            : line.includes(':') ? <span><span style={{ color: '#94a3b8' }}>{line.split(':')[0]}</span><span style={{ color: '#475569' }}>:</span><span style={{ color: '#06b6d4' }}>{line.split(':').slice(1).join(':')}</span></span>
                            : <span style={{ color: '#cbd5e1' }}>{line}</span>}
                        </div>
                      ))}
                      <span style={{ display: 'inline-block', width: '2px', height: '16px', background: '#7c3aed', animation: 'glow-pulse 0.8s infinite', verticalAlign: 'middle' }} />
                    </pre>
                  </div>
                  {displayedCode.length === fullCode.length && (
                    <div style={{ margin: '0 24px 20px', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '10px 16px', fontSize: '12px', color: '#10b981', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', animation: 'glow-pulse 1s infinite' }} />
                      DEPLOYED SUCCESSFULLY ✓
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" style={{ padding: '100px 24px 120px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ position: 'relative', padding: '80px 60px', borderRadius: '32px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(124,58,237,0.2)', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
              <span style={{ fontSize: '11px', letterSpacing: '4px', color: '#7c3aed', textTransform: 'uppercase', fontFamily: 'Orbitron, sans-serif' }}>// Let's Work Together</span>
              <h2 style={{ fontSize: '52px', fontWeight: '700', margin: '20px 0 16px', fontFamily: 'Orbitron, sans-serif', lineHeight: '1.1' }}>Have a Project?</h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', lineHeight: '1.8', marginBottom: '40px' }}>
                Available for freelance projects and website collaborations. Let's build something amazing together.
              </p>
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="btn-primary">Contact Me →</button>
                <button className="btn-outline">💬 WhatsApp</button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '30px 24px', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '12px', letterSpacing: '2px', fontFamily: 'Orbitron, sans-serif' }}>
            © 2025 AMIT PATIL — BUILT WITH ⚡ IN PUNE
          </p>
        </footer>

      </div>

      {/* SKILL SIDEBAR */}
      <div style={{ position: 'fixed', top: 0, right: 0, height: '100vh', width: '420px', background: '#06000f', borderLeft: '1px solid rgba(124,58,237,0.2)', zIndex: 999, transform: activeSkill ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.5s cubic-bezier(0.23,1,0.32,1)', overflowY: 'auto' }}>
        {activeSkill && (
          <div style={{ padding: '50px 36px' }}>
            <button onClick={() => setActiveSkill(null)} style={{ position: 'absolute', top: '24px', right: '24px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', width: '40px', height: '40px', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>{activeSkill.icon}</div>
            <span style={{ fontSize: '10px', letterSpacing: '3px', color: activeSkill.color, textTransform: 'uppercase', fontFamily: 'Orbitron, sans-serif' }}>Technology</span>
            <h3 style={{ fontSize: '42px', fontWeight: '700', margin: '12px 0 20px', fontFamily: 'Orbitron, sans-serif' }}>{activeSkill.name}</h3>
            <div style={{ height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,0.06)', marginBottom: '8px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${activeSkill.level}%`, background: `linear-gradient(90deg, ${activeSkill.color}, transparent)`, borderRadius: '2px' }} />
            </div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginBottom: '28px', textAlign: 'right' }}>Proficiency: {activeSkill.level}%</div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: '1.8' }}>{activeSkill.desc}</p>
          </div>
        )}
      </div>
      {activeSkill && <div onClick={() => setActiveSkill(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 998, backdropFilter: 'blur(4px)' }} />}

      {/* SERVICE MODAL */}
      {activeService && (
        <div onClick={() => setActiveService(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 999, backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
          <div onClick={e => e.stopPropagation()} style={{ background: '#06000f', border: '1px solid rgba(124,58,237,0.3)', borderRadius: '28px', padding: '48px', width: '100%', maxWidth: '480px', position: 'relative', animation: 'slide-up 0.3s ease' }}>
            <button onClick={() => setActiveService(null)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', width: '36px', height: '36px', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', fontSize: '18px' }}>×</button>

            {step === 1 && (
              <div>
                <span style={{ fontSize: '10px', letterSpacing: '3px', color: '#7c3aed', textTransform: 'uppercase', fontFamily: 'Orbitron, sans-serif' }}>Start Project</span>
                <h3 style={{ fontSize: '28px', fontWeight: '700', margin: '12px 0 28px', fontFamily: 'Orbitron, sans-serif' }}>{activeService.name}</h3>
                <input type="text" placeholder="Business Name" value={formData.business} onChange={e => setFormData({ ...formData, business: e.target.value })} />
                <button className="btn-primary" style={{ width: '100%', marginTop: '8px' }} onClick={() => setStep(2)}>Next →</button>
              </div>
            )}
            {step === 2 && (
              <div>
                <span style={{ fontSize: '10px', letterSpacing: '3px', color: '#7c3aed', textTransform: 'uppercase', fontFamily: 'Orbitron, sans-serif' }}>Your Details</span>
                <h3 style={{ fontSize: '28px', fontWeight: '700', margin: '12px 0 28px', fontFamily: 'Orbitron, sans-serif' }}>Almost There</h3>
                <input type="text" placeholder="Your Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                <input type="tel" placeholder="Mobile Number" value={formData.mobile} onChange={e => setFormData({ ...formData, mobile: e.target.value })} />
                <button className="btn-primary" style={{ width: '100%', marginTop: '8px' }} onClick={submitProject}>Submit 🚀</button>
              </div>
            )}
            {step === 3 && (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ fontSize: '72px', marginBottom: '20px', animation: 'float 2s ease-in-out infinite' }}>🚀</div>
                <h3 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '12px', fontFamily: 'Orbitron, sans-serif' }}>Thank You!</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '1.8', marginBottom: '28px' }}>Project request received. I'll get back to you shortly.</p>
                <button className="btn-primary" onClick={() => { setActiveService(null); setStep(1); setFormData({ business: '', name: '', mobile: '' }); }}>Close</button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

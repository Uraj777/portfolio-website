import { useEffect, useState } from 'react';
import { ArrowDown, Github, Mail, Sparkles, FileText } from 'lucide-react';

const roles = ['Python & FastAPI Developer', 'Java & Spring Boot Developer', 'Full-Stack Engineer', 'DevOps & CI/CD Builder'];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    let timeout;
    if (!deleting && typed.length < current.length) {
      timeout = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 70);
    } else if (!deleting && typed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && typed.length > 0) {
      timeout = setTimeout(() => setTyped(current.slice(0, typed.length - 1)), 40);
    } else if (deleting && typed.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [typed, deleting, idx]);

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="grid-overlay" />
      </div>

      <div className="container hero-inner">
        <div className="hero-badge reveal">
          <Sparkles size={14} />
          <span>available for opportunities</span>
        </div>

        <h1 className="hero-title reveal">
          Hey, I'm <span className="hero-name">Utkarsh</span>
        </h1>

        <p className="hero-roles reveal">
          <span className="hero-roles-prefix">I build things as a </span>
          <span className="hero-typed">{typed}</span>
          <span className="hero-cursor">_</span>
        </p>

        <p className="hero-desc reveal">
          A B.Tech student passionate about crafting playful, functional software —
          from typing games to mentorship platforms and cosmic encyclopedias.
          I love turning ideas into shipped products.
        </p>

        <div className="hero-cta reveal">
          <a className="btn btn-primary" href="https://github.com/cser-utkarsh-raj" target="_blank" rel="noopener noreferrer">
            <Github size={18} /> See my work
          </a>
          <a className="btn btn-ghost" href="/Utkarsh_Raj_Resume.pdf" download="Utkarsh_Raj_Resume.pdf">
            <FileText size={18} /> Download Resume
          </a>
        </div>

        <div className="hero-scroll reveal" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
          <span>scroll</span>
          <ArrowDown size={16} />
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding-top: 72px;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.32;
          animation: floatSlow 9s ease-in-out infinite;
        }
        .blob-1 {
          width: 460px; height: 460px;
          background: #a3e635;
          top: -120px; right: -80px;
        }
        .blob-2 {
          width: 380px; height: 380px;
          background: #fb7185;
          bottom: -100px; left: -60px;
          animation-delay: 2s;
          animation-duration: 11s;
        }
        .blob-3 {
          width: 320px; height: 320px;
          background: #38bdf8;
          top: 40%; left: 45%;
          animation-delay: 1s;
          animation-duration: 13s;
          opacity: 0.22;
        }
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-top: 40px;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          border: 1px solid var(--border);
          background: rgba(163, 230, 53, 0.06);
          border-radius: 999px;
          font-family: var(--font-mono);
          font-size: 12.5px;
          color: var(--primary);
          margin-bottom: 28px;
        }

        .hero-title {
          font-size: clamp(2.6rem, 8vw, 5.5rem);
          font-weight: 800;
          line-height: 1.02;
          margin-bottom: 18px;
        }
        .hero-name {
          background: var(--grad-1);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-roles {
          font-family: var(--font-mono);
          font-size: clamp(1.05rem, 2.6vw, 1.6rem);
          color: var(--text-muted);
          margin-bottom: 24px;
          min-height: 1.6em;
        }
        .hero-roles-prefix { color: var(--text-dim); }
        .hero-typed { color: var(--primary); font-weight: 700; }
        .hero-cursor {
          color: var(--primary);
          animation: blink 1s steps(1) infinite;
          margin-left: 2px;
        }

        .hero-desc {
          font-size: 1.1rem;
          color: var(--text-muted);
          max-width: 540px;
          margin-bottom: 36px;
          line-height: 1.65;
        }

        .hero-cta {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 80px;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 13px 24px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.98rem;
          transition: all 0.25s ease;
        }
        .btn-primary {
          background: var(--primary);
          color: var(--bg);
        }
        .btn-primary:hover {
          background: var(--primary-dim);
          transform: translateY(-2px);
          box-shadow: 0 12px 30px -10px rgba(163,230,53,0.5);
        }
        .btn-ghost {
          border: 1px solid var(--border);
          color: var(--text);
          background: rgba(255,255,255,0.02);
        }
        .btn-ghost:hover {
          border-color: var(--border-hover);
          background: rgba(255,255,255,0.05);
          transform: translateY(-2px);
        }

        .hero-scroll {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-dim);
          text-transform: lowercase;
          cursor: pointer;
          transition: color 0.25s;
        }
        .hero-scroll:hover { color: var(--primary); }
        .hero-scroll svg { animation: float 2.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

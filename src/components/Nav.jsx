import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { id: 'home', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'work' },
  { id: 'education', label: 'journey' },
  { id: 'hobbies', label: 'creative' },
  { id: 'contact', label: 'contact' },
];

export default function Nav({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner container">
        <button className="nav-logo" onClick={() => go('home')}>
          <span className="nav-logo-mark">U</span>
          <span className="nav-logo-text">utkarsh</span>
        </button>

        <nav className="nav-links">
          {links.map((l) => (
            <button
              key={l.id}
              className={`nav-link ${activeSection === l.id ? 'active' : ''}`}
              onClick={() => go(l.id)}
            >
              {l.label}
              <span className="nav-link-dot" />
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="nav-resume-btn" href="/Utkarsh_Raj_Resume.pdf" download="Utkarsh_Raj_Resume.pdf">
            Resume
          </a>

          <button className="nav-burger" onClick={() => setOpen((v) => !v)} aria-label="menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <button
            key={l.id}
            className={`nav-mobile-link ${activeSection === l.id ? 'active' : ''}`}
            onClick={() => go(l.id)}
          >
            {l.label}
          </button>
        ))}
      </div>

      <style>{`
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          transition: all 0.4s ease;
        }
        .nav-scrolled {
          backdrop-filter: blur(16px);
          background: rgba(10, 10, 15, 0.78);
          border-bottom: 1px solid var(--border);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.25rem;
        }
        .nav-logo-mark {
          display: grid;
          place-items: center;
          width: 34px; height: 34px;
          border-radius: 9px;
          background: var(--grad-1);
          color: var(--bg);
          font-weight: 800;
          font-size: 1.05rem;
        }
        .nav-logo-text { letter-spacing: -0.02em; }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 5px;
        }
        .nav-link {
          position: relative;
          padding: 8px 18px;
          border-radius: 999px;
          font-size: 0.92rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
          transition: color 0.25s;
        }
        .nav-link:hover { color: var(--text); }
        .nav-link.active {
          color: var(--bg);
          background: var(--primary);
        }
        .nav-link-dot { display: none; }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .nav-resume-btn {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--primary);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 6px 14px;
          background: rgba(163,230,53,0.04);
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .nav-resume-btn:hover {
          background: var(--primary);
          color: var(--bg);
          border-color: var(--primary);
          transform: translateY(-1px);
        }

        .nav-burger { display: none; color: var(--text); }

        .nav-mobile {
          display: none;
          flex-direction: column;
          gap: 4px;
          padding: 16px 24px 28px;
          background: rgba(10,10,15,0.97);
          border-bottom: 1px solid var(--border);
          backdrop-filter: blur(16px);
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.35s ease, opacity 0.35s ease, padding 0.35s ease;
        }
        .nav-mobile.open {
          max-height: 400px;
          opacity: 1;
        }
        .nav-mobile-link {
          text-align: left;
          padding: 14px 8px;
          font-family: var(--font-display);
          font-size: 1.2rem;
          color: var(--text-muted);
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .nav-mobile-link.active { color: var(--primary); }

        @media (max-width: 860px) {
          .nav-links { display: none; }
          .nav-burger { display: block; }
          .nav-mobile { display: flex; }
        }
      `}</style>
    </header>
  );
}

import { Github, ArrowUp } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-mark">U</span>
          <span className="footer-text">
            built & designed by Utkarsh · <span className="footer-year">{year}</span>
          </span>
        </div>

        <div className="footer-right">
          <a className="footer-link" href="https://github.com/cser-utkarsh-raj" target="_blank" rel="noopener noreferrer">
            <Github size={16} /> GitHub
          </a>
          <button className="footer-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        .footer {
          border-top: 1px solid var(--border);
          padding: 36px 0;
          background: var(--bg-soft);
        }
        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }
        .footer-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .footer-mark {
          display: grid;
          place-items: center;
          width: 30px; height: 30px;
          border-radius: 8px;
          background: var(--grad-1);
          color: var(--bg);
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 0.95rem;
        }
        .footer-text {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--text-dim);
        }
        .footer-year { color: var(--primary); }

        .footer-right {
          display: flex;
          align-items: center;
          gap: 22px;
        }
        .footer-link, .footer-top {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--text-muted);
          transition: color 0.2s;
        }
        .footer-link:hover, .footer-top:hover { color: var(--primary); }

        @media (max-width: 600px) {
          .footer-inner { flex-direction: column; align-items: flex-start; gap: 18px; }
        }
      `}</style>
    </footer>
  );
}

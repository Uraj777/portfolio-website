import { BookOpen, Film, Compass } from 'lucide-react';

const creativeWorks = [
  {
    title: 'The Biker',
    medium: 'Gritty Action Screenplay Outline',
    logline: 'An ex-convict mechanic flees to Ooty to escape his past. Years later, he returns to Delhi on his father\'s rebuilt motorcycle to confront the criminal empire that betrayed him.',
    details: 'Explores themes of vengeance, tragic redemption, and character transformation across multiple decades (1980s–2010s).',
    emoji: '🏍️',
    accent: '#fbbf24', // yellow
  },
  {
    title: 'Crimson Curse',
    medium: 'Dark Fantasy Thriller Series',
    logline: 'A multi-part fantasy horror series detailing a cursed lineage bound to lunar eclipses and ancient blood moons, fighting to break a multi-generational blood covenant.',
    details: 'Focuses on complex supernatural world-building, atmospheric suspense, and multi-character ensemble narrative designs.',
    emoji: '🩸',
    accent: '#fb7185', // rose
  }
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="section hobbies-section">
      <div className="container">
        <div className="reveal">
          <span className="section-label">creative side</span>
          <h2 className="section-title">creative writing</h2>
          <p className="section-subtitle">
            When I'm not writing code, I outline stories and screenplay concepts. Building narratives and character arcs keeps my problem-solving structured and imaginative.
          </p>
        </div>

        <div className="hobbies-grid">
          {creativeWorks.map((work, idx) => (
            <div
              key={work.title}
              className="hobby-card reveal"
              style={{ '--accent': work.accent, transitionDelay: `${idx * 100}ms` }}
            >
              <div className="hobby-head">
                <div className="hobby-emoji">{work.emoji}</div>
                <span className="hobby-medium">{work.medium}</span>
              </div>
              <h3 className="hobby-title">{work.title}</h3>
              
              <div className="hobby-details">
                <div className="hobby-section">
                  <span className="hobby-section-title">The Premise</span>
                  <p className="hobby-desc">{work.logline}</p>
                </div>
                <div className="hobby-section">
                  <span className="hobby-section-title">Themes & Structure</span>
                  <p className="hobby-desc">{work.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hobbies-section {
          padding: 80px 0 60px; /* Reduced padding to keep it low-focus as a hobby */
          background: linear-gradient(180deg, transparent, rgba(163, 230, 53, 0.01), transparent);
          border-top: 1px solid rgba(255, 255, 255, 0.02);
        }
        .hobbies-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
        }
        .hobby-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 26px 24px;
          border: 1px solid var(--border);
          border-radius: 18px;
          background: var(--bg-card);
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .hobby-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
        }
        .hobby-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .hobby-emoji {
          font-size: 1.6rem;
          width: 44px; height: 44px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
        }
        .hobby-medium {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .hobby-title {
          font-size: 1.25rem;
          margin-bottom: 16px;
        }
        .hobby-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .hobby-section {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .hobby-section-title {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          opacity: 0.8;
        }
        .hobby-desc {
          color: var(--text-muted);
          font-size: 0.84rem;
          line-height: 1.45;
        }

        @media (max-width: 860px) {
          .hobbies-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

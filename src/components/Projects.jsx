import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    name: 'myMentor',
    tagline: 'AI-powered study roadmap generator and progress workspace.',
    description:
      'An advanced learning platform that turns educational goals into day-by-day roadmaps. Features a personal study workspace with Pomodoro timers, Markdown notes, and AI assistance.',
    tags: ['FastAPI', 'Python', 'React', 'PostgreSQL', 'Gemini API'],
    accent: 'rose',
    link: 'https://github.com/cser-utkarsh-raj/myMentor',
    emoji: '🧑‍🏫',
    features: [
      'Day-by-day roadmap generation powered by Gemini API',
      'Integrated study Pomodoro timer & markdown notes editor',
      'Interactive GitHub-style contributions activity heatmap',
      'Contextual AI chatbot (Sensei) parsing uploaded PDF resources'
    ],
  },
  {
    name: 'TerraVault',
    tagline: 'Production-grade wiki & knowledge CMS with revision audits.',
    description:
      'A structured, community-driven educational encyclopedia and custom CMS. Features role-based access controls for writers/admins and interactive charts monitoring page traffic.',
    tags: ['Flask', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Docker'],
    accent: 'sky',
    link: 'https://github.com/cser-utkarsh-raj/TerraVault',
    emoji: '🌍',
    features: [
      'Role-based access control (RBAC) & CMS controls',
      'Article revision audit history logs for easy rollbacks',
      'Interactive admin metrics dashboard via Chart.js',
      'Supabase PostgreSQL database connectivity'
    ],
  },
  {
    name: 'StoreBook',
    tagline: 'Enterprise inventory & procurement platform — microservices + CI/CD.',
    description:
      'An enterprise stationery store platform that automates inventory tracking, low-stock warnings, and student request workflows. Student approvals deduct inventory via inter-service communications.',
    tags: ['Java', 'Spring Boot', 'React', 'Docker', 'Jenkins'],
    accent: 'lime',
    link: 'https://github.com/cser-utkarsh-raj/Final-Project',
    emoji: '📦',
    features: [
      'Spring Boot microservices with Feign Client communication',
      'Central Config Server & API Gateway routing',
      'Containerized development with Docker & Compose',
      'Automated Jenkins CI/CD integration'
    ],
  },
  {
    name: 'Typing Ninja',
    tagline: 'A fast-paced typing speed analyzer desktop game.',
    description:
      'A responsive desktop game designed to test typing speed and accuracy under Easy, Medium, and Hard difficulties. Includes real-time metric trackers and sound effects.',
    tags: ['Python', 'Pygame', 'Game Dev', 'Sound Design'],
    accent: 'yellow',
    link: 'https://github.com/Uraj777/Typing-Ninja2',
    emoji: '🥷',
    features: [
      '3 dynamic difficulty modes with custom word lists',
      'Real-time WPM speed and accuracy percentage tracking',
      'Local high scores persisted via JSON database',
      'Futuristic UI with custom font and theme music'
    ],
  },
  {
    name: 'The Bloom',
    tagline: 'Cinematic Phaser-based retro game.',
    description:
      'A cinematic survival horror game following Chaitanya as he flees Chennai to protect his daughter Nancy from a global parasitic outbreak (Bunga Matahari).',
    tags: ['Phaser', 'JavaScript', 'HTML5', 'Game Dev', 'Web Audio'],
    accent: 'purple',
    link: 'https://github.com/cser-utkarsh-raj/the-bloom',
    emoji: '🧟',
    status: 'under development',
    features: [
      'Event Zero ocean research to the collapse of the Red Zone',
      'Tense encounters with infected hosts and rogue survivors like Sikander',
      'Interactive Phaser JS gameplay layers depicting warning signs & Government alerts',
      'Atmospheric retro preloader screens and synthesised Web Audio heartbeat cues'
    ],
  },
];

const accentMap = {
  lime:   { color: '#a3e635', glow: 'rgba(163,230,53,0.16)' },
  sky:    { color: '#38bdf8', glow: 'rgba(56,189,248,0.16)' },
  yellow: { color: '#fbbf24', glow: 'rgba(251,191,36,0.16)' },
  rose:   { color: '#fb7185', glow: 'rgba(251,113,133,0.16)' },
  purple: { color: '#c084fc', glow: 'rgba(192,132,252,0.16)' },
};

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="reveal">
          <span className="section-label">selected work</span>
          <h2 className="section-title">projects I'm proud of</h2>
          <p className="section-subtitle">
            Five things I've designed, built and shipped — from enterprise microservices to an
            AI-powered roadmap generator and retro games.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((p, i) => {
            const a = accentMap[p.accent];
            return (
              <article
                key={p.name}
                className="project-card reveal"
                style={{ '--accent': a.color, '--accent-glow': a.glow, transitionDelay: `${i * 100}ms` }}
              >
                <div className="project-card-glow" />
                <div className="project-head">
                  <div className="project-emoji">{p.emoji}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {p.status && <span className="project-status">{p.status}</span>}
                    <a className="project-link" href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${p.name} on GitHub`}>
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="project-name">{p.name}</h3>
                <p className="project-tagline">{p.tagline}</p>

                <div className="project-details">
                  <div className="project-section">
                    <span className="project-section-title">What it does</span>
                    <p className="project-desc">{p.description}</p>
                  </div>
                  <div className="project-section">
                    <span className="project-section-title">How it works</span>
                    <ul className="project-features">
                      {p.features.map((f) => (
                        <li key={f}><span className="project-bullet" style={{ background: a.color }} />{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>

                <a className="project-cta" href={p.link} target="_blank" rel="noopener noreferrer">
                  View on GitHub <ArrowUpRight size={15} />
                </a>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .projects-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
        }
        .project-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 30px 28px 28px;
          border: 1px solid var(--border);
          border-radius: 20px;
          background: var(--bg-card);
          overflow: hidden;
          transition: transform 0.35s ease, border-color 0.35s ease;
        }
        .project-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent);
        }
        .project-card-glow {
          position: absolute;
          top: -60px; right: -60px;
          width: 180px; height: 180px;
          border-radius: 50%;
          background: var(--accent-glow);
          filter: blur(40px);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .project-card:hover .project-card-glow { opacity: 1; }

        .project-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 24px;
        }
        .project-emoji {
          font-size: 2rem;
          line-height: 1;
          width: 56px; height: 56px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
        }
        .project-link {
          color: var(--text-muted);
          padding: 8px;
          border-radius: 8px;
          transition: all 0.2s;
        }
        .project-link:hover { color: var(--accent); background: rgba(255,255,255,0.04); }

        .project-status {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          padding: 3px 8px;
          border-radius: 6px;
          background: rgba(192, 132, 252, 0.12);
          border: 1px solid rgba(192, 132, 252, 0.3);
          color: #c084fc;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .project-name {
          font-size: 1.45rem;
          margin-bottom: 8px;
        }
        .project-tagline {
          color: var(--accent);
          font-family: var(--font-mono);
          font-size: 0.82rem;
          margin-bottom: 16px;
          line-height: 1.5;
        }
        .project-details {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 24px;
        }
        .project-section {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .project-section-title {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          opacity: 0.85;
        }
        .project-desc {
          color: var(--text-muted);
          font-size: 0.88rem;
          line-height: 1.55;
        }
        .project-features {
          list-style: none;
          display: grid;
          gap: 7px;
        }
        .project-features li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.84rem;
          color: var(--text-muted);
          line-height: 1.45;
        }
        .project-bullet {
          width: 5px; height: 5px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 6px;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 24px;
        }
        .project-tag {
          padding: 4px 10px;
          border-radius: 6px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          font-size: 0.76rem;
          font-family: var(--font-mono);
          color: var(--text-dim);
        }

        .project-cta {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          font-size: 0.92rem;
          color: var(--accent);
          transition: gap 0.2s;
        }
        .project-cta:hover { gap: 10px; }

        @media (max-width: 860px) {
          .projects-list { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

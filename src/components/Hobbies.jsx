import { BookOpen, Film, Compass } from 'lucide-react';

const creativeWorks = [
  {
    title: 'The Biker',
    medium: 'Drama, Action, Memoir',
    logline: 'A multi-decade journey of Rajveer, an ex-convict mechanic who returns to Delhi to rebuild his father\'s old motorcycle and face the violent syndicate he left behind.',
    details: 'Focuses on tragic redemption, multi-decade timelines (1980s–2010s), and the consequences of violence.',
    emoji: '🏍️',
    accent: '#fbbf24', // yellow
  },
  {
    title: 'Babygirl',
    medium: 'Drama, Memoir, Tragedy',
    logline: 'A reverse emotional autopsy of Nithya Thomas, tracing her life backwards from her tragic choice during the 2020 pandemic to her childhood in Ooty and birth in 1992.',
    details: 'Focuses on familial grief, relationship erosion, and the question of how someone loved ends up completely alone.',
    emoji: '🧸',
    accent: '#c084fc', // purple
  },
  {
    title: 'Battleworld',
    medium: 'Action, Survival, Thriller',
    logline: 'Three gaming friends accept a mysterious invitation to a treasure hunt on a private island, only to find themselves trapped in a streamed deathmatch for global entertainment.',
    details: 'A psychological survival narrative showing the breakdown of trust, self-sacrifice, and modern content voyeurism.',
    emoji: '🔥',
    accent: '#f97316', // orange
  },
  {
    title: 'Crimson Curse',
    medium: 'Gothic, Horror, Drama',
    logline: 'Elsa is drawn into a dark blood covenant by Count Orlock. As her brother, Jofferry the White Knight, climbs the mountain to save her, betrayal severs the bloodline.',
    details: 'Focuses on gothic suspense, ancient covenants, tragic sacrifices, and a new dark reign on the throne.',
    emoji: '🩸',
    accent: '#fb7185', // rose
  },
  {
    title: 'Nirvana',
    medium: 'Sci-Fi, Adventure, Epic',
    logline: 'A three-part epic (The Origin, The Call, and The Doom) that follows characters navigating existential choices, human nature, and cosmic fate.',
    details: 'Explores high-concept philosophical questions, character dilemmas, and the destiny of humanity.',
    emoji: '🕯️',
    accent: '#38bdf8', // sky
  },
  {
    title: 'The Bloom',
    medium: 'Sci-Fi, Survival, Action',
    logline: 'During a global parasitic outbreak (Bunga Matahari), an infected father named Chaitanya fights to protect his daughter Nancy before the world collapses under nuclear warheads.',
    details: 'Traces the outbreak from Event Zero ocean research, warning signs, local panic, and rogue survivors like Sikander, to the final destruction of the Red Zone.',
    emoji: '🧟',
    accent: '#a3e635', // lime
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
            When I\'m not writing code, I outline stories and screenplay concepts. Building narratives and character arcs keeps my problem-solving structured and imaginative.
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
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .hobby-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 24px 22px;
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
          font-size: 1.5rem;
          width: 40px; height: 40px;
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
          font-size: 1.2rem;
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
          font-size: 0.82rem;
          line-height: 1.45;
        }

        @media (max-width: 1024px) {
          .hobbies-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .hobbies-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

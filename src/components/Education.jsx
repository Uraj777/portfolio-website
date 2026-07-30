import { GraduationCap, Briefcase, Award, BookOpen, Trophy } from 'lucide-react';

const timeline = [
  {
    icon: Briefcase,
    period: 'Jan 2026 – Jun 2026',
    title: 'Software Engineering Trainee',
    org: 'Capgemini',
    accent: '#a3e635',
    bullets: [
      'Enterprise training in Core Java, Spring Boot, React, SQL and REST APIs.',
      'Built microservices-based applications following Agile practices.',
      'Practical exposure to Docker, Jenkins, Git and CI/CD pipelines.',
    ],
  },
  {
    icon: GraduationCap,
    period: '2022 – 2026',
    title: 'B.Tech — Computer Science',
    org: 'Jaipur Engineering College and Research Centre · CGPA 8.19',
    accent: '#38bdf8',
    bullets: [
      'Strong foundation in DSA, OOP, DBMS, OS and Computer Networks.',
      'Built multiple full-stack and systems projects during coursework.',
    ],
  },
  {
    icon: BookOpen,
    period: '2020 – 2021',
    title: 'Higher Secondary (Class XII)',
    org: 'Public Central School · 72%',
    accent: '#fb7185',
    bullets: [],
  },
  {
    icon: BookOpen,
    period: '2018 – 2019',
    title: 'Secondary (Class X)',
    org: 'DAV Public School · 91.60%',
    accent: '#fbbf24',
    bullets: [],
  },
];

const certs = [
  'HackerRank Python (Basic)',
  'Infosys Springboard – Flask Basics',
];

const achievements = [
  'Secured offers from Capgemini and TCS.',
  'Solved 200+ DSA problems with a 5-Star Python rating on HackerRank.',
  'Winner – Zero Hour Summit Debate Competition.',
];

export default function Education() {
  return (
    <section id="education" className="section edu-section">
      <div className="container">
        <div className="reveal">
          <span className="section-label">the journey</span>
          <h2 className="section-title">education & experience</h2>
          <p className="section-subtitle">
            Where I've studied, where I've trained, and what I've earned along the way.
          </p>
        </div>

        <div className="edu-columns">
          {/* Timeline */}
          <div className="timeline">
            <div className="timeline-line" />
            {timeline.map((t, i) => (
              <div key={i} className="timeline-item reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="timeline-dot" style={{ '--c': t.accent }}>
                  <t.icon size={16} />
                </div>
                <div className="timeline-card">
                  <span className="timeline-period">{t.period}</span>
                  <h3 className="timeline-title">{t.title}</h3>
                  <span className="timeline-org">{t.org}</span>
                  {t.bullets.length > 0 && (
                    <ul className="timeline-bullets">
                      {t.bullets.map((b, bi) => (
                        <li key={bi}><span className="t-bullet" style={{ background: t.accent }} />{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Side panels */}
          <div className="edu-side">
            <div className="edu-panel reveal">
              <div className="edu-panel-head">
                <Award size={18} />
                <h4>Certifications</h4>
              </div>
              <ul className="edu-list">
                {certs.map((c) => (
                  <li key={c}>
                    <span className="edu-check">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="edu-panel reveal" style={{ transitionDelay: '80ms' }}>
              <div className="edu-panel-head">
                <Trophy size={18} />
                <h4>Achievements</h4>
              </div>
              <ul className="edu-list">
                {achievements.map((a) => (
                  <li key={a}>
                    <span className="edu-check">★</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .edu-section {
          background: linear-gradient(180deg, transparent, rgba(56,189,248,0.025), transparent);
        }
        .edu-columns {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 40px;
          align-items: start;
        }
        .timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding-left: 8px;
        }
        .timeline-line {
          position: absolute;
          left: 23px;
          top: 12px;
          bottom: 12px;
          width: 2px;
          background: linear-gradient(180deg, #a3e635, #38bdf8, #fb7185, #fbbf24);
          opacity: 0.4;
        }
        .timeline-item {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 20px;
          align-items: start;
        }
        .timeline-dot {
          width: 48px; height: 48px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--c);
          position: relative;
          z-index: 1;
          flex-shrink: 0;
          transition: transform 0.3s, border-color 0.3s;
        }
        .timeline-item:hover .timeline-dot {
          transform: scale(1.08);
          border-color: var(--c);
          box-shadow: 0 0 24px -6px var(--c);
        }
        .timeline-card {
          padding: 22px 24px;
          border: 1px solid var(--border);
          border-radius: 16px;
          background: var(--bg-card);
          transition: border-color 0.3s, background 0.3s;
        }
        .timeline-card:hover {
          border-color: var(--border-hover);
          background: var(--bg-card-hover);
        }
        .timeline-period {
          font-family: var(--font-mono);
          font-size: 11.5px;
          color: var(--text-dim);
        }
        .timeline-title {
          font-size: 1.2rem;
          margin: 6px 0 4px;
        }
        .timeline-org {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--primary);
          margin-bottom: 12px;
        }
        .timeline-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .timeline-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.55;
        }
        .t-bullet {
          width: 6px; height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 6px;
        }

        /* Side panels */
        .edu-side {
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: sticky;
          top: 96px;
        }
        .edu-panel {
          padding: 24px;
          border: 1px solid var(--border);
          border-radius: 18px;
          background: var(--bg-card);
        }
        .edu-panel-head {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          color: var(--primary);
        }
        .edu-panel-head h4 {
          font-size: 1.05rem;
          font-weight: 700;
        }
        .edu-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .edu-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.55;
        }
        .edu-check {
          color: var(--primary);
          font-family: var(--font-mono);
          font-size: 12px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        @media (max-width: 1024px) {
          .edu-columns { grid-template-columns: 1fr; }
          .edu-side { position: static; }
        }
        @media (max-width: 600px) {
          .timeline-item { grid-template-columns: 40px 1fr; gap: 14px; }
          .timeline-line { left: 19px; }
          .timeline-dot { width: 40px; height: 40px; }
          .timeline-card { padding: 18px 16px; }
        }
      `}</style>
    </section>
  );
}

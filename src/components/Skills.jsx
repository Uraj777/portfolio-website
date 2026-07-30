const groups = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Frameworks & Database',
    items: ['FastAPI', 'Spring Boot', 'React', 'Flask', 'MySQL', 'PostgreSQL', 'SQLite'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'Jenkins', 'Maven', 'Postman'],
  },
  {
    title: 'Core Concepts',
    items: ['REST APIs', 'Microservices', 'OOP', 'DSA', 'DBMS', 'Operating Systems', 'Computer Networks', 'CI/CD'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="reveal">
          <span className="section-label">toolkit</span>
          <h2 className="section-title">things I build with</h2>
          <p className="section-subtitle">
            A mix of languages, frameworks, and fundamentals I reach for when turning an idea
            into something that actually runs.
          </p>
        </div>

        <div className="skills-grid">
          {groups.map((g, gi) => (
            <div key={g.title} className="skill-card reveal" style={{ transitionDelay: `${gi * 90}ms` }}>
              <div className="skill-card-num">0{gi + 1}</div>
              <h3 className="skill-card-title">{g.title}</h3>
              <ul className="skill-list">
                {g.items.map((item) => (
                  <li key={item} className="skill-chip">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          background: linear-gradient(180deg, transparent, rgba(163,230,53,0.02), transparent);
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .skill-card {
          position: relative;
          padding: 32px 28px;
          border: 1px solid var(--border);
          border-radius: 18px;
          background: var(--bg-card);
          transition: border-color 0.3s, transform 0.3s, background 0.3s;
        }
        .skill-card:hover {
          border-color: var(--border-hover);
          transform: translateY(-4px);
          background: var(--bg-card-hover);
        }
        .skill-card-num {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--primary);
          margin-bottom: 14px;
        }
        .skill-card-title {
          font-size: 1.35rem;
          margin-bottom: 22px;
        }
        .skill-list {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .skill-chip {
          padding: 7px 14px;
          border-radius: 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          font-size: 0.9rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
          transition: all 0.2s;
          cursor: default;
        }
        .skill-chip:hover {
          color: var(--primary);
          border-color: var(--border-hover);
          background: rgba(163,230,53,0.06);
          transform: translateY(-2px);
        }

        @media (max-width: 860px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

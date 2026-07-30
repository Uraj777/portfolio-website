import { Coffee, MapPin, GraduationCap, Award, Trophy } from 'lucide-react';

const facts = [
  { icon: MapPin, label: 'based in', value: 'Jaipur, Rajasthan' },
  { icon: GraduationCap, label: 'studying at', value: 'JECRC, 2022–2026' },
  { icon: Trophy, label: 'placed at', value: 'Capgemini & TCS' },
  { icon: Award, label: 'HackerRank', value: '5-Star Python' },
  { icon: Coffee, label: 'DSA problems', value: '200+ solved' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-left reveal">
            <span className="section-label">about me</span>
            <h2 className="section-title">a builder who ships real things</h2>
          </div>

          <div className="about-right reveal">
            <p className="about-lead">
              Computer Science graduate with hands-on experience in Python, FastAPI, React, and Java / Spring Boot.
            </p>
            <p className="about-text">
              Strong foundation in backend development, REST APIs, microservices, MySQL and CI/CD
              fundamentals — with practical exposure to Docker and Jenkins. I've interned at
              Capgemini as a Software Engineering Trainee, built microservices-based applications
              following Agile practices, and shipped everything from typing games to full-stack
              web platforms.
            </p>

            <div className="about-facts">
              {facts.map((f) => (
                <div key={f.label} className="about-fact">
                  <f.icon size={15} />
                  <span className="about-fact-label">{f.label}</span>
                  <span className="about-fact-value">{f.value}</span>
                </div>
              ))}
            </div>

            <div className="about-strengths-title">core expertise</div>
            <div className="about-strengths-grid">
              <div className="strength-item">
                <h5>Backend Architecture</h5>
                <p>Spring Boot & FastAPI microservices, REST APIs, Gateway routing, and JWT security.</p>
              </div>
              <div className="strength-item">
                <h5>Database Engineering</h5>
                <p>Schema design, optimized SQL, Cascades, MySQL, and PostgreSQL (Supabase/Neon).</p>
              </div>
              <div className="strength-item">
                <h5>AI Integrations</h5>
                <p>Gemini API integration for structured roadmaps and context-aware PDF chatbots.</p>
              </div>
              <div className="strength-item">
                <h5>DevOps & CI/CD</h5>
                <p>Docker containerization and automated deployment pipelines via Jenkins & GitHub Actions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 80px;
          align-items: start;
        }
        .about-lead {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 500;
          line-height: 1.45;
          color: var(--text);
          margin-bottom: 22px;
        }
        .about-text {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.75;
          margin-bottom: 36px;
        }
        .about-facts {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .about-fact {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          padding: 11px 16px;
          border: 1px solid var(--border);
          border-radius: 10px;
          background: var(--bg-card);
          transition: border-color 0.25s;
        }
        .about-fact:hover { border-color: var(--border-hover); }
        .about-fact svg { color: var(--primary); flex-shrink: 0; }
        .about-fact-label {
          font-family: var(--font-mono);
          font-size: 11.5px;
          color: var(--text-dim);
          width: 90px;
          flex-shrink: 0;
        }
        .about-fact-value { color: var(--text); font-weight: 500; }

        .about-strengths-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          margin: 36px 0 18px;
          color: var(--primary);
          text-transform: lowercase;
          letter-spacing: 0.02em;
        }
        .about-strengths-title::before {
          content: '// ';
          color: var(--text-dim);
          font-family: var(--font-mono);
        }
        .about-strengths-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .strength-item {
          padding: 16px 18px;
          border: 1px solid var(--border);
          border-radius: 14px;
          background: rgba(255,255,255,0.01);
          transition: all 0.25s ease;
        }
        .strength-item:hover {
          border-color: var(--border-hover);
          background: var(--bg-card-hover);
          transform: translateY(-2px);
        }
        .strength-item h5 {
          font-family: var(--font-body);
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 5px;
        }
        .strength-item p {
          font-size: 0.8rem;
          line-height: 1.45;
          color: var(--text-muted);
        }

        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr; gap: 24px; }
        }
        @media (max-width: 600px) {
          .about-strengths-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

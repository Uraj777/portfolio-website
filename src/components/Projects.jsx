import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    name: 'Castframe AI Studio',
    tagline: 'Enterprise virtual creator platform and AI influencer backend.',
    description: 'An end-to-end creator platform designed to power the Medusa Mobile Application with scalable, AI-enabled backend workflows.',
    tags: ['TypeScript', 'AI', 'Backend', 'Mobile'],
    accent: 'purple',
    link: 'https://github.com/Uraj777/Castframe-Pro',
    emoji: '🎬',
    source: 'Uraj777',
    features: ['Enterprise-oriented creator workflow architecture', 'AI influencer and virtual creator capabilities', 'Backend designed for mobile application integration'],
  },
  {
    name: 'ClickHead',
    tagline: 'Realistic, high-concurrency HTTP traffic simulation engine.',
    description: 'A traffic simulation tool engineered to model realistic request patterns instead of unnatural spikes that can trigger WAF bot filters.',
    tags: ['Go', 'TypeScript', 'Performance', 'Testing'],
    accent: 'lime',
    link: 'https://github.com/Uraj777/ClickHead',
    emoji: '⚡',
    source: 'Uraj777',
    features: ['High-concurrency traffic generation', 'Realistic request distribution', 'Built for performance and load-testing scenarios'],
  },
  {
    name: 'TerraVault2',
    tagline: 'Interactive encyclopedia for Earth, space, and human impact.',
    description: 'A multipage Flask application exploring mysteries, cosmic wonders, historic disasters, and the impact of human activity.',
    tags: ['Flask', 'Python', 'JavaScript', 'CSS'],
    accent: 'sky',
    link: 'https://github.com/Uraj777/TerraVault2',
    emoji: '🌍',
    source: 'Uraj777',
    features: ['Dynamic content filtering', 'Light and dark mode toggle', 'Responsive visual storytelling experience'],
  },
  {
    name: 'Typing Ninja 2',
    tagline: 'Fast-paced desktop typing speed analyzer game.',
    description: 'A polished typing game with multiple difficulty levels, real-time performance metrics, sound effects, and persistent local scores.',
    tags: ['Python', 'Pygame', 'Game Dev'],
    accent: 'yellow',
    link: 'https://github.com/Uraj777/Typing-Ninja2',
    emoji: '🥷',
    source: 'Uraj777',
    features: ['Easy, Medium, and Hard difficulty modes', 'Real-time WPM and accuracy tracking', 'JSON-backed local high scores'],
  },
  {
    name: 'TerraVault',
    tagline: 'Community knowledge CMS with revision audits and analytics.',
    description: 'A structured educational encyclopedia and custom CMS with editorial permissions, rollback-friendly revisions, and traffic monitoring.',
    tags: ['Flask', 'Python', 'PostgreSQL', 'Docker'],
    accent: 'sky',
    link: 'https://github.com/Uraj777/TerraVault',
    emoji: '📚',
    source: 'Uraj777',
    features: ['Role-based access control for writers and admins', 'Article revision history and rollback support', 'Interactive page traffic metrics'],
  },
  {
    name: 'myMentor',
    tagline: 'Personalized learning roadmaps and progress workspace.',
    description: 'A production-quality learning platform for building roadmaps, tracking study progress, logging hours, and gamifying consistent practice.',
    tags: ['TypeScript', 'React', 'FastAPI', 'PostgreSQL'],
    accent: 'rose',
    link: 'https://github.com/Uraj777/myMentor',
    emoji: '🧑‍🏫',
    source: 'Uraj777',
    features: ['Personalized learning roadmap workflows', 'Progress tracking with XP, streaks, and achievements', 'Microservice-ready application design'],
  },
  {
    name: 'TerraVault Beta',
    tagline: 'Early exploration platform for curated world knowledge.',
    description: 'An earlier TerraVault experience focused on presenting engaging articles about wonders, disasters, enigmas, and cosmic phenomena.',
    tags: ['Web', 'Content', 'Education'],
    accent: 'purple',
    link: 'https://github.com/Uraj777/TerraVault-Beta',
    emoji: '🛰️',
    source: 'Uraj777',
    features: ['Curated educational content experience', 'Exploration across history and science', 'Foundation for the TerraVault platform'],
  },
  {
    name: "The Readers' Club",
    tagline: 'A community-focused reading project.',
    description: 'A web project centered on books, readers, and creating a welcoming space for discovering and sharing reading interests.',
    tags: ['Web', 'Community', 'UI'],
    accent: 'rose',
    link: 'https://github.com/Uraj777/The-Readers-Club',
    emoji: '📖',
    source: 'Uraj777',
    features: ['Reader-first browsing experience', 'Community-oriented content structure', 'Focused on accessible, engaging presentation'],
  },
  {
    name: 'Typing Speed Analyzer',
    tagline: 'Python typing performance measurement tool.',
    description: 'A focused utility for measuring typing speed and accuracy while practicing consistent keyboard performance.',
    tags: ['Python', 'Productivity', 'Utility'],
    accent: 'yellow',
    link: 'https://github.com/Uraj777/typing-speed-analyzer',
    emoji: '⌨️',
    source: 'Uraj777',
    features: ['Typing speed measurement', 'Accuracy-focused practice flow', 'Lightweight Python implementation'],
  },
  {
    name: 'Portfolio Website',
    tagline: 'This responsive developer portfolio.',
    description: 'A dark, animated React and Vite portfolio for presenting software projects, skills, experience, and contact information.',
    tags: ['React', 'Vite', 'JavaScript', 'CSS'],
    accent: 'lime',
    link: 'https://github.com/Uraj777/portfolio-website',
    emoji: '🧩',
    source: 'Uraj777',
    features: ['Responsive layout across devices', 'Reveal-on-scroll interactions and smooth navigation', 'GitHub Pages deployment workflow'],
  },
  {
    name: 'FarmHub',
    tagline: 'Agricultural intelligence for crop and market decisions.',
    description: 'A TypeScript product designed to help farmers make better decisions about crops and markets through focused agricultural intelligence.',
    tags: ['TypeScript', 'Agriculture', 'Product'],
    accent: 'lime',
    link: 'https://github.com/cser-utkarsh-raj/FarmHub',
    emoji: '🌾',
    source: 'cser-utkarsh-raj',
    features: ['Crop decision support concept', 'Market-focused agricultural insights', 'Product-oriented TypeScript implementation'],
  },
  {
    name: 'GitPix',
    tagline: 'A focused TypeScript developer tool.',
    description: 'A modern TypeScript project built around a focused developer workflow and a polished product-oriented experience.',
    tags: ['TypeScript', 'Developer Tools', 'UI'],
    accent: 'sky',
    link: 'https://github.com/cser-utkarsh-raj/GitPix',
    emoji: '🖼️',
    source: 'cser-utkarsh-raj',
    features: ['Modern TypeScript foundation', 'Focused workflow-driven product design', 'Clean interface direction'],
  },
  {
    name: 'Kubrick',
    tagline: 'Local video editing engine for spoken footage.',
    description: 'A Python-first, local video editing engine for lectures, tutorials, presentations, explainers, interviews, and creator recordings.',
    tags: ['Python', 'Video', 'Automation'],
    accent: 'purple',
    link: 'https://github.com/cser-utkarsh-raj/Kubrick',
    emoji: '🎞️',
    source: 'cser-utkarsh-raj',
    features: ['Designed for spoken-footage workflows', 'Local-first processing approach', 'Useful across education and creator content'],
  },
  {
    name: 'ClickHead',
    tagline: 'Realistic, high-concurrency HTTP traffic simulation engine.',
    description: 'The second-account version of the traffic simulation project, focused on generating realistic load patterns for modern web infrastructure.',
    tags: ['TypeScript', 'Go', 'Performance', 'Testing'],
    accent: 'yellow',
    link: 'https://github.com/cser-utkarsh-raj/ClickHead',
    emoji: '📈',
    source: 'cser-utkarsh-raj',
    features: ['High-concurrency simulation direction', 'Realistic traffic modeling', 'Infrastructure and WAF-aware testing concept'],
  },
  {
    name: 'TerraVault',
    tagline: 'Educational encyclopedia and knowledge platform.',
    description: 'A content-rich platform for exploring the wonders, disasters, and enigmas of Earth and beyond through concise, visual articles.',
    tags: ['Python', 'Flask', 'Education', 'Web'],
    accent: 'sky',
    link: 'https://github.com/cser-utkarsh-raj/TerraVault',
    emoji: '🌌',
    source: 'cser-utkarsh-raj',
    features: ['Encyclopedia-style information architecture', 'Topics spanning history, science, and space', 'Visual, concise educational content'],
  },
  {
    name: 'myMentor',
    tagline: 'Learning roadmaps, daily progress, and gamification.',
    description: 'A developer learning workspace that turns goals into personalized roadmaps and makes progress visible through study tracking and achievements.',
    tags: ['TypeScript', 'React', 'Learning', 'Productivity'],
    accent: 'rose',
    link: 'https://github.com/cser-utkarsh-raj/myMentor',
    emoji: '🗺️',
    source: 'cser-utkarsh-raj',
    features: ['Personalized learning roadmaps', 'Daily progress and study-hour tracking', 'XP, streaks, and achievement mechanics'],
  },
  {
    name: 'goPanda',
    tagline: 'Offline-first Pomodoro focus timer with a mascot.',
    description: 'A lightweight productivity companion combining focus sessions, ambient soundscapes, subtasks, sticky notes, and an animated mascot.',
    tags: ['TypeScript', 'Productivity', 'Offline-first'],
    accent: 'lime',
    link: 'https://github.com/cser-utkarsh-raj/goPanda',
    emoji: '🐼',
    source: 'cser-utkarsh-raj',
    features: ['Offline-first Pomodoro sessions', 'Ambient soundscapes and animated mascot', 'Subtasks and interactive sticky notes'],
  },
  {
    name: 'NailedIt',
    tagline: 'Custom thumbnail generator for content creators.',
    description: 'A tool for creating thumbnails for blogs, YouTube videos, and social media platforms with a creator-friendly workflow.',
    tags: ['TypeScript', 'Design Tools', 'Creators'],
    accent: 'yellow',
    link: 'https://github.com/cser-utkarsh-raj/NailedIt',
    emoji: '🎨',
    source: 'cser-utkarsh-raj',
    features: ['Thumbnail creation for multiple platforms', 'Creator-focused design workflow', 'Reusable visual content tooling'],
  },
  {
    name: 'SLAM',
    tagline: 'AI-powered job discovery and application workspace.',
    description: 'A job-search workspace that finds relevant opportunities, explains candidate fit, tailors applications, and keeps the search organized.',
    tags: ['TypeScript', 'AI', 'Career Tech'],
    accent: 'purple',
    link: 'https://github.com/cser-utkarsh-raj/SLAM',
    emoji: '🚀',
    source: 'cser-utkarsh-raj',
    features: ['Relevant opportunity discovery', 'Explainable fit analysis', 'Application tailoring and organization'],
  },
  {
    name: 'Sailor',
    tagline: 'Anonymous social space for spontaneous connection.',
    description: 'A social product for discovering real people, conversations, communities, and connections without the pressure of traditional social media.',
    tags: ['TypeScript', 'Social', 'Community'],
    accent: 'rose',
    link: 'https://github.com/cser-utkarsh-raj/Sailor',
    emoji: '⛵',
    source: 'cser-utkarsh-raj',
    features: ['Anonymous discovery and conversations', 'Community-oriented social spaces', 'Connection without traditional social pressure'],
  },
];

const accentMap = {
  lime: { color: '#a3e635', glow: 'rgba(163,230,53,0.16)' },
  sky: { color: '#38bdf8', glow: 'rgba(56,189,248,0.16)' },
  yellow: { color: '#fbbf24', glow: 'rgba(251,191,36,0.16)' },
  rose: { color: '#fb7185', glow: 'rgba(251,113,133,0.16)' },
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
            A curated mix of my strongest builds from both GitHub profiles — product experiments,
            developer tools, AI platforms, and full-stack experiences. Training assessments are intentionally excluded.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((p, i) => {
            const a = accentMap[p.accent];
            return (
              <article
                key={`${p.source}-${p.name}`}
                className="project-card reveal"
                style={{ '--accent': a.color, '--accent-glow': a.glow, transitionDelay: `${(i % 6) * 80}ms` }}
              >
                <div className="project-card-glow" />
                <div className="project-head">
                  <div className="project-emoji">{p.emoji}</div>
                  <div className="project-card-actions">
                    <span className="project-source">{p.source}</span>
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
                    <span className="project-section-title">Highlights</span>
                    <ul className="project-features">
                      {p.features.map((f) => (
                        <li key={f}><span className="project-bullet" style={{ background: a.color }} />{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="project-tags">
                  {p.tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
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
        .projects-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 22px; }
        .project-card { position: relative; display: flex; flex-direction: column; padding: 30px 28px 28px; border: 1px solid var(--border); border-radius: 20px; background: var(--bg-card); overflow: hidden; transition: transform 0.35s ease, border-color 0.35s ease; }
        .project-card:hover { transform: translateY(-6px); border-color: var(--accent); }
        .project-card-glow { position: absolute; top: -60px; right: -60px; width: 180px; height: 180px; border-radius: 50%; background: var(--accent-glow); filter: blur(40px); opacity: 0; transition: opacity 0.4s; }
        .project-card:hover .project-card-glow { opacity: 1; }
        .project-head { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 24px; }
        .project-emoji { font-size: 2rem; line-height: 1; width: 56px; height: 56px; display: grid; place-items: center; border-radius: 14px; background: rgba(255,255,255,0.04); border: 1px solid var(--border); }
        .project-card-actions { display: flex; align-items: center; gap: 10px; }
        .project-source { font-family: var(--font-mono); font-size: 0.62rem; color: var(--accent); border: 1px solid var(--border); border-radius: 6px; padding: 4px 7px; }
        .project-link { color: var(--text-muted); padding: 8px; border-radius: 8px; transition: all 0.2s; }
        .project-link:hover { color: var(--accent); background: rgba(255,255,255,0.04); }
        .project-name { font-size: 1.45rem; margin-bottom: 8px; }
        .project-tagline { color: var(--accent); font-family: var(--font-mono); font-size: 0.82rem; margin-bottom: 16px; line-height: 1.5; }
        .project-details { display: flex; flex-direction: column; gap: 20px; margin-bottom: 24px; }
        .project-section { display: flex; flex-direction: column; gap: 6px; }
        .project-section-title { font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent); text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.85; }
        .project-desc { color: var(--text-muted); font-size: 0.88rem; line-height: 1.55; }
        .project-features { list-style: none; display: grid; gap: 7px; }
        .project-features li { display: flex; align-items: flex-start; gap: 10px; font-size: 0.84rem; color: var(--text-muted); line-height: 1.45; }
        .project-bullet { width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0; margin-top: 6px; }
        .project-tags { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 24px; }
        .project-tag { padding: 4px 10px; border-radius: 6px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); font-size: 0.76rem; font-family: var(--font-mono); color: var(--text-dim); }
        .project-cta { margin-top: auto; display: inline-flex; align-items: center; gap: 6px; font-weight: 600; font-size: 0.92rem; color: var(--accent); transition: gap 0.2s; }
        .project-cta:hover { gap: 10px; }
        @media (max-width: 860px) { .projects-list { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}

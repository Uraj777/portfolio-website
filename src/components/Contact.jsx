import { useState } from 'react';
import { Mail, Github, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'email',
    value: 'rajutkarsh1910@gmail.com',
    href: 'mailto:rajutkarsh1910@gmail.com',
  },
  {
    icon: Github,
    label: 'github',
    value: 'github.com/cser-utkarsh-raj',
    href: 'https://github.com/cser-utkarsh-raj',
  },
  {
    icon: Phone,
    label: 'phone',
    value: '+91-9507866197',
    href: 'tel:+919507866197',
  },
  {
    icon: MapPin,
    label: 'location',
    value: 'Jaipur, Rajasthan',
    href: null,
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name || 'someone'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:rajutkarsh1910@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const field = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left reveal">
            <span className="section-label">say hello</span>
            <h2 className="section-title">let's build<br />something together</h2>
            <p className="contact-lead">
              Got an idea, an opportunity, or just want to say hi? My inbox is always open —
              I'll try my best to get back to you.
            </p>

            <div className="contact-links">
              {contactLinks.map((c) =>
                c.href ? (
                  <a key={c.label} className="contact-link" href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    <c.icon size={18} />
                    <span className="contact-link-label">{c.label}</span>
                    <span className="contact-link-value">{c.value}</span>
                  </a>
                ) : (
                  <div key={c.label} className="contact-link no-hover">
                    <c.icon size={18} />
                    <span className="contact-link-label">{c.label}</span>
                    <span className="contact-link-value">{c.value}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={submit}>
            <div className="field">
              <label htmlFor="c-name">your name</label>
              <input id="c-name" type="text" value={form.name} onChange={field('name')} placeholder="Jane Doe" required />
            </div>
            <div className="field">
              <label htmlFor="c-email">your email</label>
              <input id="c-email" type="email" value={form.email} onChange={field('email')} placeholder="jane@company.com" required />
            </div>
            <div className="field">
              <label htmlFor="c-msg">message</label>
              <textarea id="c-msg" rows="5" value={form.message} onChange={field('message')} placeholder="Tell me what you have in mind…" required />
            </div>
            <button type="submit" className={`contact-submit ${sent ? 'sent' : ''}`}>
              {sent ? (<><CheckCircle2 size={18} /> opening your mail app…</>) : (<><Send size={18} /> send message</>)}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: linear-gradient(180deg, transparent, rgba(163,230,53,0.03));
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        .contact-lead {
          color: var(--text-muted);
          font-size: 1.1rem;
          line-height: 1.65;
          margin-bottom: 32px;
          max-width: 420px;
        }
        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .contact-link, .contact-link.no-hover {
          display: grid;
          grid-template-columns: 18px auto 1fr;
          align-items: center;
          gap: 12px;
          padding: 13px 18px;
          border: 1px solid var(--border);
          border-radius: 12px;
          background: var(--bg-card);
          transition: all 0.25s;
        }
        a.contact-link:hover {
          border-color: var(--border-hover);
          color: var(--primary);
          transform: translateX(4px);
        }
        .contact-link svg { color: var(--primary); flex-shrink: 0; }
        .contact-link-label {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-dim);
          text-transform: lowercase;
          white-space: nowrap;
        }
        .contact-link-value {
          font-size: 0.9rem;
          color: var(--text-muted);
          text-align: right;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        a.contact-link:hover .contact-link-value { color: var(--primary); }

        .contact-form {
          padding: 32px;
          border: 1px solid var(--border);
          border-radius: 20px;
          background: var(--bg-card);
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .field { display: flex; flex-direction: column; gap: 8px; }
        .field label {
          font-family: var(--font-mono);
          font-size: 12.5px;
          color: var(--text-dim);
          text-transform: lowercase;
        }
        .field input, .field textarea {
          padding: 13px 16px;
          border: 1px solid var(--border);
          border-radius: 10px;
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-body);
          font-size: 0.95rem;
          resize: vertical;
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .field input::placeholder, .field textarea::placeholder { color: var(--text-dim); }
        .field input:focus, .field textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(163,230,53,0.12);
        }
        .contact-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 14px;
          border-radius: 10px;
          background: var(--primary);
          color: var(--bg);
          font-weight: 600;
          font-size: 0.98rem;
          transition: all 0.25s;
          margin-top: 6px;
        }
        .contact-submit:hover { background: var(--primary-dim); transform: translateY(-2px); }
        .contact-submit.sent { background: var(--success); }

        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr; gap: 36px; }
          .contact-link-value { font-size: 0.82rem; }
        }
      `}</style>
    </section>
  );
}

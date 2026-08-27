import React, { useState, useEffect } from 'react';
import {
  Mail, ExternalLink, Code2, Terminal, Cpu, Download,
  Menu, X, Database, Wrench, Award, MapPin
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaFlutter } from 'react-icons/fa6';
import { SiPython, SiReact, SiTypescript, SiFlask, SiPostgresql, SiFirebase, SiDocker, SiMysql, SiEspressif } from 'react-icons/si';

/* ───────── NAVBAR ───────── */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', label: 'Hakkımda' },
    { href: '#skills', label: 'Yetenekler' },
    { href: '#experience', label: 'Deneyim' },
    { href: '#projects', label: 'Projeler' },
    { href: '#contact', label: 'İletişim' },
  ];

  return (
    <nav className={`glass-panel navbar${scrolled ? ' navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#hero" className="gradient-text nav-logo">İdil.dev</a>

        {/* Desktop */}
        <div className="nav-links-desktop">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menüyü aç/kapat"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`nav-links-mobile${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} className="nav-link" onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

/* ───────── HERO ───────── */
function Hero() {
  return (
    <section id="hero" style={{ paddingTop: '9rem', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} className="container animate-fade-in">
      <div className="hero-badge">
        <MapPin size={14} /> Ankara, Türkiye
      </div>
      <h1 className="hero-title">
        Merhaba, ben <span className="gradient-text">İdil Ünver</span>
      </h1>
      <h2 className="hero-subtitle">
        Yazılım Mühendisi · Full-Stack & IoT Geliştirici
      </h2>
      <p className="hero-desc">
        Gömülü donanımları bulut bağlantılı arayüzlerle entegre ederek uçtan uca sistemler tasarlıyorum.
        React, Flutter, Python ve IoT teknolojileriyle ölçeklenebilir, kullanıcı odaklı çözümler üretiyorum.
      </p>
      <div className="hero-btns">
        <a href="#projects" className="btn btn-primary">
          <ExternalLink size={18} /> Projelerimi Gör
        </a>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          <Download size={18} /> CV İndir
        </a>
      </div>
      <div className="hero-socials">
        <a href="https://github.com/idilunver" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={22} />
        </a>
        <a href="https://linkedin.com/in/idil-unver" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={22} />
        </a>
        <a href="mailto:unveridil@gmail.com" aria-label="E-posta">
          <Mail size={22} />
        </a>
      </div>
    </section>
  );
}

/* ───────── ABOUT ───────── */
function About() {
  return (
    <section id="about" className="container">
      <h2 className="section-title gradient-text">Hakkımda</h2>
      <div className="glass-panel about-grid">
        {/* Profil fotoğrafı */}
        <div className="about-photo-wrapper">
          <img src="/photo.jpg" alt="İdil Ünver" className="about-photo" />
        </div>

        {/* Metin */}
        <div className="about-text">
          <h3 className="about-heading">Yazılım Mühendisliği &amp; Sistem Tasarımı</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1rem' }}>
            Ostim Teknik Üniversitesi Bilgisayar Mühendisliği (İngilizce) öğrencisiyim (GNO: 3.10/4.00).
            Full-stack mobil/web geliştirme ve IoT ekosistemleri üzerine uzmanlaşıyorum.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
            Yazılım mühendisliği, veritabanları, DevOps ve sistem yönetimi perspektifiyle ölçeklenebilir
            mimariler oluşturmaya odaklıyım. İngilizce profesyonel çalışma yetkinliğine sahibim.
          </p>

          <div className="about-tags">
            <span className="about-tag">🎓 Bilgisayar Mühendisliği</span>
            <span className="about-tag">📍 Ankara, Türkiye</span>
            <span className="about-tag">🌐 İngilizce & Türkçe</span>
          </div>

          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>
            <Download size={18} /> Özgeçmişimi İndir
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────── SKILLS ───────── */
const skillGroups = [
  {
    icon: <Terminal size={28} />,
    title: 'Frontend & Mobil',
    desc: 'Kullanıcı dostu, erişilebilir ve modern arayüzler.',
    tags: [
      { label: 'React / Next.js', Icon: SiReact },
      { label: 'TypeScript', Icon: SiTypescript },
      { label: 'Flutter', Icon: FaFlutter },
      { label: 'Material UI', Icon: null },
    ],
  },
  {
    icon: <Database size={28} />,
    title: 'Backend & Veritabanları',
    desc: 'Güvenilir, ölçeklenebilir API ve veri mimarileri.',
    tags: [
      { label: 'Python / Flask', Icon: SiPython },
      { label: 'Firebase', Icon: SiFirebase },
      { label: 'PostgreSQL', Icon: SiPostgresql },
      { label: 'MySQL', Icon: SiMysql },
    ],
  },
  {
    icon: <Cpu size={28} />,
    title: 'Gömülü & IoT',
    desc: 'Uçtan uca sensör entegrasyonlu akıllı sistemler.',
    tags: [
      { label: 'ESP32', Icon: SiEspressif },
      { label: 'C / C++', Icon: null },
      { label: 'I2C / GPIO', Icon: null },
      { label: 'Sensör & Röle', Icon: null },
    ],
  },
  {
    icon: <Wrench size={28} />,
    title: 'DevOps & Araçlar',
    desc: 'Otomasyon, CI/CD ve altyapı yönetimi.',
    tags: [
      { label: 'Git / GitHub Actions', Icon: null },
      { label: 'Docker', Icon: SiDocker },
      { label: 'VMware', Icon: null },
      { label: 'PHP', Icon: null },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="container">
      <h2 className="section-title gradient-text">Yetenekler & Teknolojiler</h2>
      <div className="skills-cards-grid">
        {skillGroups.map(g => (
          <div key={g.title} className="glass-panel card">
            <div className="gradient-text skill-icon">{g.icon}</div>
            <h3 className="skill-card-title">{g.title}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>{g.desc}</p>
            <div className="skills-grid">
              {g.tags.map(t => (
                <span key={t.label} className="skill-tag">
                  {t.Icon && <t.Icon style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />}
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Sertifikalar */}
      <div className="certs-row">
        {[
          { name: 'Machine Learning in Python', org: 'DataCamp', year: '2024' },
          { name: 'Data Scientist with Python', org: 'DataCamp', year: '2024' },
          { name: 'Python Essentials', org: 'Cisco', year: '2023' },
        ].map(c => (
          <div key={c.name} className="glass-panel cert-card">
            <Award size={20} className="gradient-text" style={{ marginBottom: '0.5rem' }} />
            <div className="cert-name">{c.name}</div>
            <div className="cert-meta">{c.org} · {c.year}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────── EXPERIENCE ───────── */
const experiences = [
  {
    role: 'Yazılım Geliştirici Stajyeri',
    company: 'METUnic',
    period: 'Şub 2026 – May 2026',
    location: 'Ankara',
    bullets: [
      'PACE protokolünü kullanan NFC tabanlı kimlik doğrulama sistemi geliştirdim; Flutter arayüzünü Python backend ve OCR belge ayrıştırma ile entegre ettim.',
      'Güvenli veri iletimi ve sağlam yedekleme mekanizmaları uygulayarak sistem kararlılığını ve veri bütünlüğünü sağladım.',
    ],
  },
  {
    role: 'Sistem ve Ağ Yönetimi Stajyeri',
    company: 'Yenimahalle Belediyesi',
    period: 'Oca 2026',
    location: 'Ankara',
    bullets: [
      'Sunucu sanallaştırma (VMware), güvenlik duvarı yönetimi ve Active Directory yönetimi üzerinde çalıştım.',
    ],
  },
  {
    role: 'Full Stack Geliştirici Stajyeri',
    company: 'SVD Sistem',
    period: 'Haz 2025 – Tem 2025',
    location: 'Ankara',
    bullets: [
      'NEXORA e-ticaret platformunu React 19, Material UI ve PHP/MySQL kullanarak geliştirdim; JSON tabanlı CMS özellikleri inşa ettim.',
      'TR/EN çoklu dil desteği (react-i18next) ekledim ve GitHub Pages CI/CD ile dağıtımını gerçekleştirdim.',
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="container">
      <h2 className="section-title gradient-text">Deneyim</h2>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <div key={i} className="timeline-item glass-panel">
            <div className="timeline-header">
              <div>
                <div className="timeline-role">{exp.role}</div>
                <div className="timeline-company">{exp.company}</div>
              </div>
              <div className="timeline-meta">
                <span>{exp.period}</span>
                <span><MapPin size={13} style={{ display: 'inline', marginRight: 3 }} />{exp.location}</span>
              </div>
            </div>
            <ul className="timeline-bullets">
              {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────── PROJECTS ───────── */
const projects = [
  {
    title: 'Akıllı Sera Sistemi',
    subtitle: 'Bitirme Projesi · 2026',
    desc: 'ESP32 sensörleri, Python async backend ve Flutter (Mobil/Web) entegrasyonu ile otonom IoT izleme sistemi. Gemini Flash AI ile çevresel otomasyon, Fail-Safe mekanizması ve Digital Twin simülatörü içerir.',
    tags: ['ESP32', 'Python', 'Flutter', 'Gemini AI', 'IoT'],
    github: 'https://github.com/idilunver',
    demo: null,
    color: '#6366f1',
  },
  {
    title: 'SmartStock',
    subtitle: 'Envanter Yönetimi & Talep Tahmini · 2026',
    desc: 'React/TypeScript ve Firebase ile gerçek zamanlı stok/STT yönetim sistemi. Pandas tabanlı ETL hattı ile veri işleme, PostgreSQL entegrasyonu ve hareketli ortalama ile stok tükenme öngörüsü.',
    tags: ['React', 'TypeScript', 'Firebase', 'PostgreSQL', 'Pandas'],
    github: 'https://github.com/idilunver',
    demo: null,
    color: '#a855f7',
  },
  {
    title: 'NEXORA E-Ticaret Platformu',
    subtitle: 'Full Stack · SVD Sistem Stajı · 2025',
    desc: 'React 19, Material UI ve PHP/MySQL ile geliştirilmiş kapsamlı e-ticaret platformu. JSON tabanlı CMS, çoklu dil (TR/EN) desteği ve GitHub Pages CI/CD entegrasyonu içerir.',
    tags: ['React 19', 'Material UI', 'PHP', 'MySQL', 'react-i18next'],
    github: 'https://github.com/idilunver',
    demo: null,
    color: '#06b6d4',
  },
];

function Projects() {
  return (
    <section id="projects" className="container">
      <h2 className="section-title gradient-text">Öne Çıkan Projeler</h2>
      <div className="projects-grid">
        {projects.map((p, idx) => (
          <div key={idx} className="glass-panel card project-card">
            {/* Renk bantı */}
            <div className="project-banner" style={{ background: `linear-gradient(135deg, ${p.color}33, ${p.color}11)`, borderBottom: `1px solid ${p.color}44` }}>
              <Code2 size={40} style={{ opacity: 0.25, color: p.color }} />
            </div>

            <div className="project-body">
              <div className="project-subtitle">{p.subtitle}</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>

              <div className="skills-grid" style={{ justifyContent: 'flex-start', marginBottom: '1.5rem' }}>
                {p.tags.map(t => (
                  <span key={t} className="skill-tag" style={{ fontSize: '0.78rem', padding: '0.2rem 0.6rem' }}>{t}</span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="project-link primary">
                    <ExternalLink size={15} /> Canlı Demo
                  </a>
                )}
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link secondary">
                  <FaGithub size={15} /> Kaynak Kod
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────── FOOTER / CONTACT ───────── */
function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [error, setError] = useState('');

  // Configure your Formspree endpoint in an .env file as VITE_FORMSPREE_ENDPOINT
  // e.g. VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/yourFormId
  const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/yourFormId';

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setError('');

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setName(''); setEmail(''); setMessage('');
      } else {
        setStatus('error');
        setError(data?.error || 'Gönderim başarısız oldu. Lütfen daha sonra tekrar deneyin.');
      }
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Ağ hatası.');
    }
  }

  return (
    <footer id="contact" className="footer">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title gradient-text" style={{ marginBottom: '1rem' }}>Birlikte Çalışalım</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto 1.5rem auto', fontSize: '1.05rem' }}>
          Yeni fırsatlara ve projelere her zaman açığım. Aşağıdaki formu doldurarak bana doğrudan mesaj gönderebilirsin.
        </p>

        <form className="contact-form glass-panel" onSubmit={handleSubmit} style={{ maxWidth: 720, margin: '0 auto 2rem auto', textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: 8 }}>İsim</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />

          <label style={{ display: 'block', marginTop: 12, marginBottom: 8 }}>E-posta</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />

          <label style={{ display: 'block', marginTop: 12, marginBottom: 8 }}>Mesaj</label>
          <textarea value={message} onChange={e => setMessage(e.target.value)} rows={6} required />

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: 12, alignItems: 'center' }}>
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Gönderiliyor...' : 'Gönder'}
            </button>
            <a href="mailto:unveridil@gmail.com" className="btn btn-outline">
              <Mail size={16} style={{ marginRight: 8 }} /> E-posta ile gönder
            </a>
          </div>

          {status === 'success' && <div className="notice success" style={{ marginTop: 12 }}>Mesajın alındı — en kısa sürede döneceğim.</div>}
          {status === 'error' && <div className="notice error" style={{ marginTop: 12 }}>{error}</div>}

          <div style={{ marginTop: 14, color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            Not: Formspree kullanmak için <strong>VITE_FORMSPREE_ENDPOINT</strong> ortam değişkenine kendi Formspree endpoint'ini
            (https://formspree.io/f/yourFormId) ekle. Alternatif olarak `FORM_ENDPOINT` değişkenini doğrudan koda yazabilirsin.
          </div>
        </form>

        <div className="footer-socials">
          <a href="https://github.com/idilunver" target="_blank" rel="noopener noreferrer" className="glass-panel footer-icon" aria-label="GitHub">
            <FaGithub size={22} />
          </a>
          <a href="https://linkedin.com/in/idil-unver" target="_blank" rel="noopener noreferrer" className="glass-panel footer-icon" aria-label="LinkedIn">
            <FaLinkedin size={22} />
          </a>
          <a href="mailto:unveridil@gmail.com" className="glass-panel footer-icon" aria-label="E-posta">
            <Mail size={22} />
          </a>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '2.5rem' }}>
          &copy; {new Date().getFullYear()} İdil Ünver · React &amp; Vite ile yapıldı
        </p>
      </div>
    </footer>
  );
}

/* ───────── APP ───────── */
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}

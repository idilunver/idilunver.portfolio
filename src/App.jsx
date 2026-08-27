import React, { useState, useEffect } from 'react';
import {
  Mail, ExternalLink, Code2, Download,
  Menu, X, MapPin
} from 'lucide-react';
import { 
  FaReact, FaPython, FaPhp, FaHtml5, FaGitAlt, FaGithub, FaDocker, FaLinkedin, FaCode, FaMicrochip
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiMysql, SiPostgresql, SiCplusplus, SiFlutter 
} from 'react-icons/si';

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
    { href: '#hero', label: 'Ana Sayfa' },
    { href: '#about', label: 'Hakkımda' },
    { href: '#skills', label: 'Yetenekler' },
    { href: '#experience', label: 'Deneyim' },
    { href: '#projects', label: 'Projeler' },
    { href: '#contact', label: 'İletişim' },
  ];

  return (
    <nav className={`glass-panel navbar${scrolled ? ' navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#hero" className="gradient-text nav-logo">İdil Unver.dev</a>

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
    <section
      id="hero"
      className="container animate-fade-in"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: '7rem',
      }}
    >
      <p
        style={{
          color: 'var(--text-muted)',
          fontSize: '0.95rem',
          marginBottom: '1rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        Computer Engineer · Full-Stack &amp; IoT Developer
      </p>

      <h1 className="hero-title">
        Merhaba, ben <span className="gradient-text">İdil Ünver</span>
      </h1>

      <p
        className="hero-desc"
        style={{
          maxWidth: '720px',
          margin: '1.5rem auto 0',
        }}
      >
        Modern web uygulamaları, veritabanı sistemleri ve IoT çözümleri
        geliştiriyorum. Kullanıcı odaklı arayüzleri güçlü backend
        mimarileri ve akıllı sistemlerle birleştirerek uçtan uca çözümler
        üretmeye odaklanıyorum.
      </p>

      <div className="hero-btns">
        <a href="#projects" className="btn btn-primary">
          <ExternalLink size={18} />
          Projelerimi Gör
        </a>

        <a
          href="#contact"
          className="btn btn-outline"
        >
          <Mail size={18} />
          İletişime Geç
        </a>

        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          <Download size={18} />
          CV İndir
        </a>
      </div>

      <div className="hero-socials">
        <a
          href="https://github.com/idilunver"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={22} />
        </a>

        <a
          href="https://linkedin.com/in/idil-unver"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={22} />
        </a>

        <a
          href="mailto:unveridil@gmail.com"
          aria-label="E-posta"
        >
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
        <div className="about-text">
          <h3 className="about-heading">
            Yazılım Geliştirme &amp; Sistem Tasarımı
          </h3>

          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              marginBottom: '1rem',
            }}
          >
            Ostim Teknik Üniversitesi Bilgisayar Mühendisliği mezunuyum. 
            Full-stack web ve mobil geliştirme, veritabanları ve IoT
            sistemleri üzerine çalışıyorum. Farklı teknolojileri bir araya
            getirerek gerçek problemlere yönelik uçtan uca çözümler
            geliştirmekten keyif alıyorum.
          </p>

          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              marginBottom: '2rem',
            }}
          >
            Özellikle React, Python, PHP, MySQL, PostgreSQL ve IoT
            teknolojileriyle çalışıyorum. Bunun yanında backend mimarileri,
            veri yönetimi ve sistem altyapıları konularında kendimi
            geliştirmeye devam ediyorum.
          </p>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              marginTop: '2rem',
              display: 'inline-flex',
            }}
          >
            <Download size={18} />
            Özgeçmişimi İndir
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────── SKILLS ───────── */
function Skills() {
  const skillCategories = [
    {
      title: "Frontend & Mobile",
      skills: [
        { name: "React", icon: <FaReact color="#61DAFB" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "Flutter", icon: <SiFlutter color="#02569B" /> },
        { name: "HTML5 / CSS3", icon: <FaHtml5 color="#E34F26" /> },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Python", icon: <FaPython color="#3776AB" /> },
        { name: "PHP", icon: <FaPhp color="#777BB4" /> },
        { name: "C++", icon: <SiCplusplus color="#00599C" /> },
        { name: "C#", icon: <FaCode color="#239120" /> },
        { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
        { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
      ]
    },
    {
      title: "IoT & Embedded",
      skills: [
        { name: "ESP32", icon: <FaMicrochip color="#E7352C" /> },
        { name: "Gömülü Sistemler", icon: <FaMicrochip color="#A8B9CC" /> },
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", icon: <FaGitAlt color="#F05032" /> },
        { name: "GitHub", icon: <FaGithub color="#FFFFFF" /> },
        { name: "Docker", icon: <FaDocker color="#2496ED" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="container">
      <h2 className="section-title gradient-text">Yetenekler &amp; Teknolojiler</h2>
      <div className="skills-category-grid">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="glass-panel skill-category-card">
            <h3 className="skill-category-title">{cat.title}</h3>
            <div className="skills-icon-grid">
              {cat.skills.map((s, i) => (
                <div key={i} className="skill-icon-item">
                  <span className="skill-icon">{s.icon}</span>
                  <span className="skill-name">{s.name}</span>
                </div>
              ))}
            </div>
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
  return (
    <footer id="contact" className="footer">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title gradient-text" style={{ marginBottom: '1rem' }}>Birlikte Çalışalım</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto 2.5rem auto', fontSize: '1.05rem' }}>
          Yeni fırsatlara ve projelere her zaman açığım. Sorularınız veya proje fikirleriniz için bana ulaşabilirsiniz.
        </p>

        <a href="mailto:unveridil@gmail.com" className="btn btn-primary" style={{ marginBottom: '2.5rem', display: 'inline-flex' }}>
          <Mail size={18} /> unveridil@gmail.com
        </a>

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

        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '3rem' }}>
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
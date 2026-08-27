import React, { useState, useEffect } from 'react';
import {
  Mail, ExternalLink, Code2, Download,
  Menu, X, MapPin
} from 'lucide-react';
import { 
  FaReact, FaPython, FaPhp, FaHtml5, FaGitAlt, FaGithub, FaDocker, FaLinkedin, FaCode
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
        <a href="#hero" className="gradient-text nav-logo">İdilUnver.dev</a>

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

/*/* ───────── PROJECTS ───────── */
const projects = [
  {
    title: 'Kablosuz Sensör Ağlarına Dayalı Akıllı Sera İzleme ve Kontrol Sistemi',
    subtitle: 'Bitirme Projesi · 2026',
    desc: 'ESP32 sensörleri, Python async backend ve Flutter entegrasyonu ile otonom IoT izleme sistemi. Gemini Flash AI ile çevresel otomasyon ve Digital Twin simülatörü içerir.',
    tags: ['ESP32', 'Python', 'Flutter', 'Gemini AI', 'IoT'],
    github: 'https://github.com/idilunver/smart-greenhouse',
    demo: 'https://idilunver.github.io/smart-greenhouse/', // Canlı demo URL'in olduğunda buraya ekleyebilirsin: 'https://...'
    color: '#6366f1',
  },
  {
    title: 'SmartStock — Stok Yönetimi',
    subtitle: 'Envanter & Talep Tahmini · 2026',
    desc: 'React/TypeScript ve Firebase ile gerçek zamanlı stok yönetim sistemi. Pandas ETL hattı, PostgreSQL entegrasyonu ve hareketli ortalama ile stok tükenme öngörüsü.',
    tags: ['React', 'TypeScript', 'Firebase', 'PostgreSQL', 'Pandas'],
    github: 'https://github.com/idilunver/smart-stock',
    demo: 'https://idilunver.github.io/smart-stock/',
    color: '#a855f7',
  },
  {
    title: 'NEXORA E-Ticaret Platformu',
    subtitle: 'Full Stack · Staj Projesi · 2025',
    desc: 'React 19, Material UI ve PHP/MySQL ile geliştirilmiş e-ticaret platformu. JSON tabanlı CMS, TR/EN çoklu dil desteği ve GitHub Pages CI/CD entegrasyonu.',
    tags: ['React 19', 'Material UI', 'PHP', 'MySQL', 'i18n'],
    github: 'https://github.com/idilunver/shopping_website_project',
    demo: 'https://idilunver.github.io/shopping_website_project/',
    color: '#06b6d4',
  },
];

function Projects() {
  return (
    <section id="projects" className="container">
      <h2 className="section-title gradient-text">Öne Çıkan Projeler</h2>

      <div className="projects-grid">
        {projects.map((p, idx) => (
          <div key={idx} className="glass-panel project-card">
            {/* Kart Üst Renk Vurgusu */}
            <div
              className="project-banner"
              style={{
                background: `linear-gradient(135deg, ${p.color}25, ${p.color}05)`,
                borderBottom: `1px solid ${p.color}33`,
              }}
            >
              <Code2 size={36} style={{ opacity: 0.4, color: p.color }} />
              <span className="project-subtitle-badge" style={{ borderColor: `${p.color}55`, color: p.color }}>
                {p.subtitle}
              </span>
            </div>

            {/* Kart İçeriği */}
            <div className="project-body">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>

              {/* Teknoloji Etiketleri */}
              <div className="project-tags">
                {p.tags.map(t => (
                  <span key={t} className="project-tag">
                    {t}
                  </span>
                ))}
              </div>

              {/* Çift Eylem Butonları */}
              <div className="project-actions">
                {p.demo ? (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                ) : (
                  <span className="badge-demo-off">Backend / System Project</span>
                )}

                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    <FaGithub size={15} /> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────── CONTACT ───────── */
function Contact() {
  const WEB3_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '62992e41-a41a-400e-806c-2f5c59d50ab7';

  return (
    <section id="contact" className="container">
      <h2 className="section-title gradient-text">İletişim</h2>

      <div className="glass-panel contact-panel" style={{ maxWidth: 920, margin: '0 auto', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ marginTop: 0 }}>Bana Ulaşın</h3>
          <p style={{ color: 'var(--text-muted)' }}>
            Proje teklifleri, staj başvuruları veya genel sorular için aşağıdaki formu kullanabilirsiniz.
            Gönderimler Web3Forms aracılığıyla bana iletilecek; Web3Forms kontrol panelinden e-posta bildirimleri etkinleştirebilirsiniz.
          </p>
          <a href="mailto:unveridil@gmail.com" className="btn btn-outline" style={{ marginTop: 12 }}>
            <Mail size={16} style={{ marginRight: 8 }} /> E-posta Gönder
          </a>
        </div>

        <form action="https://api.web3forms.com/submit" method="POST" style={{ flex: 1 }}>
          <input type="hidden" name="access_key" value={WEB3_KEY} />
          <input type="hidden" name="subject" value="Portfolyo iletişim formu" />

          <label style={{ display: 'block', marginBottom: 6 }}>Adınız</label>
          <input name="name" type="text" required style={{ width: '100%' }} />

          <label style={{ display: 'block', marginTop: 10, marginBottom: 6 }}>E-posta</label>
          <input name="email" type="email" required style={{ width: '100%' }} />

          <label style={{ display: 'block', marginTop: 10, marginBottom: 6 }}>Mesaj</label>
          <textarea name="message" rows={6} required style={{ width: '100%' }} />

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: 12 }}>
            <button type="submit" className="btn btn-primary">Gönder</button>
            <button type="reset" className="btn btn-outline">Temizle</button>
          </div>
        </form>
      </div>
    </section>
  );
}

/* ───────── CONTACT ───────── */
function Contact() {
  const WEB3_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '62992e41-a41a-400e-806c-2f5c59d50ab7';

  return (
    <section id="contact" className="container">
      <h2 className="section-title gradient-text">İletişim</h2>

      <div className="glass-panel contact-grid" style={{ maxWidth: 920, margin: '0 auto' }}>
        <div style={{ flex: 1 }}>
          <h3>Birlikte çalışalım</h3>
          <p style={{ color: 'var(--text-muted)' }}>
            Yeni projeler, staj veya işbirliği teklifleri için aşağıdaki formu doldurabilirsiniz.
          </p>
          <p style={{ marginTop: 12 }}>
            Alternatif olarak doğrudan e-posta göndermek isterseniz:
          </p>
          <a href="mailto:unveridil@gmail.com" className="btn btn-outline" style={{ marginTop: 12 }}>
            <Mail size={16} style={{ marginRight: 8 }} /> E-posta Gönder
          </a>
        </div>

        <form action="https://api.web3forms.com/submit" method="POST" className="contact-form" style={{ flex: 1 }}>
          <input type="hidden" name="access_key" value={WEB3_KEY} />

          <label>İsim</label>
          <input type="text" name="name" placeholder="Adınız" required />

          <label style={{ marginTop: 8 }}>E-posta</label>
          <input type="email" name="email" placeholder="E-posta adresiniz" required />

          <label style={{ marginTop: 8 }}>Mesaj</label>
          <textarea name="message" rows={6} placeholder="Mesajınız" required />

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: 12, justifyContent: 'flex-end' }}>
            <button type="submit" className="btn btn-primary">Gönder</button>
            <button type="reset" className="btn btn-outline">Temizle</button>
          </div>
        </form>
      </div>
    </section>
  );
}

/* ───────── FOOTER / CONTACT ───────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ textAlign: 'center' }}>
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
      <Contact />
      <Footer />
    </>
  );
}
import { useState, useEffect } from 'react'
import { profile, projects, jobs, skillsCategories, certs, marquee } from './data'
import ParticleCanvas from './components/ParticleCanvas'
import TerminalIde from './components/TerminalIde'
import ProjectModal from './components/ProjectModal'
import ContactModal from './components/ContactModal'
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Sparkles,
  ArrowRight,
  Code2,
  Cpu,
  Database,
  Smartphone,
  GitBranch,
  Search,
  CheckCircle2,
  Copy,
  Check,
  Moon,
  Sun,
  Zap,
  Clock,
  ChevronRight,
  Trophy,
  Layout,
  BarChart3,
  Car,
  Hotel,
  Award
} from 'lucide-react'

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  )
}

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

// Map project icons dynamically
const projectIcons = {
  Trophy,
  Cpu,
  Layout,
  BarChart3,
  Car,
  Hotel
}

// Map skill category icons dynamically
const skillCatIcons = {
  Code2,
  Smartphone,
  Database,
  Cpu,
  GitBranch
}

export default function App() {
  const [isSwapped, setIsSwapped] = useState(false)
  const [activeTab, setActiveTab] = useState('tous')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [theme, setTheme] = useState('dark') // 'dark', 'light', 'cyber'
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [activeSection, setActiveSection] = useState('top')

  const roles = [
    'Développeur Full-Stack (JEE & React)',
    'Spécialiste IoT & Microcontrôleurs ESP32',
    'Data Visualisation & Tableaux de bord',
    'Élève Ingénieur EMSI Rabat (5e Année)'
  ]

  // Role typewriter cycle effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  // Mouse spotlight positioning
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Theme switcher handler
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : theme === 'light' ? 'cyber' : 'dark'
    setTheme(nextTheme)
    document.body.className = `${nextTheme}-theme`
  }

  // Copy email toast notification
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setToastMessage('Email copié dans le presse-papier !')
    setTimeout(() => setToastMessage(''), 3000)
  }

  // Filter projects by category and search query
  const filteredProjects = projects.filter((p) => {
    const matchesCategory = activeTab === 'tous' || p.category === activeTab
    const matchesSearch =
      p.t.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.d.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* Background Interactive Elements */}
      <ParticleCanvas />
      <div className="mouse-spotlight" />
      <div className="ambient-glow blue" />
      <div className="ambient-glow purple" />
      <div className="ambient-glow emerald" />
      <div className="bg-grid-pattern" />

      {/* Floating Modern Header Navigation */}
      <nav className="floating-nav">
        <a href="#top" className={`nav-link ${activeSection === 'top' ? 'active' : ''}`}>
          <Sparkles size={15} color="var(--cyan)" /> Saad
        </a>
        <div className="nav-menu-links">
          <a href="#projets" className="nav-link">
            Projets
          </a>
          <a href="#about" className="nav-link">
            À propos
          </a>
          <a href="#parcours" className="nav-link">
            Parcours
          </a>
        </div>

        {/* Social Media Buttons at the top */}
        <div className="nav-social-buttons">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-icon github"
            title="GitHub (sa3deddine)"
          >
            <GithubIcon size={15} />
            <span className="social-label">GitHub</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-icon linkedin"
            title="LinkedIn (Saad Eddine Laouina)"
          >
            <LinkedinIcon size={15} />
            <span className="social-label">LinkedIn</span>
          </a>
          <a
            href={profile.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-icon instagram"
            title="Instagram (sa3d_ed1l)"
          >
            <InstagramIcon size={15} />
            <span className="social-label">Instagram</span>
          </a>
        </div>

        <div className="status-badge">
          <span className="pulse-dot" /> {profile.status}
        </div>

        <div className="nav-actions">
          <button className="theme-toggle-btn" onClick={toggleTheme} title={`Mode actu: ${theme}`}>
            {theme === 'dark' ? <Moon size={16} /> : theme === 'light' ? <Sun size={16} /> : <Zap size={16} color="var(--cyan)" />}
          </button>

          <button className="nav-cta" onClick={() => setIsContactOpen(true)}>
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-container" id="top">
        <div className="hero-grid">
          {/* Left Hero Content */}
          <div className="hero-left">
            <div className="badge-tag">
              <Sparkles size={14} /> {profile.school}
            </div>

            <h2 className="hero-name">LAOUINA Saad Eddine</h2>

            <h1 className="hero-title">
              Ingénieur <span className="text-gradient">Full-Stack</span> &amp; Data Viz
            </h1>

            <div className="role-typing">
              <span>&gt; {roles[currentRoleIndex]}</span>
              <span className="typing-cursor" />
            </div>

            <p className="hero-desc">{profile.summary}</p>

            <div className="hero-btns">
              <a href="#projets" className="btn-primary">
                Voir mes projets <ArrowRight size={16} />
              </a>
              <button className="btn-secondary" onClick={() => setIsContactOpen(true)}>
                Me contacter
              </button>
            </div>

            {/* 5 Contact Shortcuts: Gmail, Phone, LinkedIn, GitHub, Instagram */}
            <div className="hero-contacts-bar">
              <button className="hero-contact-pill" onClick={handleCopyEmail} title="Copier l'email">
                <Mail size={15} color="var(--cyan)" /> {profile.email}
              </button>
              <a className="hero-contact-pill" href={profile.phoneHref}>
                <Phone size={15} color="var(--emerald)" /> {profile.phone}
              </a>
              <a className="hero-contact-pill" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon size={15} /> LinkedIn
              </a>
              <a className="hero-contact-pill" href={profile.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon size={15} /> GitHub
              </a>
              <a className="hero-contact-pill" href={profile.instagram} target="_blank" rel="noopener noreferrer">
                <InstagramIcon size={15} /> Instagram
              </a>
            </div>
          </div>

          {/* Center Interactive Dual Portrait */}
          <div className="hero-center">
            <div
              className="me-card-wrapper"
              onMouseEnter={() => setIsSwapped(true)}
              onMouseLeave={() => setIsSwapped(false)}
              onMouseMove={() => !isSwapped && setIsSwapped(true)}
              onClick={() => setIsSwapped(!isSwapped)}
            >
              <div className="me-card-inner">
                <img
                  className={`me-img ${isSwapped ? 'hidden' : 'visible'}`}
                  src="/about.jpg"
                  alt="Portrait Saad Eddine Laouina"
                />
                <img
                  className={`me-img ${isSwapped ? 'visible' : 'hidden'}`}
                  src="/hero.jpg"
                  alt="Portrait alternate Saad Eddine Laouina"
                />
              </div>

              {/* Orbiting tech pills */}
              <div className="orbit-pill p1">
                <Code2 size={13} color="#38BDF8" /> React &amp; JEE
              </div>
              <div className="orbit-pill p2">
                <Cpu size={13} color="#F472B6" /> ESP32 IoT
              </div>
              <div className="orbit-pill p3">
                <Database size={13} color="#34D399" /> MongoDB / Postgres
              </div>
            </div>
          </div>

          {/* Right Interactive Live Terminal */}
          <div className="hero-right">
            <TerminalIde email={profile.email} />
          </div>
        </div>
      </header>

      {/* Infinite Tech Marquee */}
      <div className="marquee-container">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((tech, i) => (
            <div key={i} className="marquee-pill">
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--cyan)' }} />
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Projects Showcase Section */}
      <section id="projets">
        <div className="wrap">
          <div className="section-header">
            <span className="section-tag">
              <Code2 size={14} /> Portfolio &amp; Projets
            </span>
            <h2 className="section-title">Mes Dernières Réalisations</h2>
            <p className="section-sub">Du web full-stack réactif aux systèmes d'ingénierie embarquée IoT.</p>
          </div>

          {/* Project Controls: Category Tabs & Search Bar */}
          <div className="project-controls">
            <div className="filter-tabs">
              {[
                { id: 'tous', label: 'Tous les projets' },
                { id: 'fullstack', label: 'Full-Stack' },
                { id: 'iot', label: 'IoT & Embarqué' },
                { id: 'dataviz', label: 'DataViz' },
                { id: 'desktop', label: 'Desktop' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="search-box">
              <Search className="search-icon" size={16} />
              <input
                type="text"
                placeholder="Rechercher par technologie..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((p) => {
              const IconComponent = projectIcons[p.iconName] || Code2
              return (
                <article key={p.id} className="project-card">
                  <div
                    className="card-header-visual"
                    style={{
                      background: `linear-gradient(135deg, ${p.bgBadge}, rgba(15,23,42,0.9))`
                    }}
                  >
                    <div className="card-icon-badge">
                      <IconComponent size={32} />
                    </div>
                    <span className="card-category-badge">{p.category}</span>
                  </div>

                  <div className="card-body">
                    <h3 className="card-title">{p.t}</h3>
                    <p className="card-desc">{p.d}</p>

                    <div className="card-tags">
                      {p.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <div className="card-footer">
                      <button className="btn-details" onClick={() => setSelectedProject(p)}>
                        Voir détails <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section className="about-section" id="about">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-img-box">
              <img src="/about.jpg" alt="Saad Eddine Laouina" loading="lazy" />
              <div className="about-experience-badge">
                <Award size={24} color="var(--cyan)" />
                <div>
                  <strong style={{ display: 'block', fontSize: '15px' }}>5e Année EMSI</strong>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Promo 2027</span>
                </div>
              </div>
            </div>

            <div className="about-text">
              <span className="section-tag">
                <Sparkles size={14} /> À Propos de Moi
              </span>
              <h2 className="section-title">Étudiant Ingénieur en Quête d'Excellence</h2>
              <p>
                Actuellement en 5<sup>e</sup> année à l'EMSI Rabat (Option Développement Digital &amp; Systèmes d'Information), je prépare activement mon diplôme d'Ingénieur d'État.
              </p>
              <p>
                Passionné par la création de logiciels complets, de l'architecture backend distribuée aux interfaces utilisateur soignées et interactives. J'ai acquis une solide expérience pratique à travers deux stages significatifs au <strong>Ministère de l'Économie et des Finances (DEPF)</strong> et chez <strong>Leoni</strong>.
              </p>

              {/* Skills Progress Matrix */}
              <div className="skills-matrix">
                {skillsCategories.map((cat) => {
                  const CatIcon = skillCatIcons[cat.icon] || Code2
                  return (
                    <div key={cat.name} className="skill-cat-card">
                      <div className="skill-cat-header">
                        <div className="skill-cat-icon" style={{ color: cat.color }}>
                          <CatIcon size={22} />
                        </div>
                        <h4 className="skill-cat-title">{cat.name}</h4>
                      </div>

                      {cat.skills.map((skill) => (
                        <div key={skill.name} className="skill-item">
                          <div className="skill-info">
                            <span>{skill.name}</span>
                            <span style={{ color: cat.color }}>{skill.level}%</span>
                          </div>
                          <div className="progress-bar-bg">
                            <div
                              className="progress-bar-fill"
                              style={{ width: `${skill.level}%`, background: cat.color }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parcours Timeline Section */}
      <section id="parcours">
        <div className="wrap">
          <div className="section-header">
            <span className="section-tag">
              <GitBranch size={14} /> Expérience &amp; Formation
            </span>
            <h2 className="section-title">Mon Parcours Académique &amp; Professionnel</h2>
            <p className="section-sub">Une trajectoire axée sur le développement logiciel, la data et les technologies de pointe.</p>
          </div>

          <div className="timeline">
            {jobs.map((j) => (
              <div className="timeline-item" key={j.t}>
                <div className="timeline-node" />
                <div className="timeline-card">
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-role">{j.t}</h3>
                      <span className="timeline-company">{j.w}</span>
                    </div>
                    <span className="timeline-date">{j.when}</span>
                  </div>

                  <ul className="timeline-list">
                    {j.li.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  {j.skillsUsed && (
                    <div className="card-tags">
                      {j.skillsUsed.map((sk) => (
                        <span key={sk} style={{ color: 'var(--cyan)' }}>
                          {sk}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="certs-section">
            <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Award color="var(--amber)" size={24} /> Certifications Internationales
            </h3>
            <div className="certs-grid">
              {certs.map((c) => (
                <div key={c.name} className="cert-card">
                  <div className="cert-icon">
                    <CheckCircle2 size={22} />
                  </div>
                  <div>
                    <h4 className="cert-title">{c.name}</h4>
                    <span className="cert-issuer">
                      {c.issuer} · {c.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer & Contact Section */}
      <footer className="footer-section" id="contact">
        <div className="wrap">
          <div className="contact-box">
            <div>
              <span className="section-tag">
                <Sparkles size={14} /> Parlons de votre projet
              </span>
              <h2 className="contact-big-text">
                À la recherche d'un <span className="text-gradient">Stage de Fin d'Études (PFE 2027)</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginBottom: '30px' }}>
                N'hésitez pas à me contacter directement par mail ou par téléphone.
              </p>

              <button className="mail-link-box" onClick={handleCopyEmail}>
                <Mail size={24} /> {profile.email} <Copy size={18} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setIsContactOpen(true)}>
                <Mail size={18} /> Envoyer un message direct
              </button>

              <a className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }} href={profile.phoneHref}>
                <Phone size={18} /> {profile.phone}
              </a>

              <div style={{ padding: '16px', borderRadius: '16px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', fontSize: '14px', color: 'var(--text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', color: 'var(--text)' }}>
                  <MapPin size={16} color="var(--cyan)" /> {profile.city}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Globe size={16} color="var(--emerald)" /> {profile.langsText}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Socials */}
          <div className="footer-social-links">
            <a className="social-card" href={profile.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon size={18} /> GitHub (sa3deddine)
            </a>
            <a className="social-card" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedinIcon size={18} /> LinkedIn (Saad Eddine Laouina)
            </a>
            <a className="social-card" href={profile.instagram} target="_blank" rel="noopener noreferrer">
              <InstagramIcon size={18} /> Instagram (sa3d_ed1l)
            </a>
          </div>

          <div style={{ marginTop: '50px', paddingTop: '20px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', color: 'var(--text-dim)', fontSize: '13px' }}>
            <span>&copy; {new Date().getFullYear()} Saad Eddine Laouina. Tous droits réservés.</span>
            <a href="#top" style={{ color: 'var(--cyan)', textDecoration: 'none', fontWeight: '600' }}>
              ▲ Retour en haut
            </a>
          </div>
        </div>
      </footer>

      {/* Modals & Toast Notifications */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultEmail={profile.email}
      />

      {toastMessage && (
        <div className="toast-box">
          <Check size={18} color="#34D399" />
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  )
}

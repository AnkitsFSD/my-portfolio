// ============================================================
// ABOUT.JS – About Me Section
// ============================================================

const About = () => {
  const { personal } = PORTFOLIO_DATA;

  const highlights = [
    { icon: "fas fa-map-marker-alt", label: "Location",   value: personal.location },
    { icon: "fas fa-envelope",       label: "Email",      value: personal.email },
    { icon: "fas fa-code-branch",    label: "Specialty",  value: "MERN & Automation" },
    { icon: "fas fa-graduation-cap", label: "Education",  value: "B.Tech CSE Graduate" },
  ];

  const values = [
    { icon: "fas fa-cogs",           title: "System Builder", desc: "I enjoy designing automated pipelines that eliminate repetitive manual workflows." },
    { icon: "fas fa-bug",            title: "QA Mindset",     desc: "I believe in building resilient software. Finding edge cases is half the fun." },
    { icon: "fas fa-infinity",       title: "Fast Learner",   desc: "Tech evolves fast. I stay ahead by constantly exploring new tools like n8n and AI Agents." },
    { icon: "fas fa-star",           title: "Quality First",  desc: "Clean code, scalable architecture, and a solid foundation — always." },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <AnimatedSection>
          <div className="section-header">
            <span className="section-tag">Who I Am</span>
            <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
            <p className="section-subtitle">A glimpse into my journey as a continuous learner and developer.</p>
          </div>
        </AnimatedSection>

        <div className="about-grid">
          {/* Left – Avatar & Info Card */}
          <AnimatedSection direction="left" className="about-left">
            <div className="about-avatar-card">
              <div className="about-avatar-wrapper">
                <img src={personal.avatar} alt={personal.name} className="about-avatar" />
                {personal.available && (
                  <div className="available-badge">
                    <span className="status-dot" />
                    Available for hire
                  </div>
                )}
              </div>

              <div className="about-info-list">
                {highlights.map((item, i) => (
                  <div key={i} className="about-info-item">
                    <div className="info-icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="info-text">
                      <span className="info-label">{item.label}</span>
                      <span className="info-value">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div className="about-socials">
                {personal.socials.map((s, i) => (
                  <a key={i} href={s.url} className="about-social-link" title={s.name} aria-label={s.name}>
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right – Bio & Values */}
          <AnimatedSection direction="right" className="about-right">
            <div className="about-content">
              <h3 className="about-greeting">
                Hi there! I'm <span className="text-gradient">{personal.name}</span>
              </h3>
              <p className="about-bio">{personal.bio}</p>
              <p className="about-bio">{personal.bioExtended}</p>

              {/* Stats */}
              <div className="about-stats-grid">
                {personal.stats.map((stat, i) => (
                  <div key={i} className="about-stat-card">
                    <span className="about-stat-value">{stat.value}</span>
                    <span className="about-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="about-actions">
                <a href={personal.resumeUrl} className="btn btn-primary" target="_blank">
                  <i className="fas fa-file-alt"></i> Download Resume
                </a>
                <button
                  className="btn btn-outline"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <i className="fas fa-paper-plane"></i> Let's Talk
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Values Row */}
        <div className="values-grid">
          {values.map((v, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="value-card">
                <div className="value-icon">
                  <i className={v.icon}></i>
                </div>
                <h4 className="value-title">{v.title}</h4>
                <p className="value-desc">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
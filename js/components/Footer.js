// ============================================================
// FOOTER.JS – Footer Component
// ============================================================

const Footer = () => {
  const { personal } = PORTFOLIO_DATA;
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { id: 'home',       label: 'Home' },
    { id: 'about',      label: 'About' },
    { id: 'skills',     label: 'Skills' },
    { id: 'projects',   label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact',    label: 'Contact' },
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-bracket">&lt;</span>
                <span className="logo-name">Ankit</span>
                <span className="logo-dot">.</span>
                <span className="logo-dev">dev</span>
                <span className="logo-bracket">/&gt;</span>
              </div>
              <p className="footer-tagline">
                Building scalable MERN applications and intelligent automation workflows.
              </p>
              <div className="footer-socials">
                {personal.socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    className="footer-social"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    title={s.name}
                  >
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links-section">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map(link => (
                  <li key={link.id}>
                    <button className="footer-link" onClick={() => scrollTo(link.id)}>
                      <i className="fas fa-chevron-right"></i> {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Summary */}
            <div className="footer-contact-section">
              <h4 className="footer-heading">Get In Touch</h4>
              <div className="footer-contact-list">
                <a href={`mailto:${personal.email}`} className="footer-contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>{personal.email}</span>
                </a>
                <div className="footer-contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{personal.location}</span>
                </div>
                <div className="footer-availability">
                  <span className="status-dot" />
                  <span>Open to opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            &copy; {year} <span className="text-gradient">{personal.name}</span>. Built with React &amp; ♥
          </p>
          <button className="back-to-top" onClick={() => scrollTo('home')} aria-label="Back to top">
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};
// ============================================================
// NAVBAR.JS – Sticky Navigation with Active Section Detection
// ============================================================

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
  
  // Checking active section
  const activeSection = typeof useActiveSection !== 'undefined' ? useActiveSection(sections) : 'home';

  // Optimized Scroll Event for Navbar & Progress Bar (Fixes Lag)
  React.useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Update Navbar background
          setScrolled(window.scrollY > 20);

          // Update Progress Bar without re-rendering React component
          const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolledProgress = height > 0 ? (winScroll / height) * 100 : 0;
          
          const progressBar = document.getElementById('scroll-progress');
          if (progressBar) progressBar.style.width = scrolledProgress + "%";

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navLinks = [
    { id: 'home',       label: 'Home' },
    { id: 'about',      label: 'About' },
    { id: 'skills',     label: 'Skills' },
    { id: 'projects',   label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact',    label: 'Contact' },
  ];

  return (
    <React.Fragment>
      {/* Scroll Progress Bar (Updated via direct DOM to prevent lag) */}
      <div id="scroll-progress" className="scroll-progress-bar" style={{ width: '0%' }} />

      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo */}
          <button className="nav-logo" onClick={() => scrollTo('home')}>
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name">Ankit</span>
            <span className="logo-dot">.</span>
            <span className="logo-dev">dev</span>
            <span className="logo-bracket">/&gt;</span>
          </button>

          {/* Desktop Links */}
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.id}>
                <button
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="nav-actions">
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              className="btn btn-outline btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-download"></i> Resume
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link, i) => (
            <button
              key={link.id}
              className={`mobile-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => scrollTo(link.id)}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </button>
          ))}
          <a href={PORTFOLIO_DATA.personal.resumeUrl} className="btn btn-primary btn-sm mt-2">
            <i className="fas fa-download"></i> Download Resume
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};
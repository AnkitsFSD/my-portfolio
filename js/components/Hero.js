// ============================================================
// HERO.JS – Animated Hero Section for Ankit
// ============================================================

const ParticleField = () => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles (Simulating data nodes)
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 1.5,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        // Using a techy cyan/indigo color for automation vibe
        ctx.fillStyle = `rgba(16, 185, 129, ${p.alpha})`; 
        ctx.fill();
      });

      // Draw connections (simulating API/n8n workflows)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" />;
};

// ---- Floating Badge ----
const FloatingBadge = ({ icon, label, style }) => (
  <div className="floating-badge" style={style}>
    <i className={icon}></i>
    <span>{label}</span>
  </div>
);

// ---- Vanilla React Magnetic Button (No dependencies needed) ----
const MagneticButton = ({ children, className, onClick }) => {
  const buttonRef = React.useRef(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const el = buttonRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Mouse aur button ke center ka distance
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;

    // 0.3 is the pull strength
    setPosition({ x: distX * 0.3, y: distY * 0.3 });
  };

  const handleMouseLeave = () => {
    // Mouse hatne par wapas original position par snap karega
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: "inline-block" }}
    >
      <button
        ref={buttonRef}
        className={className}
        onClick={onClick}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          // Jab mouse upar ho toh fast move kare, jab hate toh smooth wapas aaye
          transition: position.x === 0 ? "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)" : "transform 0.1s linear",
          willChange: "transform"
        }}
      >
        {children}
      </button>
    </div>
  );
};

// ---- Hero Component ----
const Hero = () => {
  // Access data from the global PORTFOLIO_DATA (from data.js)
  const { personal } = PORTFOLIO_DATA;
  
  // Assuming useTypingEffect is defined globally in utils.js
  const typedText = typeof useTypingEffect !== 'undefined' 
    ? useTypingEffect(personal.tagline, 100, 50, 2200) 
    : personal.tagline[0]; // Fallback if hook isn't loaded

  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <ParticleField />

      {/* Gradient Blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className={`hero-content ${loaded ? 'hero-loaded' : ''}`}>
        {/* Status Badge */}
        <div className="hero-badge">
          <span className="status-dot" />
          <span>Available for new opportunities</span>
        </div>

        {/* Greeting */}
        <p className="hero-greeting">
          <span className="wave">👋</span> Hello, I'm
        </p>

        {/* Name */}
        <h1 className="hero-name">
          {personal.name.split(' ').map((word, i) => (
            <span key={i} className={i === 1 ? 'name-highlight' : ''}>{word} </span>
          ))}
        </h1>

        {/* Typing Effect */}
        <h2 className="hero-tagline">
          <span className="tagline-prefix">I'm a </span>
          <span className="typed-text">{typedText}</span>
          <span className="cursor">|</span>
        </h2>

        {/* Bio */}
        <p className="hero-bio">{personal.bio}</p>

        {/* Stats Row */}
        <div className="hero-stats">
          {personal.stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons - UPDATED TO MAGNETIC BUTTONS */}
        <div className="hero-actions">
          <MagneticButton className="btn btn-primary btn-lg" onClick={() => scrollToSection('projects')}>
            <i className="fas fa-rocket"></i> View My Work
          </MagneticButton>
          <MagneticButton className="btn btn-ghost btn-lg" onClick={() => scrollToSection('contact')}>
            <i className="fas fa-paper-plane"></i> Get In Touch
          </MagneticButton>
        </div>

        {/* Social Links */}
        <div className="hero-socials">
          {personal.socials.map((s, i) => (
            <a
              key={i}
              href={s.url}
              className="social-link"
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

      {/* Avatar / Visual Side */}
      <div className={`hero-visual ${loaded ? 'hero-loaded' : ''}`}>
        <div className="avatar-wrapper">
          <div className="avatar-ring ring-1" />
          <div className="avatar-ring ring-2" />
          <div className="avatar-ring ring-3" />
          <div className="avatar-container">
            <img
              src={personal.avatar}
              alt={personal.name}
              className="avatar-img"
            />
          </div>
        </div>

        {/* Floating Badges Updated for Ankit's Skills */}
        <FloatingBadge icon="fab fa-react" label="MERN Stack" style={{ top: '10%', right: '-17%' }} />
        <FloatingBadge icon="fas fa-project-diagram" label="n8n Workflows" style={{ bottom: '15%', right: '-20%' }} />
        <FloatingBadge icon="fas fa-robot" label="AI Agents" style={{ bottom: '10%', left: '-15%' }} />
        <FloatingBadge icon="fas fa-bug" label="Platform QA" style={{ top: '15%', left: '-18%' }} />
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};
// ============================================================
// PROJECTS.JS – Projects Section with Lazy Loading & Filters
// ============================================================

const ProjectCard = ({ project, index }) => {
  // Assuming useInView is defined in utils.js
  const [ref, inView] = typeof useInView !== 'undefined' ? useInView() : [null, true];
  const [imgLoaded, setImgLoaded] = React.useState(false);

  return (
    <div
      ref={ref}
      className={`project-card animated-section ${inView ? 'is-visible' : ''} ${project.featured ? 'project-featured' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      {/* Image */}
      <div className="project-img-wrapper">
        {!imgLoaded && <div className="img-skeleton" />}
        <img
          src={project.image}
          alt={project.title}
          className={`project-img ${imgLoaded ? 'loaded' : ''}`}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
        />
        <div className="project-overlay">
          <div className="project-links">
            <a href={project.github} className="proj-link" target="_blank" rel="noopener noreferrer" title="View Code">
              <i className="fab fa-github"></i>
            </a>
            <a href={project.live} className="proj-link" target="_blank" rel="noopener noreferrer" title="Live Demo">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
        {project.featured && (
          <div className="project-featured-badge">
            <i className="fas fa-star"></i> Featured
          </div>
        )}
        <div className="project-category-badge">{project.category}</div>
      </div>

      {/* Content */}
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="project-tag">{tag}</span>
          ))}
        </div>
        <div className="project-footer">
          <a href={project.github} className="project-action-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Source Code
          </a>
          <a href={project.live} className="project-action-link primary" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-external-link-alt"></i> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { projects } = PORTFOLIO_DATA;
  const [activeFilter, setActiveFilter] = React.useState('All');
  
  // Get unique categories
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  // Staggered mount after filter change
  const [key, setKey] = React.useState(0);
  const handleFilter = (cat) => {
    setActiveFilter(cat);
    setKey(prev => prev + 1);
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Header */}
        <AnimatedSection>
          <div className="section-header">
            <span className="section-tag">What I've Built</span>
            <h2 className="section-title">My <span className="text-gradient">Projects</span></h2>
            <p className="section-subtitle">
              A selection of my core engineering work — from AI-driven automation workflows to scalable MERN applications.
            </p>
          </div>
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection delay={100}>
          <div className="filter-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-tab ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => handleFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="projects-grid" key={key}>
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection>
          <div className="projects-cta">
            <p className="cta-text">Want to see more of my code?</p>
            <a
              href={PORTFOLIO_DATA.personal.socials.find(s => s.name === 'GitHub')?.url}
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> View All on GitHub
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
// ============================================================
// SKILLS.JS – Skills Section with Animated Bars
// ============================================================

const SkillBar = ({ name, level, color, inView }) => {
  return (
    <div className="skill-bar-item">
      <div className="skill-bar-header">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{
            width: inView ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${color}cc)`,
            transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <div className="skill-glow" style={{ background: color }} />
        </div>
      </div>
    </div>
  );
};

const SkillCategory = ({ category, index }) => {
  // Assuming useInView is defined globally in utils.js
  const [ref, inView] = typeof useInView !== 'undefined' ? useInView() : [null, true];

  return (
    <div ref={ref} className={`skill-category animated-section ${inView ? 'is-visible' : ''}`} style={{ transitionDelay: `${index * 150}ms` }}>
      <div className="skill-category-header">
        <div className="skill-cat-icon" style={{ background: `${category.color}20`, color: category.color }}>
          <i className={category.icon}></i>
        </div>
        <h3 className="skill-cat-name">{category.name}</h3>
      </div>
      <div className="skill-bars">
        {category.items.map((skill, i) => (
          <SkillBar
            key={i}
            name={skill.name}
            level={skill.level}
            color={category.color}
            inView={inView}
          />
        ))}
      </div>
    </div>
  );
};

const TechPill = ({ tech, index }) => {
  const [ref, inView] = typeof useInView !== 'undefined' ? useInView() : [null, true];
  
  // Updated icons to match Ankit's tech stack
  const techIcons = {
    'React.js': 'fab fa-react',
    'Node.js': 'fab fa-node-js',
    'Express.js': 'fas fa-server',
    'MongoDB': 'fas fa-database',
    'MySQL': 'fas fa-database',
    'JavaScript': 'fab fa-js-square',
    'n8n': 'fas fa-project-diagram',
    'AI Agents': 'fas fa-robot',
    'Webhooks': 'fas fa-link',
    'HTML5': 'fab fa-html5',
    'CSS3': 'fab fa-css3-alt',
    'Tailwind CSS': 'fas fa-palette',
    'Git': 'fab fa-git-alt',
    'GitHub': 'fab fa-github',
    'REST APIs': 'fas fa-network-wired',
    'QA Testing': 'fas fa-bug'
  };

  return (
    <div
      ref={ref}
      className={`tech-pill animated-section ${inView ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      <i className={techIcons[tech] || 'fas fa-code'}></i>
      <span>{tech}</span>
    </div>
  );
};

const Skills = () => {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <AnimatedSection>
          <div className="section-header">
            <span className="section-tag">What I Know</span>
            <h2 className="section-title">My <span className="text-gradient">Skills</span></h2>
            <p className="section-subtitle">
              A curated set of technologies I use to build scalable web applications and automate workflows.
            </p>
          </div>
        </AnimatedSection>

        {/* Skill Category Cards */}
        <div className="skills-grid">
          {skills.categories.map((cat, i) => (
            <SkillCategory key={i} category={cat} index={i} />
          ))}
        </div>

        {/* Tech Pills Cloud */}
        <AnimatedSection>
          <div className="tech-section">
            <h3 className="tech-section-title">
              <i className="fas fa-tools"></i> Technologies I Work With
            </h3>
            <div className="tech-pills">
              {skills.technologies.map((tech, i) => (
                <TechPill key={i} tech={tech} index={i} />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
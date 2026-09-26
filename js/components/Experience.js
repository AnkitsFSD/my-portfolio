// ============================================================
// EXPERIENCE.JS – Timeline Section + Testimonials
// ============================================================

const TimelineItem = ({ item, index, isLeft }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`timeline-item ${isLeft ? 'left' : 'right'} animated-section ${inView ? 'is-visible' : ''} anim-${isLeft ? 'left' : 'right'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Dot */}
      <div className={`timeline-dot ${item.type === 'education' ? 'dot-edu' : 'dot-work'}`}>
        <i className={item.type === 'education' ? 'fas fa-graduation-cap' : 'fas fa-briefcase'}></i>
      </div>

      {/* Card */}
      <div className="timeline-card">
        <div className="timeline-header">
          <div>
            <h3 className="timeline-role">{item.role}</h3>
            <p className="timeline-company">
              <i className={item.type === 'education' ? 'fas fa-university' : 'fas fa-building'}></i>
              {item.company}
            </p>
          </div>
          <span className={`timeline-period ${item.type === 'education' ? 'period-edu' : 'period-work'}`}>
            {item.period}
          </span>
        </div>

        <p className="timeline-desc">{item.description}</p>

        {/* Achievements */}
        <ul className="timeline-achievements">
          {item.achievements.map((ach, i) => (
            <li key={i} className="timeline-achievement">
              <i className="fas fa-check-circle"></i>
              {ach}
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        {item.tech.length > 0 && (
          <div className="timeline-tech">
            {item.tech.map((t, i) => (
              <span key={i} className="timeline-tech-pill">{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`testimonial-card animated-section ${inView ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="testimonial-quote-icon">
        <i className="fas fa-quote-left"></i>
      </div>
      <p className="testimonial-text">"{testimonial.quote}"</p>
      <div className="testimonial-author">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="testimonial-avatar"
          loading="lazy"
        />
        <div className="testimonial-author-info">
          <span className="testimonial-name">{testimonial.name}</span>
          <span className="testimonial-role">{testimonial.role}</span>
        </div>
      </div>
      <div className="testimonial-stars">
        {[...Array(5)].map((_, i) => (
          <i key={i} className="fas fa-star"></i>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  const { experience, testimonials } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <AnimatedSection>
          <div className="section-header">
            <span className="section-tag">My Journey</span>
            <h2 className="section-title">Experience & <span className="text-gradient">Education</span></h2>
            <p className="section-subtitle">
              A timeline of the roles, companies, and milestones that have shaped my career.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="timeline">
          <div className="timeline-line" />
          {experience.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} isLeft={i % 2 === 0} />
          ))}
        </div>

        {/* Testimonials */}
        <AnimatedSection>
          <div className="section-header" style={{ marginTop: '6rem' }}>
            <span className="section-tag">Kind Words</span>
            <h2 className="section-title">What People <span className="text-gradient">Say</span></h2>
          </div>
        </AnimatedSection>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// CONTACT.JS – Contact Section with Form
// ============================================================

const ContactInfo = ({ icon, title, value, href }) => (
  <a href={href || '#'} className="contact-info-card" target={href?.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
    <div className="contact-info-icon">
      <i className={icon}></i>
    </div>
    <div className="contact-info-text">
      <span className="contact-info-title">{title}</span>
      <span className="contact-info-value">{value}</span>
    </div>
    <i className="fas fa-arrow-right contact-info-arrow"></i>
  </a>
);

const Contact = () => {
  const { personal } = PORTFOLIO_DATA;

  const [form, setForm] = React.useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = React.useState(null); // null | 'sending' | 'success' | 'error'
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setStatus('sending');
    // Simulate async send (replace with real API call)
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    }, 1500);
  };

  const contactItems = [
    { icon: 'fas fa-envelope', title: 'Email Me',     value: personal.email,    href: `mailto:${personal.email}` },
    { icon: 'fas fa-phone',    title: 'Call Me',      value: personal.phone,    href: `tel:${personal.phone}` },
    { icon: 'fas fa-map-pin',  title: 'Based In',     value: personal.location, href: null },
    { icon: 'fab fa-linkedin', title: 'LinkedIn',     value: 'Connect with me',  href: personal.socials.find(s => s.name === 'LinkedIn')?.url },
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Header */}
        <AnimatedSection>
          <div className="section-header">
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">Let's <span className="text-gradient">Connect</span></h2>
            <p className="section-subtitle">
              Have a project in mind or just want to say hi? My inbox is always open. I'll get back to you within 24 hours.
            </p>
          </div>
        </AnimatedSection>

        <div className="contact-grid">
          {/* Left – Info */}
          <AnimatedSection direction="left" className="contact-left">
            <div className="contact-info-section">
              <h3 className="contact-info-heading">
                Ready to build something <span className="text-gradient">amazing</span> together?
              </h3>
              <p className="contact-info-desc">
                Whether you're looking to hire, collaborate on an open-source project, or just talk tech,
                I'd love to hear from you.
              </p>

              <div className="contact-info-cards">
                {contactItems.map((item, i) => (
                  <ContactInfo key={i} {...item} />
                ))}
              </div>

              {/* Availability Indicator */}
              <div className="availability-card">
                <div className="avail-pulse">
                  <span className="status-dot large" />
                </div>
                <div className="avail-text">
                  <strong>Currently Available</strong>
                  <span>Open to full-time & freelance roles</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right – Form */}
          <AnimatedSection direction="right" className="contact-right">
            <div className="contact-form-card">
              <h3 className="form-title">Send Me a Message</h3>

              {status === 'success' && (
                <div className="form-success">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <strong>Message sent successfully!</strong>
                    <span>I'll get back to you soon.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                    <label className="form-label">Your Name *</label>
                    <div className="input-wrapper">
                      <i className="fas fa-user input-icon"></i>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>
                  <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                    <label className="form-label">Your Email *</label>
                    <div className="input-wrapper">
                      <i className="fas fa-envelope input-icon"></i>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <div className="input-wrapper">
                    <i className="fas fa-tag input-icon"></i>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Project inquiry, collaboration..."
                    />
                  </div>
                </div>

                <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary btn-full" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <React.Fragment>
                      <i className="fas fa-spinner fa-spin"></i> Sending...
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <i className="fas fa-paper-plane"></i> Send Message
                    </React.Fragment>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

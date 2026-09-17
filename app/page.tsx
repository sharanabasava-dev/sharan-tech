 "use client";

import { FormEvent, useState } from "react";

const services = [
  {
    icon: "🚀",
    title: "Websites & Portfolios",
    description:
      "Clean, modern and responsive websites for individuals, startups and businesses.",
    features: ["Business websites", "Portfolio websites", "Landing pages", "Responsive design"],
  },
  {
    icon: "📱",
    title: "Android Apps",
    description:
      "Functional Android applications for your business, idea or personal project.",
    features: ["Business apps", "Personal apps", "Student projects", "API integration"],
  },
  {
    icon: "🤖",
    title: "AI Chatbots",
    description:
      "AI-powered assistants for websites and messaging platforms to answer questions and capture leads.",
    features: ["Website chatbot", "FAQ automation", "Lead capture", "Customer support"],
  },
  {
    icon: "🧠",
    title: "AI Agents",
    description:
      "Automate repetitive manual work with practical AI agents and workflows.",
    features: ["Task automation", "Data entry", "Follow-ups", "Workflow automation"],
  },
  {
    icon: "🎓",
    title: "Student & College Projects",
    description:
      "End-to-end final-year projects with implementation, documentation and deployment guidance.",
    features: ["Final-year projects", "Mini projects", "Documentation", "Deployment guidance"],
  },
  {
    icon: "🛠️",
    title: "Support & Maintenance",
    description:
      "Ongoing updates, bug fixes, improvements and technical support after launch.",
    features: ["Bug fixes", "Website updates", "Performance improvements", "Technical support"],
  },
  {
    icon: "☁️",
    title: "DevOps & Cloud Consulting",
    description:
      "Cloud setup, deployment automation and infrastructure guidance for startups and growing businesses.",
    features: ["AWS & Cloud setup", "CI/CD pipelines", "Docker & Kubernetes", "Infrastructure automation"],
  },
];

const technologies = [
  "Next.js", "React", "Node.js", "Java", "Python", "Docker", "Kubernetes",
  "AWS", "Terraform", "Jenkins", "GitHub", "Argo CD", "Prometheus", "Grafana"
];

const projects = [
  {
    title: "Business Website",
    category: "Web Development",
    description:
      "A responsive business website focused on clean presentation and lead generation.",
    tech: ["Next.js", "TypeScript", "Tailwind-ready UI"],
  },
  {
    title: "AI Customer Assistant",
    category: "AI Automation",
    description:
      "A customer-facing AI assistant concept for FAQs, support and lead capture.",
    tech: ["AI", "Node.js", "API"],
  },
  {
    title: "Cloud Deployment Platform",
    category: "DevOps & Cloud",
    description:
      "A production-style deployment setup using containers, Kubernetes and cloud infrastructure.",
    tech: ["Docker", "Kubernetes", "AWS"],
  },
];

const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "Starter projects can begin from ₹10,000. Final pricing depends on pages, features, integrations and project requirements.",
  },
  {
    question: "How long does a website take?",
    answer:
      "Simple websites can be delivered in a few days. Larger websites, apps and custom integrations need more development time.",
  },
  {
    question: "Do you provide maintenance?",
    answer:
      "Yes. Support can include updates, bug fixes, performance improvements and ongoing technical assistance.",
  },
  {
    question: "Do you provide DevOps and cloud services?",
    answer:
      "Yes. Services can cover AWS/cloud setup, Docker, Kubernetes, CI/CD, Terraform and deployment automation.",
  },
];

const CONTACT = {
  whatsappNumber: "919886316467",
  phoneDisplay: "+91 63614 49867",
  email: "ksharanabasava636@gmail.com",
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function openWhatsApp(message: string) {
    if (CONTACT.whatsappNumber.includes("X")) {
      alert("Update the WhatsApp number in app/page.tsx first.");
      return;
    }

    window.open(
      `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();

    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <main>
      <nav className="navbar">
        <div className="container nav-container">
          <a className="logo" href="#home">
            <span className="logo-symbol">✦</span>
            <span>Sharan<span className="logo-highlight">Tech</span></span>
          </a>

          <button
            className="mobile-menu-button"
            type="button"
            aria-label="Open navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <button
              className="nav-cta"
              onClick={() => openWhatsApp("Hi Sharan-Tech, I would like to get a free quote.")}
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-grid" />

        <div className="container hero-container">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot" />
              Websites • Apps • AI Tools • DevOps
            </div>

            <h1>
              Your idea.
              <br />
              <span className="gradient-text">Built simple.</span>
              <br />
              Built fast.
            </h1>

            <p className="hero-description">
              Modern websites, applications, AI automation and cloud solutions
              for students, freelancers, startups and growing businesses.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-button"
                onClick={() =>
                  openWhatsApp(
                    "Hi Sharan-Tech, I am interested in your services. I would like to discuss my project."
                  )
                }
              >
                Start Your Project <span>→</span>
              </button>
              <a className="secondary-button" href="#services">
                Explore Services
              </a>
            </div>

            <div className="hero-trust">
              <div>
                <strong>₹10K+</strong>
                <span>Starter projects</span>
              </div>
              <div className="trust-divider" />
              <div>
                <strong>End-to-End</strong>
                <span>Development</span>
              </div>
              <div className="trust-divider" />
              <div>
                <strong>AI + Cloud</strong>
                <span>Technology</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="floating-card card-top">
              <span>⚡</span>
              <div>
                <strong>Fast Delivery</strong>
                <small>AI-assisted development</small>
              </div>
            </div>

            <div className="main-tech-card">
              <div className="window-bar">
                <span /><span /><span />
              </div>
              <div className="rocket-container">
                <div className="rocket-glow" />
                <div className="rocket">🚀</div>
              </div>
              <div className="tech-lines">
                <div /><div /><div />
              </div>
              <div className="code-symbols">
                <span>&lt;/&gt;</span>
                <span>{"{ }"}</span>
                <span>AI</span>
              </div>
            </div>

            <div className="floating-card card-bottom">
              <span>☁️</span>
              <div>
                <strong>Cloud Ready</strong>
                <small>AWS • Docker • Kubernetes</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section services-section">
        <div className="container">
          <div className="section-heading">
            <div className="section-label">WHAT WE BUILD</div>
            <h2>
              Technology solutions
              <br />
              <span className="gradient-text">for real needs.</span>
            </h2>
            <p>
              From a simple business website to cloud infrastructure and AI
              automation, we help turn ideas into working products.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}><span>✓</span>{feature}</li>
                  ))}
                </ul>
                <button
                  className="service-link"
                  onClick={() =>
                    openWhatsApp(`Hi Sharan-Tech, I am interested in ${service.title}.`)
                  }
                >
                  Discuss Project →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-heading center">
            <div className="section-label">HOW IT WORKS</div>
            <h2>
              From idea to <span className="gradient-text">production.</span>
            </h2>
            <p>
              A simple process designed to keep communication clear and delivery focused.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-line" />
            {[
              ["01", "Discuss", "Understand your requirements, budget and timeline."],
              ["02", "Design", "Plan the experience and agree on project scope."],
              ["03", "Build", "Develop, test and iterate with regular updates."],
              ["04", "Launch", "Deploy, hand over and provide post-launch support."],
            ].map(([number, title, description]) => (
              <div className="process-step" key={number}>
                <div className="step-number">{number}</div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="container">
          <div className="section-heading">
            <div className="section-label">PROJECTS</div>
            <h2>
              Built for <span className="gradient-text">real-world use.</span>
            </h2>
            <p>
              Example project areas that showcase development, AI and cloud capabilities.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className={`project-preview preview-${index + 1}`}>
                  <div className="project-window">
                    <div className="mini-window-bar">
                      <span /><span /><span />
                    </div>
                    <div className="mini-content">
                      <div className="mini-title" />
                      <div className="mini-line" />
                      <div className="mini-line short" />
                      <div className="mini-boxes"><div /><div /><div /></div>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.tech.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container about-container">
          <div className="about-content">
            <div className="section-label">WHY SHARAN-TECH</div>
            <h2>
              Simple technology.
              <br />
              <span className="gradient-text">Serious execution.</span>
            </h2>

            <p>
              We focus on building useful digital products without unnecessary
              complexity. Whether you are launching a business, building a college
              project or automating a workflow, the goal is to create something that works.
            </p>

            <div className="about-points">
              {[
                ["One point of contact", "From initial discussion to final delivery."],
                ["Modern technology", "Current tools and production-ready practices."],
                ["Affordable solutions", "Solutions designed around actual requirements."],
                ["Post-launch support", "Updates and technical assistance after launch."],
              ].map(([title, description]) => (
                <div key={title}>
                  <span>✓</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-visual">
            <div className="about-glow" />
            <div className="stats-card">
              <div className="stats-icon">☁️</div>
              <h3>AI + DevOps + Cloud</h3>
              <p>
                Combining software development, automation and cloud infrastructure
                to build scalable solutions.
              </p>
              <div className="stats-divider" />
              <div className="stats-row">
                <div><strong>∞</strong><span>Possibilities</span></div>
                <div><strong>24/7</strong><span>Cloud Ready</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-section">
        <div className="container">
          <div className="tech-heading">TECHNOLOGIES WE WORK WITH</div>
          <div className="technology-list">
            {technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-container">
          <div className="section-heading">
            <div className="section-label">FAQ</div>
            <h2>
              Questions?
              <br />
              <span className="gradient-text">We&apos;ve got answers.</span>
            </h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${activeFaq === index ? "faq-active" : ""}`}
                key={faq.question}
              >
                <button
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-plus">{activeFaq === index ? "−" : "+"}</span>
                </button>

                {activeFaq === index && (
                  <div className="faq-answer"><p>{faq.answer}</p></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="section-label">LET&apos;S TALK</div>
              <h2>
                Have an idea?
                <br />
                <span className="gradient-text">Let&apos;s build it.</span>
              </h2>
              <p>
                Tell us what you want to build. We can discuss your requirements,
                scope and the best technical approach.
              </p>

              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-detail-icon">💬</div>
                  <div>
                    <span>WhatsApp</span>
                    <strong>{CONTACT.phoneDisplay}</strong>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">📧</div>
                  <div>
                    <span>Email</span>
                    <strong>{CONTACT.email}</strong>
                  </div>
                </div>
              </div>

              <button
                className="whatsapp-button"
                onClick={() => openWhatsApp("Hi Sharan-Tech, I would like to discuss a project.")}
              >
                <span className="whatsapp-icon">◉</span>
                Chat on WhatsApp
              </button>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Request a free quote</h3>
                <p>Tell us a little about your project.</p>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input id="name" name="name" type="text" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" placeholder="+91" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="service">What do you need?</label>
                <select id="service" name="service" required defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option value="website">Website</option>
                  <option value="android">Android App</option>
                  <option value="ai-chatbot">AI Chatbot</option>
                  <option value="ai-agent">AI Agent</option>
                  <option value="student-project">Student / College Project</option>
                  <option value="maintenance">Support & Maintenance</option>
                  <option value="devops">DevOps & Cloud Consulting</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea id="message" name="message" rows={5} placeholder="Tell us about your project..." required />
              </div>

              <button type="submit" className="form-submit">
                {submitted ? "✓ Request Received" : "Send Enquiry →"}
              </button>

              {submitted && (
                <p className="success-message">
                  Thanks! Your enquiry was captured in this demo form.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-glow" />
        <div className="container final-cta-content">
          <div>
            <span className="section-label">START TODAY</span>
            <h2>
              Your next project
              <br />
              starts with <span>one message.</span>
            </h2>
          </div>
          <button
            className="primary-button"
            onClick={() => openWhatsApp("Hi Sharan-Tech, I want to start a project.")}
          >
            Message on WhatsApp →
          </button>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-brand">
            <a href="#home" className="logo">
              <span className="logo-symbol">✦</span>
              <span>Sharan<span className="logo-highlight">Tech</span></span>
            </a>
            <p>AI, DevOps & Cloud solutions<br />built simple.</p>
          </div>

          <div className="footer-links">
            <div>
              <h4>Services</h4>
              <a href="#services">Websites</a>
              <a href="#services">AI Solutions</a>
              <a href="#services">DevOps & Cloud</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
            <div>
              <h4>Contact</h4>
              <a href={`mailto:${CONTACT.email}`}>Email</a>
              <button onClick={() => openWhatsApp("Hi Sharan-Tech, I would like to know more.")}>
                WhatsApp
              </button>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© 2026 Sharan-Tech. All rights reserved.</p>
          <p>AI DevOps & Cloud Solutions</p>
        </div>
      </footer>

      <button
        className="floating-whatsapp"
        onClick={() => openWhatsApp("Hi Sharan-Tech, I would like to get a free quote.")}
        aria-label="Chat on WhatsApp"
      >
        <span>◉</span>
      </button>
    </main>
  );
}

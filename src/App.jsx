
import { useState } from 'react'
import './App.css'

const programs = [
  {
    number: '01',
    title: 'Strength Training',
    description:
      'Build real strength with structured training, progressive overload and expert guidance.',
    tag: 'BUILD STRENGTH',
    icon: '↗',
  },
  {
    number: '02',
    title: 'Personal Coaching',
    description:
      'Individual coaching designed around your goals, experience and training schedule.',
    tag: 'YOUR OWN PATH',
    icon: '◎',
  },
  {
    number: '03',
    title: 'Conditioning',
    description:
      'Improve endurance, mobility and athletic performance with purposeful conditioning.',
    tag: 'MOVE BETTER',
    icon: '↝',
  },
]

const memberships = [
  {
    name: 'Foundation',
    price: '1,499',
    description: 'For building your routine.',
    features: [
      'Full gym access',
      'Locker facilities',
      'Standard equipment access',
    ],
  },
  {
    name: 'Performance',
    price: '2,499',
    description: 'For those ready to level up.',
    popular: true,
    features: [
      'Everything in Foundation',
      'Group training sessions',
      'Monthly progress review',
      'Priority class booking',
    ],
  },
  {
    name: 'Elite',
    price: '4,499',
    description: 'A more personal experience.',
    features: [
      'Everything in Performance',
      'Personal coaching session',
      'Individual training plan',
      'Dedicated progress guidance',
    ],
  },
]

const trainers = [
  {
    name: 'Alex Morgan',
    role: 'Strength & Conditioning',
    initials: 'AM',
    image:
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=85',
  },
  {
    name: 'Jordan Blake',
    role: 'Performance Coach',
    initials: 'JB',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=85',
  },
  {
    name: 'Taylor Reed',
    role: 'Personal Training',
    initials: 'TR',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=85',
  },
]

const faqs = [
  {
    question: 'Is IRONVAULT suitable for beginners?',
    answer:
      'Absolutely. Our concept includes structured programs for different experience levels. A real gym should confirm its own coaching and onboarding arrangements.',
  },
  {
    question: 'Can I visit before choosing a membership?',
    answer:
      'Yes. Use the enquiry link to ask about a tour, available timings and membership options.',
  },
  {
    question: 'Do you offer personal training?',
    answer:
      'Personal coaching is included in the sample membership plans. Contact the gym to confirm actual availability and pricing.',
  },
  {
    question: 'Where is the gym located?',
    answer:
      'IRONVAULT is currently a demo brand. Replace this section with the real gym address before using the website for a business.',
  },
]

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <a
        className="brand"
        href="#home"
        aria-label="IRONVAULT home"
        onClick={closeMenu}
      >
        <span className="brand-mark">I</span>
        <span className="brand-copy">
          IRONVAULT
          <small>STRENGTH CLUB</small>
        </span>
      </a>

      <nav
        id="primary-navigation"
        className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}
        aria-label="Main navigation"
      >
        <a href="#programs" onClick={closeMenu}>Programs</a>
        <a href="#about" onClick={closeMenu}>Our space</a>
        <a href="#coaches" onClick={closeMenu}>Coaches</a>
        <a href="#membership" onClick={closeMenu}>Membership</a>
        <a className="mobile-contact-link" href="#contact" onClick={closeMenu}>
          Get started ↗
        </a>
      </nav>

      <a
        className="button button-small button-outline nav-cta"
        href="#contact"
      >
        Get started <span aria-hidden="true">↗</span>
      </a>

      <button
        className={`menu-toggle ${menuOpen ? 'menu-toggle-open' : ''}`}
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div
        className="hero-image"
        role="img"
        aria-label="Athlete training in a gym"
      />
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-label">
          <span className="status-dot" />
          TRAIN WITH PURPOSE
        </div>

        <h1>
          BUILT
          <br />
          BEYOND
          <br />
          <span>LIMITS.</span>
        </h1>

        <p className="hero-description">
          Your goals deserve more than motivation.
          <br />
          They deserve a plan, a standard and a place to grow.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#membership">
            Find your membership <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="#programs">
            Explore training <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div className="hero-side-note">
        STRENGTH · DISCIPLINE · PROGRESS
      </div>

      <div className="hero-bottom">
        <span>BUILT FOR THE WORK</span>
        <span>01 / 04</span>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="stats-strip" aria-label="Our philosophy">
      <div>
        <strong>01</strong>
        <span>TRAIN WITH INTENT</span>
      </div>
      <div>
        <strong>02</strong>
        <span>SHOW UP CONSISTENTLY</span>
      </div>
      <div>
        <strong>03</strong>
        <span>OWN YOUR PROGRESS</span>
      </div>
      <div className="stats-message">NO SHORTCUTS. JUST WORK.</div>
    </section>
  )
}

function Programs() {
  return (
    <section className="section programs-section" id="programs">
      <SectionHeading
        eyebrow="01 — THE METHOD"
        title="TRAIN FOR MORE."
        description="Different goals. Different approaches. One standard: purposeful progress."
      />

      <div className="program-grid">
        {programs.map((program) => (
          <article className="program-card" key={program.number}>
            <div className="card-topline">
              <span>{program.tag}</span>
              <span>{program.number}</span>
            </div>

            <div className="program-icon" aria-hidden="true">
              {program.icon}
            </div>

            <h3>{program.title}</h3>
            <p>{program.description}</p>

            <a className="card-link" href="#contact">
              Ask about this program <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85"
          alt="Strength training equipment in a modern gym"
          loading="lazy"
        />
        <span className="image-label">THE WORK STARTS HERE.</span>
      </div>

      <div className="about-content">
        <span className="eyebrow">02 — OUR PHILOSOPHY</span>
        <h2>
          YOUR ONLY
          <br />
          COMPETITION
          <br />
          IS <span>YESTERDAY.</span>
        </h2>
        <p>
          Progress isn't always loud. Sometimes it's one more rep, one better
          decision or simply showing up when you said you would.
        </p>
        <p>
          IRONVAULT is a gym concept built around consistency, purposeful
          training and a community that respects the work.
        </p>
        <a className="button button-primary" href="#programs">
          Discover our approach <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}

function Coaches() {
  return (
    <section className="section coaches-section" id="coaches">
      <SectionHeading
        eyebrow="03 — YOUR PEOPLE"
        title="GUIDANCE THAT MOVES YOU."
        description="Meet the coaching team behind your next chapter."
      />

      <div className="coach-grid">
        {trainers.map((trainer) => (
          <article className="coach-card" key={trainer.name}>
            <div className="coach-image">
              <img
                src={trainer.image}
                alt={`${trainer.name}, ${trainer.role}`}
                loading="lazy"
              />
              <span className="coach-initials">{trainer.initials}</span>
            </div>
            <div className="coach-details">
              <div>
                <h3>{trainer.name}</h3>
                <p>{trainer.role}</p>
              </div>
              <span className="coach-arrow" aria-hidden="true">↗</span>
            </div>
          </article>
        ))}
      </div>

      <p className="demo-note">
        Demo profiles and images — replace with verified trainer details before
        publishing for a real gym.
      </p>
    </section>
  )
}

function Memberships() {
  return (
    <section className="section membership-section" id="membership">
      <SectionHeading
        eyebrow="04 — YOUR STANDARD"
        title="INVEST IN YOURSELF."
        description="Choose a starting point. Build something that lasts."
      />

      <div className="membership-grid">
        {memberships.map((plan) => (
          <article
            className={`membership-card ${plan.popular ? 'membership-featured' : ''}`}
            key={plan.name}
          >
            {plan.popular && (
              <span className="popular-label">MOST POPULAR</span>
            )}

            <div className="plan-name">{plan.name}</div>
            <p className="plan-description">{plan.description}</p>

            <div className="plan-price">
              <span>₹</span>
              {plan.price}
              <small>/ month</small>
            </div>

            <div className="plan-divider" />

            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <span aria-hidden="true">+</span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              className={`button ${plan.popular ? 'button-primary' : 'button-outline'} plan-button`}
              href="#contact"
            >
              Enquire now <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>

      <p className="demo-note">
        Sample prices and benefits for the demo. Confirm all commercial details
        before using this website for a real business.
      </p>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="testimonial-section">
      <span className="eyebrow">THE MINDSET</span>
      <div className="quote-mark" aria-hidden="true">“</div>
      <blockquote>
        You don't need to be the strongest person in the room.
        <br />
        You need to be willing to do the work.
      </blockquote>
      <span className="quote-caption">THE IRONVAULT STANDARD</span>
    </section>
  )
}

function FAQ() {
  return (
    <section className="section faq-section" id="faq">
      <div className="faq-intro">
        <span className="eyebrow">GOOD TO KNOW</span>
        <h2>
          QUESTIONS?
          <br />
          <span>WE'VE GOT YOU.</span>
        </h2>
        <p>
          Still deciding? Reach out and we'll help you find a starting point.
        </p>
        <a className="text-link" href="#contact">
          Talk to us <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="faq-list">
        {faqs.map((faq) => (
          <details className="faq-item" key={faq.question}>
            <summary>
              {faq.question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const whatsappNumber = ''
  const message = encodeURIComponent(
    'Hi IRONVAULT! I would like to know more about your gym memberships.',
  )
  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${message}`
    : `https://wa.me/?text=${message}`

  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
        <h2>
          READY TO
          <br />
          <span>PUT IN THE WORK?</span>
        </h2>
        <p>Ask a question, explore your options and take the first step.</p>
        <a
          className="button button-primary"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          Enquire on WhatsApp <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="contact-decoration" aria-hidden="true">IV</div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <a className="brand" href="#home" aria-label="IRONVAULT home">
        <span className="brand-mark">I</span>
        <span className="brand-copy">
          IRONVAULT
          <small>STRENGTH CLUB</small>
        </span>
      </a>

      <p>Built beyond limits. One day at a time.</p>

      <nav className="footer-links" aria-label="Footer navigation">
        <a href="#programs">Programs</a>
        <a href="#membership">Membership</a>
        <a href="#contact">Contact</a>
        <a href="#faq">FAQ</a>
      </nav>

      <span className="copyright">
        © {new Date().getFullYear()} IRONVAULT · DEMO PROJECT
      </span>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Programs />
        <About />
        <Coaches />
        <Memberships />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

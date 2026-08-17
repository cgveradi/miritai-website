const services = [
  { number: "01", title: "Data analysis", text: "Turn scattered spreadsheets and raw business data into clear dashboards, useful metrics, and decisions you can act on.", tags: ["Dashboards", "Reporting", "Data cleanup"] },
  { number: "02", title: "Lightweight web apps", text: "Focused internal tools, client portals, and simple digital products—designed around the job they need to do.", tags: ["Internal tools", "Portals", "MVPs"] },
  { number: "03", title: "Agent automation", text: "Practical AI agents that search knowledge, process documents, and remove repetitive work from everyday operations.", tags: ["AI assistants", "Workflows", "Integrations"] },
];

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Miritai home">MIRIT<span>AI</span></a>
        <div className="nav-links"><a href="#services">Services</a><a href="#approach">Approach</a><a className="nav-cta" href="mailto:hello@miritai.com">Start a project <span aria-hidden="true">↗</span></a></div>
      </nav>
      <section className="hero shell" id="top">
        <div><div className="eyebrow"><span className="status-dot" /> Independent Data, AI &amp; Software Studio</div><h1>Small systems.<br /><span className="gradient-text">Serious leverage.</span></h1></div>
        <div><div className="hero-bottom"><p>We build focused data tools, lightweight web apps, and AI automations that help growing teams work with more clarity and less friction.</p><a className="primary-button" href="mailto:hello@miritai.com">Tell us what slows you down <span aria-hidden="true">↗</span></a></div><div className="hero-rule"><span>Barcelona · Working internationally</span><a href="#services">Scroll to explore ↓</a></div></div>
      </section>
      <section className="statement shell" id="approach"><p className="section-label">( WHAT WE BELIEVE )</p><h2>Technology should remove a bottleneck—not create another one.</h2><p className="statement-copy">We start with one valuable problem, build the smallest useful solution, and improve it with real feedback. No oversized transformation programme required.</p></section>
      <section className="services shell" id="services">
        <div className="services-heading"><p className="section-label">( WHAT WE BUILD )</p><h2>Focused digital systems</h2><p>Three practical ways to make your operation work better.</p></div>
        <div className="service-list">{services.map((service) => <article className="service-card" key={service.number}><span className="service-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.text}</p><div className="tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><span className="card-arrow" aria-hidden="true">↗</span></article>)}</div>
      </section>
      <section className="process shell"><p className="section-label">( HOW WE START )</p><div className="process-grid"><h2>One useful thing,<br />built well.</h2><div className="steps"><div><span>01</span><p><strong>Find the friction</strong>We identify the recurring task, slow process, or missed signal worth fixing.</p></div><div><span>02</span><p><strong>Shape a small first version</strong>You see the scope, outcome, and trade-offs before the build starts.</p></div><div><span>03</span><p><strong>Build, learn, improve</strong>We launch something useful, then evolve it from real-world feedback.</p></div></div></div></section>
      <section className="closing shell"><p className="section-label">START SMALL. MAKE IT USEFUL.</p><h2>What could work better<br />in your business?</h2><a className="primary-button light" href="mailto:hello@miritai.com">Start the conversation <span aria-hidden="true">↗</span></a></section>
      <footer className="footer shell"><a className="brand" href="#top">MIRIT<span>AI</span></a><p>Practical data, software, and AI systems.</p><p>© 2026 Miritai</p></footer>
    </main>
  );
}

function About() {
  return (
    <section className="page active">
      <div className="about-hero">
        <div className="about-hero-text">
          <div className="eyebrow">About Us · Fitrah Tribune</div>
          <h2>A lighthouse in the <em>storm of misinformation.</em></h2>
          <p className="lead">
            Fitrah Tribune is a student-driven newspaper community at Fitrah Islamic World Academy. We are the community’s record of itself — written from within FIWA, for the readers who live it.
          </p>
          <p>
            We were born out of frustration with rumor-mills that travel faster than verified facts in any school. Our promise is simple: we publish what we can verify, we correct what we get wrong, and we leave the record for everyone to see.
          </p>
          <p>
            Our newspapers ship every fortnight in English, with Indonesian translations following soon after. The website is a younger sibling — built to extend the reach of the print, host community discussion, and keep our corrections honest.
          </p>
        </div>
      </div>

      <div className="section-head">
        <h2>Our Pillars</h2>
        <span className="sub">— what guides every story we publish</span>
      </div>
      <div className="card-grid two-up">
        <article className="story-card">
          <h3>Clarity</h3>
          <p>Every article is researched before it is written. Claims we cannot verify are not published as fact.</p>
        </article>
        <article className="story-card">
          <h3>Approachability</h3>
          <p>We write in a way that is thoughtful, accessible, and rooted in care rather than stiffness.</p>
        </article>
        <article className="story-card">
          <h3>Trustedness</h3>
          <p>Trust is built slowly, through consistency: doing what we say we will do, edition after edition.</p>
        </article>
        <article className="story-card">
          <h3>Transparency</h3>
          <p>No fact is ever altered, fabricated, or misrepresented. Editorial judgment shapes which facts we foreground — never the underlying truth itself.</p>
        </article>
      </div>

      <div className="standards-block">
        <h3>Editorial Standards</h3>
        <p className="standards-sub">The promises we hold ourselves to.</p>
        <div className="standards-grid">
          <div className="standards-col do">
            <h5>What we do</h5>
            <ul>
              <li>Verify claims through at least one direct source before publishing.</li>
              <li>Submit every article to the CAE for appropriateness review before publication.</li>
              <li>Seek consent before naming individuals in sensitive coverage.</li>
              <li>Log every correction publicly on the Corrections page.</li>
            </ul>
          </div>
          <div className="standards-col dont">
            <h5>What we don't do</h5>
            <ul>
              <li>Publish unverified rumor, even when it is interesting.</li>
              <li>Quietly edit print articles to hide past mistakes.</li>
              <li>Delete criticism from our public record simply because we disagree with it.</li>
              <li>Accept payment, sponsorship, or favors that influence coverage.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

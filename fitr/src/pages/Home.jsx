function Home() {
  return (
    <section className="page active">
      <div className="section-head">
        <h2>Front Page</h2>
        <span className="sub">— from the latest edition</span>
      </div>

      <div className="card-grid">
        <article className="feature-card">
          <p className="eyebrow">Lead Story</p>
          <h3>The lighthouse keeps its watch through the storm.</h3>
          <p>
            Fitrah Tribune is the student-run record of the school community — a place for verified reporting, careful correction, and honest public discussion.
          </p>
        </article>
        <article className="feature-card muted">
          <p className="eyebrow">Community Note</p>
          <h3>Readers are invited to report rumors and corrections.</h3>
          <p>
            The newsroom is built around trust, transparency, and the principle that every correction should be visible to the public.
          </p>
        </article>
      </div>

      <div className="section-head" style={{ marginTop: '3rem' }}>
        <h2>More Stories</h2>
        <span className="sub">— recent reportage</span>
      </div>

      <div className="card-grid two-up">
        <article className="story-card">
          <h3>Editorial standards guide the work</h3>
          <p>Every article is written with verification, record-keeping, and responsible language in mind.</p>
        </article>
        <article className="story-card">
          <h3>The archive preserves the past</h3>
          <p>Past editions are kept visible as published so the public can see how the paper has grown.</p>
        </article>
      </div>

      <div className="home-strip" style={{ marginTop: '3rem' }}>
        <div className="strip-block">
          <div className="strip-head">
            <h3>From the Forum</h3>
            <a href="#">View all →</a>
          </div>
          <div className="story-card compact">
            <h4>Announcements and community discussion</h4>
            <p>Discussion posts and public updates remain visible to readers on the Forum page.</p>
          </div>
        </div>
        <div className="strip-block">
          <div className="strip-head">
            <h3>Weather · Ciseeng</h3>
            <span className="weather-label">TODAY</span>
          </div>
          <div className="weather-now">
            <div className="weather-icon"></div>
            <div>
              <div className="weather-temp">29<span className="unit">°C</span></div>
              <div className="weather-cond">Partly Cloudy</div>
              <div className="weather-loc">Bogor, West Java</div>
            </div>
          </div>
          <div className="weather-note">“What is news without weather?” — A house tradition since Edition I.</div>
        </div>
      </div>

      <div className="home-tipoff">
        <div>
          <h3>Spot Misinformation?</h3>
          <p>Help us keep the lighthouse lit. Flag a rumor or an error directly to the editorial team.</p>
        </div>
        <button type="button">Report a Tip</button>
      </div>
    </section>
  )
}

export default Home

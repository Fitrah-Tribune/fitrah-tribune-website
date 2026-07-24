function News() {
  return (
    <section className="page active">
      <div className="section-head">
        <h2>News</h2>
        <span className="sub">— articles from every edition</span>
      </div>
      <div className="news-toolbar">
        <div className="filter-pills">
          <span className="pill active">All</span>
          <span className="pill">Editorial</span>
          <span className="pill">Campus</span>
        </div>
        <div className="lang-toggle">
          <button type="button" className="active">EN</button>
          <button type="button">ID</button>
        </div>
      </div>
      <div className="card-grid two-up">
        <article className="story-card">
          <h3>Editorial voices remain rooted in truth</h3>
          <p>The newsroom’s commitment to verification is visible in every story it publishes.</p>
        </article>
        <article className="story-card">
          <h3>Community updates are shared with transparency</h3>
          <p>Readers can follow, discuss, and correct the public record on the site.</p>
        </article>
      </div>
    </section>
  )
}

export default News

function Archive() {
  return (
    <section className="page active">
      <div className="section-head">
        <h2>Archive</h2>
        <span className="sub">— every edition, preserved as printed</span>
      </div>
      <div className="archive-intro">
        The archive preserves each edition as it was originally published, including the quirks and imperfections that reflect the paper’s growth.
      </div>
      <div className="card-grid two-up">
        <article className="story-card">
          <h3>Edition 01</h3>
          <p>Launch edition of the digital newspaper, focused on establishing editorial standards.</p>
        </article>
        <article className="story-card">
          <h3>Edition 02</h3>
          <p>Expanded coverage and more community participation in the correction process.</p>
        </article>
      </div>
    </section>
  )
}

export default Archive

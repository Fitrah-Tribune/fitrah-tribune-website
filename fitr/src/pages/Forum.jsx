function Forum() {
  return (
    <section className="page active">
      <div className="section-head">
        <h2>Forum</h2>
        <span className="sub">— announcements and posts from the Tribune</span>
      </div>
      <div className="forum-layout">
        <div className="forum-main">
          <div className="story-card">
            <h3>Community discussion</h3>
            <p>Announcements, updates, and public discussion are gathered here to keep the newsroom connected to its readers.</p>
          </div>
        </div>
        <aside className="forum-sidebar">
          <div className="fs-block">
            <h4>Forum Rules</h4>
            <p>Announcements are posted by admins while general posts come from Tribune members.</p>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Forum

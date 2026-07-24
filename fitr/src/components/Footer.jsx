import { Link } from 'react-router-dom'
import logo from '../assets/tribune-logo.svg'

function Footer() {
  return (
    <footer className="tribune-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-mark">
            <img src={logo} alt="" />
            <span className="name">Fitrah Tribune</span>
          </div>
          <p>
            A student-driven newspaper community at Fitrah Islamic World Academy — keeping the light steady against the storm of misinformation.
          </p>
        </div>
        <div className="footer-col">
          <h5>Read</h5>
          <ul>
            <li><Link to="/">Front Page</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/archive">Archive</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Engage</h5>
          <ul>
            <li><Link to="/forum">Forum</Link></li>
            <li><Link to="/corrections">Feedback &amp; Corrections</Link></li>
            <li><a href="https://fiwa.sch.id" target="_blank" rel="noreferrer">Report a Tip</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>About</h5>
          <ul>
            <li><Link to="/about">Our Mission</Link></li>
            <li><Link to="/about">Editorial Standards</Link></li>
            <li><Link to="/about">The Tribunees</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Fitrah Tribune · All bylines retained by their authors</span>
        <span>Creating Informational Newspapers</span>
      </div>
    </footer>
  )
}

export default Footer

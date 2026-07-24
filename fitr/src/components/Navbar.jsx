import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/tribune-logo.svg'

const navItems = [
  { to: '/', label: 'Front Page' },
  { to: '/news', label: 'News' },
  { to: '/archive', label: 'Archive' },
  { to: '/forum', label: 'Forum' },
  { to: '/corrections', label: 'Corrections' },
  { to: '/about', label: 'About' },
]

function Navbar() {
  return (
    <>
      <div className="tribune-band">
        <span className="band-name">Fitrah Tribune</span>
        <span>EST. 2026</span>
      </div>

      <header className="masthead">
        <div className="masthead-inner">
          <div className="masthead-edition">
            <span className="ed-number">Edition 01</span>
            <span className="ed-since">Student newspaper · FIWA</span>
          </div>

          <div className="masthead-center">
            <div className="masthead-logo" aria-hidden="true">
              <img src={logo} alt="" />
            </div>
            <h1 className="masthead-title">
              Fitrah <em>Tribune</em>
            </h1>
            <div className="masthead-tagline">A lighthouse in the storm</div>
          </div>

          <div className="masthead-meta">
            <span className="meta-date">24 July 2026</span>
            <span className="meta-loc">Ciseeng · Bogor</span>
          </div>
        </div>
      </header>

      <nav className="tabs" aria-label="Primary navigation">
        <div className="tabs-inner">
          <div className="tabs-list">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `tab-btn${isActive ? ' active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="tabs-user">
            <span className="user-avatar">FT</span>
            <span className="user-name">Guest Reader</span>
            <Link className="btn-signin" to="/about">
              Learn more
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

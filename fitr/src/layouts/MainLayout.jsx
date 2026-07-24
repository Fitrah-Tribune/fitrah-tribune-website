import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="page-shell">{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import News from './pages/News'
import Archive from './pages/Archive'
import Forum from './pages/Forum'
import Corrections from './pages/Corrections'
import About from './pages/About'
import NotFound from './pages/NotFound'
import PageMeta from './components/PageMeta'

function App() {
  return (
    <BrowserRouter>
      <PageMeta />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/corrections" element={<Corrections />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App

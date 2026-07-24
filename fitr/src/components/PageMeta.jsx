import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const routeMeta = {
  '/': {
    title: 'Fitrah Tribune — Front Page',
    description: 'The student-driven newspaper of Fitrah Islamic World Academy.',
  },
  '/news': {
    title: 'Fitrah Tribune — News',
    description: 'Latest news and reportage from the Tribune newsroom.',
  },
  '/archive': {
    title: 'Fitrah Tribune — Archive',
    description: 'Browse archived editions preserved as published.',
  },
  '/forum': {
    title: 'Fitrah Tribune — Forum',
    description: 'Announcements and community posts from the Tribune.',
  },
  '/corrections': {
    title: 'Fitrah Tribune — Feedback & Corrections',
    description: 'Read public corrections and submit private feedback.',
  },
  '/about': {
    title: 'Fitrah Tribune — About',
    description: 'Learn about the mission, standards, and team behind Fitrah Tribune.',
  },
}

function PageMeta() {
  const location = useLocation()
  const meta = routeMeta[location.pathname] || routeMeta['/']

  useEffect(() => {
    document.title = meta.title
    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag) {
      descriptionTag.setAttribute('content', meta.description)
    }
  }, [meta])

  return null
}

export default PageMeta

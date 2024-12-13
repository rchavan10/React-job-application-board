import React from 'react'
import Hero from '../components/Hero.jsx'
// dont import Navbar or footer on homepage as it will be on all pages and hence it will be in a layout
import HomeCards from '../components/HomeCards.jsx'
import JobListings from '../components/JobListings.jsx'
import ViewAllJobs from '../components/ViewAllJobs.jsx'

const HomePage = () => {
  return (
    <>
        <Hero/>
        <HomeCards/>
        <JobListings isHome={true} />
        <ViewAllJobs/>
    </>
  )
}

export default HomePage

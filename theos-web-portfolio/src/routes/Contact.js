//Page Imports
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

// Other imports
import React from 'react'
import HeroImg2 from '../components/HeroImg2';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT." text="I'm happy to answer any questions or concerns!" />
      <Footer />
    </div>
  )
}

export default Contact
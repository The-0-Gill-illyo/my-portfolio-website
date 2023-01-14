//Page Imports
import ContactForm from '../components/ContactForm';
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';

// Other imports
import React from 'react'
import HeroImg2 from '../components/HeroImg2';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT." text="I'm happy to answer any questions or concerns!" />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact
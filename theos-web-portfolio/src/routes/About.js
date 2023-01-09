//Page Imports
import AboutContent from '../components/AboutContent';
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import Navbar from '../components/Navbar';

// Other imports
import React from 'react'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT." text="I am a friendly Front-End Web Developer! Hi there, thanks for checking out my site! Howard is my name, but I've gone 
                    by my middle nickname Theo since I was born. I am a new React Web Developer 
                    graduating from DevCodeCamp in October 2022. Naturally I am a curious person,
                    with many intrest ranging from art, coaching, mentoring, music, sports and science.
                    Before and after graduating high school I watched and listened to my friends 
                    complianing about how expensive college was, the pressure of 'going to a good 
                    college and getting a good paying career' and more. Having an entrepreneural 
                    spirite and knowing how importantance higher-education, I had an internal battle
                    for years, asking 'if was better to go back to school or learn on the job'? I would 
                    eventually try job-hopping, college, trade-school, working to be a franchise owner,
                    multi-level marketing, being a 10-99 employee, and more. Before transitioning into a 
                    tech career I analyzed my 'job juggling'; although my choices fufilled my neeed to give
                    back and make a difference within the company, I still struggling to find direction and 
                    inspiration. Reflecting back, it may have been the repetivness of these jobs, 
                    the predictability, and the constant feeling like I could either be called into 
                    work or fired at any moment; the value I was bringing to these companies were off-set
                    by the value of new-cheaper labor, no matter the cost of training." 
                    />
                  <AboutContent />
                <Footer/>
              </div>
            )
          }

        export default About
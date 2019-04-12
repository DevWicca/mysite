import React from 'react';
import Nav from '../Profile/nav'
import ProjectsSection from '../Profile/projectsSection'
import AboutSection from '../Profile/AboutSection'
import ContactSection from '../Profile/ContactSection'
import FooterSection from '../Profile/FooterSection'
import {Parallax} from 'react-materialize'



const Profile = () => {

    return (
      <div className="App Profile">
          <Nav/>
          <AboutSection/>
          <Parallax imageSrc="https://images.pexels.com/photos/1559908/pexels-photo-1559908.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=650&w=940" />
          <ProjectsSection/>
          <Parallax imageSrc="https://images.pexels.com/photos/380283/pexels-photo-380283.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200" />
          <ContactSection/>
          <FooterSection/>
      </div>
    );
}

export default Profile;

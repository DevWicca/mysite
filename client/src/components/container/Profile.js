import React, { Component } from 'react';
import Nav from '../Profile/nav'
import ProjectsSection from '../Profile/projectsSection'
import AboutSection from '../Profile/AboutSection'
import ContactSection from '../Profile/ContactSection'
import FooterSection from '../Profile/FooterSection'
import {Parallax} from 'react-materialize'



class Profile extends Component {
  render() {
    return (
      <div className="App Profile">
          <Nav/>
          <AboutSection/>
          <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg" />
          <ProjectsSection/>
          <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg" />
          <ContactSection/>
          <FooterSection/>
      </div>
    );
  }
}

export default Profile;

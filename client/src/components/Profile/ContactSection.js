import React from 'react'
import { Row,Col } from 'react-materialize'





const ContactSection = () => (
    <section className="section container " id='contact'>
        <h1 className="indigo-text text-darken-4 center">Contact me</h1>
        <Row className="center">
            <ul>
            <Col l={4} s={4}><li><a target="_blank" rel="noopener noreferrer" href="https://github.com/DevWicca"                    className="btn-floating btn-small black "><i className="fab fa-github fa-2x  white-text"></i></a><b>Github</b></li></Col>
            <Col l={4} s={4}><li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/walid-mostafa-513b99182/" className="btn-floating btn-small black "><i className="fab fa-linkedin fa-2x white-text"></i></a><b>Linkedin</b></li></Col>
            <Col l={4} s={4}><li><a target="_blank" rel="noopener noreferrer" href="https://discord.gg/DR3YNu" className="btn-floating btn-small black "><i className="fab fa-discord fa-2x white-text"></i></a><b>Discord</b></li></Col>
            </ul>
        </Row>
    </section>
);

export default ContactSection;
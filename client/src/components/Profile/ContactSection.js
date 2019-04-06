import React from 'react'
import { Row,Col } from 'react-materialize'





const ContactSection = () => (
    <section className="section container " id='contact'>
        <h1 className="indigo-text text-darken-4 center">Contact me</h1>
        <Row className="center">
            <ul>
            <Col l={3} s={3}><li><a target="_blank" rel="noopener noreferrer" href="https://github.com/DevWicca"                    className="btn-floating btn-small black "><i className="fab fa-github fa-2x  white-text"></i></a><b>Github</b></li></Col>
            <Col l={3} s={3}><li><a target="_blank" rel="noopener noreferrer" href="https://github.com/DevWicca/itemlist-MREN-Redux" className="btn-floating btn-small black "><i className="fab fa-linkedin fa-2x white-text"></i></a><b>Linkedin</b></li></Col>
            <Col l={3} s={3}><li><a target="_blank" rel="noopener noreferrer" href="https://github.com/DevWicca/itemlist-MREN-Redux" className="btn-floating btn-small black "><i className="fab fa-trello fa-2x white-text"></i></a><b>Discord</b></li></Col>
            <Col l={3} s={3}><li><a target="_blank" rel="noopener noreferrer" href="https://github.com/DevWicca/itemlist-MREN-Redux" className="btn-floating btn-small black "><i className="fab fa-discord fa-2x white-text "></i></a><b>Discord</b></li></Col>
            </ul>
        </Row>
    </section>
);

export default ContactSection;
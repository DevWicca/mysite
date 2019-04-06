import React from 'react'
import {Footer, Row, Col} from 'react-materialize'



const FooterSection = () => (
    <Footer
        copyrights="&copy; 2019 Copyright DevWicca"
        links={
            <ul className="paddingtop" >
        <Row className="center ">
            <Col l={3} s={3}><li><a target="_blank" rel="noopener noreferrer" href="https://github.com/DevWicca"                    className="btn-floating btn-small black "><i className="fab fa-github fa-2x  white-text"></i></a><b>Github</b></li></Col>
            <Col l={3} s={3}><li><a target="_blank" rel="noopener noreferrer" href="https://github.com/DevWicca/itemlist-MREN-Redux" className="btn-floating btn-small black "><i className="fab fa-linkedin fa-2x white-text"></i></a><b>Linkedin</b></li></Col>
            <Col l={3} s={3}><li><a target="_blank" rel="noopener noreferrer" href="https://github.com/DevWicca/itemlist-MREN-Redux" className="btn-floating btn-small black "><i className="fab fa-trello fa-2x white-text"></i></a><b>Discord</b></li></Col>
            <Col l={3} s={3}><li><a target="_blank" rel="noopener noreferrer" href="https://github.com/DevWicca/itemlist-MREN-Redux" className="btn-floating btn-small black "><i className="fab fa-discord fa-2x white-text "></i></a><b>Discord</b></li></Col>
        </Row>
            </ul>}
        className="black center">
        <h5 className="white-text">
        Lets Take
        </h5>
        <p className="grey-text text-lighten-4">ONline on Discord 24h lets Chat for any thing ^_^</p>
        <p className="grey-text text-lighten-4">i Allso see my Gmail <b>devwicca@gmail.com</b></p>

    </Footer>
   
);

export default FooterSection;
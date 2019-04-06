import React from 'react';
import { Card, Col, Row, Icon,Button } from 'react-materialize';
import { Link } from "react-router-dom"

const ProjectsSection = () => (
    <section className='container section scrollspy' id='projects'>
    <Row>
        <h2 className='center paddingbot indigo-text text-darken-4'>Projects</h2>
        <Col m={12} l={6} s={12}>
            <Card title="Itemlist MREN Redux" 
            reveal={
                <div>
                    <p>Thats is a smale app but it cover all the technology especially Redux and state management 
                    It uses Redux to add and delete items and only user can do that 
                    With user Register and Login system using Redux and using Bcryptjs to encrypt the password 
                    and save it to database and sample validation </p>
                    <ul className="">
                        <li>
                            <Icon left >cloud</Icon>
                            <p left><b>Thats is a smale app but it cover all</b></p>
                        </li>
                        <li>
                            <Icon left>cloud</Icon>
                            <p left><b>Thats is a smale app but it cover all</b></p>
                        </li>
                        <li>
                            <Icon left>cloud</Icon>
                            <p left><b>Thats is a smale app but it cover all</b></p>
                        </li>
                        <li>
                            <Icon left>cloud</Icon>
                            <p left><b>Thats is a smale app but it cover all</b></p>
                        </li>
                    </ul>
                    <div className="center"><b >Technology Used</b></div>
                    
                    <ul className="row center">
                        <li className='col  l4 s4'><b>React</b></li>
                        <li className='col  l4 s4'><b>Redux</b></li>
                        <li className='col  l4 s4'><b>Express</b></li>
                        <li className='col  l4 s4'><b>MongoDB</b></li>
                        <li className='col  l4 s4'><b>Mongoose</b></li>
                        <li className='col  l4 s4'><b>Bcryptjs</b></li>
                        <li className='col  l4 s4'><b>Node</b></li>
                        <li className='col  l4 s4'><b>Git</b></li>
                    </ul>
                </div>
            } 
            actions={<img alt="project1" className="activator responsive-img "   src="https://res.cloudinary.com/wicca/image/upload/v1553730527/william-daigneault-1176273-unsplash.jpg"/>}>
            <div>
            <Link target="_blank" to="https://github.com/DevWicca/itemlist-MREN-Redux" ><i className="fab fa-github fa-2x black-text"></i></Link>
            <Button node={Link} to="/ItemlistMrenRedux" waves="light" className="right black">
                life Review
                <Icon right>
                send
                </Icon>
            </Button>
            </div>
            </Card>
        </Col>
        <Col m={12} l={6} s={12} >
            <Card title="GraphiQL" reveal={
                <div>
                <p>Thats is a smale app but it cover all the technology especially GraphQL and how data structure
                Work it uses GraphQL to add and get books and authors from database and shows how data can
                Work together to make great data structure and uses React and Apollo on the Client Side to show the books and the authors 
                </p>
                <ul className="">
                        <li>
                            <Icon left>cloud</Icon>
                            <p left><b>Thats is a smale app but it cover all</b></p>
                        </li>
                        <li>
                            <Icon left>cloud</Icon>
                            <p left><b>Thats is a smale app but it cover all</b></p>
                        </li>
                        <li>
                            <Icon left>cloud</Icon>
                            <p left><b>Thats is a smale app but it cover all</b></p>
                        </li>
                        <li>
                            <Icon left>cloud</Icon>
                            <p left><b>Thats is a smale app but it cover all</b></p>
                        </li>
                    </ul>
                <div className="center"><b >Technology Used</b></div>
                <ul className="row center">
                    <li className='col l4 s4'><b>React</b></li>
                    <li className='col l4 s4'><b>GraphQL</b></li>
                    <li className='col l4 s4'><b>Express</b></li>
                    <li className='col l4 s4'><b>Apollo</b></li>
                    <li className='col l4 s4'><b>MongoDB</b></li>
                    <li className='col l4 s4'><b>Mongoose</b></li>
                    <li className='col l4 s4'><b>Node</b></li>
                    <li className='col l4 s4'><b>Git</b></li>
                </ul>
            </div>
            } actions={<img alt="project1" className="activator responsive-img" src="https://res.cloudinary.com/wicca/image/upload/v1553730527/william-daigneault-1176273-unsplash.jpg"/>}>
            <div>
            <Link target="_blank" to="https://github.com/DevWicca/graphiql "><i className="fab fa-github fa-2x black-text"></i></Link>
            <Button node={Link} to="/graphiql" waves="light" className="right black">
                life Review
                <Icon right>
                send
                </Icon>
            </Button>
            </div>
            </Card>
        </Col>
    </Row>

        
    </section>
);

export default ProjectsSection;

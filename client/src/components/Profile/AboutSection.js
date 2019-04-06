import React from 'react'
import { Row, Col, Tabs, Tab} from 'react-materialize'

const AboutSection = () => (
    <section className='container section scrollspy' id='about'>
    <Row>
        <Col s={12} l={5}  >
                <div>
                    <h1 className="indigo-text text-darken-4 center">About me </h1>
                    <p className="center">rello Is the Fun, Flexible and Free Way To Organize Plans, Projects & More. Go From Idea To Action In Seconds With Trello’s Intuitively Simple Boards, Lists & Cards. Work Offline. Available in 21 Languages. Agile Kanban Boards. iOS & Android Apps. Join 25 Million People.</p>
                </div>
            </Col>
        <Col s={12} l={5} active offset="l2">
        <h4 className="center paddingbot indigo-text text-darken-4">Skills</h4>
            <Tabs s={12} l={12} className="tab-demo z-depth-1 ">
                <Tab tabWidth={6} l={6} active={true} title="FrontEnd" >
                    <h5 className='indigo-text text-darken-4 center paddingbot paddingtop'>FRONTEND</h5>
                    <ul>
                        <li><b>React</b> : A JavaScript library for building user interfaces</li>
                        <li><b>Redux</b> : A library for managing application state</li>
                        <li><b>Apollo</b> : For using GraphQL on the frontEnd</li>
                        <li><b>Materialize</b> : Design language library </li>
                        <li><b>Bootstrap</b> : Design language library </li>
                        <li><b>Git</b> : Version control </li>
                    </ul>
                </Tab>
                <Tab tabWidth={6} title="BackEnd" >
                <h5 className='indigo-text text-darken-4 center paddingbot paddingtop'>BACKEND</h5>
                    <ul>
                        <li><b>Express</b> : Framework for building web applications and APIs.</li>
                        <li><b>MangoDB</b> : Database program. Classified as a NoSQL database .</li>
                        <li><b>GraphQL</b> : Data query and manipulation language for APIs.</li>
                        <li><b>Jsonwebtoken</b> : Allows you to decode, verify and generate JWT.</li>
                        <li><b>Passport</b> : Authentication middleware for Nodejs.</li>
                        <li><b>Bcryptjs</b> : Optimized bcrypt in JavaScript.</li>
                        <li><b>Nodejs</b> : JavaScript run-time environment.</li>
                        <li><b>Git</b> : Version control </li>
                    </ul>
                </Tab>
            </Tabs>
        </Col>
    </Row>
    </section>
);

export default AboutSection;
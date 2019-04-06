import { Container, Navbar,NavItem} from 'react-materialize'
import React from 'react'




const nav = () => {
    return (
        <header>        
            <Container>
                <Navbar className="transparent z-depth-0" brand={<a href='/'>DevWicca</a>} alignLinks="right">
                    <NavItem href="#about" className="white-text">
                    About
                    </NavItem>
                    <NavItem href="#projects" className="white-text">
                    Projects
                    </NavItem>
                    <NavItem href="#contact" className="white-text">
                    Contact
                    </NavItem>
                    <NavItem href="#contact" className="white-text">
                    Resume
                    </NavItem>
                <ul>
                    <li><a target="_blank" rel="noopener noreferrer"  href="https://github.com/DevWicca"                    className="btn-floating btn-small black "><i className="fab fa-github fa-2x  white-text"></i></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/DevWicca/itemlist-MREN-Redux" className="btn-floating btn-small black "><i className="fab fa-linkedin fa-2x white-text"></i></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/DevWicca/itemlist-MREN-Redux" className="btn-floating btn-small black "><i className="fab fa-trello fa-2x white-text"></i></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/DevWicca/itemlist-MREN-Redux" className="btn-floating btn-small black "><i className="fab fa-discord fa-2x white-text "></i></a></li>
                </ul>
                </Navbar>
            </Container>
        </header>
    );
}

export default nav;
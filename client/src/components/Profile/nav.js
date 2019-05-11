import { Container, Navbar,NavItem} from 'react-materialize'
import React from 'react'




const nav = () => {
    return (
        <header>        
            <Container>
                <Navbar className="transparent z-depth-0" brand={<a className="wiht-text" href='/'><b>DevWicca</b></a>} alignLinks="right">
                    <NavItem href="#about" className="black-text">
                    <b>About</b>
                    </NavItem>
                    <NavItem href="#projects" className="black-text">
                    <b>Projects</b>
                    </NavItem>
                    <NavItem href="#contact" className="black-text">
                    <b>Contact</b>
                    </NavItem>
                    <NavItem  href="https://docs.google.com/document/u/0/d/1YWzKBEEUsfvmfROQ6Nh_r2DWhSdORur6PxyBdama_mM/export?format=docx" download className="black-text">
                    <b>Resume</b>
                    </NavItem>
                <ul>
                    <li><a target="_blank" rel="noopener noreferrer"  href="https://github.com/DevWicca"   className="btn-floating btn-small black "><i className="fab fa-github fa-2x  white-text"></i></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/walid-mostafa-513b99182/" className="btn-floating btn-small black "><i className="fab fa-linkedin fa-2x white-text"></i></a></li>
                    </ul>
                </Navbar>
            </Container>
        </header>
    );
}

export default nav;
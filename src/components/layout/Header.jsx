import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import { RiReactjsLine } from "react-icons/ri";

import styles from './Header.module.scss';

const Header = () => {
  return (
    <Navbar className={styles.navbar} bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand className={styles.navLink} as={Link} to='/'>
          <RiReactjsLine className={styles.icon} style={{color: 'aqua'}} /> useMyFolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link className={styles.navLink} as={Link} to='/'>HOME</Nav.Link>
            <Nav.Link className={styles.navLink} as={Link} to='/about'>ABOUT</Nav.Link>
            <Nav.Link className={styles.navLink} as={Link} to='/projects'>PROJECTS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
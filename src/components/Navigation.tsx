import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa'

export default function Navigation() {
    return (
        <Navbar bg="dark" variant="dark" style={{height: "5vh"}}>
            <Container>
                <Navbar.Brand className="ml-auto" href="/">Arman Shah</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">About</Nav.Link>
                    <Nav.Link href="/shows">Shows</Nav.Link>
                    <Nav.Link href="/media">Media</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                <Nav className="mr=auto">
                    <Nav.Link href="http://www.instagram.com/amazingarman"><BsInstagram /></Nav.Link>
                    <Nav.Link href="http://www.twitter.com/amazingarman_"><BsTwitter /></Nav.Link>
                    <Nav.Link href="http://www.tiktok.com/@amazingarman?"><FaTiktok /></Nav.Link>
                    <Nav.Link href="http://www.youtube.com/amazingarman"><BsYoutube /></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )}
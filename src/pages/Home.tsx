import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from 'react-bootstrap'
import image from "./headshot.jpg"


export default function Home() {
    return (
        <Container style={{ marginTop: '5vh'}}>
            <Row>
                <Col>
                    <h1 className="text-light">Arman Shah</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="text-light"> Standup Comedian | Writer</p>
                </Col>
            </Row>
            <Row style={{ marginTop: '3vh' }}>
                <Col md={{ offset: 2, span: 4 }}>
                    <Image src={image} rounded fluid />
                </Col>
                <Col md={{ offset: 1, span: 4}}>
                    <h3 className='text-light' style={{textAlign: "center"}}>ABOUT</h3>
                    <p className='text-light' style={{textAlign: "left"}}>Minnesota native, Arman Shah, started his entertainment career as a magician. While attending college at the University of Minnesota, he stumbled upon the university’s comedy club, where he decided to try stand up comedy for the first time in 2017. Arman has been hooked ever since and has been performing his dry, witty and often self-deprecating sense of humor around the midwest.</p>
                </Col>
            </Row>
        </Container>
    )};
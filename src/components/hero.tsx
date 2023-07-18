import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import Image from "react-bootstrap/Image";
import img1 from "../assets/img-1.png";

function Hero() {
  return (
    <div className='hero'>
      <Container>
        <Row className='flex-column-reverse flex-lg-row'>
          <Col className='hero-content text-lg-start text-center'>
            <h1 className='hero-heading'>
              Hello, I'm <span>Eric Hoover</span>. Software Engineer
            </h1>
            <p className='sub-heading'>Explore careers, compare colleges, and form your plan</p>
            <div className=''>
              <div className='' style={{ display: "inline-block" }}>
                <Button className='custom-btn'>Start Now</Button>
              </div>

              <div className='btn-transparent' style={{ display: "inline-block" }}>
                <Button className='custom-btn'>Login</Button>
              </div>
            </div>
          </Col>
          <Col>
            <div className='hero-image-cover'>
              <Image src={img1} className='hero-image' />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;

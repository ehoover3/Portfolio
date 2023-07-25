import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import Image from "react-bootstrap/Image";
import img1 from "../assets/img-1.png";
import eric from "../assets/eric.png";

function Hero() {
  return (
    <div className='hero'>
      <Container>
        <Row className='flex-column-reverse flex-lg-row'>
          <Col className='hero-content text-lg-start text-center'>
            <h1 className='hero-heading'>
              <div>Hello, I'm</div>
              <span>Eric Hoover</span>
            </h1>
            <p className='sub-heading'>Software Engineer | Empathy Advocate | MBA</p>
            <div className=''>
              <div className='' style={{ display: "inline-block" }}>
                <Button href={"https://www.linkedin.com/in/hoov/"} className='custom-btn'>
                  LinkedIn
                </Button>
              </div>

              {/* <div className='btn-transparent' style={{ display: "inline-block" }}>
                <Button className='custom-btn'>LinkedIn</Button>
              </div> */}
            </div>
          </Col>
          <Col>
            <div className='hero-image-cover'>
              <Image src={eric} className='hero-image' />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;

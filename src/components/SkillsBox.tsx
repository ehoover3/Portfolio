import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function SkillsBox(props: any) {
  return (
    <Col className='skills-box' lg={3} sm={6}>
      <a href='#' style={{ textDecoration: "none" }}>
        <Card className='text-white'>
          <Card.Img src={props.img} alt='Card image' />
          <Card.ImgOverlay>
            <div className='skills-box-card-text'>
              <Card.Title className='card-title'>{props.title}</Card.Title>
              <Card.Title className='card-salary'>{props.salary}</Card.Title>
              <Card.Title className='card-salary'>{props.third}</Card.Title>
            </div>
          </Card.ImgOverlay>
        </Card>
      </a>
    </Col>
  );
}

export default SkillsBox;

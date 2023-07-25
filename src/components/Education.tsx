import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import PlanBox from "./About-box";
import IndianaUniversity from "../assets/IndianaUniversity.png";
import PurdueUniversitiy from "../assets/PurdueUniversitiy.png";
import img3 from "../assets/icon-3.svg";
import Heading from "./heading";

function Education() {
  return (
    <div className='plan'>
      <Container>
        <div className='heading'>
          <Heading title='Education ' />
        </div>
        <Row className='justify-content-center'>
          <PlanBox img={IndianaUniversity} title='MBA, Finance Concentration' description='Indiana University • 3.95/4.0 GPA' />
          <PlanBox img={PurdueUniversitiy} title='Bachelor of Communication' description='Purdue University • 3.42/4.0 GPA' />
        </Row>
      </Container>
    </div>
  );
}

export default Education;

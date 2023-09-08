import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import ProjectsBox from "./ProjectsBox";
import Heading from "./heading";
import img1svg from "../assets/icon-1.svg";
import img2svg from "../assets/icon-2.svg";

function Projects() {
  return (
    <div className='projects'>
      <Container>
        <div className='heading dark-heading'>
          <Heading title='Projects' />
        </div>
        <Row className='justify-content-center'>
          <ProjectsBox img={img1svg} href={"https://www.careerplantoday.com/"} title='Career Plan Today' />
          <ProjectsBox img={img2svg} href={"https://www.doseschedule.com/"} title='Dose Schedule' />
          {/* <ProjectsBox img={img3} title='University of Notre Dame' cost='Cost $12,783' /> */}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;

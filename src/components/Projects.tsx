import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import ProjectsBox from "./ProjectsBox";
import Heading from "./heading";
import img1svg from "../assets/job.svg";
import img2svg from "../assets/medicine.svg";
import img3svg from "../assets/letter.svg";

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
          <ProjectsBox img={img3svg} href={"https://www.dyslexiatoolkit.com/"} title='Dyslexia Toolkit' />
        </Row>
      </Container>
    </div>
  );
}

export default Projects;

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import chess from "../assets/img/newimg/Chess-Game.png";
import animated from "../assets/img/newimg/Animated-React.js.png";
import calendar from "../assets/img/newimg/calendar.png";
import eng from "../assets/img/images-proj/English-Dictionary-iu.png";
import feedback from "../assets/img/images-proj/Feedback-collector.png";
import news from "../assets/img/images-proj/News-homepage.png";
import qrcode from "../assets/img/images-proj/QR-Code-component.png";
import qrgen from "../assets/img/images-proj/QR-Generator.png";
import random from "../assets/img/images-proj/random-quote-generator.png";
import shoebrand from "../assets/img/newimg/shoe-brand (1).png"; // Or whatever the actual image file name is
import stopwatch from "../assets/img/newimg/Stop-watch.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Chess-Game",
      description: "...TechStack: Node.js,Express.js",
      imgUrl: chess,
    },
    {
      title: "Animated-React.js webPage",
      description: "...TechStack:React.js",
      imgUrl: animated,
    },
    {
      title: "Calendar",
      description: "...TechStack:HTML,CSS,JS",
      imgUrl: calendar,
    },
    {
      title: "Stop-Watch",
      description:  "...TechStack:HTML,CSS,JS",
      imgUrl:stopwatch,
    },
    {
      title: "shoe brand",
      description:  "...TechStack:HTML,CSS,JS",
      imgUrl: shoebrand,
    },
    {
    title: "English-Dictionary",
    description: "...TechStack:HTML,CSS,JS",
     imgUrl: eng,
  },
  ];

  // const projects2 = [
  //   {
  //     title: "Chess-Game",
  //     description: "TechStack: Node.js,Express.js",
  //     imgUrl: chess,
  //   },
  //   {
  //     title: "Animated-React.js webPage",
  //     description: " TechStack:React.js",
  //     imgUrl: animated,
  //   },
  //   {
  //     title: "Calendar",
  //     description: "Design & Development",
  //     imgUrl: projImg3,
  //   },
  //   {
  //     title: "English-Dictionary",
  //     description: "Design & Development",
  //     imgUrl: chess,
  //   },
  //   {
  //     title: "Feedback-collector",
  //     description: "Design & Development",
  //     imgUrl: projImg2,
  //   },
  //   {
  //     title: "News-Homepage",
  //     description: "Design & Development",
  //     imgUrl: projImg3,
  //   },
  // ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            {/* If you want to use TrackVisibility, uncomment and import it */}
            {/* <TrackVisibility> */}
              {/* Remove render prop syntax since TrackVisibility is commented */}
              <div>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => (
                            <ProjectCard key={index} {...project } />
                          ))
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      <Row>
                        {/* {
                          projects.map((project, index) => (
                            <ProjectCard key={index} {...project2} />
                          ))
                        } */}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            {/* </TrackVisibility> */}
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background decoration" />
    </section>
  )
}

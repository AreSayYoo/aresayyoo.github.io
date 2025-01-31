import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.png';
import img from './images/img.jpg';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.png';
import React, {useState} from 'react';
import { Container, Nav, Navbar, NavDropdown, Carousel } from 'react-bootstrap';
import { Link } from 'react-scroll';

function App() {  

  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => setExpanded(!expanded);
  const handleCollapse = () => setExpanded(false);

  return (
        <div id="home">
            <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            sticky="top"
            expanded={expanded}
            onToggle={handleToggle}
            className="custom-navbar py-3"
            >
              <Container>
                  <Navbar.Brand href="#home"  onClick={handleCollapse} className="custom-navbar-brand">
                      <img
                          src={logo}
                          alt="Logo"
                          style={{ height: '40px' }}
                          className="d-inline-block align-top"
                      />{' '}
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ms-auto custom-nav-links">
                        <Nav.Link>
                          <Link
                              to="about"
                              smooth={true}
                              offset={-250} // Offset equal to the header height
                              duration={1000} // Scroll animation duration
                              onClick={handleCollapse}
                          >
                              About Me
                          </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="projects" offset={-300} duration={1000} onClick={handleCollapse}>
                                Projects
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="resume" smooth={true} offset={-300} duration={1000} onClick={handleCollapse}>
                                Resume
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="contact" smooth={true} offset={-300} duration={1000} onClick={handleCollapse}>
                                Contact Me
                            </Link>
                        </Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>

            <main className="container my-5 text-center">
              <section className="mb-5">
                <Carousel id="pictures">
                  <Carousel.Item>
                    <img class="carousel-img" src={img} alt=""/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img class="carousel-img" src={img1} alt=""/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img class="carousel-img" src={img2} alt=""/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img class="carousel-img" src={img3} alt=""/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img class="carousel-img" src={img4} alt=""/>
                  </Carousel.Item>
                </Carousel>
              </section>

              <section id="about" className="mb-5">
                  <h1>About Me</h1>
                  <br></br>
                  <p>Hi, I'm an aspiring UX Designer passionate about creating user-friendly and intuitive designs. Explore my work and get to know me better.</p>
              </section>

              <section id="projects" className="mb-5">
                  <h1>Projects</h1>
                  <br></br>
                  <p>Here are some personal projects that I have designed:</p>
                  <br></br>
                  <h4>Shades of Green</h4>
                  <br></br>
                  <p>Shades of Green is a project I designed for a small business owner who does landscaping for a living. Most of their clientele are senior citizens, 
                    so they requested a website that was simple and could be easliy interacted with. They also wanted me to include a contact us page, where they could handle specific inquiries for exisitng and new customers</p><br></br>
                  <div className="figma-project">
                      <iframe
                          title="Figma Project"
                          width="100%"
                          height="600"
                          src="https://embed.figma.com/proto/4b5dYOsD5TH2mSElVBxr0w/Shades-of-Green?page-id=0%3A1&node-id=4-2&viewport=1352%2C291%2C0.34&scaling=contain&content-scaling=responsive&starting-point-node-id=4%3A2&embed-host=share"
                          allowFullScreen
                          style={{
                              border: 'none',
                              borderRadius: '8px',
                              overflow: 'hidden',
                          }}
                      ></iframe>
                  </div>
              </section>

              <section id="resume" className="mb-5">
                  <h1>Resume</h1>
                  <br></br>
                  <p><a href="/Matt_Arceo_Resume.pdf" download="Resume" className="btn btn-primary">Download my Resume</a></p>
              </section>

              <section id="contact" className="mb-5">
                  <h1>Contact Me</h1>
                  <br></br>
                  <p>Email: <a href="mailto:matt.p.arceo@gmail.com" className="text-decoration-none">matt.p.arceo@gmail.com</a></p>
              </section>
            </main>

            <footer className="bg-dark text-center py-3">
                &copy; 2025 Matthew Arceo. All rights reserved.
            </footer>
        </div>
  );
}

export default App;

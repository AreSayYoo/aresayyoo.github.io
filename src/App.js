import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.png';
import img from './images/img.jpg';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.png';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Carousel } from 'react-bootstrap';
import { Rating, Typography, Grid } from '@mui/material';

function App() {  

  return (
    <div>
            <header className="bg-dark text-white py-3 d-flex justify-content-between align-items-center sticky-top">
                <div className="logo ms-3 d-flex align-items-center">
                    <img src="/logo.png" alt="Logo" className="me-2"/>
                    <span className="fs-4 fw-bold"></span>
                </div>
                <nav className="me-3">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About Me</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resume">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact Me</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className="container my-5 text-center">

              <Carousel id="pictures" className="mb-5">
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

              <section id="about" className="mb-5" style={{ paddingTop: '80px', marginTop: '-80px' }}>
                  <h1>About Me</h1>
                  <br></br>
                  <p>Hi, I'm an aspiring UX Designer passionate about creating user-friendly and intuitive designs. Explore my work and get to know me better.</p>
              </section>

              <section id="projects" className="mb-5" style={{ paddingTop: '80px', marginTop: '-80px' }}>
                  <h1>Projects</h1>
                  <br></br>
                  <p>Here are some personal projects that I have designed:</p>
                  <br></br>
                  <h4>Movie Ordering App</h4>
                  <div className="figma-project">
                      <iframe
                          title="Figma Project"
                          width="100%"
                          height="450"
                          src="https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_PROJECT_URL"
                          allowFullScreen
                          style={{
                              border: 'none',
                              borderRadius: '8px',
                              overflow: 'hidden',
                          }}
                      ></iframe>
                  </div>
              </section>

              <section id="resume" className="mb-5" style={{ paddingTop: '80px', marginTop: '-80px' }}>
                  <h1>Resume</h1>
                  <br></br>
                  <p><a href="/Matt_Arceo_Resume.pdf" download="Resume" className="btn btn-primary">Download my Resume</a></p>
              </section>

              <section id="contact" className="mb-5" style={{ paddingTop: '80px', marginTop: '-80px' }}>
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

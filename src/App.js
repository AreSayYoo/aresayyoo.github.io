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
    <div className='fullpage'>
    <Navbar fixed='top' expand='lg' bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img alt='' src={logo} class='center-nav'/>
        </Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="https://drive.google.com/file/d/17PUoXho_UW9rbPUYnxICyYSJX0FxOmT5/view?usp=sharing">Resume</Nav.Link>
            <Nav.Link href="mailto:matt.p.arceo@gmail.com" target="_blank">Contact me</Nav.Link>
            <NavDropdown title="Social Media">
              <NavDropdown.Item href='https://www.linkedin.com/in/matthew-arceo/'>LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href='https://github.com/AreSayYoo'>GitHub</NavDropdown.Item>
              <NavDropdown.Item href='https://instagram.com/aresayyoo'>Music</NavDropdown.Item>
            </NavDropdown>
        </Nav>

      </Container>
    </Navbar>

    <div class="mt-4 p-5 bg-dark text-white ">

      <h1>About Me</h1>
      <Carousel>
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
      <br></br>
      <h3>Introduction</h3>
      <p class="ptext">
        Hello! My name is Matthew Arceo. I am a recent graduate of Towson University, recieving my Bachelor's in Computer Science. During my time at Towson, I was also a Student
        Athlete of the Baseball team, which is what I spent most of my free time outside my studies. I am seeking opportunites in IT and Software Development
        fields.
      </p>
      <br></br>
      <h3>Skills</h3>
      <p>
        <h5><u>Languages</u></h5>
        <Grid container spacing={3}>
          <Grid item xs={6} md={4}>
            <Typography>Java</Typography>
            <Rating name="half-rating-read" value={3.5} precision={0.5} readOnly />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography>Python</Typography>
            <Rating name="half-rating-read" value={3} precision={0.5} readOnly />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography>JavaScript</Typography>
            <Rating name="half-rating-read" value={3} precision={0.5} readOnly />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography>SQL</Typography>
            <Rating name="half-rating-read" value={3.5} precision={0.5} readOnly />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography>Kotlin</Typography>
            <Rating name="half-rating-read" value={2} precision={0.5} readOnly />
          </Grid>
        </Grid>

        <br></br>

        <h5><u>Web Development</u></h5>
        <Grid container spacing={3}>
          <Grid item xs={6} md={4}>
            <Typography>HTML</Typography>
            <Rating name="half-rating-read" value={3} precision={0.5} readOnly />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography>CSS</Typography>
            <Rating name="half-rating-read" value={2.5} precision={0.5} readOnly />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography>React.js</Typography>
            <Rating name="half-rating-read" value={2.5} precision={0.5} readOnly />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography>Node.js</Typography>
            <Rating name="half-rating-read" value={2.5} precision={0.5} readOnly />
          </Grid>
        </Grid>

        <br></br>

        <h5><u>Other</u></h5>
        <Grid container spacing={3}>
          <Grid item xs={6} md={4}>
            <Typography>Microsoft Office</Typography>
            <Rating name="half-rating-read" value={4} precision={0.5} readOnly />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography>Jira</Typography>
            <Rating name="half-rating-read" value={2.5} precision={0.5} readOnly />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography>Leadership</Typography>
            <Rating name="half-rating-read" value={4} precision={0.5} readOnly />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography>Teamwork</Typography>
            <Rating name="half-rating-read" value={4.5} precision={0.5} readOnly />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography>Communication</Typography>
            <Rating name="half-rating-read" value={4.5} precision={0.5} readOnly />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography>Attention to Detail</Typography>
            <Rating name="half-rating-read" value={4} precision={0.5} readOnly />
          </Grid>
        </Grid>
      </p>
      <br></br>
      <h3>Hobbies/Interests</h3>
      <p class="ptext">
        I have always been a huge fan of sports. Ever since I moved to the Baltimore area, I have become a follower of the Ravens and Orioles.
        In addition to playing baseball in college, I recently began to pick up tennis and enjoy playing matches with my friends.
        
        <br></br> 
        <br></br>

        Besides my love of sports, I also enjoy singing and writing my own songs that I share on social media. I would love
        to continue to learn how to produce music and upload my songs to a streaming service in the near future. The link to
        my music account is in the navigation bar under "Social Media" if you're interested in taking a listen.
      <br></br>
      <br></br>
        My other hobbies include:
          <li>Golf</li>
          <li>Weightlifting</li>
          <li>Running</li>
          <li>Reading</li>
          <li>Video Games</li>
      </p>
      <br></br>
      <br></br>
      <footer bg='dark' align='center'>This website was created with react</footer>

    </div>
    </div>
  );
}

export default App;

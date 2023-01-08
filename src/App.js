import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea, MDBValidationItem } from 'mdb-react-ui-kit';
import { Container, Nav, Navbar, NavDropdown, Modal } from 'react-bootstrap';
import { Rating, Typography, Grid } from '@mui/material';


function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='fullpage'>
    <Navbar fixed='top' expand='lg' bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href='home'>
            Matthew Arceo
        </Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="https://drive.google.com/file/d/17PUoXho_UW9rbPUYnxICyYSJX0FxOmT5/view?usp=sharing">Resume</Nav.Link>
            <Nav.Link onClick={handleShow}>Contact me</Nav.Link>
            <NavDropdown title="Social Media">
              <NavDropdown.Item href='https://www.linkedin.com/in/matthew-arceo/'>LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href=''>GitHub</NavDropdown.Item>
              <NavDropdown.Item href='https://instagram.com/aresayyoo'>Music</NavDropdown.Item>
            </NavDropdown>
        </Nav>

      </Container>
    </Navbar>

    <div class="mt-4 p-5 bg-dark text-white ">
      
      <img alt='' src='@Url.Content("src\logo.png")'/>

      <h1>About Me</h1>
      <br></br>
      <h3>Introduction</h3>
      <p>
        I am a recent graduate at Towson University, majoring in Computer Science. I was also a former Student
        Athlete of Towson's Baseball team. I am seeking potential opportunites in IT and Software Development
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
            <Rating name="half-rating-read" value={2.5} precision={0.5} readOnly />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography>JavaScript</Typography>
            <Rating name="half-rating-read" value={3} precision={0.5} readOnly />
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
      <p>
        I have always been a big fan of sports. Since living the Baltimore area, I have grown accustomed to keeping up with the Ravens/Orioles.
        Since I retired playing baseball I recently grown an affection for Tennis. Also for fun I am a singer/songwriter and post my music
        on Instagram. I would love to learn how to produce music and upload them to a streaming service in the near future (the link to 
        my music account is in the navigation bar under "Social Media").
      <br></br>
      <br></br>
        In addition, I also enjoy...
          <li>Golfing</li>
          <li>Weightlifting</li>
          <li>Running</li>
          <li>Reading</li>
          <li>Video Games</li>
      </p>
      <br></br>
      <br></br>
      <footer bg='dark' align='center'>This website was created with react.</footer>

    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <h1 className='text-center'>Contact Me</h1>
          <br></br>
          <form id='form' className='text-center' style={{ width: '100%', maxWidth: 'auto' }}>
            <MDBValidationItem invalid feedback='Please provide your name.'>
              <MDBInput label='Name' v-model='name' wrapperClass='mb-4' required />
            </MDBValidationItem>

            <MDBValidationItem invalid feedback='Please provide your email.'>
              <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' required />
            </MDBValidationItem>

            <MDBValidationItem invalid feedback='Please provide mail subject.'>
              <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' required />
            </MDBValidationItem>

            <MDBValidationItem invalid feedback='Please provide a message text.'>
              <MDBTextArea wrapperClass='mb-4' label='Message' required />
            </MDBValidationItem>

            <MDBValidationItem feedback=''>
              <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />
            </MDBValidationItem>
            <MDBBtn color='primary' block className='my-4'>
              Send
            </MDBBtn>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;

import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import HomeTab from "./HomeTab";
import ProfileTab from "./ProfileTab";
import Navbar from "react-bootstrap/Navbar";
import LightModeToggle from "./LightModeToggle";
import GoogleMapsComponent from "./GoogleMapsComponent";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card } from 'react-bootstrap';
import { Container } from "react-bootstrap"
import LoginButton  from "./LoginButton";
import { Spinner } from "react-bootstrap";
import GroupPage from "./GroupsPage";
import mapthing from "./mapthing.jpg";
import intramuralsoccer from "./intramuralsoccer.jpg";
import hosting from "./hosting.jpg"

function Page() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    // Display loading spinner while checking authentication status
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" role="status" size="md">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  // Check if the user is authenticated
  if (isAuthenticated) {
    return (
      <div>
        <NavHeader />
        <Row>
          <Col>
            <Tabs
              defaultActiveKey="home"
              id="uncontrolled-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="profile" title="Profile">
                <ProfileTab />
              </Tab>
              <Tab eventKey="home" title="Home">
                <HomeTab />
              </Tab>
              <Tab eventKey="eventsMap" title="Events Map">
                <GoogleMapsComponent />
              </Tab>
              <Tab eventKey="groups" title="Groups">
                <GroupPage />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </div>
    );
  } else {
    // Render the sign-in message and login button if the user is not authenticated
    return (
      <Container>
    <Row>
      <Col className="text-center">
        <Card style={{ margin: 50, padding: 50 }}>
          <h1>Welcome to EventConnect!</h1>
          {/* Card for finding local events */}
          <Row>
            <Col className="text-center">
              <Card style={{ 
                margin: '20px', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                borderRadius: '15px',
                overflow: 'hidden'
              }}>
                <Row>
                  <Col md={3} style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    padding: '20px'
                  }}>
                    <Card.Title>Find Local Events Near You!</Card.Title>
                    <Card.Text>
                      Discover events happening around you right now and meet new people!
                    </Card.Text>
                  </Col>
                  <Col md={9} style={{
                    backgroundImage: `url(${mapthing})`, // Ensure mapthing is the correct image URL
                    backgroundSize: 'cover'
                  }}>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

          {/* Card for exploring hobbies - Text on the left */}
          <Row>
            <Col className="text-center">
              <Card style={{ 
                margin: '20px', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                borderRadius: '15px',
                overflow: 'hidden'
              }}>
                <Row>
                  <Col md={9} style={{
                    backgroundImage: `url(${intramuralsoccer})`, // Change to appropriate hobby image URL
                    backgroundSize: 'cover'
                  }}>
                  </Col>
                  <Col md={3} style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    padding: '20px'
                  }}>
                    <Card.Title>Explore Different Hobbies</Card.Title>
                    <Card.Text>
                      Engage in new and exciting activities to broaden your horizons and unleash your creativity.
                    </Card.Text>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          
          {/* Card for hosting events */}
          <Row>
            <Col className="text-center">
              <Card style={{ 
                margin: '20px', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                borderRadius: '15px',
                overflow: 'hidden'
              }}>
                <Row>
                  <Col md={3} style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    padding: '20px'
                  }}>
                    <Card.Title>Host your own Events!</Card.Title>
                    <Card.Text>
                      Coordinate your events with EventConnect! Host Private and Public events with our built-in invitation system!
                    </Card.Text>
                  </Col>
                  <Col md={9} style={{
                    backgroundImage: `url(${hosting})`, // Change to an image suitable for event hosting
                    backgroundSize: 'cover'
                  }}>s
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <LoginButton />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
</Container>

    );
  }
}

function NavHeader() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="justify-content-start justify-content-lg-between" //adjust to top-right
    >
      <div className="d-none d-lg-flex" style={{ flex: 1 }}></div>

      <Navbar.Brand className="mx-lg-auto">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="d-inline-block align-center bi bi-server"
          >

            <path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4z" />
            <path d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334a6.5 6.5 0 0 1-1.458.79C11.81 7.684 9.967 8 8 8s-3.809-.317-5.208-.876a6.5 6.5 0 0 1-1.458-.79z" />
            <path d="M14.667 11.668a6.5 6.5 0 0 1-1.458.789c-1.4.56-3.242.876-5.21.876-1.966 0-3.809-.316-5.208-.876a6.5 6.5 0 0 1-1.458-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667z" />
          </svg>
          &nbsp;<b>EventConnect</b>
        </div>
      </Navbar.Brand>

      <div style={{ flex: 1, textAlign: 'right', display: 'flex', justifyContent: 'flex-end' }}>
        <LightModeToggle />
      </div>
    </Navbar>
  );
}

export default Page;

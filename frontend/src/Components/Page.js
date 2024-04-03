import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import HomeTab from "./HomeTab";
import ProfileTab from "./ProfileTab";
import Navbar from "react-bootstrap/Navbar";
import LightModeToggle from "./LightModeToggle";
import GoogleMapsComponent from "./GoogleMapsComponent";

function Page() {
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
          </Tabs>
        </Col>
      </Row>
    </div>
  );
}

function NavHeader() {
  return (
    <Navbar
      className="bg-body-tertiary justify-content-md-center"
      bg="dark"
      data-bs-theme="dark"
    >
      <Navbar.Brand>
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-server"
            viewBox="0 0 16 16"
            className="d-inline-block align-center"
          >
            <path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4z" />
            <path d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334a6.5 6.5 0 0 1-1.458.79C11.81 7.684 9.967 8 8 8s-3.809-.317-5.208-.876a6.5 6.5 0 0 1-1.458-.79z" />
            <path d="M14.667 11.668a6.5 6.5 0 0 1-1.458.789c-1.4.56-3.242.876-5.21.876-1.966 0-3.809-.316-5.208-.876a6.5 6.5 0 0 1-1.458-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667z" />
          </svg>
          &nbsp;<b>EventConnect</b>
        </div>
      </Navbar.Brand>
      <Navbar.Brand>
        <LightModeToggle />
      </Navbar.Brand>
    </Navbar>
  );
}

export default Page;

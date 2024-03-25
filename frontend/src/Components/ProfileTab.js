import { Card, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import logo192 from "./logo192.png";
import "./styles.css";
import { Col } from "react-bootstrap";
import MyEvents from "./MyEvents";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";

function ProfileTab() {
  return (
    <Container>
      <Row className="mx-auto">
        <Col>
          <Row>
            <PersonalInfo />
          </Row>
        </Col>
        <Col>
          <Tabs defaultActiveKey="MyEvents" id="ProfileTabs" className="mb-3">
            <Tab eventKey="MyEvents" title="My Events">
              <MyEvents />
            </Tab>
            <Tab eventKey="MyGroups" title="My Groups">
              Coming soon in feature 3!
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

function PersonalInfo() {
  return (
    <Row className="mx-auto">
      <Card style={{ width: "34rem" }}>
        <Card.Title>Profile</Card.Title>
        <Card.Img variant="top" src={logo192} alt="logo192" />
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBio">
            <Form.Label>Bio</Form.Label>
            <Form.Control as="textarea" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Edit/Save
          </Button>
        </Form>
      </Card>
    </Row>
  );
}

export default ProfileTab;

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
import { useState } from "react";

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
            <Tab eventKey="eventsJoined" title="Events Joined">
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
  // call to backend to update profile info
  // update profile info in user profile
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    bio: "",
    profilePicture: null,
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePicture: e.target.files[0],
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("username", formData.username);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("bio", formData.bio);
      formDataToSend.append("profilePicture", formData.profilePicture);

      const response = await fetch("/UserProfile", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        // Profile updated successfully
        console.log("Profile updated successfully");
      } else {
        // Handle error
        console.error("Error updating profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <Row className="mx-auto">
      <Card style={{ width: "34rem" }}>
        <Card.Title>Profile</Card.Title>
        <Card.Img variant="top" src={logo192} alt="logo192" />
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              onChange={handleFormChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleFormChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBio">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              as="textarea"
              name="bio"
              value={formData.bio}
              onChange={handleFormChange}
            />
          </Form.Group>

          <Form.Group controlId="formEventImage">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group>
          <br />

          <Button variant="primary" type="submit">
            Edit/Save
          </Button>
        </Form>
      </Card>
    </Row>
  );
}

export default ProfileTab;

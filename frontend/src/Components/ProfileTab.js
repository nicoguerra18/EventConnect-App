import { Card, Container, ToastContainer } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./styles.css";
import { Col } from "react-bootstrap";
import MyEvents from "./MyEvents";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import { useState } from "react";
import CSRFToken from "./crftoken";
import { useEffect } from "react";
import Toast from "react-bootstrap/Toast";
import defaultImage from "./default.jpg";
import JoinedEvents from "./JoinedEvents";

// NEED TO ADD A FILE IN ORDER FOR FOR THE PUT REQUEST TO GO THROUGH

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
            <Tab eventKey="MyEvents" title="Created Events">
              <MyEvents />
            </Tab>
            <Tab eventKey="eventsJoined" title="Events Joined">
              <JoinedEvents />
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
    profileName: "",
    username: "",
    password: "",
    bio: "",
    profilePicture: "",
  });

  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const toggleShowSuccessToast = () => setShowSuccessToast(!showSuccessToast);
  const toggleShowErrorToast = () => setShowErrorToast(!showErrorToast);

  // DEAFULT PROFILE IS 1******
  // currently it always calls profile 1 data
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch("http://localhost:8000/profiles/4/");
        if (response.ok) {
          const profileData = await response.json();
          setFormData(profileData);
        } else {
          console.error("Failed to fetch profile data");
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

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

  // Update profile method
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("profileName", formData.profileName);
      formDataToSend.append("username", formData.username);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("bio", formData.bio);
      formDataToSend.append("profilePicture", formData.profilePicture);
      console.log(formData.profilePicture);

      const response = await fetch("http://localhost:8000/profiles/4/", {
        method: "PATCH",
        body: formDataToSend,
      });
      console.log(formData.profilePicture);

      if (response.ok) {
        // Profile updated successfully
        console.log("Profile updated successfully");
        setShowSuccessToast(true);
        setShowErrorToast(false);
      } else {
        // Handle error
        console.error("Error updating profile");
        setShowErrorToast(true);
        setShowSuccessToast(false);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  console.log("profile pic" + formData.profilePicture);

  return (
    <Row className="mx-auto">
      <Card style={{ width: "34rem" }}>
        <Card.Title>Your Profile</Card.Title>
        <Card.Img
          src={"http://localhost:8000" + formData.profilePicture}
          alt="Profile Picture"
        />
        <Form onSubmit={handleFormSubmit}>
          <CSRFToken />
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="profileName"
              value={formData.profileName}
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
              type="text"
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

          <Button
            variant="primary"
            type="submit"
            onClick={handleFormSubmit}
            className="mb-3"
          >
            Edit/Save
          </Button>
        </Form>
      </Card>

      <ToastContainer className="p-3" position="top-end" style={{ zIndex: 1 }}>
        <Toast
          show={showSuccessToast}
          bg="success"
          onClose={toggleShowSuccessToast}
        >
          <Toast.Header>
            <strong className="me-auto">Success</strong>
          </Toast.Header>
          <Toast.Body className={"Dark" && "text-white"}>
            Profile Information Updated Successfully!
          </Toast.Body>
        </Toast>
        <Toast show={showErrorToast} bg="danger" onClose={toggleShowErrorToast}>
          <Toast.Header>
            <strong className="me-auto">Error</strong>
          </Toast.Header>
          <Toast.Body className={"Dark" && "text-white"}>
            Error updating profile information
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Row>
  );
}

export default ProfileTab;

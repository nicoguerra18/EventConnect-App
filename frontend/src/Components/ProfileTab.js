import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Tabs, Tab, Button, Form, ListGroup, Toast, ToastContainer } from "react-bootstrap";
import { useAuth0 } from '@auth0/auth0-react';
import "./styles.css";
import MyEvents from "./MyEvents";
import JoinedEvents from "./JoinedEvents";
import InvitesDisplay from "./InvitesDisplay";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import CSRFToken from "./crftoken";
import defaultImage from "./default.jpg";

function ProfileTab() {
  const { isAuthenticated } = useAuth0();
  const [groups, setGroups] = useState([
    { id: 1, name: "Group 1", joined: true },
    { id: 2, name: "Group 2", joined: false },
    { id: 3, name: "Group 3", joined: true }
  ]);

  const filteredGroups = groups.filter(group => group.joined);

  const toggleJoinGroup = groupId => {
    setGroups(prevGroups =>
      prevGroups.map(group =>
        group.id === groupId ? { ...group, joined: !group.joined } : group
      )
    );
  };

  return isAuthenticated ? (
    <Container>
      <Row className="mx-auto">
        <Col><PersonalInfo /></Col>
        <Col>
          <Tabs defaultActiveKey="MyEvents" id="ProfileTabs" className="mb-3">
            <Tab eventKey="MyEvents" title="Created Events"><MyEvents /></Tab>
            <Tab eventKey="eventsJoined" title="Events Joined"><JoinedEvents /></Tab>
            <Tab eventKey="PendingInvites" title="Pending Invites"><InvitesDisplay /></Tab>
            <Tab eventKey="MyGroups" title="My Groups">
              <ListGroup>
                {filteredGroups.map(group => (
                  <ListGroup.Item key={group.id} className="d-flex justify-content-between align-items-center">
                    {group.name}
                    <Button variant={group.joined ? "outline-secondary" : "outline-primary"}
                            onClick={() => toggleJoinGroup(group.id)}>
                      {group.joined ? "Leave" : "Join"}
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  ) : (
    <Container>
      <Row>
        <Col className="text-center">
          <Card style={{ margin: 50 }}>
            <h1 style={{ margin: 50 }}>You are not Signed in</h1>
            <Row><Col><LoginButton /></Col></Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

function PersonalInfo() {
  const [formData, setFormData] = useState({ profileName: "", username: "", password: "", bio: "", profilePicture: "", profilePictureUrl: "" });
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const { user } = useAuth0();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/profilesearch/${user.email}`);
        if (response.ok) {
          const profileData = await response.json();
          setFormData(profileData);
        } else {
          console.error("User Not Found! Creating a new profile...");
          const newProfile = {
            profileName: "Name", username: user.email, password: "password", bio: "Enter bio here"
          }
          const createResponse = await fetch('http://localhost:8000/profiles/',{
            method:'POST',
            headers:{
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProfile),
          });

          if(createResponse.okay){
            console.log("New profile created successfully");
            const newProfileData = await createResponse.json();
            setFormData(newProfileData);
          }
          else{
            console.log("failed to create profile", await createResponse.text());
          }
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, [user.given_name]);

  const handleFormChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      profilePicture: file,
      profilePictureUrl: URL.createObjectURL(file)
    }));
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("profileName", formData.profileName);
      formDataToSend.append("username", formData.username);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("bio", formData.bio);
      formDataToSend.append("profilePicture", formData.profilePicture);

      const response = await fetch(`http://localhost:8000/profilesearch/${user.given_name.toLowerCase()}`, {
        method: "PATCH",
        body: formDataToSend,
      });

      if (response.ok) {
        console.log("Profile updated successfully");
        setShowSuccessToast(true);
        setShowErrorToast(false);
      } else {
        console.error("Error updating profile");
        setShowErrorToast(true);
        setShowSuccessToast(false);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <Row className="mx-auto">
      <Card style={{ width: "34rem" }}>
        <Card.Title>Profile</Card.Title>
        <Card.Img src={formData.profilePictureUrl || defaultImage} alt="Profile Picture" />
        <Form onSubmit={handleFormSubmit}>
          <CSRFToken />
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="profileName" value={formData.profileName} onChange={handleFormChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="username" value={formData.username} onChange={handleFormChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" name="password" value={formData.password} onChange={handleFormChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBio">
            <Form.Label>Bio</Form.Label>
            <Form.Control as="textarea" name="bio" value={formData.bio} onChange={handleFormChange} />
          </Form.Group>
          <Form.Group controlId="formEventImage">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group>
          <Button variant="primary" type="submit" className="mb-3">Edit/Save</Button>
          <LogoutButton />
        </Form>
        <ToastContainer className="p-3" position="top-end">
          <Toast show={showSuccessToast} bg="success" onClose={() => setShowSuccessToast(false)}>
            <Toast.Header><strong className="me-auto">Success</strong></Toast.Header>
            <Toast.Body>Profile Information Updated Successfully!</Toast.Body>
          </Toast>
          <Toast show={showErrorToast} bg="danger" onClose={() => setShowErrorToast(false)}>
            <Toast.Header><strong className="me-auto">Error</strong></Toast.Header>
            <Toast.Body>Error updating profile information</Toast.Body>
          </Toast>
        </ToastContainer>
      </Card>
    </Row>
  );
}

export default ProfileTab;

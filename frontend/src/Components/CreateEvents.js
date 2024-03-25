import { Button } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Table } from "react-bootstrap";
import "./styles.css";

import CSRFToken from "./csrftoken";

function CreateEvents() {
  const [show, setShow] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await fetch("http://localhost:8000/results", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      }).then(function (response) {
        console.log(response);
        return response.json();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const eventOptions = [
    "Meetups",
    "Concert",
    "Sports events",
    "Workshops",
    "Seminars",
    "Conferences",
    "Networking events",
    "Festivals",
    "Exhibitions",
    "Art shows",
    "Theater performances",
    "Movie screenings",
    "Fitness classes",
    "Yoga sessions",
    "Dance classes",
    "Cooking classes",
    "Wine tasting events",
    "Charity fundraisers",
    "Hackathons",
    "Book readings/signings",
    "Music festivals",
    "Food festivals",
    "Comedy shows",
    "Art workshops",
    "Technology expos",
    "Job fairs",
    "Product launches",
    "Outdoor adventures",
    "Cultural celebrations",
    "Science fairs",
    "Historical reenactments",
    "Virtual events",
    "Fashion shows",
    "Car shows",
    "Gaming tournaments",
    "Trivia nights",
    "DIY crafting events",
    "Poetry slams",
    "Photography exhibitions",
    "Environmental awareness events",
    "Other",
  ];

  return (
    <Row className="mx-auto">
      <Button size="md" variant="primary" onClick={handleShow}>
        Create Event
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Create An Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form method="POST" encType="multipart/form-data">
            <Form.Group controlId="formTitle">
              <Form.Label>Event Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Event Title" />
            </Form.Group>
            <br />
            <Form.Group controlId="formDescription">
              <Form.Label>Event Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Event Decription"
                rows={3}
              />
            </Form.Group>
            <br />
            <Form.Group controlId="formEventImage">
              <Form.Label>Event Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <br />
            <Form.Group controlId="formLocation">
              <Form.Label>Event Location</Form.Label>
              <Form.Control type="locationForm" />
            </Form.Group>
            <br />
            <Form.Group controlId="formDate">
              <Form.Label>Event Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <br />
            <Form.Group controlId="formDate">
              <Form.Label>Keywords/Topic</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setSelectedEvent(e.target.value)}
              >
                <option value="">Choose an event type...</option>
                {eventOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <CSRFToken />
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Create Event
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
}

export default CreateEvents;

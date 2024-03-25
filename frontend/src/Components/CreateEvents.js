import { Button } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Table } from "react-bootstrap";
import "./styles.css";
import CSRFToken from "./crftoken";

function CreateEvents() {
  const [show, setShow] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    eventImage: null,
    location: "",
    date: "",
    selectedEvent: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, eventImage: e.target.files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append("title", formData.title);
      formdata.append("description", formData.description);
      formdata.append("eventImage", formData.eventImage);
      formdata.append("location", formData.location);
      formdata.append("date", formData.date);
      formdata.append("selectedEvent", formData.selectedEvent);

      const response = await fetch("http://localhost:8000/results", {
        method: "POST",
        body: formdata,
      });

      console.log(response);
      setShow(false);
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
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Event Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Event Title"
                onChange={handleChange}
              />
            </Form.Group>
            <br />
            <Form.Group controlId="formDescription">
              <Form.Label>Event Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Event Decription"
                rows={3}
                onChange={handleChange}
              />
            </Form.Group>
            <br />
            <Form.Group controlId="formEventImage">
              <Form.Label>Event Image</Form.Label>
              <Form.Control type="file" onChange={handleChange} />
            </Form.Group>
            <br />
            <Form.Group controlId="formLocation">
              <Form.Label>Event Location</Form.Label>
              <Form.Control type="locationForm" onChange={handleChange} />
            </Form.Group>
            <br />
            <Form.Group controlId="formDate">
              <Form.Label>Event Date</Form.Label>
              <Form.Control type="date" onChange={handleChange} />
            </Form.Group>
            <br />
            <Form.Group controlId="formDate">
              <Form.Label>Keywords/Topic</Form.Label>
              <Form.Control as="select" onChange={handleChange}>
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
          <Button variant="primary" type="submit">
            Create Event
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
}

export default CreateEvents;

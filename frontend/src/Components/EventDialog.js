import { Button, Image } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import logo192 from "./logo192.png";
import CSRFToken from "./crftoken";

function EventDialog({
  eventName,
  eventDescription,
  eventDate,
  eventCreator,
  eventLocation,
}) {
  const [show, setShow] = useState(false);
  const [attendees, setAttendees] = useState(0); // State for number of attendees
  const [joined, setJoined] = useState(false); // State to track whether user has joined the event

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleEvent = () => {
    if (joined) {
      setAttendees(attendees - 1);
    } else {
      setAttendees(attendees + 1);
    }
    setJoined(!joined);
    handleClose();
  };
  //console.log(eventName);

  return (
    <>
      <CSRFToken />
      <Button size="md" variant="primary" onClick={handleShow}>
        View Event Info
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{eventName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formDescription">
              <Form.Label>Event Description</Form.Label>
              <Form.Control
                disabled
                as="textarea"
                rows={3}
                value={eventDescription}
              />
            </Form.Group>
            <Form.Group controlId="formDate">
              <Form.Label>Event Date</Form.Label>
              <Form.Control disabled type="text" value={eventDate} />
            </Form.Group>

            <Form.Group controlId="formLocation">
              <Form.Label>Event Location</Form.Label>
              <Form.Control disabled value={eventLocation} />
            </Form.Group>
            <Form.Group controlId="formPeopleGoing">
              <Form.Label># People Attending</Form.Label>
              <Form.Control disabled type="number" value={attendees} />
            </Form.Group>
            <Form.Group controlId="formCreator">
              <Form.Label>Creator</Form.Label>
              <Form.Control disabled type="text" value={eventCreator} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant={joined ? "danger" : "success"} // Change variant based on joined state
            onClick={toggleEvent}
          >
            {joined ? "Leave Event" : "Join Event"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EventDialog;

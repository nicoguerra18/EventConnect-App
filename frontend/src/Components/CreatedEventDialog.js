import { Button } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import CSRFToken from "./crftoken";
import DiscussionCard from "./DisucssionCard";
import { Row } from "react-bootstrap";

function CreatedEventDialog({
  eventName,
  eventDescription,
  eventDate,
  eventCreator,
  eventLocation,
  eventId,
}) {
  const [show, setShow] = useState(false);
  // const [attendees, setAttendees] = useState(0); // State for number of attendees
  // const [joined, setJoined] = useState(false); // State to track whether user has joined the event

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <CSRFToken />
      <Button size="sm" variant="secondary" onClick={handleShow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-info-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
        </svg>
      </Button>{" "}
      &nbsp;
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
              <Form.Control disabled type="number" />
            </Form.Group>
            <Form.Group controlId="formCreator">
              <Form.Label>Creator</Form.Label>
              <Form.Control disabled type="text" value={eventCreator} />
            </Form.Group>
          </Form>
          <Row>
            <Modal.Title>Discussion</Modal.Title>

            <DiscussionModal eventName={eventName} />
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function DiscussionModal({ eventName }) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // fetch discussion data to populate discussion board

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open Discussion{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-people-fill"
          viewBox="0 0 16 16"
        >
          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
        </svg>
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <strong>Discussion: </strong>
            {eventName}{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DiscussionCard eventName={eventName} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreatedEventDialog;

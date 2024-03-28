import { Button, Container } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import CreateEvents from "./CreateEvents";
import EventDialog from "./EventDialog";
import { Card } from "react-bootstrap";
import "./styles.css";
import { useEffect } from "react";
import CSRFToken from "./crftoken";
// import sample_pic from "./sample_pic.png";

function HomeTab() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEventData(); // Fetch event data when component mounts
  }, []);

  // Function to fetch event data from the backend API
  const fetchEventData = async () => {
    try {
      const response = await fetch("http://localhost:8000/EventDatabase/");
      const eventData = await response.json();
      // console.log(eventData);
      setEvents(eventData);
    } catch (error) {
      console.error("Error fetching event data:", error);
    }
  };

  return (
    <div>
      <CSRFToken />
      <Row className="mx-auto">
        <Col md={4}>
          <Row>
            <CreateEvents />
          </Row>
        </Col>

        <Col md={8}>
          <RightSideOfPage events={events} />
        </Col>
      </Row>
    </div>
  );
}

function SearchEvents({ events, setFilteredEvents }) {
  const [entry, setEntry] = useState("");
  // needs to search the table for an entry with the given title

  const handleSearch = () => {
    const filteredEvents = events.filter((event) =>
      event.name.toLowerCase().includes(entry.toLowerCase())
    );
    setFilteredEvents(filteredEvents);
  };

  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formSearchEvent">
        <Col lg={10}>
          <Form.Control
            placeholder="Use title to search."
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
          />
        </Col>
        <Col lg={2}>
          <Button variant="dark" onClick={handleSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

function RightSideOfPage({ events }) {
  const [filteredEvents, setFilteredEvents] = useState([]);
  // Get all events in data base to display in the EventCards component

  return (
    <>
      <Container>
        <Row>
          <SearchEvents events={events} setFilteredEvents={setFilteredEvents} />
        </Row>

        <Row>
          <Col>
            <EventCards
              events={filteredEvents.length > 0 ? filteredEvents : events}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

function EventCards({ events }) {

  useEffect(() => {
    console.log(
      "Event Images:",
      events.map((event) => event.image)
    );
  }, [events]);
  return (
    <div className="event-cards-container">
      <Row xs={1} md={3} className="g-4">
        {events.map((event, index) => (
          <Col key={index}>
            <Card style={{ width: "17rem" }}>
              <Card.Img
                variant="top"
                src={event.image}
                alt="sample_pic"
                className="card-img-top img-fluid"
                style={{ height: "210px" }}
              />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <EventDialog
                  eventName={event.name}
                  eventCreator={event.creator}
                  eventDate={event.date}
                  eventLocation={event.location}
                  eventDescription={event.description}
                  eventId={event.id}
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}



export default HomeTab;

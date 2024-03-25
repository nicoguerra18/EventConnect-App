import { Button, Container } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Table } from "react-bootstrap";
import CreateEvents from "./CreateEvents";
import EventDialog from "./EventDialog";
import { Card } from "react-bootstrap";
import logo192 from "./logo192.png";
import "./styles.css";
import { useEffect } from "react";

function HomeTab() {
  // const events = [
  //   { title: "Event 1" },
  //   { title: "Event 2" },
  //   { title: "Event 3" },
  //   { title: "Event 4" },
  //   { title: "Event 5" },
  //   { title: "Event 6" },
  //   { title: "Event 7" },
  //   { title: "Event 8" },
  // ];

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEventData(); // Fetch event data when component mounts
  }, []);

  // Function to fetch event data from the backend API
  const fetchEventData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/EventDatabase/");
      const eventData = await response.json();
      setEvents(eventData);
    } catch (error) {
      console.error("Error fetching event data:", error);
    }
  };

  return (
    <div>
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
      event.title.toLowerCase().includes(entry.toLowerCase())
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
          <Button onClick={handleSearch}>Search</Button>
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
  return (
    <div className="event-cards-container">
      <Row xs={1} md={3} className="g-4">
        {events.map((event, index) => (
          <Col key={index}>
            <Card style={{ width: "17rem" }}>
              <Card.Img variant="top" src={logo192} alt="logo192" />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>
                  Join us for an exhilarating outdoor adventure day! Our event,
                  'Wilderness Wanderlust,' invites nature enthusiasts of all
                  levels to explore the breathtaking landscapes of our local
                  wilderness.{" "}
                </Card.Text>
                <EventDialog eventTitle={event.title} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}



export default HomeTab;
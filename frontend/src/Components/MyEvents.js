import React from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./styles.css";
import CreatedEventDialog from "./CreatedEventDialog";
import { useEffect } from "react";
import { Button } from "react-bootstrap";

// Order events based on Time, done on the backed tho?

function MyEvents() {
  // const myEventsMock = [
  //   { title: "Event Im attending 1" },
  //   { title: "Event Im attending 2" },
  //   { title: "Event Im attending 3" },
  // ];

  const [myCreatedEvents, setMyCreatedEvents] = useState([]);

  // All the events that I've created show up here need to make the call to the api and then pass that into myEvents
  useEffect(() => {
    fetchMyCreatedEventsData(); // Fetch event data when component mounts
  }, []);

  // Function to fetch events in the database that I CREATED,  data from the backend API
  const fetchMyCreatedEventsData = async () => {
    try {
      const response = await fetch("http://localhost:8000/EventDatabase/");
      const myCreatedEventsData = await response.json();
      // console.log(eventData);
      setMyCreatedEvents(myCreatedEventsData);
    } catch (error) {
      console.error("Error fetching event data:", error);
    }
  };

  // Function to Delete an Event from the databse (STILL NEED TO DO)
  // Function to delete an event from the database
  const deleteEvent = async (eventId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/EventDatabase/${eventId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        // Remove the deleted event from the state
        setMyCreatedEvents(
          myCreatedEvents.filter((event) => event.id !== eventId)
        );
      } else {
        console.error("Failed to delete event");
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <div className="event-cards-container">
      <Row className="g-4">
        {myCreatedEvents.map((event, index) => (
          <Col key={index}>
            <Card style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src={event.image}
                className="card-img-top img-fluid"
              />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>{event.desciption}</Card.Text>
                <CreatedEventDialog
                  eventName={event.name}
                  eventDescription={event.desciption}
                  eventDate={event.date}
                  eventLocation={event.location}
                  eventCreator={event.creator}
                />
                <Button variant="danger" onClick={() => deleteEvent(event.id)}>
                  Delete Event
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default MyEvents;

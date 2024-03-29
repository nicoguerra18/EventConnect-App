import React from "react";
import { useState } from "react";
import { CardFooter, Row } from "react-bootstrap";
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
      const response = await fetch(
        "http://localhost:8000/createdevents/rafay/"
      );
      const myCreatedEventsData = await response.json();
      // Parse the JSON string into a JavaScript object array
      const parsedEventsData = JSON.parse(myCreatedEventsData);
      setMyCreatedEvents(parsedEventsData);
      console.log(myCreatedEvents);
    } catch (error) {
      console.error("Error fetching my events data:", error);
    }
  };

  // Function to Delete an Event from the databse (STILL NEED TO DO)
  // Function to delete an event from the database
  const deleteEvent = async (eventId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/EventDatabase/${eventId}/`,
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
                style={{ height: "150px" }}
              />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <CreatedEventDialog
                  eventName={event.name}
                  eventDescription={event.description}
                  eventDate={event.date}
                  eventLocation={event.location}
                  eventCreator={event.creator}
                />
              </Card.Body>
              <CardFooter>
                {" "}
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => deleteEvent(event.id)}
                >
                  Delete Event&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                  </svg>
                </Button>
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default MyEvents;

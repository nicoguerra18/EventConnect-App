"use client";
import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  Marker,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";
import EventDialog from "./EventDialog";
import { useEffect } from "react";
import "@googlemaps/extended-component-library/place_picker.js";
import { PlacePicker } from "@googlemaps/extended-component-library/react";
import { CardFooter, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";

// Have default "Home" position set by the user on their account
const googleapikey = process.env.REACT_APP_googleAPIKey;

function GoogleMapsComponent() {
  const [events, setEvents] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    fetchMapEventData(); // Fetch event data to populate map when component mounts
  }, []);

  // Function to fetch event data from the backend API
  const fetchMapEventData = async () => {
    try {
      const response = await fetch("http://localhost:8000/eventcoords/");
      if (!response.ok) {
        throw new Error("Failed to fetch event data");
      }
      const eventDataForMap = await response.json();
      const parsedEventData = JSON.parse(eventDataForMap); // Parse the JSON string
      setEvents(parsedEventData); // Set the events state with the parsed data
    } catch (error) {
      console.error("Error fetching event data:", error);
    }
  };

  return (
    <APIProvider apiKey={googleapikey}>
      <div style={{ height: "100vh" }}>
        <Map
          defaultZoom={8}
          defaultCenter={{ lat: 41.49, lng: -81.69 }} // Use selectedLocation if available, otherwise fallback to default position
          mapId={"da1539bfad046c08"}
        >
          {events.map((event, index) => (
            <EventMarkers
              key={index}
              position={{
                lat: parseFloat(event.latitude),
                lng: parseFloat(event.longitude),
              }}
              event={event}
            />
          ))}
        </Map>
      </div>
    </APIProvider>
  );
}

function EventMarkers({ position, event }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <AdvancedMarker position={position} onClick={() => setOpen(true)}>
        <Pin />
      </AdvancedMarker>

      {open && (
        <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
          <Card style={{ width: "14rem" }}>
            <Card.Img
              variant="top"
              src={"http://localhost:8000/media/" + event.input_image}
              alt="sample_pic"
              className="card-img-top img-fluid"
              style={{ height: "140px" }}
            />
            <Card.Body>
              <Card.Title>{event.input_name}</Card.Title>
              <Card.Text>{event.input_description}</Card.Text>
            </Card.Body>
            <CardFooter>
              <EventDialog
                eventName={event.input_name}
                eventCreator={event.input_creator}
                eventDate={event.input_date}
                eventLocation={event.input_location}
                eventDescription={event.input_description}
                eventId={event.id}
              />
            </CardFooter>
          </Card>

          {/* {console.log(
            "http://localhost:8000/media/" + event.input_image + "/"
          )} */}
        </InfoWindow>
      )}
    </div>
  );
}

export default GoogleMapsComponent;

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

// Variables

function GoogleMapsComponent() {
  const positions = [
    { lat: 53.54, lng: 10 },
    { lat: 54, lng: 10 },
    // Add more positions here as needed
  ];
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchMapEventData(); // Fetch event data to populate map when component mounts
  }, []);

  // Function to fetch event data from the backend API
  const fetchMapEventData = async () => {
    try {
      const response = await fetch("http://localhost:8000/EventDatabase/");
      const eventDataForMap = await response.json();
      // console.log(eventData);
      setEvents(eventDataForMap);
      console.log(eventDataForMap);
    } catch (error) {
      console.error("Error fetching event data:", error);
    }
  };

  // load all the events and convert their addresses to longitude and latitude coordinates

  return (
    <APIProvider apiKey="AIzaSyAfwuhpEPloICBoNSQKGBBEYVJzAYqyzYU">
      <div style={{ height: "100vh" }}>
        <Map
          defaultZoom={9}
          defaultCenter={positions[0]}
          mapId={"da1539bfad046c08"}
        >
          {positions.map((position, index) => (
            <EventMarkers key={index} position={position} />
          ))}
        </Map>
        <Geocoding />
      </div>
    </APIProvider>
  );
}

function EventMarkers({ position }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <AdvancedMarker position={position} onClick={() => setOpen(true)}>
        <Pin />
      </AdvancedMarker>

      {open && (
        <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
          <h3>Event Title</h3>
          <EventDialog />
        </InfoWindow>
      )}
    </div>
  );
}

function Geocoding() {
  const geocodingApiLoaded = useMapsLibrary("geocoding");
  const [geocodingService, setGeocodingService] = useState();
  const [geocodingResult, setGeocodingResult] = useState();
  const [address, setAddress] = useState("10 Front St, Toronto");

  useEffect(() => {
    if (!geocodingApiLoaded) return;
    setGeocodingService(new window.google.maps.Geocoder());
  }, [geocodingApiLoaded]);

  useEffect(() => {
    if (!geocodingService || !address) return;

    geocodingService.geocode({ address }, (results, status) => {
      if (results && status === "OK") {
        setGeocodingResult(results[0]);
        console.log(results);
      }
    });
  }, [geocodingService, address]);

  // Extract latitude and longitude from geocodingResult
  const latitude = geocodingResult?.geometry?.location?.lat() || 0;
  const longitude = geocodingResult?.geometry?.location?.lng() || 0;

  console.log("Latitude:", latitude);
  console.log("Longitude:", longitude);
}




export default GoogleMapsComponent;

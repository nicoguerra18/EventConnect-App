"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import EventDialog from "./EventDialog";

function GoogleMapsComponent() {
  // const position = { lat: 53.54, lng: 10 };
  const positions = [
    { lat: 53.54, lng: 10 },
    { lat: 54, lng: 10 },
    // Add more positions here as needed
  ];

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

export default GoogleMapsComponent;

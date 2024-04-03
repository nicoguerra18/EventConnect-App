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
  const position = { lat: 53.54, lng: 10 };

  return (
    <APIProvider apiKey="AIzaSyAfwuhpEPloICBoNSQKGBBEYVJzAYqyzYU">
      <div style={{ height: "100vh" }}>
        <Map
          defaultZoom={9}
          defaultCenter={position}
          mapId={"da1539bfad046c08"}
        >
          <EventMarkers position={position} />
        </Map>
      </div>
    </APIProvider>
  );
}

function EventMarkers({ position }) {
  const [open, setOpen] = useState(false);
  // get all event information and posions

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

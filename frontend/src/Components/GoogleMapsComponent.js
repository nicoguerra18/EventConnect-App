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
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey="AIzaSyAfwuhpEPloICBoNSQKGBBEYVJzAYqyzYU">
      <div style={{ height: "100vh" }}>
        <Map zoom={9} center={position} mapId={"da1539bfad046c08"}>
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin />
          </AdvancedMarker>

          {open && (
            <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
              <h3>Event Title</h3>
              <EventDialog />
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}

export default GoogleMapsComponent;

"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

function GoogleMapsComponent() {
  const position = { lat: 53.54, lng: 10 };
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey="AIzaSyAfwuhpEPloICBoNSQKGBBEYVJzAYqyzYU">
      <div style={{ height: "100vh" }}>
        <Map
          defaultZoom={9}
          defaultCenter={position}
          mapId={"main-aviary-419215"}
          onClick={() => setOpen(true)}
        ></Map>
        <AdvancedMarker position={position}>
          <Pin background={"grey"} borderColor={"green"} />
        </AdvancedMarker>

        {open && (
          <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
            <p>Im in Hamburg</p>
          </InfoWindow>
        )}
      </div>
    </APIProvider>
  );
}

export default GoogleMapsComponent;

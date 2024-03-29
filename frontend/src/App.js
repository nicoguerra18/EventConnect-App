import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
//we need to comment out unused packages to pass dev pipeline
import Page from "./Components/Page";

function App() {
  return (
    <div>
      <Page />
    </div>
  );
}

export default App;

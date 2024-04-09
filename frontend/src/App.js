import React from "react";
import Page from "./Components/Page";
import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";

function App() {
  return (

    <main className="column">
      <h1>Auth0 Login</h1>
      <LoginButton />
      <LogoutButton />
    </main>

  );
}

export default App;

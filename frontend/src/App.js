import React from "react";
import Page from "./Components/Page";
import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";
import Profile from "./Components/Profile"

function App() {
  return (
    <div>
      <h1>Auth0 Login</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>

  );
}

export default App;

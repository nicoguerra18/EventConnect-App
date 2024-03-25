import React from "react";

const CSRFToken = () => {
  const getCookie = (name) => {
    const cookieString = document.cookie;
    const cookies = cookieString.split(";").map((cookie) => cookie.trim());
    const cookie = cookies.find((cookie) => cookie.startsWith(name + "="));
    if (cookie) {
      return cookie.split("=")[1];
    }
    return null;
  };

  const csrftoken = getCookie("csrftoken");

  return <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />;
};

export default CSRFToken;

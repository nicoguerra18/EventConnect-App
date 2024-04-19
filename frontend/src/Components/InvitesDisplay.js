import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import CSRFToken from "./crftoken";

function InvitesDisplay() {
  const [inviteEventData, setInviteEventData] = useState([]);

  useEffect(() => {
    fetchInviteData(); // Fetch event data when component mounts
  }, []);

  // Function to fetch event data from the backend API
  const fetchInviteData = async () => {
    try {
      const response = await fetch("http://localhost:8000/invites/nico/");
      const inviteData = await response.json();
      setInviteEventData(inviteData);
      console.log(inviteData);
    } catch (error) {
      console.error("Error fetching invite event data:", error);
    }
  };

  // Function to handle accepting the invitation for a specific event
  const handleAcceptInvite = async (eventName) => {
    try {
      // Send a request to join the event
      // alse send a request to delte the invite from the list
      const response = await fetch(
        `http://localhost:8000/invites/nico/${eventName}/True/`,
        {
          method: "PATCH",
        }
      );
      if (response.ok) {
        // If the request is successful, remove the event from the invitation list
        setInviteEventData(
          inviteEventData.filter((event) => event.event.name !== eventName)
        );
      } else {
        // Handle errors if any
        console.error("Error accepting invite:", response.statusText);
      }
    } catch (error) {
      console.error("Error accepting invite:", error);
    }
  };

  // Function to handle declining the invitation for a specific event
  const handleDeclineInvite = async (eventId) => {
    try {
      // Remove the event from the invitation list
      // Example: await fetch(`http://localhost:8000/username/declineInvite/${eventId}`, { method: 'DELETE' });

      // Assuming the above fetch request updates the frontend data as well
      setInviteEventData(
        inviteEventData.filter((event) => event.id !== eventId)
      );
    } catch (error) {
      console.error("Error declining invite:", error);
    }
  };

  return (
    <div>
      <ListGroup>
        {inviteEventData.map((eventData, index) => (
          <ListGroup.Item
            key={index} // Use index or a unique identifier from your data as the key
            className="d-flex justify-content-between align-items-center"
          >
            <div>
              <div>
                <b>{eventData.event.name}</b>
              </div>
              <div>Invited by: {eventData.event.creator}</div>
              {/* Display other event details as needed */}
            </div>
            <div>
              <Button
                onClick={() => handleAcceptInvite(eventData.event.name)}
                variant="outline-success"
              >
                Accept
              </Button>
              &nbsp;
              <Button
                onClick={() => handleDeclineInvite(eventData.event.id)}
                variant="outline-danger"
              >
                Decline
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default InvitesDisplay;

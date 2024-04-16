import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function InvitesDisplay() {
  const [inviteEventData, setInviteEventData] = useState([]);

  useEffect(() => {
    fetchInviteData(); // Fetch event data when component mounts
  }, []);

  // Function to fetch event data from the backend API
  const fetchInviteData = async () => {
    try {
      const response = await fetch("http://localhost:8000/EventDatabase/");
      const inviteData = await response.json();
      setInviteEventData(inviteData);
    } catch (error) {
      console.error("Error fetching invite event data:", error);
    }
  };

  // Function to handle accepting the invitation for a specific event
  const handleAcceptInvite = async (eventId) => {
    try {
      // Send a request to the backend to update the user's accepted events list
      // and remove the event from the invitation list
      // Example: await fetch(`http://localhost:8000/username/acceptInvite/${eventId}`, { method: 'POST' });

      // Assuming the above fetch request updates the frontend data as well
      setInviteEventData(
        inviteEventData.filter((event) => event.id !== eventId)
      );
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
        {inviteEventData.map((event) => (
          <ListGroup.Item
            key={event.id}
            className="d-flex justify-content-between align-items-center"
          >
            <div>
              <div>
                <b>{event.name}</b>
              </div>
              <div>Invited by: {event.inviter}</div>{" "}
              {/* Display the inviter's name */}
            </div>
            <div>
              <Button
                onClick={() => handleAcceptInvite(event.id)}
                variant="success"
              >
                Accept
              </Button>
              &nbsp;
              <Button
                onClick={() => handleDeclineInvite(event.id)}
                variant="danger"
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

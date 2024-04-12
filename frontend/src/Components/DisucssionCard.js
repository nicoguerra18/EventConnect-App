import React, { useState } from "react";
import { Toast, Button, Form, ToastBody, Container } from "react-bootstrap";

function ToastMessage({ comment }) {
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();
  return (
    <Toast>
      <Toast.Header closeButton={false}>
        <img></img>
        <strong className="me-auto">usernameeee</strong>
        <small className="text-muted">
          {currTime} / {currDate},
        </small>
      </Toast.Header>
      <ToastBody>{comment}</ToastBody>
    </Toast>
  );
}

// pass in event discussion view data
function DiscussionCard() {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]); // Add new comment to the comments array
      setNewComment(""); // Clear the new comment input field
    }
  };

  // Fetch event discussion data to populate discussion card
  // Be able to post a new comment to the eventDiscussion view

  return (
    <div>
      <div style={{ height: "350px", overflowY: "auto" }}>
        <Container>
          {comments.map((comment, index) => (
            <ToastMessage key={index} comment={comment} />
          ))}
        </Container>
      </div>

      <br />
      <Form.Group controlId="formNewComment">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Write your comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" onClick={handleAddComment}>
        Add Comment
      </Button>
    </div>
  );
}

export default DiscussionCard;

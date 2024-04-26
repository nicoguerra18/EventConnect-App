import React, { useState, useEffect } from "react";
import { Toast, Button, Form, ToastBody, Container } from "react-bootstrap";
import CSRFToken from "./crftoken";
import { useAuth0 } from "@auth0/auth0-react";

function ToastMessage({ comment }) {
  const timestamp = new Date(comment.timestamp).toLocaleString();
  console.log(JSON.toString(timestamp));
  return (
    <Toast>
      <Toast.Header closeButton={false}>
        <strong className="me-auto">{comment.author}</strong>
        <small className="text-muted">{comment.timestamp}</small>
      </Toast.Header>
      <ToastBody>{comment.body}</ToastBody>
    </Toast>
  );
}

function DiscussionCard({ eventName, eventId }) {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  // Get all comments for this discussion in order to populate the disucssion with previous comments
  useEffect(() => {
    fetchCommentData();
  }, [eventName]); // Fetch comments when eventName changes

  const fetchCommentData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/discussion/${eventName}/comments/`
      );
      const commentData = await response.json();
      console.log("success getting comment data" + commentData);
      setComments(commentData);
    } catch (error) {
      console.error("Error fetching event data:", error);
    }
  };

  const {user} = useAuth0();
  const username = user.given_name.toLowerCase();

  const handleAddComment = async () => {
    if (newComment.trim() !== "") {
      const newCommentObj = {
        //discussion: eventName,
        body: newComment,
        author: username,
        timestamp: new Date().toISOString(),
      };
      try {
        console.log(JSON.stringify(newCommentObj));
        const response = await fetch(

          `http://localhost:8000/comment/${user.given_name.toLowerCase()}/${eventName}/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newCommentObj), // Stringify the object
          }
        );

        if (!response.ok) {
          throw new Error("Failed to add comment");
        }

        // Refresh comments after adding
        fetchCommentData();

        setNewComment(""); // Clear the comment input
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

  return (
    <div>
      <CSRFToken />
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

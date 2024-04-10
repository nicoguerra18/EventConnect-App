import React, { useState, useEffect } from "react";
import { Toast, Button, Form, ToastBody, Container } from "react-bootstrap";
import CSRFToken from "./crftoken";

function ToastMessage({ comment }) {
  const timestamp = new Date(comment.timestamp).toLocaleString();
  return (
    <Toast>
      <Toast.Header closeButton={false}>
        <strong className="me-auto">{comment.author}</strong>
        <small className="text-muted">{timestamp}</small>
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
      setComments(commentData);
    } catch (error) {
      console.error("Error fetching event data:", error);
    }
  };

  const handleAddComment = async () => {
    if (newComment.trim() !== "") {
      const newCommentObj = {
        discussion: eventName,
        body: newComment,
        author: "nico",
        timestamp: new Date().toISOString(),
      };
      try {
        const response = await fetch(
          `http://localhost:8000/discussion/${eventName}/comments/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newCommentObj),
          }
        );
        console.log(newCommentObj);

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

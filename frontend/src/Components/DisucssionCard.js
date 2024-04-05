import React, { useState } from "react";
import { Toast, Button, Form, ToastBody } from "react-bootstrap";

function ToastMessage({ comment }) {
  return (
    <Toast>
      <ToastBody>{comment}</ToastBody>
    </Toast>
  );
}

function DiscussionCard() {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]); // Add new comment to the comments array
      setNewComment(""); // Clear the new comment input field
    }
  };

  return (
    <div>
      {/* Render toast messages for each comment */}
      {comments.map((comment, index) => (
        <ToastMessage key={index} comment={comment} />
      ))}
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

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CSRFToken from './crftoken'; // Make sure this component is correctly handling CSRF tokens

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Ensure CSRF token is sent with the request if needed
        'X-CSRFToken': CSRFToken()
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    };

    try {
      const response = await fetch('/api/login/', requestOptions); // Adjust the URL to match your API endpoint
      if (!response.ok) throw new Error('Response not OK');
      const data = await response.json();
      console.log(data); // Handle the response data as needed
      // Redirect or update UI upon successful login
    } catch (error) {
      console.error('Failed to login:', error);
      // Handle errors (e.g., display error messages)
    }
  };

  return (
    <div className="container mt-3">
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        {/* CSRFToken component is assumed to handle CSRF token correctly */}
        <CSRFToken />
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;

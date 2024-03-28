import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '', // Assuming email is part of the sign-up process
    // Add other fields as necessary
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };

    try {
      const response = await fetch('/api/register/', requestOptions); // Adjust the URL to match your API endpoint
      if (!response.ok) throw new Error('Response not OK');
      const data = await response.json();
      console.log(data); // Handle the response data as needed
      // Redirect or update UI upon successful registration
    } catch (error) {
      console.error('Failed to register:', error);
      // Handle errors (e.g., display error messages)
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange} />
        </Form.Group>

        {/* Add other fields in the same manner */}

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;

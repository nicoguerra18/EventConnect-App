import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SignUp = () => {
  return (
    <div className="container">
      <h2>Sign Up</h2>
      <Form>
        {/* need add content */}
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;

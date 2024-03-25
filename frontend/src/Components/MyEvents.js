import { Button, Container } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Table } from "react-bootstrap";
import CreateEvents from "./CreateEvents";
import EventDialog from "./EventDialog";
import { Card } from "react-bootstrap";
import logo192 from "./logo192.png";
import "./styles.css";

// Order events based on Time, done on the backed tho?

function MyEvents() {
  const myEventsMock = [
    { title: "Event Im attending 1" },
    { title: "Event Im attending 2" },
    { title: "Event Im attending 3" },
  ];
  return (
    <div className="event-cards-container">
      <Row className="g-4">
        {myEventsMock.map((event, index) => (
          <Col key={index}>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={logo192} alt="logo192" />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>Text</Card.Text>
                <EventDialog eventTitle={event.title} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default MyEvents;

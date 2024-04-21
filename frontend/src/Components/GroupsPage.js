import { useState } from "react";
import {
  Col,
  Row,
  ListGroup,
  Form,
  Button as BootstrapButton,
  Modal,
  Offcanvas,
} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import DiscussionCard from "./DisucssionCard";

export default function GroupPage() {
  const [selectedGroup, setSelectedGroup] = useState(null); // State to track the selected group

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
  };

  return (
    <div>
      <Row>
        <Col md={2}>
          <SideBar handleGroupSelect={handleGroupSelect} />
        </Col>
        <Col>
          {selectedGroup ? (
            <>
              <h3>{selectedGroup.name}</h3>{" "}
              {/* Display the selected group's name */}
              <DiscussionCard group={selectedGroup} />
            </>
          ) : (
            <p>Please select a group to view discussions.</p>
          )}
        </Col>
      </Row>
    </div>
  );
}

function SideBar({ handleGroupSelect }) {
  const [show, setShow] = useState(false);
  const [groups, setGroups] = useState([
    { id: 1, name: "Group 1" },
    { id: 2, name: "Group 2" },
    { id: 3, name: "Group 3" },
  ]); // Sample group data, replace with actual data from your backend
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const [newGroupName, setNewGroupName] = useState(""); // State to store the new group name
  const [showCreateModal, setShowCreateModal] = useState(false); // State to control the visibility of the create group modal

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCreateGroup = () => {
    // Perform group creation logic here
    const newGroup = {
      id: groups.length + 1,
      name: newGroupName,
    };
    setGroups([...groups, newGroup]);
    setNewGroupName("");
    handleCloseCreateModal();
  };

  const handleCloseCreateModal = () => {
    setShowCreateModal(false);
    setNewGroupName("");
  };

  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View All Groups
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Groups</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form.Group controlId="searchGroup">
            <Form.Control
              type="text"
              placeholder="Search groups"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form.Group>
          <br />
          <ListGroup>
            {filteredGroups.map((group) => (
              <ListGroup.Item
                className="d-flex justify-content-between align-items-center"
                key={group.id}
                action
                onClick={() => {
                  handleGroupSelect(group);
                  handleClose();
                }}
              >
                {group.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <br />
          <BootstrapButton
            variant="success"
            onClick={() => setShowCreateModal(true)}
          >
            Create New Group
          </BootstrapButton>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Create Group Modal */}
      <Modal show={showCreateModal} onHide={handleCloseCreateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="groupName">
            <Form.Label>Group Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter group name"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <BootstrapButton variant="secondary" onClick={handleCloseCreateModal}>
            Cancel
          </BootstrapButton>
          <BootstrapButton variant="primary" onClick={handleCreateGroup}>
            Create
          </BootstrapButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContacts } from "./contexts/ContactsHandler";
import { useChat } from "./contexts/ChatHandler";

export default function ModalChat({ modalClose }) {
  const [selectedId, setSelectedId] = useState([]);

  const { contacts } = useContacts();
  const { createChat } = useChat();

  function handleSubmit(e) {
    e.preventDefault();

    createChat(selectedId);
    modalClose();
  }

  function handleCheckboxChange(contactId) {
    setSelectedId((prevSelectedId) => {
      if (prevSelectedId.includes(contactId)) {
        return prevSelectedId.filter((prevId) => {
          return contactId === prevId;
        });
      } else {
        return [...prevSelectedId, contactId];
      }
    });
  }

  return (
    <>
      <Modal.Header closeButton>Create Message</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedId.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              />
            </Form.Group>
          ))}
          <Button type="submit">Send Message</Button>
        </Form>
      </Modal.Body>
    </>
  );
}

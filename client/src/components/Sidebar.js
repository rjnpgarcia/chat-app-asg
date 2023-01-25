import React, { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import Chat from "./Chat";
import Contacts from "./Contacts";
import ModalContact from "./ModalContact";
import ModalChat from "./ModalChat";

const CHAT_KEY = "chat";
const CONTACTS_KEY = "contacts";

export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CHAT_KEY);
  const [modalOpen, setModalOpen] = useState(false);
  const chatOpen = activeKey === CHAT_KEY;

  function modalClose() {
    setModalOpen(false);
  }

  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CHAT_KEY}>Chat</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-end overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CHAT_KEY}>
            <Chat />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-end small">
          Your Id: <span className="text-muted">{id}</span>
        </div>
        <Button onClick={() => setModalOpen(true)}>
          New {chatOpen ? "Chat" : "Contact"}
        </Button>
      </Tab.Container>
      <Modal show={modalOpen} onHide={modalClose}>
        {chatOpen ? (
          <ModalChat modalClose={modalClose} />
        ) : (
          <ModalContact modalClose={modalClose} />
        )}
      </Modal>
    </div>
  );
}

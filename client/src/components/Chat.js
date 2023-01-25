import React from "react";
import { ListGroup } from "react-bootstrap";
import { useChat } from "./contexts/ChatHandler";

export default function Chat() {
  const { chats, selectIndex } = useChat();

  return (
    <ListGroup variant="flush">
      {chats.map((chat, index) => (
        <ListGroup.Item
          key={index}
          action
          onClick={() => selectIndex(index)}
          active={chat.selected}
        >
          {chat.recipients.map((recipient) => recipient.name).join(", ")}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

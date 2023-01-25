import React from "react";
import Sidebar from "./Sidebar";
import OpenChat from "./OpenChat";
import { useChat } from "./contexts/ChatHandler";

export default function Dashboard({ id }) {
  const { selectedChat } = useChat();
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar id={id} />
      {selectedChat && <OpenChat />}
    </div>
  );
}

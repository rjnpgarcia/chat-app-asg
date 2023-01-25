import React from "react";
import Login from "./Login";
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard";
import { ContactsHandler } from "./contexts/ContactsHandler";
import { ChatHandler } from "./contexts/ChatHandler";
import { SocketHandler } from "./contexts/SocketHandler";

function App() {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <SocketHandler id={id}>
      <ContactsHandler>
        <ChatHandler id={id}>
          <Dashboard id={id} />
        </ChatHandler>
      </ContactsHandler>
    </SocketHandler>
  );

  return id ? dashboard : <Login onIdSubmit={setId} />;
}

export default App;

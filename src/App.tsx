import React from "react";

import "./App.css";
import { Button } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> hiiiiiiiiiiiiiiiii and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        Chakra UI Buttonasdaf
        <Button colorScheme="teal" size="lg" mt={4}>
          Chakra UI Button
        </Button>
      </header>
    </div>
  );
}

export default App;

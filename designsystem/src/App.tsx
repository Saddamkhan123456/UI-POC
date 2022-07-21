import React from "react";
import "./App.css";
import { Footer } from "./atoms/footer";
import { Navbar } from "./atoms/navbar/navbar";
import RouteConfig from "./Route/RouteConfig";

function App() {
  return (
    <>
      <div className="flex flex-col h-full">
        <Navbar />
        <div className="bg-theme-primary h-full overflow-scroll">
          <RouteConfig />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

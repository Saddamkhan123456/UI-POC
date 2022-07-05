import React from "react";
import "./App.css";
import { Footer } from "./atoms/footer";
import { Navbar } from "./atoms/navbar/navbar";
import RouteConfig from "./Route/RouteConfig";

function App() {
  return (
    <>
      <Navbar />
      <RouteConfig />
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import "./App.css";
import Footer from "./common/Footer/Footer";
import { Header } from "./common/Header/Header";
import RouteConfig from "./Route/RouteConfig";

function App() {
  return (
    <>
      <Header />
      <RouteConfig />
      <Footer />
    </>
  );
}

export default App;

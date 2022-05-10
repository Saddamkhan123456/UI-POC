import React from "react";
import "./App.css";
import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";
import RouteConfig from "./Route/RouteConfig";

function App() {
  return (
    <>
      <Header />
        <RouteConfig/>
      <Footer />
    </>
  );
}

export default App;

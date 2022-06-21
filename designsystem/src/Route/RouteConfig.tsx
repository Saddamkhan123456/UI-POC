import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../page/homepage/HomePage";

export default function RouteConfig() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

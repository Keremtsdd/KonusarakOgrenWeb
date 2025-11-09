import "./App.css";
import React from "react";
import Rumuz from "./pages/Rumuz";
import ChatPage from "./pages/ChatPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Rumuz />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </>
  );
}

export default App;

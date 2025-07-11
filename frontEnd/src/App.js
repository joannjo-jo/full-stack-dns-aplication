import React from "react";
import Landingpage from "./components/Landingpage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddMenu from "./components/addMenu";
import AddMenuitem from "./components/addMenuitem";
import HomePage from "./components/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/menu" element={<Landingpage />} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/addmenu" element={<AddMenu />} />
        <Route path="/addMenuitem/:_id" element={<AddMenuitem/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

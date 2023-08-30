import React from "react";
import Header from "./components/header/header";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/header/login/signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/account/login/signup" element={Signup} />
        </Route>
      </Routes>
      ;
    </>
  );
}
export default App;

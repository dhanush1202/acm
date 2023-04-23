import React from "react";
import "../styles/Homepage.css"
import Intropage from "./Intropage";
import NavBar from "./NavBar";

export default function Homepage() {
  return (
    <div >
      <NavBar/>
      <Intropage />
    </div>
  );
}

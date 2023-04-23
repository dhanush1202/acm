import React, {useState} from "react";
import Homepage from "./components/Homepage";
import PreLoader  from "./components/PreLoader" 

function App() {

   

  return (
     <>
     <PreLoader/>
    <Homepage />

    </>
  );
}

export default App;

import React from "react";
import { ReactDOM } from "react-dom/client";
import "./index.css"
import {Footer , Navbar , Welcome , Services , Transaction} from "./Components";


const App = ()=> {
  return (
    <div className= "App">
      <div className="Header">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transaction />
      <Footer />
    </div>
  )
}


export default App;

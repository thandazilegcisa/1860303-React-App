import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import TopPattern from "./components/TopPattern";

class App extends React.Component{
  render(){
    return(
      <div>
           <TopPattern/>
           <NavBar/>
           <Footer/> 
      </div>

    )
  }
}
export default App;

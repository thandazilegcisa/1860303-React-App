import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

class App extends React.Component{
  render(){
    return(
      <div>
           <NavBar/>
           <Footer/>
      </div>

    )
  }
}
export default App;

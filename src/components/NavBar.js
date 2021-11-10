import React from "react";
import {Switch, Route,NavLink} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Home from "../pages/Home"
import Blogs from "../pages/Blogs"
import About from "../pages/About"
import "../styles/NavBar.css"

class NavBar extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            isToggled: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState(prevState =>({
            isToggled: !prevState.isToggled
        }))
    }

    render(){
        return(
            <div>
                <div className="Navigation">
                    <nav className="slide" id={this.state.isToggled ? "open" : "closed"}>
                    </nav>
                    <nav id="menu" className="main-Nav" >
                        <ul>
                              <NavLink exact className="list-Item" to="/">Home</NavLink>
                              <NavLink exact className="list-Item" to="/blogs">Blogs</NavLink>
                              <NavLink exact className="list-Item" to="/about">About</NavLink>
                        </ul>
                    </nav>
                    <MenuIcon className="Hamburger" onClick={this.toggleNav}/>
                </div>
                           
                <Switch/>
                     <Route exact path="/" component={Home}/>
                     <Route exact path="/blogs" component={Blogs}/>
                     <Route exact path="/about" component={About}/>
                <Switch/>
            </div>
        )
    }
}

export default NavBar;
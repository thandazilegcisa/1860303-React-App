import React from "react";
import {Link} from "react-router-dom";
import "../styles/NavBar.css"
import MenuIcon from '@mui/icons-material/Menu';

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
            <div className="Navigation">
                <nav className="slide" id={this.state.isToggled ? "open" : "closed"}>
                </nav>
                <nav id="menu" className="main-Nav" >
                    <ul>
                    <Link className="list-Item" to="/">Home</Link>
                    <Link className="list-Item" to="/">Menu</Link>
                    <Link className="list-Item" to="/">About</Link>
                    <Link className="list-Item" to="/">Contact</Link>
                    </ul>
                </nav>
                <MenuIcon className="Hamburger" onClick={this.toggleNav}/>
            </div>
        )
    }
}

export default NavBar;
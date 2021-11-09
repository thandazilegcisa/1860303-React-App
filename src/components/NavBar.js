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
                <nav className="secondary-Nav" id={this.state.isToggled ? "open" : "close"}>
                    <ul className="hiddenLinks">
                        <Link to="/">Home</Link>
                        <Link to="/">Menu</Link>
                        <Link to="/">About</Link>
                        <Link to="/">Contact</Link>
                    </ul>
                </nav>
                
                <nav className="main-Nav">
                    <ul>
                    <Link className="list-Item" to="/">Home</Link>
                    <Link className="list-Item" to="/">Menu</Link>
                    <Link className="list-Item" to="/">About</Link>
                    <Link className="list-Item" to="/">Contact</Link>
                    </ul>
                    <button onClick={this.toggleNav}><MenuIcon/></button>
                </nav>
            </div>
        )
    }
}

export default NavBar;
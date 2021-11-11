import React from "react";
import {Switch, Route,NavLink} from "react-router-dom";

class blogPageFive extends React.Component{
    render(){
        return(
            <article>
                <section className="blogPageFour">
                    <header><h1 className="two-Header">Updated Proposal</h1> </header>
                    <p className="three-P">
                     My Project Proposal remains largely the same and the current state of the project indicates the intent of what i Initially thought to do.
                     Which is articulating and practically exploring theories including decolonisation and computational literacy through web design.
                    </p>
                    <p className="three-P">
                     The project will mainly use basic svg shapes that will be coded and rendered onto the browser window, instead of importing an svg file into 
                     the project. The aim of this is to explore how creative coding can be implemented in web design. Therefore, the proposed artwork is predominately
                     based on representing the website itself artwork though its design.
                    </p>
                    <p className="three-P">
                      
                    </p>
                </section>
            </article>
        )
    }
}

export default blogPageFive
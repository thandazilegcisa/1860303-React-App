import React from "react";
import {Switch, Route,NavLink} from "react-router-dom";
import blogPageOne from "./blogPageOne";
import blogPageTwo from "./blogPageTwo";
import blogPageThree from "./blogPageThree";
import blogPageFour from "./blogPageFour";
import blogPageFive from "./blogPageFive";
import blogPageSix from "./blogPageSix";
import blogPageSeven from "./blogPageSeven";
import blogPageEight from "./blogPageEight";
import "../styles/Blogs.css"

class Blogs extends React.Component{
    render(){
        return(
            <article className="blogs-Page">
                <header><h1 className="blogs-Header">Blogs Index: </h1></header>
                <article className="blogs-Container">
                    <section className="Card">
                        <header>
                            <h2>What is Decolonisation?</h2>
                            <br/>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>
                            <NavLink exact className="read-More" to="/blogPageOne">Read More</NavLink>
                        </header>
                    </section>
                    <section className="Card">
                        <header>
                            <h2>Technical Reflection: #2</h2>
                            <br/>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>
                            <NavLink exact className="read-More" to="/blogPageTwo">Read More</NavLink>
                        </header>
                    </section>
                    <section className="Card">
                        <header>
                            <h2>Creative Reflection: #2</h2>
                            <br/>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>
                            <NavLink exact className="read-More" to="/blogPageThree">Read More</NavLink>
                        </header>
                    </section>
                    <section className="Card">
                        <header>
                            <h2>Computational Literacy</h2>
                            <br/>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>
                            <NavLink exact className="read-More" to="/blogPageFour">Read More</NavLink>
                        </header>
                    </section>
                    <section className="Card">
                        <header>
                            <h2>Proposal Updated</h2>
                            <br/>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>
                            <NavLink exact className="read-More" to="/blogPageFive">Read More</NavLink>
                        </header>
                    </section>
                    <section className="Card">
                        <header>
                            <h2>Technical Reflection #1</h2>
                            <br/>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>
                            <NavLink exact className="read-More" to="/blogPageSix">Read More</NavLink>
                        </header>
                    </section>
                    <section className="Card">
                        <header>
                            <h2>Creative Reflection #1</h2>
                            <br/>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>
                            <NavLink exact className="read-More" to="/blogPageSeven">Read More</NavLink>
                        </header>
                    </section>
                    <section className="Card">
                        <header>
                            <h2>Internet Artwork Reflection #2</h2>
                            <br/>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>
                            <NavLink exact className="read-More" to="/blogPageNine">Read More</NavLink>
                        </header>
                    </section>
                    <section className="Card">
                        <header>
                            <h2>Internet Artwork Reflection #1</h2>
                            <br/>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>
                            <NavLink exact className="read-More" to="/blogPageEight">Read More</NavLink>
                        </header>
                    </section>
                    <section className="Card">
                        <header>
                            <h2>Internet Artwork Proposal</h2>
                            <br/>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>
                            <NavLink exact className="read-More" to="/blogPageTen">Read More</NavLink>
                        </header>
                    </section>
                </article>
            </article>
        )
    }
}

export default Blogs
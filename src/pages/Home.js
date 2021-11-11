import React from "react"
import "../styles/Home.css"

class Home extends React.Component{
    render(){
        return(
            <article className="home-Page">
                <h1 className="home-Header">Internet Art</h1>
                <p className="home-P">
                    This project examines the various uses and definitons that pertain
                    to the practice and theoretical propositions proposed to attempt to
                    define what internet art means. This site will act as forming the
                    basis of what i understand internet art to be from the lens of
                    decoloniality and critical code studies around the development of
                    computational literacy.
                </p>
            </article>
        )
    }
}

export default Home
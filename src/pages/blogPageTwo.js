import React from "react";
import {Switch, Route,NavLink} from "react-router-dom";

class blogPageTwo extends React.Component{
    render(){
        return(
            <article>
                <section className="blogPageTwo">
                    <header><h1 className="two-Header">Technical Reflection: #2</h1> </header>
                    <p className="two-P">
                    This document accounts for the decisions undertaken in assembling all the necessary components to build the current version of the proposed artwork. In the document I will discuss the “successes” and challenges encountered while working on this component of the project.
                    </p>
                    <p className="two-P">
                    The current functionality of the site incorporates the react framework in rendering dom elements on the webpage. However, the use of react was predominately based on the basics of react, which is creating and using components. Therefore, the use of states, and props was not something that I focused on, or incorporated in my site. However, I do plan on using state in the next submission to add responsiveness to the navigation bar by hiding the navigation bar elements upon reaching a certain break-point. And allowing the user to toggle a menu icon to render the elements. The responsiveness of the site might be a concern for very small form factors because I am yet to incorporate responsiveness – particularly when using svg’s.  
                    </p>
                    <p className="two-P">
                    The process of svg’s succeeded, the two patterns that you see were all drawn using code. However, the process was quite challenging and tedious to render at the beginning though as I practiced and continued with their integration drawing the different shapes became easier because I noticed a pattern in the integration of the position of drawing the values of shapes on screen. Therefore, the pattern of encoded values is signified through the actual visuals on screen. Hence, my computational literacy of understanding and being able to use svg’s has enabled me to contextualise the meaning that I proposed in relation to decolonisation. Therefore, the technical component of the project reflects and reinforces the ideas of computational literacy explored in my theoretical analysis of the theory. However, in creating the top pattern, I used lines to draw the square shaped stairs image, thus I was not able to colour each individual drawings background to a specific colour like I hoped. And to mitigate this problem I chose to just colour the whole svg element instead, which gave me less flexibility than how I would’ve wanted the image to look like. 
                    </p>
                    <p className="two-P">
                    I have not yet implemented animations throughout the project as I said I would. However, in my next submission I will incorporate animations across the svg components that I will use and hopefully create more pattern designs. How I want the animations to function is by using a on mouse hover Javascript function to check if the user is hovering over an svg element like the two patterns that I currently have and then animate the patterns by randomly changing the colour of the different shapes. This will allow me to incorporate more of the functionality of the react framework by using state to facilitate this initial animation idea I have.
                    </p>
                    <p className="two-P">
                    I have also successfully implemented routing and links using the react framework. Though, there is no internet art page because i’ve proposed to contextualise the site as a whole as an artwork that reflects on the design and aesthetic value of how svg’s can be used in a site. On the other hand I did not comment my code much this time because I found that the way React works, intuitively demands a separation of concerns through components so ultimately the project’s program remains readable and legible.  
                    </p>
                    <p className="two-P">
                      <h2>Mark Breakdown: Technical Component</h2>
                      
                      I'd Like to Weight my Technical Section a bit more than everything else mostly because it was the most labour intensive. So I'd Like to weight it as 55 of the mark allocation and for that I'd Give myself 40/50 

                    </p>
                    <p className="two-P">
                      <h2>Mark Breakdown: Creative Component</h2>
                      
                      For the Creaive section id like this to be allocated out of 25 and id give myself a 14/25

                    </p>
                    <p className="two-P">
                      <h2>Mark Breakdown: Blogs Component</h2>
                      
                      For the Blogs section id like this to be allocated out of 20 and id give myself a 10/25

                    </p>
                    <p className="two-P">
                      <h2>Overall Mark</h2>
                      
                      65/100

                    </p>
                </section>
                
            </article>
        )
    }
}

export default blogPageTwo
import React from "react";
import {Switch, Route,NavLink} from "react-router-dom";
import Palette from "../images/Palette.png"

class blogPageThree extends React.Component{
    render(){
        return(
            <article>
                <section className="blogPageThree">
                    <header><h1 className="two-Header">Artistic Reflection:</h1> </header>
                    <p className="three-P">
                    The current additions to the site have aided the realisation of what I aimed to achieve and communicate with the project. Which is to ultimately use culture as inspiration in creating patterns that are inspired by traditional prints. Therefore, this reflection aims to detail the processes and reasons in implementing the artistic vision of the site.
                    </p>
                    <p className="three-P">
                    I started the project by drawing various ideas of patterns on paper without any colour and subsequently ended up choosing the current patterns. I then moved on to creating a colour palette, which looks the following:
                    </p>
                    <img src={<Palette/>} className="three-Image"></img>
                    <p className="three-P">
                    The most concerning aspect of choosing these colours was managing the overall saturation of the page. Initially the orange colour was going to be the basis from which everything is centred around because I had it as the background colour for the body element of the app component. But because of my concerns that the page looks to bright, I opted for a black background colour which works well in balancing the overall saturation of the page because of the amount of contrast black brings.
                    </p>
                    <p className="three-P">
                    In my technical reflection I mentioned that I noticed a pattern in the values of implementing svg’s into the site. However, some sections of the pattern are not pixel perfect in its implementation, this is something that I took note of and will fix by the next submission as this is only a slight problem that makes the patterns (particularly the footer pattern) look a bit rough around the edges.
                    </p>
                    <p className="three-P">
                    Overall, I am happy with how the site currently looks although maybe the saturation might still be a concern and the site might still be a bit too static, so adding more interactivity will be a priority for the next submission. (I’ll wait for your feedback to gauge this) However for the top pattern I was not able to colour the square stair-like image because I used a line svg element and colouring that would mean colouring the actual line and not the inner bounds.
                    The patterns that I have created are not particularly specifically derived from my proposed inspiration, instead I used the inspiration as a framework in conceptualising how I wanted the final output of the project to potentially be. Therefore, the validity of whether or not the patterns or prints describe the “aura” of the real thing (which in this case is my reference material) can be challenged. However, the exhibitional value of the site is not only based on the patterns themselves, instead it is based on the whole site’s representational value in signifying my computational literacy through the visuals and text described on screen.
                    </p>
                </section>
            </article>
        )
    }
}

export default blogPageThree
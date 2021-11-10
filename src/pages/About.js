import React from "react";
import "../styles/About.css"

class About extends React.Component{
    render(){
        return(
            <article className="About-Page">
                <header><h1 className="about-Header">About:</h1></header>
                <section>
                    <p className="about-P">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dui justo, egestas vitae nunc quis, gravida fringilla diam. Etiam posuere felis ut justo fermentum, eget aliquam ligula congue. Nunc eu orci eu libero pharetra ornare quis et felis. Maecenas convallis ipsum orci, vitae sodales arcu egestas id. Donec faucibus tempus lacus nec sagittis. Quisque tempus sed lorem nec cursus. Pellentesque vestibulum arcu a cursus aliquet. Praesent efficitur leo at ornare aliquet.Donec consectetur purus elit, ut cursus velit posuere sit amet. Nunc maximus malesuada lobortis. Fusce nec luctus nisl, sed maximus orci. In id faucibus nunc, a ultrices lacus. Maecenas commodo pharetra urna nec blandit. Curabitur rutrum varius condimentum. 
                    </p>
                </section>
            </article>
        )
    }
}

export default About
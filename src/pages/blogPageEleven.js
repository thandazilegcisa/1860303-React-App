import React from "react"
import "../styles/blogPage.css"

class blogPageEleven extends React.Component{
    render(){
        return(
            <article>
                <section className="blogPageEleven">
                    <header><h1 className="two-Header">Algorithmic Colonisation of Africa</h1> </header>
                    <p className="three-P">
                    In my previous articles, i have discussed what is decolonisation, computational literacy, and in This
                    article i will use the points discussed in those articles in relation to the topic at hand: The Algorithmic
                    colonisation of Africa. (So preferably, please read those two articles before this one). The reason i chose 
                    this approach is because Birhane (2020) frames the conversation around algorithimc colonisation as colonisation
                    that has elements of traditional coloniality, but lead by the dominance and control of private tech companies -
                    this is the only core difference that sets the two apart - profit. Traditional colonial power is authoritative,
                    denies natives subjectivity, knowledge, and power. It segregates and controls social, economic and legislation
                    by establishing a rule over the social, economic, and political order in a manner that benefits the coloniser.

                    </p>
                    <p className="three-P">
                    And according to Birhane (2020) algorithms do the same thing, however under the guise of digital ecosystems and
                    infrastructure. Therefore, it is important for myself as a developer that is literate in the computational nuances
                    of the web, web apps or games. To be cognizant of what it means to be developer - "a beholder of the "masters" tools",
                    in the global south grounded within the practice or ways thinking about decolonising the algorithim and actively being a part in deciding what to amplify, how to sell, and show to locals 
                    and the rest of the world. This is because the ways of decolonisation is a means of questioning/interrogating 
                    the technology because context matters. And one of the central questions that i'd need to consider as a developer 
                    is the relevance and appropriateness of AI software developed with the values, norms, and interests of Western societies 
                    to that of users across the african continent.
                    </p>
                    <p className="three-P">
                    "Importing AI tools made in the west by western technologists may not only be irrelevant and harmful due to lack transferability
                    from one context to another but also is an obstacle that hinder the development of local products" (Birhane, 2020).
                    I completely agree with this statement because, for example, e-hailing services like Uber, Bolt, and now Didi often gain market 
                    entry into South Africa, despite continuously endangering their drivers because they are possibly unaware (if they did'nt do their 
                    market research) that their drivers are attacked time and time again because of their entry into the market. This is not to say that 
                    we should not adopt free market values of competition. But, instead to be cognizant of the fact that these companies directly import 
                    these products without considering the difference in values and social problems.
                    </p>
                    <p className="three-P">
                    Therefore, from my position as a developer i think
                    that decolonisation from this perspective can be understood as including/incorporating values that support and reinforces
                    the current transportation system. I.e) Digitising the operations of our transportation systems by including the values that are already
                    entrenched in the systems such as hitch hiking for a taxi, including the signs used to signify a destination - local, town etc.
                    as the the basis of how the User interface or User experience of application is represented whilst still possibly using the same or similar
                    geolocation apis. By so doing it will even promote computational literacy across the country, not only in big metros - which is where Uber,
                    Didi, and Blot operate. Moreover, this could also have the potential to invite more Tourists to experience most of South Africa for example, the systems would 
                    have a broader reach as a public good because they are decolonised and entrenched within the existing transportational system.
                    </p>
                    <p className="three-P">
                     <h2>References:</h2>
                     
                     Birhane, A. (2020). Algorithmic Colonization of Africa. Scripted. Volume 17, Issue 2.

                    </p>
                </section>
            </article>
        )
    }
}
export default blogPageEleven
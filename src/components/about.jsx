import React from "react";
import sozial1 from "../img/sozial1.jpg"
import sozial2 from "../img/sozial2.jpg"
import sozial3 from "../img/sozial3.jpg"
import sozial4 from "../img/sozial4.jpg"
import starwars1 from "../img/starwars1.png"
import starwars2 from "../img/starwars2.png"
import starwars3 from "../img/starwars3.png"
import starwars4 from "../img/starwars4.png"
import starwars5 from "../img/starwars5.png"
import chatapp1 from "../img/chatapp1.jpg"
import chatapp2 from "../img/chatapp2.jpg"
import chatapp3 from "../img/chatapp3.jpg"
import chatapp4 from "../img/chatapp4.jpg"
export const About=()=>{
console.log(sozial1)
    return(
        <div className="container d-flex holdimages">
        <div className="image-holder">
            <div className="inner-image">
                <div><img src={sozial1} style={{maxWidth: "300px"}} alt="" />
                </div>
                <div><img src={sozial2} style={{maxWidth: "300px"}}  alt="" /></div>
                <div><img src={sozial3} style={{maxWidth: "300px"}} alt="" /></div>
                <div><img src={sozial4} style={{maxWidth: "300px"}} alt="" /></div>
                <div><img src={sozial1} style={{maxWidth: "300px"}} alt="" />
                </div>
                <div><img src={sozial2} style={{maxWidth: "300px"}}  alt="" /></div>
                <div><img src={sozial3} style={{maxWidth: "300px"}} alt="" /></div>
                <div><img src={sozial4} style={{maxWidth: "300px"}} alt="" /></div>
                
                </div>           

            
        </div>
        <div className="image-holder d-lg-block d-none">
            <div className="inner-image2 ">
                <div><img src={sozial1} style={{maxWidth: "300px"}} alt="" />
                </div>
                <div><img src={starwars2} style={{maxWidth: "300px"}}  alt="" /></div>
                <div><img src={starwars3} style={{maxWidth: "300px"}} alt="" /></div>
                <div><img src={starwars4} style={{maxWidth: "300px"}} alt="" /></div>
                <div><img src={starwars5} style={{maxWidth: "300px"}} alt="" />
                </div>
                <div><img src={starwars1} style={{maxWidth: "300px"}}  alt="" /></div>
                <div><img src={starwars2} style={{maxWidth: "300px"}} alt="" /></div>
                <div><img src={starwars3} style={{maxWidth: "300px",}} alt="" /></div>
                <div><img src={starwars4} style={{maxWidth: "300px",}} alt="" /></div>
                <div><img src={starwars5} style={{maxWidth: "300px",}} alt="" /></div>
                </div>           

            
        </div>
        <div className="image-holder d-md-block d-none">
            <div className="inner-image">
                <div><img src={chatapp1} style={{maxWidth: "300px "}} alt="" />
                </div>
                <div><img src={chatapp3} style={{maxWidth: "300px"}}  alt="" /></div>
                <div><img src={chatapp2} style={{maxWidth: "300px"}} alt="" /></div>
                <div><img src={chatapp4} style={{maxWidth: "300px"}} alt="" /></div>
                <div><img src={chatapp1} style={{maxWidth: "300px"}} alt="" />
                </div>
                <div><img src={chatapp3} style={{maxWidth: "300px"}}  alt="" /></div>
                <div><img src={chatapp2} style={{maxWidth: "300px"}} alt="" /></div>
                <div><img src={chatapp2} style={{maxWidth: "300px"}} alt="" /></div>
                </div>           

            
        </div>
        
        
        </div>
    )
}
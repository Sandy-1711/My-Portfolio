import React from "react";
import aboutimage from '../images/IMG_20220929_203652.jpg'
function Section2(){
    return (<div className="section2" id="about">
        <div className="aboutimage">
            <img src={aboutimage} alt="aboutimage"/>
        </div>
        <div className="aboutcontent">
            <h2>~ABOUT</h2>
            <p><span>Hello World!</span> My name is Sandeep Singh.I first used the phrase Hello World! back in 2016 and I haven't stopped since. I started my journey as a Web Developer in July, 2022. Since then I have reached to a point of where I can call myself a MERN Stack Developer.</p>
        </div>
    </div>)
}
export default Section2;
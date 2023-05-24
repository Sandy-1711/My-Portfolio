import React, { useState } from "react";
function reveal() {
    var reveals = document.querySelectorAll(".reveal4");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 0;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
function Section4() {
    var [data,setData]=useState({name:"",email:"",message:""});
    function handleChange(e){
        const {value,name}=e.target;
        setData(function(prevvalue){
            return {
                ...prevvalue,
                [name]:value
            };
        });
    }
    function handleSubmit(e)
    {
        e.preventDefault();
    }
    return (<div className="section4" id="contact">
        <div className="leftcontact reveal4 fade">
            <h2>Liked my work?</h2>
            <p>Can I have the pleasure to work with you?</p>
            <div className="abcd">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                        fill="currentColor" stroke="none">
                        <path d="M366 4464 c-175 -42 -319 -189 -355 -362 -16 -75 -16 -3009 0 -3084
37 -179 184 -325 366 -363 102 -22 4264 -22 4366 0 182 38 329 184 366 363 16
75 16 3009 0 3084 -36 175 -180 320 -360 363 -94 22 -4291 21 -4383 -1z m4350
-303 c23 -10 54 -36 70 -57 24 -31 29 -47 29 -94 0 -37 -6 -65 -18 -83 -21
-33 -2133 -1444 -2190 -1464 -24 -8 -53 -11 -75 -7 -43 8 -2182 1430 -2206
1467 -55 83 -18 195 79 238 38 18 124 19 2155 19 2044 0 2116 -1 2156 -19z
m-3398 -1273 c554 -369 1030 -682 1057 -694 119 -54 261 -52 382 5 32 15 503
325 1048 688 545 362 996 663 1003 667 10 6 12 -239 10 -1247 l-3 -1254 -29
-37 c-16 -21 -47 -47 -70 -57 -40 -18 -112 -19 -2156 -19 -2044 0 -2116 1
-2156 19 -23 10 -54 36 -70 57 l-29 37 -3 1254 c-1 689 0 1253 3 1253 3 0 458
-302 1013 -672z"/>
                    </g>
                </svg>

                <span>sandy1711003@gmail.com</span></div>
        </div>
        <div className="rightcontact">
            <h1>~Contact Me</h1>
            <form>
                <input onChange={handleChange} type="text" name="name" id="name" placeholder="name" value={data.name}/>
                <input onChange={handleChange} type="email" id="email" name="email" placeholder="email" value={data.email} />
                <textarea onChange={handleChange} id="message" placeholder="message" name="message" rows={10} value={data.message}></textarea>
                <button onSubmit={handleSubmit}>Hit Me Up!</button>
            </form>
        </div>
    </div>)
}
export default Section4;
import React from "react";
import list from "./projectllist";
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
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
function Section3() {
    function createCard(element) {
        return (
            <div className="projectcard reveal fade-right" key={element.id}>
        
            <h2>{element.title}</h2>
            <p>{element.desc}</p>
            <div className="buttonlink">

            <button><a href={element.link} rel="noreferrer" target="_blank">OPEN</a></button>
            <button><a href={element.code} rel="noreferrer" target="_blank">CODE</a></button>
            </div>
            
        </div>)
    }
    return (<div className="section3" id="build">
        <h1 className="reveal">MY WORKS</h1>
        <div className="projectsarea">
            {list.map(createCard)}
        </div>
    </div>)
}
export default Section3;
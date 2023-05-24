import React, { useEffect } from "react";
function generate() {

    document.querySelectorAll(".symbol").forEach(function (object) {
        var x = Math.random() * 100 + "vh";
        var y = Math.random() * 100 + "vw";
        object.style.top = x;
        object.style.left = y;
    })
}

function Section1() {

    useEffect(() => {
        generate()
    }, [])
    return (
        <div className="section1">
            <h1>First, solve the problem. Then, write the <span>&lt;code&gt;</span>.</h1>
            {/* <div className="symbol" data-value="-0.2">&copy;</div>
            <div className="symbol" data-value="-0.4">&lt;</div>
            <div className="symbol" data-value="-0.6">&lt;</div>
            <div className="symbol" data-value="-0.8">&copy;</div>
            <div className="symbol" data-value="0.9">&lt;</div>
            <div className="symbol" data-value="0.5" >&gt;</div>
            <div className="symbol" data-value="0.9" >&gt;</div>
            <div className="symbol" data-value="-0.4" >&gt;</div>
            <div className="symbol" data-value="-0.2" >&gt;</div>
            <div className="symbol" data-value="-0.1" >&gt;</div>
            <div className="symbol" data-value="-0.6">&amp;</div>
            <div className="symbol" data-value="0.6">&amp;</div>
            <div className="symbol" data-value="0.2">&amp;</div>
            <div className="symbol" data-value="-0.2">&ldquo;</div>
            <div className="symbol" data-value="0.4">&ldquo;</div>
            <div className="symbol" data-value="0.7">&ldquo;</div>
            <div className="symbol" data-value="0.55">&ldquo;</div>
            <div className="symbol" data-value="0.6">&ldquo;</div>
            <div className="symbol" data-value="0.7">&sbquo;</div>
            <div className="symbol" data-value="0.2">&sbquo;</div>
            <div className="symbol" data-value="-0.5">&sbquo;</div>
            <div className="symbol" data-value="-0.10">&trade;</div>
            <div className="symbol" data-value="0.150">&trade;</div>
            <div className="symbol" data-value="0.5">&trade;</div>
            <div className="symbol" data-value="0.20">&trade;</div>
            <div className="symbol" data-value="-0.9">;</div>
            <div className="symbol" data-value="0.9">;</div>
            <div className="symbol" data-value="-0.5">;</div>
            <div className="symbol" data-value="-0.25">;</div>
            <div className="symbol" data-value="-0.4">;</div>
            <div className="symbol" data-value="0.9">;</div> */}
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
            <div className="symbol" data-value={-Math.random()}>*</div>
        </div>
    )


}
document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.symbol').forEach(function (move) {
        var moving_value = move.getAttribute("data-value");
        var x = e.clientX * moving_value;
        var y = e.clientY * moving_value;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    })
});
export default Section1;
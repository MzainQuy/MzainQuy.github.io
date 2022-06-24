window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.background = "#121b34";
        document.getElementById("navbar").style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 30px 35px -5px";
        document.getElementById("navbar").style.boxShadow = "rgba(0, 0, 0, 0.04) 0px 20px 20px -5px";
    } else {
        document.getElementById("navbar").style.background = "";
        document.getElementById("navbar").style.boxShadow = "";
        document.getElementById("navbar").style.boxShadow = "";
    }
}

particlesJS("particles-js", { "particles": { "number": { "value": 50, "density": { "enable": true, "value_area": 561.194221302933 } }, "color": { "value": "#eb4a4a" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#ff0f0f" }, "polygon": { "nb_sides": 4 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 1, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 100, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 80, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 9.620472365193136, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 881.8766334760375, "rotateY": 1042.21783956259 } } }, "interactivity": { "detect_on": "window", "events": { "onhover": { "enable": false, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 170.53621458328246, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });



var header = document.getElementById("nav-active-id");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("nav-active");
        current[0].className = current[0].className.replace(" nav-active", "");
        this.className += " nav-active";
    });
}
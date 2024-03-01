//function changeBackgroundColorToBlue() {
  //  var circle = document.getElementById('circle');
   // circle.style.backgroundColor = "blue";
//}

function changeOpacity() {
    var element = document.getElementById('circle');
    // Ensure there's an initial opacity set, default to 1 if not.
    var circleOpacity = parseFloat(element.style.opacity) || 1;
    element.style.opacity = circleOpacity - 0.1;
}

function myloadfun() {
    var circle = document.getElementById('circle');
    // Ensure the element has an initial opacity to work with
    circle.style.opacity = 1;
    circle.addEventListener('click', changeOpacity);
}

//function myloadfun() {
  //  var circle = document.getElementById('circle');
    //circle.addEventListener('click', changeBackgroundColorToBlue);
//}

document.addEventListener('DOMContentLoaded', myloadfun);

//function changeBackgroundColorToBlue() {
  //  var circle = document.getElementById('circle');
   // circle.style.backgroundColor = "blue";
//}

//function myloadfun() {
  //  var circle = document.getElementById('circle');
    //circle.addEventListener('click', changeBackgroundColorToBlue);
//}

/*function changeOpacity() {
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
*/

function moveToLeft() {
    var element = document.getElementById('circle');
    // Ensure the element's position is set to relative to enable movement.
   var positionleft = element.offsetLeft
    // Move the element to the left by 10px.
    element.style.left = positionleft - 10 + 'px';
}

function myloadfun() {
    var circle = document.getElementById('circle');
    circle.addEventListener('click', moveToLeft);
}

function myKeyDown(event){
    console.log(event.keyCode);
}



document.addEventListener('DOMContentLoaded', myloadfun);
document.addEventListener('keydown', myKeyDown);


document.addEventListener('DOMContentLoaded', function() {
    // Get the element with the ID 'circle'
    var circle = document.getElementById('circle');
    
    // Add a click event listener to the 'circle' element
    circle.addEventListener('click', function() {
        // Display an alert box when the 'circle' is clicked
        alert('Button is pressed');
    });
});

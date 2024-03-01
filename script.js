function print5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

// Add event listener for the 'DOMContentLoaded' event
document.addEventListener('DOMContentLoaded', function() {
    // Update the content of the <h1> element
    document.getElementById('myHeading').textContent = 'Updated Heading Content';

    // Update the content of the <p> element
    document.getElementById('myParagraph').textContent = 'Updated paragraph content.';

    // Call print5 twice
    print5();
    print5();
});

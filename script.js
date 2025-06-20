// Wait until the entire page is loaded
window.addEventListener('load', () => {

    // Find the left and right doors in the HTML
    const leftDoor = document.querySelector('.door.left');
    const rightDoor = document.querySelector('.door.right');

    // Find the main content body
    const body = document.querySelector('body');

    // Add the "door-open" class to start the animation
    leftDoor.classList.add('door-open');
    rightDoor.classList.add('door-open');

    // Allow scrolling after the doors have finished opening (2.5 seconds)
    setTimeout(() => {
        body.style.overflow = 'auto';
    }, 2500); // This time should match the CSS transition duration

});

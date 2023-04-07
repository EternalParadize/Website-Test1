
// Select the about link in the navigation menu
const aboutLink = document.querySelector('#about-link');

// Add a click event listener to the link
aboutLink.addEventListener('click', (event) => {
  // Prevent the default behavior of following the link
  event.preventDefault();

  // Select the body element
  const body = document.querySelector('body');

  // Create a new element for the overlay
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  // Append the overlay to the body
  body.appendChild(overlay);

  // Set a timeout to allow the overlay to render before adding the animation class
  setTimeout(() => {
    overlay.classList.add('overlay--animate');
  }, 10);

  // Set a timeout to delay the navigation to the new page
  setTimeout(() => {
    // Navigate to the new page
    window.location.href = aboutLink.href;
  }, 1000);
});

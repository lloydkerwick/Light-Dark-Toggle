const toggleButton = document.querySelector('.js-toggle-button');

function toggle() {
  let currentColor = 'white'; // Declare the initial state

  toggleButton.addEventListener('click', () => {
    if (currentColor === 'white') {
      document.body.style.backgroundColor = 'black';
      toggleButton.innerText = 'Light Mode';
      currentColor = 'black'; // Update the state
    } else {
      document.body.style.backgroundColor = 'white';
      toggleButton.innerText = 'Dark Mode';
      currentColor = 'white'; // Update the state
    }
  });
}

toggle();

function addingEventListener() {
  // Select the element with ID 'button'
  const button = document.getElementById('button');

  // Define the event listener function
  function handleClick() {
    alert('Button was clicked!');
  }

  // Bind the event listener to the button
  button.addEventListener('click', handleClick);
}

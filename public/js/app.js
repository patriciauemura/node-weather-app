const weatherForm = document.querySelector('form');

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const search = document.querySelector('input');
    const location = search.value;
    const messageOne = document.querySelector('#message1');
    const messageTwo = document.querySelector('#message2');
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }
        });
    });
});
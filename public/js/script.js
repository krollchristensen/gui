document.getElementById('alertButton').addEventListener('click', function() {
    alert('Button clicked!');
});

document.getElementById('exampleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    alert('Form submitted! Name: ' + name);
});

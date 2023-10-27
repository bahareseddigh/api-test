fetch('http://localhost:5000/users')
.then((response) => response.json())
.then((data) => console.log(data))
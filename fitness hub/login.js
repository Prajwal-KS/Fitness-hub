const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = loginForm['name'].value; 
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location.href = 'index.html';
            alert("Welcome "+name+"!!");
        })
        .catch((error) => {
            alert(error.message);
        });
});

const loginForm = document.getElementById('login');

loginForm.onsubmit = (event) => {
   window.location.href = './novo-produto.html';
   event.preventDefault();
}
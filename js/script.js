const form = document.getElementById('loginForm');
const message = document.getElementById('message');
const logoutBtn = document.getElementById('logoutBtn');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = form.username.value.trim();
  const password = form.password.value.trim();

  if (username === '' || password === '') {
    message.style.color = '#d93025';
    message.textContent = 'Por favor, preencha todos os campos.';
  } else {
    message.style.color = '#2e7d32';
    message.textContent = `Bem-vindo, ${username}! Você está logado.`;

    form.style.display = 'none';       // esconde o formulário
    logoutBtn.style.display = 'block'; // mostra botão sair
  }
});

logoutBtn.addEventListener('click', function() {
  message.textContent = '';
  form.style.display = 'block';       // mostra o formulário de login
  logoutBtn.style.display = 'none';   // esconde o botão sair
  form.reset();                       // limpa os campos
});

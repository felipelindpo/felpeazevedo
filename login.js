const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signInForm = document.querySelector('.sign-in-container form'); // Seleciona o formulário de login
const signUpForm = document.querySelector('.sign-up-container form'); // Seleciona o formulário de cadastro

// Usuário de teste
const testUser = {
    email: 'teste@gmail.com',
    password: '123'
};

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// Adiciona o evento de submissão do formulário de login
signInForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos de entrada
    const email = signInForm.querySelector('input[type="email"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    // Verifica se as credenciais são válidas
    if (email === testUser.email && password === testUser.password) {
        window.location.href = 'animaçãodeentrada.html'; // Redireciona para animaçãodeentrada.html após o login
    } else {
        alert('Credenciais inválidas. Tente novamente.'); // Alerta se as credenciais estiverem erradas
    }
});

// Adiciona o evento de submissão do formulário de cadastro
signUpForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio do formulário

    // Aqui você pode adicionar sua lógica para criar uma conta
    // Para fins de exemplo, vamos apenas redirecionar para a página da animação de entrada

    window.location.href = 'animaçãodeentrada.html'; // Redireciona para animaçãodeentrada.html após o cadastro
});

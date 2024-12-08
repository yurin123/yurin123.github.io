document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validação básica
    if (username === "123" && password === "123") {
        // Redireciona para a página de dashboard
        window.location.href = "omeu.html";
    } else {
        document.getElementById('error-message').innerText = "Usuário ou senha incorretos.";
    }
});
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Login</title>
<style>
    body {
        margin: 0;
        padding: 0;
        background-color: #ffe6eb;
        background-image: radial-gradient(circle, #ff9eb5 1px, transparent 1px);
        background-size: 20px 20px;
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        position: relative;
        overflow: hidden;
    }

    /* Corações no fundo */
    body::before {
        content: "❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤";
        font-size: 40px;
        color: rgba(255, 0, 85, 0.1);
        position: absolute;
        top: 10%;
        left: 5%;
        animation: float 10s infinite linear;
    }

    @keyframes float {
        from { transform: translateY(0); }
        to { transform: translateY(-100px); }
    }

    .container {
        background: white;
        border-radius: 15px;
        padding: 20px;
        text-align: center;
        box-shadow: 0px 0px 15px rgba(0,0,0,0.2);
    }

    .container img {
        max-width: 300px;
        border-radius: 10px;
        display: block;
        margin: 0 auto 20px;
    }

    input {
        display: block;
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        border-radius: 8px;
        border: 1px solid #ccc;
    }

    button {
        background: #ff4d6d;
        color: white;
        padding: 10px;
        width: 100%;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
    }

    button:hover {
        background: #e03e5a;
    }

    #error-message {
        color: red;
        margin-top: 10px;
    }
</style>
</head>
<body>

<div class="container">
    <img src="sua-foto.jpg" alt="Foto Centralizada">
    <form id="loginForm">
        <input type="text" id="username" placeholder="Usuário">
        <input type="password" id="password" placeholder="Senha">
        <button type="submit">Entrar</button>
        <div id="error-message"></div>
    </form>
</div>

<script>
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === "123" && password === "123") {
        window.location.href = "omeu.html";
    } else {
        document.getElementById('error-message').innerText = "Usuário ou senha incorretos.";
    }
});
</script>

</body>
</html>

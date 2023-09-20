// Adicione um evento de escuta para o envio do formulário
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    // Obtenha os valores dos campos de entrada
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Faça a validação (substitua esta parte com a lógica de validação adequada)
    if (username === "seu_nome_de_usuário" && password === "sua_senha") {
        // Redirecione para a página de login bem-sucedida ou execute a ação desejada
        alert("Login bem-sucedido!");
        window.location.href = "pagina_de_boas_vindas.html";
    } else {
        alert("Nome de usuário ou senha incorretos. Tente novamente.");
    }
});

// Adicione um evento de escuta para o botão de Cadastro
document.getElementById("signup-button").addEventListener("click", function() {
    // Redirecione para a página de cadastro ou execute a ação desejada
    window.location.href = "#";
});
// Primeira parte:
document.addEventListener("DOMContentLoaded", function () {
    // Captura todos os links do menu de navegação.
    const menuLinks = document.querySelectorAll(".menu-content a");

    // Para cada link do menu...
    menuLinks.forEach(function (link) {
        // Adiciona um evento que será acionado quando o link for clicado.
        link.addEventListener("click", function (e) {
            // Impede o comportamento padrão do link, que é levar para outra página.
            e.preventDefault();

            // Obtém o destino (a seção da página) para onde o link aponta.
            const targetId = this.getAttribute("href").substring(1);

            // Encontra a seção correspondente na página com base no destino.
            const targetSection = document.getElementById(targetId);

            // Se a seção existir, a página rolará suavemente até ela.
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});


// Segunda parte:
document.addEventListener("DOMContentLoaded", function () {
    // Captura o formulário de contato pelo ID do formulário.
    const form = document.querySelector(".form");

    // Adiciona um evento de envio (submit) ao formulário.
    form.addEventListener("submit", function (event) {
        // Impede o comportamento padrão de envio do formulário, que é recarregar a página.
        event.preventDefault();

        // Captura os valores dos campos do formulário (nome, email, assunto e descrição).
        const nome = document.querySelector("#nome").value;
        const email = document.querySelector("#email").value;
        const assunto = document.querySelector("#assunto").value;
        const descricao = document.querySelector("#descricao").value;

        // Verifica se os campos obrigatórios (nome, email e descrição) estão preenchidos.
        if (nome.trim() === "" || email.trim() === "" || descricao.trim() === "") {
            // Se algum campo estiver em branco, exibe uma mensagem de erro.
            alert("Por favor, preencha todos os campos obrigatórios.");
        } else {
            // Se todos os campos estiverem preenchidos, você pode enviar os dados para um servidor.
            // Isso é feito usando um método chamado "fetch()" que envia os dados para um servidor.

            // Exemplo de como enviar os dados para um servidor (substitua "URL_DO_SERVIDOR" pela URL real):
            // const data = {
            //     nome: nome,
            //     email: email,
            //     assunto: assunto,
            //     descricao: descricao
            // };

            // fetch("URL_DO_SERVIDOR", {
            //     method: "POST",
            //     body: JSON.stringify(data),
            //     headers: {
            //         "Content-Type": "application/json"
            //     }
            // })
            // .then(response => {
            //     if (response.ok) {
            //         // Se o envio for bem-sucedido, exibe uma mensagem de sucesso.
            //         alert("Formulário enviado com sucesso!");
            //         // Limpa os campos do formulário após o envio bem-sucedido.
            //         form.reset();
            //     } else {
            //         // Se ocorrer um erro no envio, exibe uma mensagem de erro.
            //         alert("Ocorreu um erro no envio do formulário. Tente novamente mais tarde.");
            //     }
            // })
            // .catch(error => {
            //     // Se houver problemas de conexão, exibe uma mensagem de erro de conexão.
            //     alert("Ocorreu um erro na conexão. Verifique sua conexão com a internet.");
            // });
        }
    });
});
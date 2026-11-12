
/* MENU HAMBÚRGUER                           */
// Selecionando os elementos do HTML
const botaoMenu = document.getElementById("menu-hamburguer");
const menuNavegacao = document.getElementById("menu-navegacao");
const linksMenu = document.querySelectorAll(".link-menu");

// Função para abrir ou fechar o menu
function alternarMenu() {
    // Alterna a classe do botão
    botaoMenu.classList.toggle("menu-ativo");
    // Alterna a classe do menu
    menuNavegacao.classList.toggle("menu-ativo");
    // Verifica se o menu está aberto
    const menuAberto = menuNavegacao.classList.contains("menu-ativo");
    // Atualiza o atributo de acessibilidade
    botaoMenu.setAttribute("aria-expanded", menuAberto);
    // Atualiza o texto de acessibilidade
    botaoMenu.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );
}

// Evento de clique no botão hambúrguer
botaoMenu.addEventListener("click", alternarMenu);

// FECHAR MENU AO CLICAR EM UM LINK
linksMenu.forEach(function(link) {
    link.addEventListener("click", function() {
        // Verifica se o menu está aberto
        const menuAberto = menuNavegacao.classList.contains("menu-ativo");
        // Fecha o menu
        if (menuAberto) {
            botaoMenu.classList.remove("menu-ativo");
            menuNavegacao.classList.remove("menu-ativo");
            botaoMenu.setAttribute("aria-expanded", "false");
            botaoMenu.setAttribute("aria-label", "Abrir menu");
        }
    });
});


// FECHAR MENU AO CLICAR FORA DELE
document.addEventListener("click", function(event) {
    // Verifica se o menu está aberto
    const menuAberto = menuNavegacao.classList.contains("menu-ativo");
    // Verifica se o clique aconteceu fora do menu e do botão
    const clicouFora =
        !menuNavegacao.contains(event.target) &&
        !botaoMenu.contains(event.target);
    // Fecha o menu caso necessário
    if (menuAberto && clicouFora) {
        botaoMenu.classList.remove("menu-ativo");
        menuNavegacao.classList.remove("menu-ativo");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
    }
});

// FECHAR MENU AO REDIMENSIONAR A TELA
window.addEventListener("resize", function() {
    // Verifica se a tela está no tamanho de desktop
    if (window.innerWidth > 768) {
        // Remove as classes de menu ativo
        botaoMenu.classList.remove("menu-ativo");
        menuNavegacao.classList.remove("menu-ativo");
        // Restaura os atributos de acessibilidade
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
    }
});

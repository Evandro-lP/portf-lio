const btnHamburguer = document.getElementById("btn-menu-hamburguer");
const menuLinks = document.getElementById("menu");
const botaoTema = document.getElementById("botao-tema");
const iconeBotao = botaoTema.querySelector("i");

btnHamburguer.addEventListener("click", (event) => {
    event.stopPropagation();
    menuLinks.classList.toggle("active");
});

const linksDoMenu = document.querySelectorAll("#menu a");
linksDoMenu.forEach(link => {
    link.addEventListener("click", () => {
        menuLinks.classList.remove("active");
    });
});

document.addEventListener("click", () => {
    menuLinks.classList.remove("active");
});

const estiloTemaClaro = document.createElement("style");
estiloTemaClaro.innerHTML = `
    body.light-theme {
        background-color: #f4f0ea !important;
        color: #2b2d42 !important;
    }
    body.light-theme #header {
        background: radial-gradient(circle at top, #f4f0ea, #e6dfd5) !important;
    }
    body.light-theme .projetos-cards,
    body.light-theme .habilidades-card,
    body.light-theme .contatos-item,
    body.light-theme #footer,
    body.light-theme #menu { /* CORREÇÃO: O menu mobile agora também ganha o fundo claro */
        background-color: #faf8f5 !important;
        color: #2b2d42 !important;
        border: 1px solid #b7b7a4 !important;
    }
    body.light-theme #titulo,
    body.light-theme #intro,
    body.light-theme #sobre h1,
    body.light-theme #projetos h1,
    body.light-theme #projetos h2,
    body.light-theme #habilidades h1,
    body.light-theme #contatos h1 {
        color: #1a3a4b !important;
    }
    body.light-theme #descricao {
        color: #124559 !important;
    }
    body.light-theme #sobre p,
    body.light-theme #habilidades p,
    body.light-theme .projetos-cards p,
    body.light-theme .contatos-item p {
        color: #2b2d42 !important;
    }
    body.light-theme .projetos-cards a {
        color: #1a3a4b !important;
        border-color: #1a3a4b !important;
    }
    body.light-theme #botao-tema {
        border-color: #1a3a4b !important;
        color: #1a3a4b !important;
    }
    body.light-theme #btn-menu-hamburguer {
        color: #1a3a4b !important;
    }
    body.light-theme .habilidades-card span {
        color: #1a3a4b !important;
        font-weight: bold;
    }
`;
document.head.appendChild(estiloTemaClaro);

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        iconeBotao.classList.remove("fa-moon");
        iconeBotao.classList.add("fa-sun");
    } else {
        iconeBotao.classList.remove("fa-sun");
        iconeBotao.classList.add("fa-moon");
    }
});

const botaoTopo = document.createElement("button");
botaoTopo.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
botaoTopo.id = "btn-voltar-topo";
document.body.appendChild(botaoTopo);

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }
};

botaoTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
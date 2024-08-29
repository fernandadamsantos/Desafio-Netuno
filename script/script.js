document.addEventListener('DOMContentLoaded', function() {
    var selectElement = document.getElementById('state');
    var asterisk = document.getElementById('asterisk-state');

    function updateAsteriskVisibility() {
        // Verifica se a opção selecionada é a padrão (value="null")
        if (selectElement.value === "null" || selectElement.value === "") {
            asterisk.classList.remove('hidden'); // Exibe o asterisco
        } else {
            asterisk.classList.add('hidden'); // Esconde o asterisco
        }
    }

    // Atualiza a visibilidade do asterisco ao carregar a página
    updateAsteriskVisibility();

    // Atualiza a visibilidade do asterisco sempre que o select mudar
    selectElement.addEventListener('change', updateAsteriskVisibility);

    // Atualiza a visibilidade do asterisco quando o select for clicado (para garantir que a opção padrão seja respeitada)
    selectElement.addEventListener('focus', updateAsteriskVisibility);
});

// Seleciona todos os botões, itens do menu, itens do rodapé e ícones
const focusableElements = document.querySelectorAll('button, a, .icon-class');

// Função que executa o clique no elemento
function executeClickOnEnter(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        event.target.click();
    }
}

// Adiciona o event listener a todos os elementos selecionados
focusableElements.forEach(element => {
    element.addEventListener('keydown', executeClickOnEnter);
});


document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');

    // Mostrar/Ocultar o botão de voltar ao topo
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) { // Mostra o botão quando rolar mais de 300px
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Adicionar a funcionalidade de rolar para o topo
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});



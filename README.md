# Desafio-Netuno

Este projeto é uma landing page desenvolvida para o Desafio Netuno, com o objetivo de replicar uma interface complexa utilizando tecnologias front-end. A página é totalmente responsiva e inclui funcionalidades interativas conforme especificado no protótipo fornecido.

🚀 Tecnologias Utilizadas

- HTML5: Estrutura semântica do conteúdo.
- CSS3: Estilização da página, incluindo design responsivo.
- JavaScript: Funcionalidade interativa, como navegação de menu e validações de formulário.
- Google Fonts: Importação da fonte "Hanken Grotesk".
- Imagens e Ícones: Usados para melhorar a UI conforme o protótipo do Figma.
- 
📋 Instruções Simples para Visualizar o Projeto

1. Clonar o Repositório
- Copie o Link: Copie o link do repositório.
- Abra o Terminal: No Windows, use o Prompt de Comando ou o Terminal do VSCode. No macOS ou Linux, abra o Terminal.
- Clone o Repositório: 
      git clone URL_DO_REPOSITORIO
      Substitua URL_DO_REPOSITORIO pelo link copiado.

2. Abrir no VSCode
- Abra o VSCode: Inicie o Visual Studio Code.
- Abrir a Pasta do Projeto: No VSCode, vá para "File" > "Open Folder..." e selecione a pasta do projeto que você clonou.

3. Visualizar o Projeto
- Abrir o Arquivo HTML: No VSCode, localize o arquivo HTML principal (index.html).
Clique com o botão direito no arquivo e selecione "Open with Live Server" se você tiver a extensão Live Server instalada.
Se não tiver o Live Server, você pode abrir o arquivo HTML diretamente no navegador clicando com o botão direito e selecionando "Open with" > "Seu Navegador".


🛠️ Desafios Enfrentados

- Responsividade: Adaptação da página para diferentes dispositivos (desktop, tablet, mobile).
  Solução: Utilização de media queries no CSS e flexbox/grid para criar uma estrutura flexível.
- Interatividade: Implementação de navegação e validação de formulário.
  Solução: Utilização de JavaScript para criar funções que tratam eventos de clique e validação de dados.
  
🌟 Possíveis Melhorias
- Otimização de Performance: Implementação de lazy loading para imagens.
- Acessibilidade: Inclusão de atributos ARIA para melhorar a navegação assistida.
- Componentização: Refatorar o código JavaScript em módulos para facilitar a manutenção e escalabilidade.
- 


🖌️ Estilo e Layout (CSS)
O arquivo CSS foi estruturado para garantir que a página seja visualmente agradável e responsiva, mantendo a consistência com o protótipo do Figma.

🎨 Estilos Gerais
- Reset CSS: Um reset foi aplicado para eliminar margens, espaçamentos e assegurar que todos os elementos tenham box-sizing: border-box.
- Cores e Fonte: O fundo do site é predominantemente azul (#1A7FBD), e a fonte principal utilizada é a "Hanken Grotesk" importada do Google Fonts.
- 
🧩 Estrutura e Componentes
- Container: Definido com um max-width de 992px para centralizar o conteúdo e aplicar padding lateral.
- Cabeçalho: Logo e navegação são alinhados horizontalmente utilizando flexbox.
- Links no menu têm um efeito hover que muda a cor para #CECECE.
- Botões: Estilizados com bordas arredondadas e um efeito de transição de cor no hover.
  
📑 Seção Formulário
- Formulário de Cadastro: O formulário é centralizado e estilizado com bordas arredondadas e uma cor de fundo branca. Inputs e selects têm estilos personalizados para ícones e placeholders.
- Checkboxes e Radios: Customizados para combinar com a paleta de cores do site. Os checkboxes têm bordas brancas e um efeito de seleção com transição suave.
  
🧩 Seções Específicas
- Seção Projeto: Inclui uma imagem de um desenvolvedor e texto com estilo específico para títulos e parágrafos.
- Seção Problema: Apresenta uma imagem e texto lado a lado, com uma sobreposição de caixas que destacam "Oportunidade", "Comunidade", e "Experiência Real".
- Seção Jornada: Contém boxes menores com ícones e descrições, todos estilizados com bordas arredondadas e cores que contrastam com o fundo.
- Seção Objetivos: Dispostos em caixas centradas com sombreamento e texto alinhado ao centro.

📱 Responsividade (CSS Responsive)
O projeto inclui uma implementação detalhada de responsividade para garantir que a interface se adapte perfeitamente a diferentes tamanhos de tela, desde desktops até dispositivos móveis.

- 🖥️ Telas de 992px ou menores
Container: Ajuste do padding para proporcionar mais espaço em telas menores.
Navegação: O menu e o logo são reorganizados em uma coluna para otimizar o espaço vertical.
Formulário: O formulário e seus elementos são redimensionados para se adequar a telas menores.
Seções: As seções "Projeto", "Problema", "Jornada" e "Objetivos" são reestruturadas para alinhamento centralizado e ajustes de margem, garantindo que o conteúdo seja exibido corretamente.

- 📱 Telas de 768px ou menores
Redução Adicional de Padding: O padding do container é reduzido ainda mais para otimizar o espaço disponível.
Reorganização de Elementos: Elementos como ícones, botões e imagens são redimensionados e realinhados para melhorar a legibilidade e usabilidade em telas pequenas.
Caixas Flexíveis: As caixas de conteúdo (como as da seção de "Problema" e "Objetivos") passam a ser exibidas em uma coluna para facilitar a visualização em dispositivos móveis.

- 📲 Telas de 576px ou menores
Layout Compactado: Para as telas muito pequenas, todos os elementos são reorganizados em uma coluna única, com margens e padding minimizados.
Botões e Imagens: Botões e imagens são reduzidos para garantir que fiquem dentro do espaço da tela sem necessidade de rolagem horizontal.
Tipografia: O tamanho das fontes é ajustado para garantir que o texto permaneça legível sem sobrecarregar o layout.

🎯 Funcionalidades

🧠 Lógica (JavaScript)
O projeto utiliza JavaScript para adicionar interatividade e melhorar a experiência do usuário. Abaixo estão as principais funcionalidades implementadas:

🌟 Asterisco de Obrigatoriedade no Select
Exibição Condicional do Asterisco:
- Um asterisco é exibido ao lado do select de estado para indicar que a seleção é obrigatória.
- O asterisco é visível por padrão e é ocultado automaticamente quando o usuário seleciona um estado válido.
- A visibilidade do asterisco é atualizada ao carregar a página, quando o select é alterado e ao focar nele, garantindo que a interface seja clara e intuitiva.
  
🎯 Ação via Tecla Enter
Suporte a Navegação por Teclado:
- A funcionalidade de ativação por tecla Enter foi adicionada a todos os botões, links de menu, itens do rodapé e ícones.
- Ao pressionar Enter em qualquer desses elementos, a ação correspondente ao clique é executada, melhorando a acessibilidade para usuários que preferem ou precisam navegar pelo teclado.

⬆️ Funcionalidade do Botão "Voltar ao Topo"
Exibição Condicional do botão:
- O botão é inicialmente oculto e aparece somente quando o usuário rola a página para baixo mais de 300 pixels.
- O botão é escondido novamente quando o usuário rola de volta para o topo da página.
- Ao clicar no botão "Voltar ao Topo", a página rola suavemente para o topo.

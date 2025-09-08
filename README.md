# Painel de Conhecimento para Atendimento
Este projeto é uma base de conhecimento interna, desenvolvida para equipes de atendimento e telemarketing. O objetivo é centralizar procedimentos, guias interativos e macros de texto em uma interface web rápida, organizada e de fácil acesso.

# ✨ Principais Funcionalidades
 - Conteúdo Estruturado: Navegação intuitiva organizada em Categorias, Tópicos e Assuntos.
 - Guias Interativos: Crie fluxos de decisão com perguntas de "Sim" e "Não" para guiar o atendente passo a passo nos procedimentos.
 - Busca Inteligente: Um sistema de pesquisa poderoso que permite encontrar informações em toda a base, incluindo títulos, assuntos e até mesmo no conteúdo das perguntas interativas.
 - Gerador de Macros: Uma seção dedicada para respostas rápidas de chat, com variáveis automáticas como [NOMEDOCLIENTE], [SEUNOME] e saudações dinâmicas ([BOMDIABOATARDE]).
 - Painel de Gestão Dedicado: Uma interface de administração (index_register.html) completamente separada para cadastrar, editar e remover informações, garantindo que os usuários finais tenham acesso apenas ao painel de consulta.
 - Backend Simplificado: Utiliza o poder do Google Sheets como um banco de dados, tornando a solução de baixo custo e fácil de manter, sem a necessidade de um servidor tradicional.

🛠️ Tecnologias Utilizadas
 - Frontend: HTML5, CSS3, JavaScript (Vanilla)
 - Backend & Banco de Dados: Google Apps Script & Google Sheets


⚙️ Configuração
1. Crie um novo projeto no Google Apps Script.

2. Adicione os 4 arquivos do projeto (code.gs, index.html, code_register.gs, index_register.html) ao editor do Apps Script.

3. Publique o projeto como um Aplicativo Web para obter os links de acesso aos painéis de visualização e registro.

4. Ao salvar o primeiro registro, uma planilha chamada BD será criada automaticamente na sua conta Google Sheets para armazenar os dados.

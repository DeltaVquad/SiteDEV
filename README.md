### README.md

Este é o repositório do site oficial da DeltaV Drones (https://deltavquad.github.io), a primeira equipe de extensão universitária de drones de Pernambuco, vinculada à Escola Politécnica de Pernambuco (POLI/UPE)./

O site foi construído utilizando a biblioteca React e segue uma estrutura de componentes para facilitar a manutenção e escalabilidade.

---

### Estrutura do Repositório

O projeto está organizado da seguinte forma:

- `src/`: Contém o código-fonte principal do site.
  - `components/`: Componentes React reutilizáveis.
    - `header/`: Componente e estilos do cabeçalho.
    - `footer/`: Componente e estilos do rodapé.
    - `home-page/`: Componentes específicos da página inicial (Hero, Intro, Blocks).
    - `sobre-page/`: Componentes e estilos da página "Quem Somos".
    - `competicoes-page/`: Componentes e estilos da página de "Competições".
    - `exposicoes-page/`: Componentes e estilos da página de "Exposições".
    - `projetos-page/`: Componentes e estilos da página de "Projetos".
    - `seletivo-page/`: Componentes e estilos da página de "Processo Seletivo".
    - `contact-page/`: Componentes e estilos da página de "Contato".
    - `utils/`: Funções utilitárias e componentes auxiliares.
  - `assets/`: Imagens, ícones e outros arquivos de mídia.
- `public/`: Arquivos estáticos como o `index.html`.
- `psd/`: Arquivos editáveis em formato `.psd` (Adobe Photoshop) e um fluxograma organizacional da equipe em `.draw.io`.
- `timeAPI/`: Uma API para obter a hora exata de um servidor hospedado no Vercel, necessário para a funcionalidade de cronômetro.
- `.gitignore`: Arquivos e pastas a serem ignorados pelo controle de versão Git.
- `eslint.config.js`: Configuração do ESLint para padronização de código.
- `package.json` e `package-lock.json`: Gerenciamento de dependências e scripts do projeto.
- `vite.config.js`: Configuração do Vite, bundler utilizado para o projeto.
- `README.md`: Este arquivo.

### Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface do usuário.
- **Vite**: Ferramenta de build para desenvolvimento rápido.
- **React Router DOM**: Para gerenciar a navegação entre as páginas do site.
- **HTML, CSS, JavaScript**: As linguagens base da web.
- **Vercel API**: Utilizada para fornecer a hora do servidor para a página de "Em Breve".
- **Formspree**: Serviço para o formulário de contato.
- **Google Analytics**: Ferramenta para monitoramento de tráfego.
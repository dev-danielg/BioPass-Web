# BioPass Web

BioPass é uma plataforma que conecta consumidores conscientes a vendedores de produtos sustentáveis. Este projeto é uma aplicação web simples que permite o cadastro de usuários, login, gerenciamento de produtos e depoimentos.

## Funcionalidades

- **Tela Inicial**: Apresenta o propósito da plataforma e oferece opções de navegação.
- **Cadastro de Usuários**: Permite o registro de novos usuários com validação de CPF.
- **Login**: Autenticação de usuários cadastrados.
- **Menu Principal**: Acesso às funcionalidades principais, como listar produtos, cadastrar produtos e depoimentos.
- **Cadastro de Produtos**: Permite que usuários cadastrem produtos com informações detalhadas.
- **Depoimentos**: Usuários logados podem deixar depoimentos sobre a plataforma.
- **Sobre Nós**: Informações sobre a missão e visão da BioPass.

## Estrutura do Projeto

### Arquivos Principais

- **`index.html`**: Estrutura HTML do site.
- **`styles.css`**: Estilos visuais do site.
- **`scripts.js`**: Lógica e funcionalidades do site.

### Telas Disponíveis

1. **Tela Inicial** (`tela-inicial`): Página de boas-vindas com opções de navegação.
2. **Tela de Cadastro** (`tela-cadastro`): Formulário para registro de novos usuários.
3. **Tela de Login** (`tela-login`): Formulário para autenticação de usuários.
4. **Menu Principal** (`tela-menu`): Página principal após o login.
5. **Tela de Produtos** (`tela-produtos`): Lista de produtos cadastrados.
6. **Tela de Cadastro de Produtos** (`tela-cadastrar-produto`): Formulário para adicionar novos produtos.
7. **Tela de Depoimentos** (`tela-depoimentos`): Área para envio e exibição de depoimentos.
8. **Tela Sobre Nós** (`tela-sobre`): Informações sobre a BioPass.

## Como Usar

1. Clique em Deployments (canto esquerdo).
2. Abra o link correspondente ao site do projeto.
3. Navegue pelas telas utilizando os botões disponíveis.

## Tecnologias Utilizadas

- **HTML5**: Estrutura do site.
- **CSS3**: Estilização e layout.
- **JavaScript**: Lógica de funcionamento e interatividade.

## Estrutura de Classes

### `Usuario`
Representa um usuário da plataforma.
- **Atributos**: `cpf`, `nome`, `senha`
- **Métodos**: `fazerLogin(cpf, senha)`

### `Produto`
Representa um produto cadastrado.
- **Atributos**: `nomeVendedor`, `nomeProduto`, `preco`, `quantidade`, `descricao`, `link`

### `Depoimento`
Representa um depoimento deixado por um usuário.
- **Atributos**: `autor`, `texto`
- **Métodos**: `textoCompleto()`

## Validação de CPF

A validação de CPF segue as regras oficiais:
1. Verifica se o CPF tem 11 dígitos.
2. Calcula os dígitos verificadores com base nos 9 primeiros dígitos.
3. Compara os dígitos calculados com os informados.

## Estilo Visual

O design é simples e responsivo, com foco na usabilidade:
- Botões com cores amigáveis e feedback visual ao passar o mouse.
- Campos de entrada centralizados e de fácil acesso.

## Team

- Arthur Alexandre
- Daniel Gonçalves
- Júlio Augusto
- Wesley Telles
- Ludmilla Arlane
- Marcelo Bezerra

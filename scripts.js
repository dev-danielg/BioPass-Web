class Usuario {
    constructor(cpf, nome, senha) {
      this.cpf = cpf;
      this.nome = nome;
      this.senha = senha;
    }
  
    fazerLogin(cpf, senha) {
      return this.cpf === cpf && this.senha === senha;
    }
  }
  
  class Produto {
    constructor(nomeVendedor, nomeProduto, preco, quantidade, descricao, link) {
      this.nomeVendedor = nomeVendedor;
      this.nomeProduto = nomeProduto;
      this.preco = preco;
      this.quantidade = quantidade;
      this.descricao = descricao;
      this.link = link;
    }
  }
  
  class Depoimento {
    constructor(autor, texto) {
      this.autor = autor;
      this.texto = texto;
    }
  
    textoCompleto() {
      return `${this.autor} disse: ${this.texto}`;
    }
  }
  
  let usuarios = [];
  let usuarioLogado = null;
  let produtos = [];
  let depoimentos = [];
  
  function mostrarTela(nome) {
    let telas = document.getElementsByClassName('tela');
    for (let i = 0; i < telas.length; i++) {
      telas[i].style.display = 'none';
    }
    document.getElementById(nome).style.display = 'block';
  }
  
  mostrarTela('tela-inicial');
  
  function cadastrarUsuario() {
    let cpf = document.getElementById('cpf').value.trim();
    let nome = document.getElementById('nome').value.trim();
    let senha = document.getElementById('senha').value.trim();
    
    if (!cpf || !nome || !senha) {
      alert('Preencha todos os campos corretamente.');
      return;
    }
    else {
      const validacaoCPF = verificarCPF(cpf);
      if (validacaoCPF === false) {
        alert('CPF inválido.');
        return;
      }
    
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].cpf === cpf) {
        alert('CPF já cadastrado.');
        return;
      }}
    }
  
    let novoUsuario = new Usuario(cpf, nome, senha);
    usuarios.push(novoUsuario);
    alert('Cadastro feito!');
    mostrarTela('tela-login');
  }

  function loginUsuario() {
    let cpf = document.getElementById('cpfLogin').value.trim();
    let senha = document.getElementById('senhaLogin').value.trim();
  
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].fazerLogin(cpf, senha)) {
        usuarioLogado = usuarios[i];
        alert('Login realizado com sucesso.');
        alert(`Seja bem vindo ${usuarioLogado.nome}!`)
        mostrarTela('tela-menu');
        return;
      }
    }
  
    alert('CPF ou senha errados.');
  }
  
  function logoutUsuario() {
    usuarioLogado = null;
    alert('Você saiu da conta.');
    mostrarTela('tela-inicial');
  }
  
  function cadastrarProduto() {
    let nomeVendedor = document.getElementById('nomeVendedor').value.trim();
    let nomeProduto = document.getElementById('nomeProduto').value.trim();
    let preco = document.getElementById('preco').value.trim();
    let quantidade = document.getElementById('quantidade').value.trim();
    let descricao = document.getElementById('descricao').value.trim();
    let link = document.getElementById('linkProduto').value.trim();
  
    if (nomeVendedor === '' || nomeProduto === '' || preco === '' || quantidade === '' || descricao === '') {
      alert('Preencha todos os campos.');
      return;
    }
  
    let novoProduto = new Produto(nomeVendedor, nomeProduto, preco, quantidade, descricao, link);
    produtos.push(novoProduto);
    alert('Produto cadastrado!');
    mostrarTela('tela-menu');
  }
  
  function listarProdutos() {
    let lista = document.getElementById('listaProdutos');
    lista.innerHTML = '';
    for (let i = 0; i < produtos.length; i++) {
      let item = produtos[i];
      let li = document.createElement('li');
      li.textContent = `${item.nomeProduto} - R$ ${item.preco} - ${item.quantidade} un - Vendedor: ${item.nomeVendedor} - Link: ${item.link}`;
      lista.appendChild(li);
    }
    mostrarTela('tela-produtos');
  }
  
  function adicionarDepoimento() {
    let texto = document.getElementById('textoDepoimento').value.trim();
    if (texto === '') {
      alert('Digite seu depoimento.');
      return;
    }
  
    if (!usuarioLogado) {
      alert('Você precisa estar logado para enviar depoimentos.');
      return;
    }
  
    let novoDepoimento = new Depoimento(usuarioLogado.nome, texto);
    depoimentos.push(novoDepoimento);
    document.getElementById('textoDepoimento').value = '';
    atualizarDepoimentos();
  }
  
  function atualizarDepoimentos() {
    let lista = document.getElementById('listaDepoimentos');
    lista.innerHTML = '';
    for (let i = 0; i < depoimentos.length; i++) {
      let li = document.createElement('li');
      li.textContent = depoimentos[i].textoCompleto();
      lista.appendChild(li);
    }
  }

function verificarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '')

    if (cpf.length !== 11) {
      return false
    }

    function calcularDigito(cpf, digito=1) {
      let multiplicadores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      multiplicadores = digito == 1 ? multiplicadores.slice(1) : multiplicadores
      let somatorio = 0;

      multiplicadores.forEach((multiplicador, indice) => {
        somatorio = somatorio + parseInt(cpf[indice]) * multiplicador
        });

      let restoDigito = somatorio % 11;
      restoDigito = restoDigito == 10 ? 0: restoDigito;
      return restoDigito;
    }

    const primeiroDigito = calcularDigito(cpf, 1);
    const segundoDigito = calcularDigito(cpf, 2);
    const dvInformado = cpf.slice(9);
    const dvCalculado = `${primeiroDigito}${segundoDigito}`;
    if (dvInformado == dvCalculado) {
        return true
    }
    else {
        return false
    }
}

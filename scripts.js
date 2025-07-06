class Usuario {
    static usuariosCadastrados = [];
    static usuarioLogado = null;
    static getUsuarioLogado() {
        return this.usuarioLogado;
    }
    constructor(cpf, nome, senha) {
        this.cpf = cpf
        this.nome = nome
        this.senha = senha
    }
    getData() {
        const data = 
        {
            cpf: this.cpf, 
            nome: this.nome, 
            senha: this.senha
        } 
        return data
    }
} 

class Produto {
    static produtosCadastrados = [];

    constructor(cpfVendedor, nomeVendedor, nomeProduto, preco, quantidade, descricao) {
        this.cpfVendedor = cpfVendedor
        this.nomeVendedor = nomeVendedor
        this.nomeProduto = nomeProduto
        this.preco = preco
        this.quantidade = quantidade
        this.descricao = descricao
    }
    getData() {
        const data = 
        {
            cpfVendedor: this.cpfVendedor,
            nomeVendedor: this.nomeVendedor,
            nomeProduto: this.nomeProduto,
            preco: this.preco,
            quantidade: this.quantidade,
            descricao: this.descricao
        }
        return data
    }
}


function cadastrarUsuario() {
    const cpfInput = document.getElementById('cpf');
    const nomeInput = document.getElementById('nome');
    const senhaInput = document.getElementById('senha');

    const cpf = cpfInput.value.replace(/\D/g, '').trim();
    const nome = nomeInput.value.trim();
    const senha = senhaInput.value.trim();

    if (!senha || !nome || !cpf) {
        alert('Os campos de senha e nome devem ser preenchidos.')
        return
    }
    if (cpf.length !== 11) {
        alert('O CPF deve conter 11 dígitos.')
        return
    }
    if (Usuario.usuariosCadastrados.some(usuario => usuario.cpf === cpf)) {
        alert('Já existe um usuário cadastrado com este CPF.')
        return
    }
    const usuario = new Usuario(cpf, nome, senha)
    Usuario.usuariosCadastrados.push(usuario.getData())
    alert('Usuário cadastrado com sucesso!')
    
    cpfInput.value = ''
    nomeInput.value = ''
    senhaInput.value = ''
} 

function cadastrarProduto() {
    const nomeVendedorInput = document.getElementById('nomeVendedor');
    const nomeProdutoInput = document.getElementById('nomeProduto');
    const precoInput = document.getElementById('preco');
    const quantidadeInput = document.getElementById('quantidade');
    const descricaoInput = document.getElementById('descricao');

    const nomeVendedor = nomeVendedorInput.value.trim();
    const nomeProduto = nomeProdutoInput.value.trim();
    const preco = parseFloat(precoInput.value);
    const quantidade = parseInt(quantidadeInput.value);
    const descricao = descricaoInput.value.trim();

    if (!nomeVendedor || !nomeProduto || isNaN(preco) || isNaN(quantidade) || !descricao) {
        alert('Todos os campos devem ser preenchidos corretamente.')
        return
    }
    
    if (quantidade <= 0) {
        alert('A quantidade deve ser maior que zero.')
        return
    }
    if (preco <= 0) {
        alert('O preço deve ser maior que zero.')
        return
    }
    const produto = new Produto(Usuario.usuarioLogado.cpf, nomeVendedor, nomeProduto, preco, quantidade, descricao)
    Produto.produtosCadastrados.push(produto.getData())
    alert('Produto cadastrado com sucesso!')
    nomeVendedorInput.value = ''
    nomeProdutoInput.value = ''
    precoInput.value = ''
    quantidadeInput.value = ''
    descricaoInput.value = ''
    
}

function loginUsuario() {
    const cpfInput = document.getElementById('cpfLogin'); 
    const senhaInput = document.getElementById('senhaLogin');

    const cpf = cpfInput.value.replace(/\D/g, '').trim();
    const senha = senhaInput.value.trim();
    if (!senha || !cpf) {
        alert('Os campos de senha e CPF devem ser preenchidos.')
        return
    }
    const usuario = Usuario.usuariosCadastrados.find(usuario => usuario.cpf === cpf && usuario.senha === senha);
    if (usuario) {
        alert(`Bem-vindo, ${usuario.nome}!`);
        cpfInput.value = '';
        senhaInput.value = '';
        Usuario.usuarioLogado = usuario;
    } else {
        alert('CPF ou senha incorretos.');
    }  
}

function listarProdutos() {
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = '';
    if (Produto.produtosCadastrados.length === 0) {
        listaProdutos.innerHTML = '<p>Nenhum produto cadastrado.</p>';
        return;
    }

    Produto.produtosCadastrados.forEach(produto => {
        const linha = document.createElement('li');
        linha.textContent = `${produto.nomeProduto} - R$ ${produto.preco} (${produto.quantidade} unidades) - Vendedor: ${produto.nomeVendedor}`;
        listaProdutos.appendChild(linha);
    });
}

function logoutUsuario() {
    Usuario.usuarioLogado = null;
    alert('Usuário desconectado com sucesso!');
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = '';

    const cpfInput = document.getElementById('cpfLogin'); 
    const senhaInput = document.getElementById('senhaLogin');

    cpfInput.value = '';
    senhaInput.value = '';

    const nomeVendedorInput = document.getElementById('nomeVendedor');
    nomeVendedorInput.value = ''; 

    const nomeProdutoInput = document.getElementById('nomeProduto');
    nomeProdutoInput.value = ''; 

    const precoInput = document.getElementById('preco');
    precoInput.value = '';

    const quantidadeInput = document.getElementById('quantidade');
    quantidadeInput.value = '';

    const descricaoInput = document.getElementById('descricao');
    descricaoInput.value = '';
}

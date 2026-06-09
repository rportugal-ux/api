const { produtos } = require("../database/database");

// GET
const listarProdutos = (req, res) => {
  res.json(produtos);
};

// POST
const cadastrarProduto = (req, res) => {
  produtos.push(req.body);

  res.json({
    mensagem: "Produto cadastrado com sucesso"
  });
};

// PUT
const atualizarProduto = (req, res) => {
  res.json({
    mensagem: "Produto atualizado"
  });
};

// DELETE
const removerProduto = (req, res) => {
  res.json({
    mensagem: "Produto removido"
  });
};

module.exports = {
  listarProdutos,
  cadastrarProduto,
  atualizarProduto,
  removerProduto
};
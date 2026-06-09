const { categorias } = require("../database/database");

const listarCategorias = (req, res) => {
  res.json(categorias);
};

const cadastrarCategoria = (req, res) => {
  categorias.push(req.body);

  res.json({
    mensagem: "Categoria cadastrada com sucesso"
  });
};

const removerCategoria = (req, res) => {
  res.json({
    mensagem: "Categoria removida"
  });
};

module.exports = {
  listarCategorias,
  cadastrarCategoria,
  removerCategoria
};
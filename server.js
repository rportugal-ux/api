const express = require("express");
const app = express();

app.use(express.json());

// "Banco de dados" em memória
let produtos = [
  { id: 1, nome: "Teclado" },
  { id: 2, nome: "Mouse" }
];


// 🔹 LISTAR TODOS
app.get("/produtos", (req, res) => {
  res.json(produtos);
});


// 🔹 BUSCAR POR ID
app.get("/produtos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  }

  res.json(produto);
});


// 🔹 CADASTRAR
app.post("/produtos", (req, res) => {
  const { nome } = req.body;

  const novoProduto = {
    id: produtos.length + 1,
    nome
  };

  produtos.push(novoProduto);

  res.status(201).json({
    mensagem: "Produto cadastrado com sucesso",
    produto: novoProduto
  });
});


// 🔹 ATUALIZAR
app.put("/produtos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  }

  produto.nome = req.body.nome || produto.nome;

  res.json({
    mensagem: "Produto atualizado com sucesso",
    produto
  });
});


// 🔹 DELETAR
app.delete("/produtos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = produtos.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  }

  const removido = produtos.splice(index, 1);

  res.json({
    mensagem: "Produto removido com sucesso",
    produto: removido[0]
  });
});


// 🔹 INICIAR SERVIDOR
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
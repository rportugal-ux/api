CREATE TABLE produtos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  preco DECIMAL(10,2),
  estoque INT,
  descricao TEXT
);

CREATE TABLE categorias (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  descricao TEXT,
  ativo BOOLEAN,
  criado_em DATE
);
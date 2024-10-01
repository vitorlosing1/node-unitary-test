const express = require("express");
const app = express();
const port = 3003;

// Adição: soma dois números passados como query params
app.get("/add", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const result = num1 + num2;
  res.send(`Resultado da adição: ${result}`);
});

// Subtração: subtrai dois números passados como query params
app.get("/subtract", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const result = num1 - num2;
  res.send(`Resultado da subtração: ${result}`);
});

// Multiplicação: multiplica dois números passados como query params
app.get("/multiply", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const result = num1 * num2;
  res.send(`Resultado da multiplicação: ${result}`);
});

// Divisão: divide dois números passados como query params
app.get("/divide", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (num2 === 0) {
    return res.send("Erro: Divisão por zero não é permitida.");
  }
  const result = num1 / num2;
  res.send(`Resultado da divisão: ${result}`);
});

if (require.main === module) {
  const port = process.env.PORT || 3003;
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
}

module.exports = app;

import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/produtos', (req, res) => {
  res.send(data.produtos);
});

app.get('/api/produtos/slug/:slug', (req, res) => {
  const produto = data.produtos.find((x) => x.slug == req.params.slug);
  if (produto) {
    res.send(produto);
  } else {
    res.status(404).send({ message: 'Produto Não Encontrado' });
  }
});

app.get('/api/produtos/:id', (req, res) => {
  const produto = data.produtos.find((x) => x._id == req.params.id);
  if (produto) {
    res.send(produto);
  } else {
    res.status(404).send({ message: 'Produto Não Encontrado' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});

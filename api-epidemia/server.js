const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Dados fictícios para todos os estados
const data = [
  { uf: 'AC', casos: 15000, mortes: 500 },
  { uf: 'AL', casos: 25000, mortes: 800 },
  { uf: 'AM', casos: 60000, mortes: 1500 },
  { uf: 'AP', casos: 12000, mortes: 300 },
  { uf: 'BA', casos: 90000, mortes: 2500 },
  { uf: 'CE', casos: 45000, mortes: 1200 },
  { uf: 'DF', casos: 70000, mortes: 1800 },
  { uf: 'ES', casos: 30000, mortes: 600 },
  { uf: 'GO', casos: 50000, mortes: 1300 },
  { uf: 'MA', casos: 35000, mortes: 900 },
  { uf: 'MG', casos: 120000, mortes: 3000 },
  { uf: 'MS', casos: 20000, mortes: 500 },
  { uf: 'MT', casos: 25000, mortes: 700 },
  { uf: 'PA', casos: 40000, mortes: 1000 },
  { uf: 'PB', casos: 18000, mortes: 400 },
  { uf: 'PE', casos: 50000, mortes: 1300 },
  { uf: 'PI', casos: 22000, mortes: 600 },
  { uf: 'PR', casos: 70000, mortes: 1600 },
  { uf: 'RJ', casos: 150000, mortes: 4000 },
  { uf: 'RN', casos: 25000, mortes: 700 },
  { uf: 'RO', casos: 18000, mortes: 400 },
  { uf: 'RR', casos: 10000, mortes: 200 },
  { uf: 'RS', casos: 80000, mortes: 2000 },
  { uf: 'SC', casos: 40000, mortes: 1000 },
  { uf: 'SE', casos: 15000, mortes: 300 },
  { uf: 'SP', casos: 200000, mortes: 5000 },
  { uf: 'TO', casos: 13000, mortes: 350 }
];

// Rota para listar todos os estados
app.get('/estados', (req, res) => {
  res.json(data);
});

// Rota para buscar dados de um estado específico
app.get('/estados/:uf', (req, res) => {
  const uf = req.params.uf.toUpperCase();
  const estado = data.find((item) => item.uf === uf);

  if (estado) {
    res.json(estado);
  } else {
    res.status(404).json({ error: 'Estado não encontrado' });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});

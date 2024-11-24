const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Dados fictícios para todos os estados
const data = [
  { uf: 'AC', nome: 'Acre', casos: 15000, mortes: 500 },
  { uf: 'AL', nome: 'Alagoas', casos: 25000, mortes: 800 },
  { uf: 'AM', nome: 'Amazonas', casos: 60000, mortes: 1500 },
  { uf: 'AP', nome: 'Amapá', casos: 12000, mortes: 300 },
  { uf: 'BA', nome: 'Bahia', casos: 90000, mortes: 2500 },
  { uf: 'CE', nome: 'Ceará', casos: 45000, mortes: 1200 },
  { uf: 'DF', nome: 'Distrito Federal', casos: 70000, mortes: 1800 },
  { uf: 'ES', nome: 'Espírito Santo', casos: 30000, mortes: 600 },
  { uf: 'GO', nome: 'Goiás', casos: 50000, mortes: 1300 },
  { uf: 'MA', nome: 'Maranhão', casos: 35000, mortes: 900 },
  { uf: 'MG', nome: 'Minas Gerais', casos: 120000, mortes: 3000 },
  { uf: 'MS', nome: 'Mato Grosso do Sul', casos: 20000, mortes: 500 },
  { uf: 'MT', nome: 'Mato Grosso', casos: 25000, mortes: 700 },
  { uf: 'PA', nome: 'Pará', casos: 40000, mortes: 1000 },
  { uf: 'PB', nome: 'Paraíba', casos: 18000, mortes: 400 },
  { uf: 'PE', nome: 'Pernambuco', casos: 50000, mortes: 1300 },
  { uf: 'PI', nome: 'Piauí', casos: 22000, mortes: 600 },
  { uf: 'PR', nome: 'Paraná', casos: 70000, mortes: 1600 },
  { uf: 'RJ', nome: 'Rio de Janeiro', casos: 150000, mortes: 4000 },
  { uf: 'RN', nome: 'Rio Grande do Norte', casos: 25000, mortes: 700 },
  { uf: 'RO', nome: 'Rondônia', casos: 18000, mortes: 400 },
  { uf: 'RR', nome: 'Roraima', casos: 10000, mortes: 200 },
  { uf: 'RS', nome: 'Rio Grande do Sul', casos: 80000, mortes: 2000 },
  { uf: 'SC', nome: 'Santa Catarina', casos: 40000, mortes: 1000 },
  { uf: 'SE', nome: 'Sergipe', casos: 15000, mortes: 300 },
  { uf: 'SP', nome: 'São Paulo', casos: 200000, mortes: 5000 },
  { uf: 'TO', nome: 'Tocantins', casos: 13000, mortes: 350 }
];

const pieData = data.map((value, index) => ({
  value,
  key: `${index}-${value.uf}`, // Corrigido a interpolação de string
  svg: {
    fill: '#FF0000'
  }
}));

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
  console.log(`API rodando em http://localhost:${port}`); // Corrigido o uso de template string
});

module.exports = { pieData };


const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'diago',
  password: '0902',
  database: 'gerenciadorcv'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

app.post('/api/resumes', (req, res) => {
  const { name, email, phone, interest, descricao } = req.body;
  const sql = 'INSERT INTO resumes (name, email, phone, interest, descricao) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [name, email, phone, interest, descricao], (err, result) => {
    if (err) throw err;
    res.send('Resume added');
  });
});

app.get('/api/resumes', (req, res) => {
  const sql = 'SELECT * FROM resumes';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.delete('/api/resumes/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM resumes WHERE id = ?';
  db.query(sql, [id], (error, results) => {
    if (error) {
      return res.status(500).json({ error });
    }
    res.json({ message: 'Resume deleted successfully' });
  });
});


app.listen(5000, () => {
  console.log('Server started on port 5000');
});

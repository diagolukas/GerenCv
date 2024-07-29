const express = require('express');
const router = express.Router();
const connection = require('../database');


router.get('/api/resumes', (req, res) => {
  const sql = 'SELECT * FROM resumes';
  connection.query(sql, (error, results) => {
    if (error) {
      return res.status(500).json({ error });
    }
    res.json(results);
  });
});

router.delete('/api/resumes/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM resumes WHERE id = ?';
  connection.query(sql, [id], (error, results) => {
    if (error) {
      return res.status(500).json({ error });
    }
    res.json({ message: 'Resume deleted successfully' });
  });
});

module.exports = router;

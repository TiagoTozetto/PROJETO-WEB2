const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/firebaseConfig');

const router = express.Router();

// Login do Aluno
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const alunoSnapshot = await db.collection('alunos').where('email', '==', email).get();

    if (alunoSnapshot.empty) {
      return res.status(404).json({ error: 'Aluno não encontrado' });
    }

    let alunoData;
    alunoSnapshot.forEach(doc => {
      alunoData = { id: doc.id, ...doc.data() };
    });

    const senhaValida = await bcrypt.compare(senha, alunoData.senha);
    if (!senhaValida) {
      return res.status(401).json({ error: 'Senha inválida' });
    }

    const token = jwt.sign({ id: alunoData.id }, 'segredo_super_secreto', { expiresIn: '2h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
});

module.exports = router;

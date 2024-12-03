const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controllers/userController');

// Definindo as rotas para o usuário
router.get('/', getUsers); // Rota para pegar todos os usuários
router.post('/', createUser); // Rota para criar um novo usuário

module.exports = router;
    
// Dados simulados (normalmente, você usaria um banco de dados aqui)
let users = [
    { id: 1, name: 'Tiago', email: 'tiago@exemplo.com' },
    { id: 2, name: 'Maria', email: 'maria@exemplo.com' }
  ];
  
  // Controlador para pegar todos os usuários
  const getUsers = (req, res) => {
    res.status(200).json(users);
  };
  
  // Controlador para criar um novo usuário
  const createUser = (req, res) => {
    const { name, email } = req.body;
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
  };
  
  module.exports = { getUsers, createUser };
  
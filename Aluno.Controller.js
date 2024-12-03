const Aluno = require('./models/Aluno');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const aluno = await Aluno.findOne({ where: { email } });
    if (!aluno) return res.status(404).json({ error: 'Aluno não encontrado' });

    const senhaValida = await bcrypt.compare(senha, aluno.senha);
    if (!senhaValida) return res.status(401).json({ error: 'Senha inválida' });

    const token = jwt.sign({ id: aluno.id }, 'seu_segredo', { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
};

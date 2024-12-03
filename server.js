import express from 'express';
import { firestore } from './backend/config/firebaseConfig.js'; // Adicione a extensão .js
import { collection, getDocs } from 'firebase/firestore'; // Importa as funções específicas do Firestore

const app = express();

// Middleware
app.use(express.json());
// Rota inicial
app.get('/', (req, res) => {
  res.send('Servidor está funcionando!');
});

// Rota para listar todos os projetos
app.get('/Projetos', async (req, res) => {
  try {
    // Acesse a coleção 'projetos' usando a função 'collection' e 'getDocs'
    const ProjetosRef = collection(firestore, 'Projetos');
    const ProjetosSnapshot = await getDocs(ProjetosRef);

    // Mapeia os documentos retornados para um formato mais legível
    const Projetos = ProjetosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
    // Retorna a lista de projetos
    res.json(Projetos);
  } catch (error) {
    console.error('Erro ao obter projetos:', error);
    res.status(500).json({ error: 'Erro ao obter projetos' });
  }
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

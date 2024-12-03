// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';
import firebaseui from 'firebaseui';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCAjq_uRBrVh1RKcxoGCLksaLnDMDNwPUg",
  authDomain: "projeto-web2-109ed.firebaseapp.com",
  projectId: "projeto-web2-109ed",
  storageBucket: "projeto-web2-109ed.firebasestorage.app",
  messagingSenderId: "616214304686",
  appId: "1:616214304686:web:7f0d8e4a37c4f4f0f45a3f",
};
// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
// Obtém a instância do Firestore
const firestore = getFirestore(app);
const uiConfig = {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Outras configurações do FirebaseUI
};

const ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', uiConfig);

export { firestore };

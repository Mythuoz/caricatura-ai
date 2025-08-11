import { validateForm } from '../src/utils/validateForm.js';
import { addDoc, collection } from 'firebase/firestore';

// Assume `db` is initialized Firestore instance elsewhere
const form = document.getElementById('caricature-form');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    nome: document.getElementById('nome')?.value || '',
    email: document.getElementById('email')?.value || '',
    whatsapp: document.getElementById('whatsapp')?.value || ''
  };

  const { valid, errors } = validateForm({ email: data.email, whatsapp: data.whatsapp });
  if (!valid) {
    alert(errors.join('\n'));
    return;
  }

  try {
    await addDoc(collection(db, 'leads'), data);
    alert('Pedido enviado com sucesso!');
  } catch (err) {
    console.error(err);
    alert('Erro ao enviar. Tente novamente.');
  }
});

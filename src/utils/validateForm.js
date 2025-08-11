export function validateForm({ email, whatsapp }) {
  const errors = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push('Por favor, informe um e-mail válido.');
  }
  if (whatsapp) {
    const digits = whatsapp.replace(/\D/g, '');
    if (digits.length < 10) {
      errors.push('O número de WhatsApp deve conter pelo menos 10 dígitos.');
    }
  }
  return { valid: errors.length === 0, errors };
}

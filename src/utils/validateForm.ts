export interface FormData {
  email: string;
  whatsapp?: string;
}

/**
 * Validate email and WhatsApp fields.
 * - Email must match basic format.
 * - WhatsApp digits must have at least 10 characters when provided.
 * Returns object with validity and list of error messages.
 */
export function validateForm({ email, whatsapp }: FormData): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Basic email pattern: something@domain.tld
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

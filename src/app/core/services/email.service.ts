import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactFormData {
    email: string;
    subject: string;
    message: string;
}

/**
 * Email Service para enviar correos de contacto a support@tradeswitch.io
 * 
 * CONFIGURACIÓN:
 * 
 * Opción 1 - EmailJS (Recomendado para frontend):
 * 1. Crear cuenta en https://www.emailjs.com/
 * 2. Crear un servicio de email (Gmail, Outlook, etc.)
 * 3. Crear un template con variables: from_email, subject, message, to_email
 * 4. Copiar Service ID, Template ID y Public Key
 * 5. Reemplazar las constantes EMAILJS_* con tus valores
 * 6. Usar el método sendContactEmail() en lugar de sendContactEmailMock()
 * 
 * Opción 2 - Backend API propio:
 * 1. Crear un endpoint en tu backend: POST /api/contact
 * 2. El endpoint debe aceptar: { email, subject, message }
 * 3. Configurar el backend para enviar el email a support@tradeswitch.io
 * 4. Actualizar la URL en el método sendContactEmail()
 * 
 * Opción 3 - Otros servicios (SendGrid, Mailgun, etc.):
 * Modificar el método sendContactEmail() según la API del servicio elegido
 */
@Injectable({
    providedIn: 'root'
})
export class EmailService {
    // ===== CONFIGURACIÓN EMAILJS =====
    // Reemplaza estos valores con tus credenciales de EmailJS
    private readonly EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
    private readonly EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    private readonly EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
    private readonly EMAILJS_URL = 'https://api.emailjs.com/api/v1.0/email/send';

    // ===== O CONFIGURACIÓN BACKEND API =====
    // Si tienes tu propio backend, usa esta URL
    // private readonly BACKEND_API_URL = 'https://your-backend.com/api/contact';

    constructor(private http: HttpClient) { }

    /**
     * Envía un email de contacto usando EmailJS
     * Descomenta este método cuando hayas configurado EmailJS
     */
    sendContactEmail(formData: ContactFormData): Observable<any> {
        const emailData = {
            service_id: this.EMAILJS_SERVICE_ID,
            template_id: this.EMAILJS_TEMPLATE_ID,
            user_id: this.EMAILJS_PUBLIC_KEY,
            template_params: {
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: 'support@tradeswitch.io'
            }
        };

        return this.http.post(this.EMAILJS_URL, emailData);

        // ===== ALTERNATIVA: Backend API propio =====
        // Descomenta estas líneas si prefieres usar tu propio backend
        // return this.http.post(this.BACKEND_API_URL, formData);
    }

    /**
     * Método de prueba que simula el envío de email
     * SOLO PARA DESARROLLO - Eliminar en producción
     */
    sendContactEmailMock(formData: ContactFormData): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('📧 Mock Email Sent:', {
                    to: 'support@tradeswitch.io',
                    from: formData.email,
                    subject: formData.subject,
                    message: formData.message
                });

                // Simular éxito
                resolve({ success: true, message: 'Email sent successfully' });

                // Para probar manejo de errores, descomenta la siguiente línea:
                // reject({ error: true, message: 'Failed to send email' });
            }, 1500);
        });
    }
}

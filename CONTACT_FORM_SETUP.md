# 📧 Configuración del Formulario de Contacto

El formulario de contacto en la sección FAQ ya está implementado y funcional. Actualmente usa un **método simulado (mock)** para desarrollo. Para que envíe emails reales a `support@tradeswitch.io`, debes configurar uno de los siguientes métodos:

## 🚀 Opción 1: EmailJS (Recomendado - Sin Backend)

EmailJS es un servicio gratuito que permite enviar emails desde el frontend sin necesidad de un backend.

### Pasos de configuración:

1. **Crear cuenta en EmailJS**
   - Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
   - Regístrate gratuitamente (permite 200 emails/mes en plan gratuito)

2. **Configurar servicio de email**
   - En el dashboard, ve a "Email Services"
   - Conecta tu servicio de email (Gmail, Outlook, etc.)
   - Copia el **Service ID**

3. **Crear template de email**
   - Ve a "Email Templates" y crea un nuevo template
   - Configura el template con estas variables:
     ```
     To Email: support@tradeswitch.io
     From Name: {{from_email}}
     Subject: {{subject}}
     Message: {{message}}
     ```
   - Copia el **Template ID**

4. **Obtener Public Key**
   - Ve a "Account" → "General"
   - Copia tu **Public Key**

5. **Actualizar el código**
   - Abre `src/app/core/services/email.service.ts`
   - Reemplaza estos valores con los tuyos:
     ```typescript
     private readonly EMAILJS_SERVICE_ID = 'TU_SERVICE_ID';
     private readonly EMAILJS_TEMPLATE_ID = 'TU_TEMPLATE_ID';
     private readonly EMAILJS_PUBLIC_KEY = 'TU_PUBLIC_KEY';
     ```

6. **Activar el método real**
   - Abre `src/app/features/faq/faq.component.ts`
   - En el método `submitContactForm()` (línea ~168), cambia:
     ```typescript
     // DE:
     await this.emailService.sendContactEmailMock(this.contactForm);
     
     // A:
     await this.emailService.sendContactEmail(this.contactForm).toPromise();
     ```

---

## 🔧 Opción 2: Backend API Propio

Si prefieres manejar el envío de emails desde tu propio backend:

### Backend (Node.js + Express ejemplo):

```javascript
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

// Configurar transporte de email
const transporter = nodemailer.createTransport({
  service: 'gmail', // o tu servicio
  auth: {
    user: 'tu-email@gmail.com',
    pass: 'tu-contraseña-app'
  }
});

app.post('/api/contact', async (req, res) => {
  const { email, subject, message } = req.body;
  
  try {
    await transporter.sendMail({
      from: email,
      to: 'support@tradeswitch.io',
      subject: subject,
      text: message,
      html: `<p><strong>From:</strong> ${email}</p><p>${message}</p>`
    });
    
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(3000);
```

### Frontend:

1. Abre `src/app/core/services/email.service.ts`
2. Actualiza la URL del backend:
   ```typescript
   private readonly BACKEND_API_URL = 'https://tu-backend.com/api/contact';
   ```
3. En el método `sendContactEmail()`, descomenta:
   ```typescript
   return this.http.post(this.BACKEND_API_URL, formData);
   ```

---

## 🧪 Modo de Desarrollo (Actual)

Actualmente el formulario usa `sendContactEmailMock()` que:
- ✅ Simula el envío de email
- ✅ Muestra mensajes de éxito/error
- ✅ Valida el formulario
- ✅ Muestra los datos en la consola del navegador
- ❌ NO envía emails reales

Para probar el flujo completo sin configurar nada, solo abre la consola del navegador (F12) y revisa los logs cuando envíes el formulario.

---

## 📋 Características Implementadas

✅ Modal responsive con diseño moderno  
✅ Formulario con validación de campos  
✅ Validación de formato de email  
✅ Estados de carga (loading spinner)  
✅ Mensaje de éxito animado  
✅ Manejo de errores con mensajes claros  
✅ Cierre automático después del éxito  
✅ Diseño acorde a la estética de la página  
✅ Animaciones suaves y profesionales  

---

## 🎨 Personalización

Puedes personalizar los estilos del modal editando:
- `src/app/features/faq/faq.component.scss` (líneas 273+)

Colores principales usados:
- **Primary:** `#9bf526` (verde neón)
- **Background:** `#1a1a1b` (negro oscuro)
- **Border:** `#2a2a2b` (gris oscuro)
- **Accent:** `#5186e3` (azul)

---

## 🐛 Troubleshooting

**El modal no se abre:**
- Verifica que no haya errores en la consola
- Revisa que `FormsModule` esté importado en el componente

**Los emails no se envían (EmailJS):**
- Verifica las credenciales (Service ID, Template ID, Public Key)
- Revisa la consola para errores de CORS
- Confirma que el template está activo en EmailJS

**Errores de validación:**
- Los campos email, subject y message son obligatorios
- El email debe tener formato válido

---

## 📞 Soporte

Si tienes problemas con la configuración, revisa:
1. La consola del navegador (F12)
2. La documentación de [EmailJS](https://www.emailjs.com/docs/)
3. Los comentarios en `src/app/core/services/email.service.ts`

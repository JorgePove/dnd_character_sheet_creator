/* ═══════════════════════════════════════════════════════════════════════
   CONFIGURACIÓN DE FIREBASE (cuenta y guardado en la nube)

   Mientras `apiKey` esté vacío, la web funciona exactamente como antes
   (todo se guarda solo en el navegador) y el botón «☁ Cuenta» explica
   qué falta por configurar.

   Cómo rellenarlo: sigue GUIA-NUBE.md. En resumen, en
   https://console.firebase.google.com → tu proyecto → ⚙ Configuración del
   proyecto → «Tus apps» → app web (</>) → «Configuración de SDK» → copia
   aquí los valores de `firebaseConfig`.

   ¿Es seguro subir esto a GitHub? Sí. Estos valores NO son secretos: solo
   identifican tu proyecto. Lo que protege los datos de cada persona son las
   reglas de Firestore (firestore.rules) y el inicio de sesión.
═══════════════════════════════════════════════════════════════════════ */
const FIREBASE_CONFIG = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
};

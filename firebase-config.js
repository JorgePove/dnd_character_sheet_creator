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
    apiKey: 'AIzaSyCmYwiif07fY-PtEMPMx4Z6n9Opom2xYyQ',
    authDomain: 'web-fichas-dnd.firebaseapp.com',
    projectId: 'web-fichas-dnd',
    storageBucket: 'web-fichas-dnd.firebasestorage.app',
    messagingSenderId: '441508040855',
    appId: '1:441508040855:web:7ecb1858fe0ab5815599d2'
};

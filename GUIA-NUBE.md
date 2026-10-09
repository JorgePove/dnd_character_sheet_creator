# Cuentas y guardado en la nube (Firebase)

Con esto cada persona entra con **Google** o con **email y contraseña**, y sus fichas se guardan en la nube y aparecen en cualquier navegador. Cada cuenta ve **solo sus fichas**. Sin cuenta, la web sigue funcionando como siempre (todo en el navegador).

Es gratis: usa el plan «Spark» de Firebase (sin tarjeta). Hay que hacerlo **una sola vez**; los amigos solo tienen que abrir el enlace y pulsar «☁ Iniciar sesión».

---

## 1. Crear el proyecto de Firebase

1. Entra en <https://console.firebase.google.com> con tu cuenta de Google.
2. **Crear un proyecto** → ponle un nombre (por ejemplo `dnd-fichas`) → desactiva Google Analytics (no hace falta) → **Crear proyecto**.

## 2. Activar el inicio de sesión

1. Menú izquierdo: **Compilación → Authentication → Comenzar**.
2. Pestaña **Método de acceso** (Sign-in method):
   - **Google** → Habilitar → elige tu email como «correo de asistencia» → Guardar.
   - **Correo electrónico/contraseña** → Habilitar la primera opción (la de contraseña, no la de «enlace por correo») → Guardar.
3. Pestaña **Configuración → Dominios autorizados** → **Agregar dominio**: `jorgepove.github.io`
   (`localhost` ya viene autorizado para probar en tu ordenador).

## 3. Crear la base de datos y las reglas

1. Menú izquierdo: **Compilación → Firestore Database → Crear base de datos**.
2. Ubicación: una de Europa (por ejemplo `eur3 (europe-west)`; **no se puede cambiar después**). Modo: **producción**.
3. Pestaña **Reglas** → borra lo que haya, pega el contenido del archivo [`firestore.rules`](firestore.rules) → **Publicar**.
   Estas reglas hacen que cada cuenta solo pueda leer y escribir lo suyo.

## 4. Copiar la configuración a la web

1. Engranaje ⚙ (arriba a la izquierda) → **Configuración del proyecto** → pestaña **General** → sección **Tus apps** → botón web **`</>`**.
2. Ponle un apodo (`web`), **no** marques «Firebase Hosting» → **Registrar app**.
3. Te muestra un bloque `const firebaseConfig = { apiKey: "...", authDomain: "...", ... }`. Copia esos valores en [`firebase-config.js`](firebase-config.js) (`apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, `appId`).

> Estos valores **no son secretos** (solo identifican tu proyecto), así que no pasa nada por subirlos a GitHub. Lo que protege los datos son las reglas del paso 3 y el inicio de sesión.

## 5. Probar en tu ordenador

El inicio de sesión **no funciona abriendo `index.html` con doble clic** (`file://`). Hay que servir la carpeta:

```
cd carpeta_de_la_web
python3 -m http.server 8000        # en Windows: py -m http.server 8000
```

y abrir <http://localhost:8000>. (Con la extensión «Live Server» de VS Code también vale.)

Pulsa **☁ Iniciar sesión**, entra, y comprueba en Firebase → Firestore que aparece `users/<tu uid>/fichas/...`.

## 6. Publicar para los amigos (GitHub Pages)

1. Fusiona la rama `mejoras-v2` en `main` (o publica la rama que quieras).
2. Repositorio en GitHub → **Settings → Pages** → *Source*: **Deploy from a branch** → rama `main`, carpeta `/ (root)` → Save.
3. En un par de minutos estará en `https://jorgepove.github.io/dnd_character_sheet_creator/`. Ese es el enlace que les pasas.

---

## Cómo funciona

- Las fichas se siguen guardando en el navegador igual que antes; la nube es una copia por cuenta. Si no hay internet, se trabaja con normalidad y los cambios se suben al volver.
- Los cambios se suben unos segundos después de dejar de editar y llegan a los demás navegadores en segundos. Si estás escribiendo en una ficha, el cambio de otro navegador espera a que pares.
- **Conflictos:** si una misma ficha se cambia en dos navegadores a la vez (por ejemplo, uno sin conexión), gana la versión de la nube y la otra se conserva como una ficha nueva «… (copia local)». No se pierde nada.
- **Borrar** una ficha la borra en todos los navegadores (va a la papelera de cada uno, 🕘 Historial, durante 30 días).
- **Primera vez que inicias sesión** en un navegador con fichas ya hechas: te pregunta si quieres añadirlas a tu cuenta.
- **Cambiar de cuenta** en un navegador que tiene fichas de otra: se descarga una copia `.json` y se quitan de ese navegador (siguen en la nube de la otra cuenta).
- **Cerrar sesión** deja las fichas en el navegador, o (si todo está sincronizado) permite quitarlas, útil en ordenadores compartidos.
- **Solo en el navegador** (no se sincronizan): historial de versiones, papelera, fondo personalizado y tema claro/oscuro.
- Si una ficha pesa demasiado para la nube (límite de ~0,9 MB por ficha, normalmente por imágenes), se suben sin las imágenes más pesadas, que se quedan en el navegador donde se pusieron.

## Límites del plan gratuito

Firebase Spark: 1 GiB almacenado, 50 000 lecturas y 20 000 escrituras al día **para todo el proyecto**. La web sube como mucho una vez cada 15 s por ficha mientras se edita, así que para un grupo de amigos sobra. Si algún día se agotara la cuota diaria, las fichas siguen funcionando en el navegador y se suben al día siguiente.

## Privacidad

Quien administra el proyecto (tú) puede ver los datos de todas las cuentas en la consola de Firebase. Los amigos solo ven lo suyo desde la web. Para borrar los datos de alguien: Firebase → Firestore → `users/<uid>` y Authentication → Usuarios.

## Problemas frecuentes

| Mensaje | Qué hacer |
|---|---|
| «Este sitio no está autorizado en Firebase» | Paso 2.3: añade el dominio (`jorgepove.github.io`) en Authentication → Configuración → Dominios autorizados. |
| «La nube ha rechazado la operación (permisos)» | Paso 3.3: las reglas no están publicadas o no se copiaron enteras. |
| «Este método de acceso no está activado» | Paso 2.2: activa Google o Correo/contraseña. |
| «El navegador ha bloqueado la ventana de Google» | Permite las ventanas emergentes para la página. |
| «El inicio de sesión no funciona… (file://)» | Abre la web desde `http://localhost:8000` o desde GitHub Pages (paso 5). |
| El botón dice «☁ Cuenta» y la ventana dice que no está configurado | `firebase-config.js` está vacío (paso 4). |

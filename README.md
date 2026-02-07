# backend-3-coderhouse
Repositorio para la Entrega N° 1 del curso Backend 3 de Coderhouse. API REST con Express y MongoDB para gestión de usuarios y mascotas, más endpoints de mocks para generar datos de prueba.

## ✨ Funcionalidades
- CRUD de usuarios y mascotas.
- Generación de datos fake con Faker.
- Persistencia en MongoDB con Mongoose.
- Middleware de manejo de errores.

## 🧰 Stack
- Node.js + Express (ESM)
- MongoDB + Mongoose
- Faker (dev) y bcrypt

## 📦 Requisitos
- Node.js 18+
- MongoDB en local o remoto

## 🔧 Configuración
Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```
PORT=3000
MONGO_URL=mongodb://localhost:27017
DB_NAME=test
NODE_ENV=development
```

## ▶️ Instalación y ejecución
1. Instalar dependencias:
	 - `npm install`
2. Ejecutar en desarrollo:
	 - `npm run dev`
3. Ejecutar en producción:
	 - `npm start`

Al iniciar, el servidor queda disponible en `http://localhost:<PORT>`.

## 🔌 Endpoints
Base URL: `/api`

### Usuarios (`/api/users`)
- `GET /` → listar usuarios
- `GET /:id` → obtener usuario por id
- `POST /` → crear usuario
- `PUT /:id` → actualizar usuario
- `DELETE /:id` → eliminar usuario

### Mascotas (`/api/pets`)
- `GET /` → listar mascotas
- `GET /:id` → obtener mascota por id
- `POST /` → crear mascota
- `PUT /:id` → actualizar mascota
- `DELETE /:id` → eliminar mascota

### Mocks (`/api/mocks`)
- `GET /mockingpets/:quantity` → generar mascotas fake (cantidad opcional, default 10)
- `GET /mockingusers/:quantity` → generar usuarios fake (cantidad opcional, default 10)
- `POST /generateData` → persistir datos en DB
	- Body ejemplo: `{ "users": 5, "pets": 10 }`

## 🧾 Modelos de datos
### Usuario
- `firstName` (string, requerido)
- `lastName` (string, requerido)
- `email` (string, único, requerido)
- `password` (string, requerido)
- `role` ("user" | "admin", default: "user")
- `pets` (array de ObjectId)
- `createdAt`, `updatedAt` (date)

### Mascota
- `name` (string, requerido)
- `birthDate` (date, requerido)
- `breed` (string, requerido)
- `gender` (string, requerido)
- `size` (string, requerido)
- `description` (string, requerido)
- `isAdopted` (boolean, default: false)
- `createdAt`, `updatedAt` (date)

## 🗂️ Estructura del proyecto
```
src/
	app.js
	config/
		config.js
		mongo.js
	middleware/
		errorHandler.js
	modules/
		mock/
		pets/
		users/
	routes/
		router.js
```

## 📝 Notas
- Los endpoints de mocks usan `@faker-js/faker` y `bcrypt` para generar datos de prueba.
- La conexión a MongoDB se configura con `MONGO_URL` y `DB_NAME`.

####  Nota: Necesitamos que implementes un método POST que reciba por parámetro un id de load, una patente y un id de trucker y cree un shipment con esos datos.

### Pre-requisitos

- Node.js y npm instalados.
- Una instancia de MySQL (o tu base de datos de elección) en funcionamiento.

### Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/galue99/node-mysql.git


2. Navega al directorio del proyecto:
   ```bash
   cd node-mysql
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. **Configuración de la Base de Datos**: Deberás configurar un archivo `.env` en el directorio raíz del proyecto con tus credenciales de base de datos. Esto es esencial para conectar la aplicación a tu base de datos.

### Archivo .env

El archivo `.env` debería contener lo siguiente:

```
DB_HOST=tu_host_de_base_de_datos
DB_USERNAME=tu_usuario_de_base_de_datos
DB_PASSWORD=tu_contraseña_de_base_de_datos
DB_NAME=nombre_de_tu_base_de_datos
DB_PORT=puerto_de_base_de_datos
```

### Ejecutando la Aplicación

Después de configurar todo, puedes ejecutar la aplicación con:

```bash
node index.js
```

Esto iniciará el servidor y deberías poder acceder a los puntos finales de la API según se define en el proyecto.

## Características

- **Método POST de Shipment**: Necesitamos que implementes un método POST que reciba por parámetro un id de load, una patente y un id de trucker y cree un shipment con esos datos.


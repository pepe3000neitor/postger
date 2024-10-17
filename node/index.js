const express = require('express');
const { Client } = require('pg'); // Importar el cliente de PostgreSQL

const app = express();
const port = 3000;

// Configuración de la base de datos PostgreSQL
const client = new Client({
    connectionString: 'postgresql://Hugo:Chica@postgresclase.o74rr.postgres.net/test',
});

client.connect()
    .then(() => console.log('Conectado a PostgreSQL'))
    .catch(err => console.error('Error al conectar a PostgreSQL', err));

app.get('/', (req, res) => {
    res.send('¡Hola desde Node.js!');
});

app.listen(port, () => {
    console.log(`Servidor Node.js escuchando en http://localhost:${port}`);
});
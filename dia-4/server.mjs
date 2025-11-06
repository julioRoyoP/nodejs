import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // Configurar el código de estado y los headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  // Manejo básico de rutas
  if (req.url === '/') {
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Servidor Node.js</title>
        </head>
        <body>
          <h1>¡Bienvenido al servidor Node.js!</h1>
          <p>Este es un servidor web básico.</p>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/about">Acerca de</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </body>
      </html>
    `);
  } else if (req.url === '/about') {
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Acerca de</title>
        </head>
        <body>
          <h1>Acerca de</h1>
          <p>Este es un servidor web básico creado con Node.js.</p>
          <a href="/">Volver al inicio</a>
        </body>
      </html>
    `);
  } else if (req.url === '/contact') {
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Contacto</title>
        </head>
        <body>
          <h1>Contacto</h1>
          <p>Información de contacto aquí.</p>
          <a href="/">Volver al inicio</a>
        </body>
      </html>
    `);
  } else {
    // Página 404
    res.statusCode = 404;
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>404 - No encontrado</title>
        </head>
        <body>
          <h1>404 - Página no encontrada</h1>
          <p>La página que buscas no existe.</p>
          <a href="/">Volver al inicio</a>
        </body>
      </html>
    `);
  }
});

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});
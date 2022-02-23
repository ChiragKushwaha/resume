const express = require('express');
const next = require('next');
const helmet = require('helmet');

const port = 80;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'", 'https://*.resume-red-sigma.vercel.app'],
          scriptSrc: [
            "'self'",
            "'unsafe-inline'",
            "'unsafe-eval'",

            'https://*.resume-red-sigma.vercel.app',
            '*'
          ],
          styleSrc: ["'self'", "'unsafe-inline'", 'https://*.resume-red-sigma.vercel.app', '*'],
          frameAncestors: ["'self'"],
          imgSrc: ["'self'", 'data:', '*'],
          fontSrc: ["'self'", 'data:', '*'],
          frameSrc: ["'self'", '*'],
          connectSrc: ["'self'", '*']
        }
      }
    })
  );
  server.use('/en/', (req, res) => {
    const { originalUrl } = req;
    res.redirect(`/${originalUrl.substr(4)}`, 308);
  });
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
  });
});

// server.js
const { createServer } = require('http');
const next = require('next');
const port = process.env.PORT || 3000;
const app = next({ dev: false, dir: './.next/standalone' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer((req, res) => {
        handle(req, res);
    }).listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
});

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { parse } = require('querystring');

// Charger les certificats Let's Encrypt
const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/nlefranc.dev/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/nlefranc.dev/fullchain.pem')
};

// Serveur HTTPS pour servir le contenu sécurisé
https.createServer(options, (req, res) => {
    if (req.method === 'GET' && (req.url === '/' || req.url === '/index.html')) {
        // Servir le fichier HTML
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Erreur interne du serveur');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.method === 'POST' && req.url === '/api/log') {
        // Recevoir les données utilisateur
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const userData = JSON.parse(body);
            console.log('Données utilisateur reçues :', userData);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ status: 'success' }));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
}).listen(443, () => {
    console.log('Serveur HTTPS en écoute sur le port 443');
});

// Serveur HTTP pour rediriger vers HTTPS
http.createServer((req, res) => {
    res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
    res.end();
}).listen(80, () => {
    console.log('Redirection HTTP vers HTTPS sur le port 80');
});

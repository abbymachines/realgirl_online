import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import App from './App';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
});

app.use('/', (req, res) => {
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, intial-scale=1.0" />
            <title>realgirl.online</title>
        </head>
        <body>
            <div id="root"></div>
            <script src="/static/js/main.chunk.js"></script>
            <script src="/static/js/runtime-main.chunk.js"></script>
        </body>
        </html>
    `;
    res.send(html);
});

app.use(createProxyMiddleware({
    target: 'http://localhost:3000',
    changeOrigin: true,
}));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
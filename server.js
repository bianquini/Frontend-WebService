const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();

app.use(express.static(`./dist/frontend-ws/`));

app.get('/*', (req, res) => {
    res.sendFile(path.join(`./dist/frontend-ws/index.html`));
});

app.listen(process.env.PORT || 8080);

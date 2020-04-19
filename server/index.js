const express = require('express');
const path = require('path');

const app = express();
const port = 1500;

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.listen(port, () => console.log(`Mounting on port: ${port}`));

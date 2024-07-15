const express = require('express');
const app = express();
const port = 3000;

// Servér statiske filer fra "public" mappen
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

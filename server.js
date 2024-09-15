const express = require('express');
const app = express();

app.get('/:name', (req, res) => {
    const name = req.params.name;

    console.log(name);

    res.send(`Hello, ${name}!`);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
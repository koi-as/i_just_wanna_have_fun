const express = require('express');

const app = express();
const PORT = 9352 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`Server running at localhost:${PORT}`));

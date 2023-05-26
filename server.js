// npm packages
const express = require('express');
const exphbs = require('express-handlebars');
// other files

// create port and app
const app = express();
const PORT = 9352 || process.env.PORT;
// set up handlebars
const hbs = exphbs.create({});

// create post requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// handlebars is the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// start the server
app.listen(PORT, () => console.log(`Server running at localhost:${PORT}`));

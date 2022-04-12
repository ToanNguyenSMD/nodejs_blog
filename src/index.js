const path = require('path');
var express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//connnect to db
db.connnect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
app.use(methodOverride('_method'))

//HTTP logger
// app.use(morgan('combined'));

//Template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs', 
    helpers: {
      sum(a, b) { return a+b }
    }
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

// Router init
route(app);

//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

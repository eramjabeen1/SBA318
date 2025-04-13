// load express so we can make a web server
const express = require('express');

// load morgan so we can see the requests in our terminal
const morgan = require('morgan');

// load path so we can tell express where our files and folders are
const path = require('path');

// create our app using express
const app = express();

// tell the app to use morgan for logging
app.use(morgan('dev'));

// allow our app to read json and form data from the client
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// tell express we're using ejs as our view engine
app.set('view engine', 'ejs');

// tell express where our ejs views live
app.set('views', path.join(__dirname, 'views'));

// serve any files in the public folder (like css)
app.use(express.static(path.join(__dirname, 'public')));

// homepage route - shows the welcome page
app.get('/', (req, res) => {
  res.render('index', { title: 'Interview Prep API' });
});

// if something breaks, this will catch the error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('oops! something went wrong!');
});

// load behavioral routes
const behavioralRoutes = require('./routes/behavioralRoutes');

// load technical routes
const technicalRoutes = require('./routes/technicalRoutes');

// use technical routes
app.use('/technical', technicalRoutes);


// use behavioral routes
app.use('/behavioral', behavioralRoutes);
 
// start the server and listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});

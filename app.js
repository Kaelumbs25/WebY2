// load express
const express = require('express');
// load handlebars
const exphbs = require('express-handlebars');

// instantiate express
const app = express();

// configure express to use handlebars as templating engine
app.engine(
  'hbs',
  exphbs.engine({
    extname: '.hbs',
    // use this layout by default - if you have different layout
    // for say home page - you can toggle this in your code
    defaultLayout: 'default',
    // set location of layouts
    layoutsDir: 'views/layouts',
    // set location of partials - header, footer, etc
    partialsDir: 'views/partials',
  })
);
// set the view engine to handlesbards
app.set('view engine', 'hbs');
// where to find all of the view
app.set('views',  'views');
// where to find static files - css, images, js
app.use(express.static('public'));

// home page or home route
app.get('/', (req, res) => {

  // set active for navigation
  state={home:true}
  // set specifics for <head>
  head={title: "Home - Week 1"}
  // pass object to to render in "index"
  res.render('index', {state, head});
  // send this to terminal where node app is running
  console.log('home')

});

// about route
app.get('/about', (req, res) => {
    state={about : true}
    head={title:"About - Week 1"}
    res.render('about', { state, head});
    console.log('about')
  });

  // checkout route
app.get('/checkout', (req, res) => {
    state={checkout : true}
    head={title:"Checkout - Week 1"}
    res.render('checkout', { state, head});
    console.log('checkout')
  });

  // login route
app.get('/login', (req, res) => {
    state={login : true}
    head={title:"Login - Week 1"}
    res.render('login', { state, head});
    console.log('login')
  });

  // shop route
app.get('/shop', (req, res) => {
    state={shop : true}
    head={title:"Shop - Week 1"}
    res.render('shop', { state, head});
    console.log('shop')
  });

  // user details route
app.get('/userDetails', (req, res) => {
    state={userDetails : true}
    head={title:"User Details - Week 1"}
    res.render('userDetails', { state, head});
    console.log('userDetails')
  });


// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
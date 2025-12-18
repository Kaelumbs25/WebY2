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

app.get('/submission', (req, res) => {
    userComment=req.query.userComment
    userComment=userComment.replace(/\n/g, "<br/>")
    formDetails = {userEmail:req.query.userEmail, userComment:userComment}
    res.render("submission", {formDetails});
    console.log('submission')
  });

app.get('/membership', (req, res) => {
    state={membership : true}
    head={title:"Membership"}
    res.render('membership', { state, head});
    console.log('membership')
  });

  // checkout route
app.get('/checkout', (req, res) => {
    state={checkout : true}
    head={title:"Checkout"}
    res.render('checkout', { state, head});
    console.log('checkout')
  });

  // login route
app.get('/login', (req, res) => {
    state={login : true}
    head={title:"Login"}
    res.render('login', { state, head});
    console.log('login')
  });

  // shop route
app.get('/shop', (req, res) => {
    state={shop : true}
    head={title:"Shop"}
    res.render('shop', { state, head});
    console.log('shop')
  });

  // user details route
app.get('/userDetails', (req, res) => {
    state={userDetails : true}
    head={title:"User Details"}
    res.render('userDetails', { state, head});
    console.log('userDetails')
  });

  // cart route
app.get('/cart', (req, res) => {
    state={cart : true}
    head={title:"Shopping Cart"}
    res.render('cart', { state, head});
    console.log('cart')
  });

  //product adaptive route
app.get('/product/:id', (req,res) => {
  head={title:"Product "+req.params.id}
  res.render('product', {id: req.params.id})
  console.log('product'+req.params.id)
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
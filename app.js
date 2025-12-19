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
  head={'title': "Books&Beyond", 'description': "The home page of Books&Beyond", 'keywords':"Bestsellers, Memberships, Browse"}
  // pass object to to render in "index"
  res.render('index', {state, head});
  // send this to terminal where node app is running
  console.log('home')
});

// about route
app.get('/about', (req, res) => {
    state={about : true}
    head={'title': "About Us", 'description': "About our business and where we are located", 'keywords':"About Us, Story, Our Shop, Journey, Contact Us"}
    res.render('about', { state, head});
    console.log('about')
  });

  //form submission route
app.get('/submission', (req, res) => {
    userComment=req.query.userComment
    userComment=userComment.replace(/\n/g, "<br/>")
    formDetails = {userEmail:req.query.userEmail, userComment:userComment}
    head={'title': "Conact Form Submitted", 'description': "Your contact form has been submitted", 'keywords':"comment, email"}
    res.render("submission", {formDetails});
    console.log('submission')
  });

  //membership route
app.get('/membership', (req, res) => {
    state={membership : true}
    head={'title': "Our Membership", 'description': "The memberhsips Books&Beyond has to offer", 'keywords':"Subscriptions, Fantasy, Sci-Fi"}
    res.render('membership', { state, head});
    console.log('membership')
  });

  // checkout route
app.get('/checkout', (req, res) => {
    state={checkout : true}
    head={'title': "Checkout", 'description': "Checkout for your order", 'keywords':"Place Order, Card Details, User"}
    res.render('checkout', { state, head});
    console.log('checkout')
  });

  // login route
app.get('/login', (req, res) => {
    state={login : true}
    head={'title': "Login", 'description': "Books&Beyond Login", 'keywords':"Log in, Password, Username"}
    res.render('login', { state, head});
    console.log('login')
  });

  // shop route
app.get('/shop', (req, res) => {
    state={shop : true}
    head={'title': "Books&Beyond Shop", 'description': "Our plethora of books for your enjoyment", 'keywords':"hardback, Released, By"}
    res.render('shop', { state, head});
    console.log('shop')
  });

  // user details route
app.get('/userDetails', (req, res) => {
    state={userDetails : true}
    head={'title': "Your Details", 'description': "Details for the users account", 'keywords':"Address, E-mail, Phone, Details"}
    res.render('userDetails', { state, head});
    console.log('userDetails')
  });

  // cart route
app.get('/cart', (req, res) => {
    state={cart : true}
    head={'title': "Your Book Haul", 'description': "The home page of The Games Hub", 'keywords':"Trailers, Reviews, community, Benefits, Events"}
    res.render('cart', { state, head});
    console.log('cart')
  });

  //success route
app.get('/success', (req, res) => {
    state={cart : true}
    head={'title': "Order Successful", 'description': "Confirmation that your order was placed", 'keywords':"Successfully, Order"}
    res.render('success', { state, head});
    console.log('success')
  });

  //product adaptive route
app.get('/product/:id', (req,res) => {
  head={'title': "Product "+req.params.id, 'description': "TProduct Details Page", 'keywords':"Hardback, Paperback, Add to Cart"}
  res.render('product', {id: req.params.id})
  console.log('product'+req.params.id)
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
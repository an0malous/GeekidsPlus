require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
const dbConnection = require('./database') ;
const MongoStore = require('connect-mongo')(session);
const app = express ();
const port = 3000;

const corsConfig = {
    origin: true,
    credentials: true,
  };
  
  app.use(cors(corsConfig));
  app.options('*', cors(corsConfig));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const user = require('./routes/user');
const cards = require('./routes/flash-cards');
const users = require('./routes/users');
const decks = require('./routes/decks');


// MIDDLEWARE
app.use(morgan('dev'))


// Sessions
app.use(
	session({
		secret: 'frag1231eferg5gsdfsdghjdtukjysahte423fri2u3fio2uh3fi623gf23bfii2ub3fy23123123', 
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, 
		saveUninitialized: false 
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// Routes
app.use('/user', user)
app.use('/admin/cards', cards)
app.use('/admin/users', users)
app.use('/admin/decks', decks)


app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});
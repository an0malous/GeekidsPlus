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

const user = require('./routes/user');
const cards = require('./routes/phonicsCards');
const users = require('./routes/users')


// MIDDLEWARE
app.use(morgan('dev'))


// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// Routes
app.use('/user', user)
app.use('/admin/cards', cards)
app.use('/admin/users', users)


app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});
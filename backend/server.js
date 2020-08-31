const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const cors = require('cors');
const dbConnection = require('./database') ;
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');



phonicCard = require("./database/models/phonicCard.js")
User = require("./database/models/user")

require('dotenv').config();

const app = express();
const port = 3000;
const corsConfig = {
    origin: true,
    credentials: true,
  };
  
  app.use(cors(corsConfig));
  app.options('*', cors(corsConfig));

app.use(express.json());

const user = require('./routes/user')

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


//=============
//===APP=======
//=============

app.post("/cards/add", (req, res)=>{
        const name = req.body.name;
        const type = req.body.type;
        const letter = req.body.letter;
        const img = req.body.img;
        const audio = req.body.audio;

        const newCard = new phonicCard({
            name,
            type,
            letter,
            img,
            audio
        });
        newCard.save()
        .then(()=>res.json('New Phonics Card added:' + newCard))
        .catch((err)=>req.json(`Sorry, ${err}`))
})

app.get("/admin/edit/:id", (req, res)=>{
    phonicCard.findByIdAndUpdate(req.params.id)
    .then((card)=>res.json(card)
)
})

app.post("/cards/edit/:id", (req, res)=>{
    phonicCard.findById(req.params.id)
    .then((phonicCard)=>{
        phonicCard.name = req.body.name;
        phonicCard.type = req.body.type;
        phonicCard.letter = req.body.letter;
        phonicCard.img = req.body.img;
        phonicCard.audio = req.body.audio;

        phonicCard.save()
        .then(()=>res.json('Card updated:' + phonicCard))
        .catch((err)=>req.json(`Sorry, ${err}`))
    })
})

app.get("/cards", (req, res)=> {

    phonicCard.find()
    .then((cards)=> res.json(cards))
    .catch(err=> res.status(400).json(`Error: ${err}`))
})

app.get("/users", (req, res)=> {

    User.find()
    .then((users)=> res.json(users))
    .catch(err=> res.status(400).json(`Error: ${err}`))
})
app.delete("/users/:id", (req, res)=> {
    User.findByIdAndDelete(req.params.id)
    .then((user)=>res.json(user))
    .catch(err=> res.status(400).json(`Error: ${err}`))
})

app.delete("/cards/:id", (req, res)=> {
    phonicCard.findByIdAndDelete(req.params.id)
    .then((card)=>res.json(card))
    .catch(err=> res.status(400).json(`Error: ${err}`))
})




app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});
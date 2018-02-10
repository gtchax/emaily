const express       = require('express');
const mongoose      = require('mongoose');
const Promise       = require('bluebird');
const passport      = require('passport');
const cookieSession = require('cookie-session');
const bodyParser    = require('body-parser');
require('./models/User');
require('./models/Survey');
require('./services/passport');
const keys = require('./config/keys');


mongoose.Promise = Promise;
mongoose.connect(keys.mongoURI);

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
const port = process.env.PORT || 5000;
const app = express();



//Middleware
app.use(bodyParser.json());
app.use(cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
    
);

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req,res) => {
    res.send({'msg': 'Hello home page'});
});


require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

app.listen(port, function(){
    console.log(`
    ===============================
       App runing on Port ${port}
    ===============================`);
});




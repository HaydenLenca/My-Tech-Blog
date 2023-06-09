const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret:  'Super secret secret', 
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

app.engine('handlebars', hbs.engin);
app.set('view engin', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extend: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now Listening'));
});

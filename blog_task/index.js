const conn = require('./conn');
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const router = require('./routes');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(session({
    secret: 'mysecret',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
        url: 'mongodb+srv://dbUser:dbUserPassword@cluster0-mully.mongodb.net/test?retryWrites=true&w=majority',
    })
}));

app.set('views', './client/post');

app.set('view engine', 'pug');

app.use(router);

app.use(express.static('.'));

app.use(({ res: r }) => r.status(404).redirect('/posts'))
    .use((e, r, rs, n) => rs.status(500).end(`Ошибка: ${e}`));

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on http://localhost:${port}`);
});


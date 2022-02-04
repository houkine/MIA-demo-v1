var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const http = require("http");

const { ApolloServer, gql } = require('apollo-server-express');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const schema = require('./routes/Schema');
let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
        schema,
        context: ({ req }) => {
            // Get the user token from the headers.
            let token = req.headers.authorization || '';
            token = token.split(' ')[1] || ''
            // Add the token to the context
            return { token };
          },
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();

app.get("/rest", function (req, res) {
    res.json({ data: "api working" });
});

app.listen(4000, function () {
    console.log(`server running on port 4000`);
    console.log(`gql path is ${apolloServer.graphqlPath}`);
});

// service init
require('./service/init');
var express = require('express');
var router = express.Router();
const {graphqlHTTP} = require('express-graphql')
const fileRoute = require('./fileRoute')

const Schema = require('./Schema')

// /* private. */
// router.get('/', graphqlHTTP({
//   schema:Schema,
//   graphiql: true
// }));

// /* private. */
// router.post('/', graphqlHTTP({
//   schema:Schema,
//   graphiql: true
// }));

router.use('/file', fileRoute)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

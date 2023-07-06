let express = require('express');
const dotenv = require('dotenv');
dotenv.config();
let app = express();

console.log('Hello World');

// app.use(express.static('public'));
// app.get('/', (req, res) => {
//   res.sendFile(`${__dirname}/public/index.html`);
// });
// app.get('/json', (req, res) => {
//   let message =
//     process.env.MESSAGE_STYLE === 'uppercase' ? 'HELLO JSON' : 'Hello json';

//   res.json({ message });
// });
// app.get('/', (req, res) => {
//   res.send('Hello Express');
// });

// app.get(
//   '/now',
//   (req, res, next) => {
//     req.time = new Date().toString();
//     next();
//   },
//   (req, res) => {
//     res.json({ time: req.time });
//   }
// );

app
  .route('/name')
  .get((req, res, next) => {
    const { first, last } = req.query;

    res.json({
      name: `${first} ${last}`,
    });
  })
  .post((req, res, next) => {
    const { first, last } = req.query;

    res.json({
      name: `${first} ${last}`,
    });
  });
// app.get('/:word/echo', (req, res, next) => {
//   res.json({ echo: req.params.word });
// });
module.exports = app;

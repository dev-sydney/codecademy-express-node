let express = require('express');
let app = express();

console.log('Hello World');

// app.use(express.static('public'));
// app.get('/', (req, res) => {
//   res.sendFile(`${__dirname}/public/index.html`);
// });
app.get('/json', (req, res) => {
  res.status(200).json({ message: 'Hello there' });
});
// app.get('/', (req, res) => {
//   res.send('Hello Express');
// });
module.exports = app;

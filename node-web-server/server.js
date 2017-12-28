const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  // res.send('Hello Express!');
  res.send({
    name: 'Andrew',
    likes: [
      'Biking',
      'Cities'
    ]
  })
})

app.get('/about', (req, res) => {
  res.send('About PAge');
})

app.get('/bad', (req, res) => {
  res.send('error')
})



app.listen(3000);


const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.setHeader('Access-Control-Allow-Methods', "GET, POST, PATCH, DELETE, OPTIONS");

  next();
});


app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "hw92fh792fh",
     title:"First serverside post",
    content: "This is coming from the server"
    },
    {
      id: "hw93542h",
     title:"Second serverside post",
    content: "This is coming from the server 2 "
    },
    {
      id: "j56j5j2fh",
     title:"Third serverside post",
    content: "This is coming from the server 3"
    },
  ];
  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: posts
  });
});


app.post('/api/posts', (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added successfully"
  });
});


module.exports = app;

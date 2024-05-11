const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(cors())

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});



app.post('/events', (req, res) => {
  const { type, data } = req.body;
  if (type === 'PostCreated') {
    const { id, tittle } = data;
    posts[id] = { id, tittle, comments: [] };
  }
  if (type === 'CommentCreated') {
    const { id, content, postId } = data;
    const post = posts[postId];
    post.comments.push({ id, content })
  }
  console.log('Query', posts);
  res.send({});
})

app.listen(4002, () => {
  console.log('Listening on 4002');
})
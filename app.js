const express = require('express');
let axios = require('axios');
var app = express();

//Middleware to parse JSON request body
app.use(express.json());

app.post('/', async function(req, res, next) {
  try {
    const developers = req.body.developers;
    const results=await Promise.all(developers.map(async(d)=>{
      const response=await axios.get(`https://api.github.com/users/${d}`);
      return {name:response.data.name,bio:response.data.bio};
    }));
    return res.json(results);
  } catch {
    next(err);
  }
});

app.listen(3000,(err)=>{
  console.log('Server running on port 3000');
});

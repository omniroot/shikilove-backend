// require('dotenv').config();

import axios from 'axios';
import express from 'express';

const app = express();

app.get('/', async (req, res) => {
  try {
    const data = await axios.get("https://www.anilibria.tv/release/make-heroine-ga-oosugiru.html")
    res.send(data);
  } catch (error) {
    console.error(error);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

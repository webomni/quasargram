/**
 * Dependencies
 */
const express = require("express");

/**
 * config - express
 */
const app = express();

/**
 * endpoint - posts
 */
app.get("/posts", (request, response) => {
  let posts = [
    {
      caption: "Golden Gate Bridge",
      location: "San Francisco, USA",
    },
    {
      caption: "London Eye",
      location: "London, United Kingdom",
    },
  ];
  response.send(posts);
});

/**
 * listen
 */
app.listen(3000);

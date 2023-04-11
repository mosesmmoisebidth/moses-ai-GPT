const express = require('express');
const app = express();
app.get("/", (request, response) => {
    console.log("server started");
    response.send("server started");
})
app.listen(7000, () => {
    console.log("server started at http://localhost:7000/");
})
const express = require("express");
const app = express();

require("dotenv").config();

app.get('/', (req, res) => {
    res.send("첫 페이지");
});

app.listen(process.env.PORT, console.log(process.env.PORT, "포트 연결"));

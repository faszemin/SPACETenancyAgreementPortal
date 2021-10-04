const spaceuser = require("./spaceuser");
const tenancyagreement = require("./tenancyagreement");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

app = express();
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(cors());

app.use(spaceuser.router);
app.use(tenancyagreement.router);
app.listen(3000);
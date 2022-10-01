"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var app = express_1["default"]();
var port = process.env.PORT || 4001;
require('dotenv').config();
app.use(express_1["default"].static('public/build'));
app.use(express_1["default"].json());
var uri = process.env.MONGODB_URI;
mongoose_1["default"]
    .connect(uri)
    .then(function (result) {
    console.log("connected to db");
})["catch"](function (err) {
    console.log(err.message);
});
var chatRoute_1 = require("./server/routes/chatRoute");
app.use('/chat', chatRoute_1["default"]);
app.listen(port, function () {
    return console.log("Express is listening at http://localhost:" + port);
});

import mongoose from "mongoose";
import express from "express";

import User from "./schemas/User";

const app = express();

mongoose.connect("mongodb://localhost:27017/chat", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.get("/", function (req: any, res: any) {
    res.send("hello world");
    const user = new User({
        email: "hello@domain.com",
        fullname: "Test users",
    });
    user.save().then(() => console.log("user created"));
});

app.listen(9988, function () {
    console.log("Example app on port 9988");
});

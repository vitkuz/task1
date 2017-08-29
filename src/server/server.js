import express from "express";
import http from "http";

import {isDev} from "./settings";

const app = express();
const server = new http.Server(app);

app.set("view engine", "pug");
app.use(express.static("public"));

const useExternalStyles = !isDev;
const scriptRoot = isDev ? 'http://localhost:8000/build' : '/build';


app.get("*", (req,res) => {
    res.render("index", {
        useExternalStyles,
        scriptRoot
    })
})


const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Started on ${port}`);
})

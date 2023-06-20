import express from "express"
import cors from "cors"
import 'dotenv/config.js';
import user from "./app/routes/user.js"

const app = express();
app.use(cors());

const port = process.env.PORT || 4000;

app.get("/", (req, res) => { res.send({data: "hello world"})})

app.use("/users", user)

app.listen(port, () => console.log("working"))

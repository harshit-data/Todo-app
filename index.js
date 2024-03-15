const express = require("express")
const app = express();
const port = 3000;
app.use(express.json())
app.get("/", (req, res) => {
    res.send("This is a todo app")
})
app.get("/todos", (req, res) => {

})
app.post("/todo", (req, res) => {

})
app.put("/completed", (req, res) => {

})

app.listen(3000, () => {
    console.log("listening to port 3000");
})
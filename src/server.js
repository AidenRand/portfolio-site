import  express from "express";
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send("Hey");
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})
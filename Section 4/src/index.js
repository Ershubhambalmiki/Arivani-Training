import express from 'express';


const app = express();

const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
    try {
        res.send("response  express at 5000")
    } catch (error) {

    }
})
app.post("/api", (req, res) => {
    let  { name, email, password } = req.body
    try {
        res.send.json(200, { mag: "ok", name, email, password })

    } catch (error) {

    }

})

app.listen(PORT, () => {
    console.log("server started at port", PORT);

})
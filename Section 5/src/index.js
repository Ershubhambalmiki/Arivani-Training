import express from 'express';

const app = express();

const PORT = 9000;

app.use(express.json());

app.get("/", (req, res) => {
    try {
        res.send("server is started")
    } catch (error) {

    }

})
app.post("/api/users",(req,res)=>{
let {name,email,password}=req.body
try {
    if(!name || !email || !password){
        res.status(400).json({mag:"All filde is require"})
        return;
    }
    res.status(200).json({msg:"ok"},name,email,password)

} catch (error) {
    res.status(500).json({msg:"request bad"})
}
})

app.listen(PORT, () => {
    console.log("my server is dipend ", PORT);

})
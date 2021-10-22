const express = require("express");
const app = express();
const port = 3330;
app.use(express.json());
const hotels = [" interncontinental", " sofitel"];
app.get("/hotels", (req, res) => {
    res.json(hotels);
});
app.get("/hotels/:id", (req, res) => {
    const index = req.params.id - 1
    res.send(hotels[index]);
});
app.post("/hotels", (req, res) => {
    const hotel = req.body.name;
    hotels.push(hotel);
    res.json({ success: true });
});
app.put("/hotels/:id", (req, res) => {
    const name = req.query.name;
    const index = req.params.id -1;
    hotels[index] = name ;
});
app.listen(port, () => {
     console.log('server  starterd ');
});

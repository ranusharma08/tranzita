const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const data = [
        {
            color: "red",
            value: "#f00"
        },
        {
            color: "green",
            value: "#0f0"
        },
        {
            color: "blue",
            value: "#00f"
        },
        {
            color: "cyan",
            value: "#0ff"
        },
        {
            color: "magenta",
            value: "#f0f"
        },
        {
            color: "yellow",
            value: "#ff0"
        },
        {
            color: "black",
            value: "#000"
        }
    ];

    res.send(data);
});

app.get('/Ranu', (req, res) => {
    const data = [
        
        {
            color: "cyan",
            value: "#0ff"
        },
        {
            color: "magenta",
            value: "#f0f"
        },
        {
            color: "yellow",
            value: "#ff0"
        },
        {
            color: "black",
            value: "#000"
        }
    ];

    res.send(data);
})

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
})
const path = require('path')
const express = require('express')
const app = express()
app.get('/', function(req, res) {

    //1. instantiate plotly APIKey=I6Fa8NXEkuUAl7SRpNTr
    const plotly = require('plotly')("cbatuic", "I6Fa8NXEkuUAl7SRpNTr")
    //2. define data
    const data = [
        {
        x: ["giraffes", "orangutans", "monkeys"],
        y: [20, 14, 23],
        type: "bar"
        }
    ];
    console.log(data[0].type) // bar
    console.log(data[0].x[0]) // girraffes
    //3. graph options
    var graphOptions = {filename: "balaman-basic-bar", fileopt: "overwrite"};
    //4. graph plot
    plotly.plot(data, graphOptions, function (err, msg) {
        console.log(msg.url);
        res.end(`<a href=${msg.url}>View my Daily Expenses Plot</a>`)
    });

    
})
app.listen(3000)
console.log('Server is running on 192.168.202.106:3000')
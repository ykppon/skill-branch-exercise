import express from 'express';
import cors from 'cors';
var app = express();
app.use(cors());

app.get('/', function (req, res) {
    var url = req.query.username;
    var reg = new RegExp('@?(https?:)?(\/\/)?((telegram||vk||medium)[^\/]*\/)?@?([a-zA-Z0-9.\_]*)', 'i');
    var result = url.match(reg);


    res.send('@'+result[5]);
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
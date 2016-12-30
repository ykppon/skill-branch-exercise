import express from 'express';
import cors from 'cors';
var app = express();
app.use(cors());

app.get('/', function (req, res) {
    var nums = req.query;
    var a = 0;
    var b = 0;
    if(nums.a){a = nums.a};
    if(nums.b){b = nums.b};
    var summ = +a + +b;
    res.send(summ.toString());
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
import express from 'express';
import cors from 'cors';
var app = express();
app.use(cors());

app.get('/', function (req, res) {
    var name = req.query.fullname;
    var nameList = name.split(' ');
    var changeName = function(name){
        var inic = '';
        for(var i=0;i<nameList.length-1;i++) {
            inic += ' '+nameList[i][0]+'.';
        };
        return inic;
    };
    var fig = nameList[nameList.length-1]+ changeName(name);
    if(nameList.length>3||name==''||name.search(/\d/) != -1||name.search(/\_/) != -1||name.search(/\//) != -1){
        fig = 'Invalid fullname';
    };
    res.send(fig);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
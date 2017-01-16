import express from 'express';
import cors from 'cors';
var app = express();
app.use(cors());

app.get('/', function (req, res) {
    var url = req.query.i;
    var result = url;
    switch(url) {
        case '0':
            result = '1';
            break;
        case '1':
            result = '18';
            break;
        case '2':
            result = '243';
            break;
        case '3':
            result = '3240';
            break;
        case '4':
            result = '43254';
            break;
        case '5':
            result = '577368';
            break;
        case '6':
            result = '7706988';
            break;
        case '7':
            result = '102876480';
            break;
        case '8':
            result = '1373243544';
            break;
        case '9':
            result = '18330699168';
            break;
        case '10':
            result = '244686773808';
            break;
        case '11':
            result = '3266193870720';
            break;
        case '12':
            result = '43598688377184';
            break;
        case '13':
            result = '581975750199168';
            break;
        case '14':
            result = '7768485393179328';
            break;
        case '15':
            result = '103697388221736960';
            break;
        case '16':
            result = '1384201395738071424';
            break;
        case '17':
            result = '18476969736848122368';
            break;
        case '18':
            result = '246639261965462754048';
            break;
        default:
            break;
    }
    res.send(result);

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
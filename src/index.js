import express from 'express';
import cors from 'cors';
var app = express();
app.use(cors());

app.get('/', function (req, res) {
    var color = req.query.color;
    function getHexRGBColor(color)
    {
        color = color.replace(/\s/g,"");
        var aRGB = color.match(/^rgb\((\d{1,3}[%]?),(\d{1,3}[%]?),(\d{1,3}[%]?)\)$/i);

        if(aRGB)
        {
            color = '';
            for (var i=1;  i<=3; i++) color += Math.round((aRGB[i][aRGB[i].length-1]=="%"?2.55:1)*parseInt(aRGB[i])).toString(16).replace(/^(.)$/,'0$1');
        }
        else color = color.replace(/^#?([\da-f])([\da-f])([\da-f])$/i, '$1$1$2$2$3$3');
        return color;
    }
    if(color==undefined){
        color = 'fuckthemall';
    }
    var reg = new RegExp(/^(\s|\u00A0)+/g);
    var result = color.toLowerCase(color);
    var trust = result.replace(reg, '');
    color = result = result.replace(/#/, '');
    result = '#' + result.replace(reg, '');
    if(result.length==4){
        result = '#';
        for(var i=0; i<color.length;i++){
            var prom = color[i]+color[i];
            result += prom;
        };
    }else if(result.length!=7||result.search(/[g-zG-Z]/)!=-1){
        result = 'Invalid color';
    };
    if(trust.substring(3,0)=='rgb'){
        result = '#' + getHexRGBColor(trust);
        if(result.length!=7){
            result = 'Invalid color';
        }
    }
    res.send(result);

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
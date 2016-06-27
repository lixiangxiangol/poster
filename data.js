/**
 * Created by 想 on 31/05/2015.
 */
var data=[];

var dataStr='1、霍比特人1<br>\
<br>\
导演1：彼得.杰克逊<br>\
编剧：弗兰.威尔士<br>\
主演：马丁.福瑞曼<br>\
类型：动作<br>\
制作国家：美国<br>\
语言：英语<br>\
上映时间：2015-01-23<br>\
片长：144分钟<br>\
<br>\
<br>\
2、霍比特人2<br>\
<br>\
导演2：彼得.杰克逊<br>\
编剧：弗兰.威尔士<br>\
主演：马丁.福瑞曼<br>\
类型：动作<br>\
制作国家：美国<br>\
语言：英语<br>\
上映时间：2015-01-23<br>\
片长：144分钟<br>\
<br>\
<br>\
3、霍比特人3<br>\
<br>\
导演3：彼得.杰克逊<br>\
编剧：弗兰.威尔士<br>\
主演：马丁.福瑞曼<br>\
类型：动作<br>\
制作国家：美国<br>\
语言：英语<br>\
上映时间：2015-01-23<br>\
片长：144分钟<br>\
';

var d =dataStr.split('<br><br><br>');
for(var i=0;i< d.length;i++){
    var c=d[i].split('<br><br>');
    var temp=c[0].indexOf('、');
    var t=c[0].split('、');
    data.push({
        img:t[0]+'.png',
        caption:t[1],
        desc:c[1]
    });
    //console.log(c[0].replace('、',' ')+'.png');
}
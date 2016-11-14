/**
 * Created by Administrator on 2016/11/11.
 */
$(function () {
    var $title = $('.title');
    var $titleLine = $title.find('tr');
    var $content = $('.content');
    var $contentLine = $content.find('tr');
    var flagObj = {};
    $contentLine.each(function (key,value) {
        var lineObj = {};
        flagObj[key] = true;
        var $thisLineN = $(value).find('td');
        if($thisLineN.length != 0){
            $thisLineN.each(function (index,numValue) {
                var thisNum = $(numValue).text();
                if(index == 0){
                    lineObj[0] = thisNum;
                }else{
                    if(lineObj[0] != thisNum){
                        flagObj[key] = false;
                        return true
                    }
                }
            });
        }else{
            flagObj[key] = false;
        }
        if(flagObj[key] == true){
            $contentLine.eq(key).addClass('showHide');
            $titleLine.eq(key).addClass('showHide')
        }
    });

});
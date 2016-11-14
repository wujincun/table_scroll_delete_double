/**
 * Created by Administrator on 2016/11/11.
 */
$(function () {
    var $title = $('.title');
    var $titleLine = $title.find('tr');
    var $content = $('.content');
    var $scrollBar = $content.find('.overScrollBar');
    var $contentLine = $scrollBar.find('tr');
    var flagObj = {};

    scrollBarHide();
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
    function scrollBarHide(){
        var $contentH = $content.height();
        $content.css({
            height: $contentH +'px'
        });
        $scrollBar.css({
            height: $contentH + 10 +'px'
        });
    }

});
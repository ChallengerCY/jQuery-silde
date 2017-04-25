/**
 * Created by Administrator on 2017/4/6 0006.
 */
$(document).ready(function(){
    $("#slideDowm").click(function(){
        $("#showBody").slideDown(1000);
    })
    $("#sildeUp").click(function(){
        $("#showBody").slideUp(1000);
    })
    $("#slideToggle").click(function(){
        $("#showBody").slideToggle(1000);
    })
})
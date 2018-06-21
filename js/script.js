$(document).ready(function(){

    var page = 'https://dognew.github.io/corso-di-italiano/';

    function checkUrl(url){
        var http = new XMLHttpRequest();
        http.open('HEAD', url, false);
        http.send();
        return http.status;
    }

    $(".player").each(function(){
        var audio = $(this).attr("audio");
        var urlaudio = page + audio;
        if(checkUrl(urlaudio) == 404){
            $(this).hide();
        }
    });

    $(".player").on("click", function(){
        $("#audioPlayer source").attr("src",$(this).attr("audio"));
        $("#audioPlayer").trigger("load");
        $("#audioPlayer").trigger("play");
    });

    $("body *[name]").each(function(){
        anchor = $(this).attr("id");
        text = $(this).text();
        if(anchor != "indice" && anchor != undefined){
            $("#index ul").append("<li><a class='navSoft' href='#" + anchor + "'>" + text + "</a></li>");
        }
        if(anchor == undefined){
            alert("Exists anchors undefined!");
        }
    });

    $(document).scroll(function(){
        var y = $(this).scrollTop();
        if(y > 800){
            $(".scrollTop").fadeIn(1000);
        } else {
            $(".scrollTop").fadeOut(500);
        }
    });
});
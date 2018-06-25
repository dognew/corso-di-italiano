$(document).ready(function(){

    var page = 'https://dognew.github.io/corso-di-italiano/';
    var ids = 0;

    // function checkUrl(url){
    //     var http = new XMLHttpRequest();
    //     http.open('HEAD', url, false);
    //     http.send();
    //     return http.status;
    // }

    // $(".player").each(function(){
    //     var audio = $(this).attr("audio");
    //     var urlaudio = page + audio;
    //     if(checkUrl(urlaudio) != 404){
    //         $(this).hide();
    //     }
    // });

    $(".player").on("click", function(){
        $("#audioPlayer source").attr("src",$(this).attr("audio"));
        $("#audioPlayer").trigger("load");
        $("#audioPlayer").trigger("play");
    });

    $(".nameAnchor").each(function(){
        text = $(this).text();
        if(text != "Indice"){
            ids++;
            anchor = "indice" + ids;
            $(this).attr("id", anchor);
            $("#index ul").append("<li><a class='navSoft' href='#" + anchor + "'>" + text + "</a></li>");
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

    $(".translate").on("click", function(){
        $(this).toggleClass("translateClick");
    });

    if(navigator.userAgent.indexOf('Android') != -1){
        $("section").each(function(){
            $(this).css({
                "width" : "95%",
                "padding" : "25px 10px 200px 10px"
            });
            $("#rodape").css({
                "width": "95%",
                "left" : "2.5%"
            });
            $("#rodape audio").css("width", "80%");
            $(".mail").css({
                "font-size" : "1.2em",
                "padding" : "15px 15px 30px 15px"
            });
        });
        $("article").each(function(){
            $(this).css({
                "padding" : "0px 5px 15px 5px"
            });
        });
    }
});
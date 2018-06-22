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
});
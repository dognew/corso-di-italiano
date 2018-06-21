$(document).ready(function(){

    $(".player").on("click", function(){
        $("#audioPlayer source").attr("src",$(this).attr("audio"));
        $("#audioPlayer").trigger("load");
        $("#audioPlayer").trigger("play");
    });

    $("*[name]").each(function(){
        anchor = $(this).attr("name");
        text = $(this).text();
        if(anchor != "indice" && anchor != "viewport"){
            $("#index ul").append("<li><a class='navSoft' href='#" + anchor + "'>" + text + "</a></li>");
        }
    });

    $(document).scroll(function(){
        
        var y = $(this).scrollTop();
        if(y > 800){
            $(".scrollTop").fadeIn();
        } else {
            $(".scrollTop").fadeOut();
        }
    });
});
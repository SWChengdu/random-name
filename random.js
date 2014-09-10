$(document).ready(function(){
    var snd = new Audio("drumroll.wav"); // buffers automatically when created

    $("#draw-name").click(function(){
        snd.play();
        $("#drumroll-image").show();
        $("#draw-name").hide();
        setTimeout(function (){
            $("#drumroll-image").hide();
            $("#draw-name").show();
            var nameList = [];  
            $("#attendees li").each(function() {
                nameList.push($(this).text()+'::'+$(this).attr('id'));
            });
            var winner = nameList[Math.floor(Math.random()*nameList.length)];
            var winner_name = winner.split("::");
            $("#winners").prepend('<li>' + winner_name[0] + '</li>');
            $(".winner-container").show();
            $("#attendees li").remove("#" + winner_name[1]);
         }, 1800);
    });
});

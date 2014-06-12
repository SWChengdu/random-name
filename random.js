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
                nameList.push($(this).text())
            });

            var winner = nameList[Math.floor(Math.random()*nameList.length)];
            var winnerId = winner.replace(/ /g,'');
            $("#winners").prepend('<li>' + winner + '</li>');
            $(".winner-container").show();

            $("#attendees li").remove("#" + winnerId);

         }, 1800);




    });

});

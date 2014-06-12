$(document).ready(function(){

    $("#draw-name").click(function(){

        var nameList = [];
        $("#attendees li").each(function() {
            nameList.push($(this).text())
        });

        var winner = nameList[Math.floor(Math.random()*nameList.length)];
        var winnerId = winner.replace(/ /g,'');
        $("#winners").append('<li>' + winner + '</li>');
        $(".winner-container").show();

        $("#attendees li").remove("#" + winnerId);


    });

});

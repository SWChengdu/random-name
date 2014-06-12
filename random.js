$(document).ready(function(){

    $("#draw-name").click(function(){

        var nameList = [];
        $("#losers li").each(function() {
            nameList.push($(this).text())
        });

        var winner = nameList[Math.floor(Math.random()*nameList.length)];
        var winnerId = winner.replace(/ /g,'');
        $("#winners").append('<li>' + winner + '</li>');

        $("#losers li").remove("#" + winnerId);


    });

});

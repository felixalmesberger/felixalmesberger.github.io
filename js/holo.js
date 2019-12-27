
function updateOpenWidget() {
    $.getJSON('js/opening_times.json', function(data) {
        //Get current day
        var now = new Date();
        var day = now.getDay();
        var opening_times = data.days[day];

        var intNow = now.getHours() * 100 + now.getMinutes();
        
        var intStart = parseInt(opening_times.start.replace(":", ""));
        var intEnd = parseInt(opening_times.end.replace(":", ""));

        if (intStart <= intNow && intNow <= intEnd) {
            //open
            $(".opencircle").css("border-color", "green");
            $(".opentext").html(data.open_message);
        }
        else {
            //closed
            $(".opencircle").css("border-color", "red");
            $(".opentext").html(data.closed_message);
        }
    });
    //repeat every minute
    setTimeout(updateOpenWidget, 60000);
}
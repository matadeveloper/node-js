function get2D(hour) {
    return ("0" + hour).slice(-2);
}
/* create helpers module datetime */
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
module.exports = {
    todayDisplay : function(){
        let date = new Date();
        var year = date.getFullYear();
        var month = get2D(date.getMonth());
        var monthName = monthNames[date.getMonth()];
        var day = get2D(date.getDate());
        return day+'-'+monthName+'-'+year;
    },
    dateDisplay : function(ts){
        var t = ts.split(/[- :]/);
        //var dt = new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5]));
        var dt = new Date(t[0], t[1] - 1, t[2], 0, 0, 0);

        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        //var dt = new Date(ts * 1000);
        var d = get2D(dt.getDate());
        var m = monthNames[dt.getMonth()];
        var y = dt.getFullYear();
        return d + "-" + m + "-" + y;
    }
}
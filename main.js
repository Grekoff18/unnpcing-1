var today = new Date();
var today2 = new Date();

var rooms = {
    
};

var counter = 1;

function right(){
    today.setDate(today.getDate() + 1);
    calendarRefresh();
    displayRooms();
}

function left(){
    today.setDate(today.getDate() - 1)
    calendarRefresh();
    displayRooms();
}

function addRoom(){
    counter++;
    rooms[counter] = {
        date: today.toDateString(),
    }
    displayRooms();
    console.log(rooms)
    
}

function displayRooms(){

    let output = '';
    for(let room in rooms){
        console.log(rooms[room].date)
        if(rooms[room].date == today.toDateString()){
            output += '<div class="room" style="display: block">' +
            '<div class="room-main">' +
                '<div class="room-main-horizontal">' +
                    '<strong>' +
                        'room-main-horizontal' +
                        '</strong>' +
                '</div>' +
                '<div class="room-main-main">' +
                    '<div class="room-main-main-calendar">' + 
                        'room-main-main-calendar' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="room-room">'+
                '<div class="room-room-horizontal">' +
                    '<div class="room-room-horizontal-item">' +
                        'room-room-horizontal-item 1' +
                    '</div>'+
                    '<div class="room-room-horizontal-item">'+
                        'room-room-horizontal-item 2'+
                    '</div>'+
                    '<div class="room-room-horizontal-item">'+
                        'room-room-horizontal-item 3'+
                    '</div>' +
                    '<div class="room-room-horizontal-item">'+
                        'room-room-horizontal-item 4'+
                    '</div>' +
                    '</div>' +
                    '<div class="room-room-main">' +
                        '<div class="room-room-main-calendar">' +
                            '<div class="room-room-main-calendar-item">'+
                                'room-room-main-calendar-item 1'+
                            '</div>'+
                            '<div class="room-room-main-calendar-item">'+
                                'room-room-main-calendar-item 2'+
                            '</div>'+
                            '<div class="room-room-main-calendar-item">'+
                                'room-room-main-calendar-item 3'+
                            '</div>'+
                            '<div class="room-room-main-calendar-item">'+
                                'room-room-main-calendar-item 4'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>' +
            '</div>';
            
        } else document.getElementById('sub_NPC').innerHTML = '';
        document.getElementById('sub_NPC').innerHTML = output;
    }
   
}



    
    
    
    
    
    
    window.onload(calendarRefresh());
    
    function calendarRefresh(){
    
        var month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var day_name = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

            // today's concept

    var todays_day = today.getDay();
    var todays_date = today.getDate();
    var todays_month = today.getMonth();


            // tomorrow's concept
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    var tomorrows_month = tomorrow.getMonth();
    var tomorrows_day = tomorrow.getDay();
    var tomorrows_date = tomorrow.getDate();


            // day after tomorrow's concept
    var d_a_tomorrow = new Date();
    d_a_tomorrow.setDate(today.getDate() + 2);
    var d_a_tomorrows_month = d_a_tomorrow.getMonth();
    var d_a_tomorrows_day = d_a_tomorrow.getDay();
    var d_a_tomorrows_date = d_a_tomorrow.getDate();

    
    


    
    document.getElementById('calendar1').innerHTML =
                                                    '<h1>' + day_name[todays_day] + '</h1>' +
                                                    '<p>'+month_name[todays_month] +' '+ todays_date +'</p>';


    document.getElementById('calendar2').innerHTML = 
                                                        '<h1>' + day_name[tomorrows_day] + '</h1>' +
                                                        '<p>'+month_name[tomorrows_month] +' '+ tomorrows_date +'</p>';
                                                        


    document.getElementById('calendar3').innerHTML = 
                                                        '<h1>' + day_name[d_a_tomorrows_day] + '</h1>' +
                                                        '<p>'+month_name[d_a_tomorrows_month] +' '+ d_a_tomorrows_date +'</p>'
                                                        ;

    }


// next thing we want do here is we want to basically make these rooms working uh. So yeah need to consider how to do this actually. Let's see.
// let's imagine we have room 1 which is tied to today's date and to two dates ahead. okay so main thing with these rooms is that let's just skip this input for a moment
// and let's just do something like adding a new room with boiler plate text. also we need to add room and then we need to display this.

// okay so we're basically starting out with one date and that's really it. so let's try this.
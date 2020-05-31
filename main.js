displayRooms();

var today = new Date();
var today1 = new Date();
var today2 = new Date();
var today3 = new Date();
var today4 = new Date();
var today5 = new Date();


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


function fun(today){
    today1.setDate(today.getDate())
    return today1
}

// today + 1
function fun1(today){
    today3.setDate(today.getDate() + 1);
    return today3
}

// today + 2
function fun2(today){
    today4.setDate(today.getDate() + 2);
    console.log(today4)
    return today4
    
}

function fun3(today){
    today5.setDate(today.getDate() + 3);
    return today5
}



function addRoom(){
    counter++;
    rooms[counter] = {
        date: today.toDateString(),
    }
    displayRooms();
    
}


function displayRooms(){
    console.log('display')
    let output = '';
    for(let room in rooms){
        console.log(rooms[room].date + '59s line the beginning of the for')
        
        
        if(rooms[room].date == fun(today).toDateString()){
            output += 
            '<div class="room" style="display: block">' +
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
                        '</div>' +
                '</div>';
                console.log('today displayed')

            
            
        // 
        
        } else if(rooms[room].date == fun1(today).toDateString()){
            output += 
            '<div class="room" style="display: block">' +
                    '<div class="room-main">' +
                        '<div class="room-main-horizontal" style="background-color: transparent; border: 0px;">' +
                            
                        '</div>' +
                        '<div class="room-main-main">' +
                        '<div class="room-main-horizontal" style="width: calc(100% / 3)">' +
                            '<strong>' +
                                'room-main-horizontal' +
                            '</strong>' +
                        '</div>' +
                            '<div class="room-main-main-calendar">' + 
                                'room-main-main-calendar' +
                            '</div>' +
                        '</div>' +
                    '</div>' +


                    '<div class="room-room">'+

                        '<div class="room-room-horizontal">' +
                                '<div class="room-room-horizontal-item" style="background-color: transparent; border: 0px;">' +
                                    
                                '</div>'+
                                '<div class="room-room-horizontal-item" style="background-color: transparent; border: 0px;">'+
                                    
                                '</div>'+
                                '<div class="room-room-horizontal-item" style="background-color: transparent; border: 0px;">'+
                                   
                                '</div>' +
                                '<div class="room-room-horizontal-item" style="background-color: transparent; border: 0px;">'+
                                    
                                '</div>' +
                        '</div>' +

                        '<div class="room-room-main">' +
                            '<div class="room-room-main-calendar">' +
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
                            '</div>'+

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
                console.log('today + 1 displayed')
        
        
        } else if(rooms[room].date == fun2(today).toDateString()){
            output += 
                '<div class="room">' +
                    '<div class="room-main">' +
                        '<div class="room-main-horizontal" style="background-color: transparent; border: 0px;">' +

                        '</div>' +
                        '<div class="room-main-main">' +
                            '<div class="room-main-main-calendar" style="border: 0px;">' + 
                                
                            '</div>' +
                            '<div class="room-main-horizontal" style="width: calc(100%/3)">' +
                            '<strong>' +
                                'room-main-horizontal' +
                                '</strong>' +
                        '</div>' +
                            '<div class="room-main-main-calendar">' + 
                                'room-main-main-calendar' +
                            '</div>' +
                        '</div>' +
                    '</div>' +

                    '<div class="room-room">'+
                        '<div class="room-room-horizontal">' +
                                '<div class="room-room-horizontal-item" style="border: 0px; background-color: transparent">' +
                                    
                                '</div>'+
                                '<div class="room-room-horizontal-item" style="border: 0px; background-color: transparent">'+
                                    
                                '</div>'+
                                '<div class="room-room-horizontal-item" style="border: 0px; background-color: transparent">'+
                                    
                                '</div>' +
                                '<div class="room-room-horizontal-item" style="border: 0px; background-color: transparent">'+
                                    
                                '</div>' +
                        '</div>' +
                        '<div class="room-room-main">' +
                            '<div class="room-room-main-calendar">' +
                                '<div class="room-room-main-calendar-item" style="border: 0px; background-color: transparent"></div>'+
                                '<div class="room-room-main-calendar-item" style="border: 0px; background-color: transparent"></div>'+
                                '<div class="room-room-main-calendar-item" style="border: 0px; background-color: transparent"></div>'+
                                '<div class="room-room-main-calendar-item" style="border: 0px; background-color: transparent"></div>'+
                            '</div>'+
                            '<div class="room-room-main-calendar">' +
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
                            '</div>'+

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
                console.log('today + 2 displayed')

        } else if(rooms[room].date == fun3(today).toDateString()){
            
            output +=
            '<div class="room">' +
                    '<div class="room-main">' +
                        '<div class="room-main-horizontal" style="background-color: transparent; border: 0px;">' +

                        '</div>' +
                        '<div class="room-main-main">' +
                            '<div class="room-main-main-calendar" style="border: 0px;">' + 
                                
                            '</div>' +
                            '<div class="room-main-main-calendar" style="border: 0px;">' + 
                                
                            '</div>' +
                        '<div class="room-main-horizontal" style="width: calc(100%/3)">' +
                        '<strong>' +
                            'room-main-horizontal' +
                            '</strong>' +
                    '</div>' +
                        '</div>' +
                    '</div>' +

                    '<div class="room-room">'+
                        '<div class="room-room-horizontal">' +
                                '<div class="room-room-horizontal-item" style="border: 0px; background-color: transparent">' +
                                    
                                '</div>'+
                                '<div class="room-room-horizontal-item" style="border: 0px; background-color: transparent">'+
                                    
                                '</div>'+
                                '<div class="room-room-horizontal-item" style="border: 0px; background-color: transparent">'+
                                    
                                '</div>' +
                                '<div class="room-room-horizontal-item" style="border: 0px; background-color: transparent">'+
                                    
                                '</div>' +
                        '</div>' +
                        '<div class="room-room-main">' +
                            '<div class="room-room-main-calendar">' +
                                '<div class="room-room-main-calendar-item" style="border: 0px; background-color: transparent"></div>'+
                                '<div class="room-room-main-calendar-item" style="border: 0px; background-color: transparent"></div>'+
                                '<div class="room-room-main-calendar-item" style="border: 0px; background-color: transparent"></div>'+
                                '<div class="room-room-main-calendar-item" style="border: 0px; background-color: transparent"></div>'+
                            '</div>'+
                            '<div class="room-room-main-calendar">' +
                            '<div class="room-room-main-calendar-item" style="border: 0px; background-color: transparent"></div>'+
                                '<div class="room-room-main-calendar-item" style="border: 0px; background-color: transparent"></div>'+
                                '<div class="room-room-main-calendar-item" style="border: 0px; background-color: transparent"></div>'+
                                '<div class="room-room-main-calendar-item" style="border: 0px; background-color: transparent"></div>'+
                            '</div>'+

                                '<div class="room-room-main-calendar">' +
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
                                '</div>'+
                        '</div>'+
                    '</div>' +
                '</div>';

        }   else {document.getElementById('sub_NPC').innerHTML = '';
        console.log('none displayed')}
        
        
        
    }
    document.getElementById('sub_NPC').innerHTML = output;
    

    
   
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
                                                        `<h1>${day_name[todays_day]}</h1>` + `<p>${month_name[todays_month] + ' '+ todays_date}</p>`;
   


    document.getElementById('calendar2').innerHTML = 
                                                        `<h1>${day_name[tomorrows_day]}</h1>` + `<p>${month_name[tomorrows_month] +' '+ tomorrows_date}</p>`;
                                                        


    document.getElementById('calendar3').innerHTML = 
                                                        `<h1>${day_name[d_a_tomorrows_day]}</h1>` + `<p>${month_name[d_a_tomorrows_month] +' '+ d_a_tomorrows_date}</p>`;

    }


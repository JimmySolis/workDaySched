$(document).ready(function(){

    function displayTime(){
        var today = $("#currentDay");
    
        today.text( moment().format("MMM Do, YYYY"));
    }
    displayTime();
    
    

$(".saveBtn").on("click", function(){
    var textInput = $(this)
    .siblings(".description")
    .val();
    var time = $(this)
    .parent()
    .attr("id");

    localStorage.setItem(time, textInput);
})

function updateHour(){
    var currentHour = moment().hour();
    $(".time-block").each(function(){
    var blockHour = parseInt(
        $(this)
        .attr('id')
        .split('-')[1]
    );
    if(blockHour < currentHour){
        $(this).addClass("past");
    }else if(blockHour === currentHour){
        $(this).removeClass("past");
        $(this).addClass("present");
    }else{
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }

    
    });
}
updateHour();


var interval = setInterval(updateHour, 15000);

$("#hourNine .description").val(localStorage.getItem("hourNine"));
$("#hourTen .description").val(localStorage.getItem("hourTen"));
$("#hourEleven .description").val(localStorage.getItem("hourEleven"));
$("#hourTwelve .description").val(localStorage.getItem("hourTwelve"));
$("#hourOne .description").val(localStorage.getItem("hourOne"));
$("#hourTwo .description").val(localStorage.getItem("hourTwo"));
$("#hourThree .description").val(localStorage.getItem("hourThree"));
$("#hourFour .description").val(localStorage.getItem("hourFour"));
$("#hourFive .description").val(localStorage.getItem("hourFive"));


} );
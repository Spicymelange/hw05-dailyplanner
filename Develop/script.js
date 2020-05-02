$(document).ready(function() {
    console.log( "ready!" );
var currentT = moment().format('LLLL');
$("#currentDay").append(currentT);
$(".container").addClass("form-group");
var hrRound = moment().hours();


    for (i = 9; i < 18; i++){//create 9 new divs
        // var newDiv = $("<div>").addClass("row");
        if (i > 12){//with labels 1:00 through 5:00
            var label = $("<label>").text(i - 12 + ":00");
        }
        else {//with labels 9:00 through 12:00
            var label = $("<label>").text(i + ":00");
        }
        //if local storage at i exists at the index i, retrieve it and assign it to the value of the textarea
        if (localStorage.getItem(i)){
            var textArea = $("<textarea>").attr("id", i).val(localStorage.getItem(i));
            textArea.addClass("form-control");
        }
        else{
            var textArea = $("<textarea>").attr("id", i);
            textArea.addClass("form-control");
        }
        
        //if hour block is in the past, grey background
        if ( $("#" + i) < hrRound){
            $(this).addClass("past");
        }
        //if hour block current, green bg
        else if (i == hrRound){
            $(this).addClass("present");
        }
        //if hour block future, red bg
        else {
            $(this).addClass("future");
        }
        
        var button = $("<button>").addClass("submit saveBtn").text("submit");
        $(".container").append(textArea);
        (textArea).append(button);
    }
    
    

    $(".submit").click(function(event){
    event.preventDefault();

    var textInput = $(this)[0].previousElementSibling.value;
    var textId = $(this)[0].previousElementSibling.id;
    console.log(textId, textInput);

    localStorage.setItem(textId, textInput);
})




});
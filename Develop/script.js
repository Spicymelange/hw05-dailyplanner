$(document).ready(function() {
    console.log( "ready!" );
var currentT = moment().format('LLLL');
$("#currentDay").append(currentT);
$(".container").addClass("form-group");

    for (i = 9; i < 18; i++){
    var newDiv = $("<div>").addClass("row");
    if (i > 12){
        var label = $("<label>").text(i - 12 + ":00");
        label.addClass("col-4-lg")
    }
    else {
        var label = $("<label>").text(i + ":00");
    }
    //if local storage at i exists
    if (localStorage.getItem(i)){
        var textArea = $("<textarea>").attr("id", i).val(localStorage.getItem(i));
        textArea.addClass("form-control");
    }
    else{
        var textArea = $("<textarea>").attr("id", i);
        textArea.addClass("form-control col-lg-4");
    }
    
    var button = $("<button>").addClass("submit saveBtn col-lg-4").text("submit");
    label.append(button);
    newDiv.append(label, textArea);
    $(".form-horizontal").append(newDiv);
    }


    $(".submit").click(function(event){
    event.preventDefault();

    var textInput = $(this)[0].previousElementSibling.value;
    var textId = $(this)[0].previousElementSibling.id;
    console.log(textId, textInput);

    localStorage.setItem(textId, textInput);
})




});
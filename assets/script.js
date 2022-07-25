// Day at top of page//
var datetime = moment().format("dddd, MMMM Do YYYY");
time = $("#currentDay");
time.text(datetime);

//Three colors: grey for past. red for current. green for future.//
var currentime = moment().format('LT');
var currentHour = (moment().get('hour'));
// currentHour = 10;

var input = $(".input");
var past = $(".past");
var timeValues = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Check the time and decide which rows turn gray, read or green
$(".item").addClass(function(index) {

    if (currentHour > timeValues[index]) {
        $("#item-" + index).addClass("past");
    } else if (currentHour == timeValues[index]) {
        $("#item-" + index).addClass("present");
    } else if (currentHour < timeValues[index]) {
        $("#item-" + index).addClass("future");
    }

    return;
});


$(".item").submit(function(index) {

    console.log("test", index);
    var item0 = $("#item-0").val();

    // Get each value and store to local storage
    console.log(item0);

    return;
});

// See if the page button is pressed
$(".saveBtn").click(function() {
    $(".item").submit();
});

// $( "#hour-0" ).click(function() {
//     $( "#item-0" ).submit();

//   });

// $( "#item-0" ).submit(function( event ) {
//     alert( "Handler for .submit() called." );
//     event.preventDefault();
//   });
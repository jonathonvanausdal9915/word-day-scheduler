//*
// Jonathon VanAusdal
// July 25, 2022
//*

// Day at top of page//
var datetime = moment().format("dddd, MMMM Do YYYY");
time = $("#currentDay");
time.text(datetime);

//Three colors: grey for past. red for current. green for future.//
var currentime = moment().format('LT');
var currentHour = (moment().get('hour'));
var input = $(".input");
var past = $(".past");
var timeValues = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Gets all Items. Sets to Local Storage//
for (var index = 0; index < localStorage.length; index++) {
    $("#item-" + index).val(localStorage.getItem("item-" + index));
}

// Check the time and decide which rows turn gray, red or green
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

//Sets all Items in input fields. Saves to the Local Storage//
$(".item").submit(function(index) {
    for (var index = 0; index < 9; index++) {
        localStorage.setItem("item-" + index, $("#item-" + index).val());
    }
    return;
});

// Listens to button click. Runs submit .item function//
$(".saveBtn").click(function() {
    $(".item").submit();
});

//Prevent Default //
$("form").submit(function(e) {
    e.preventDefault();
});
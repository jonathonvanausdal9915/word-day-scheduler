// Day at top of page//
var datetime = moment().format("dddd, MMMM Do YYYY");
time = $("#currentDay");
time.text(datetime);

//Prevent Default //
$("form").submit(function(e) {
    e.preventDefault();
});
// Gets all Items//
// $('#item-0').val(localStorage.getItem('item0'));
// $('#item-1').val(localStorage.getItem('item1'));
// $('#item-2').val(localStorage.getItem('item2'));
// $('#item-3').val(localStorage.getItem('item3'));
// $('#item-4').val(localStorage.getItem('item4'));
// $('#item-5').val(localStorage.getItem('item5'));
// $('#item-6').val(localStorage.getItem('item6'));
// $('#item-7').val(localStorage.getItem('item7'));
// $('#item-8').val(localStorage.getItem('item8'));
for (var index = 0; index < localStorage.length; index++) {
    $("#item-" + index).val(localStorage.getItem("item" + index));
}


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

//Sets all Items in input fields//
$(".item").submit(function(index) {
    var item0 = $("#item-0").val();
    var item1 = $("#item-1").val();
    var item2 = $("#item-2").val();
    var item3 = $("#item-3").val();
    var item4 = $("#item-4").val();
    var item5 = $("#item-5").val();
    var item6 = $("#item-6").val();
    var item7 = $("#item-7").val();
    var item8 = $("#item-8").val();
    console.log("test", index);
    localStorage.setItem("item0", item0);
    localStorage.setItem("item1", item1);
    localStorage.setItem("item2", item2);
    localStorage.setItem("item3", item3);
    localStorage.setItem("item4", item4);
    localStorage.setItem("item5", item5);
    localStorage.setItem("item6", item6);
    localStorage.setItem("item7", item7);
    localStorage.setItem("item8", item8);

    console.log(item0);


    return;
});


// See if the page button is pressed
$(".saveBtn").click(function() {
    $(".item").submit();
});
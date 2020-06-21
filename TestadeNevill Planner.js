$(document).ready(function () {
  var theHour = moment().hours();

  $("#currentDay").text(moment().format('LLL'));
  var index = 0;
  function now (){
    for (i=9; i <= 17; i++) {
    if(theHour == i){
      $($(".description")[index]).addClass("present");
    }
      else if (theHour > i){
      $($(".description")[index]).addClass("past");
    }
      else {
        $($(".description")[index]).addClass("future");

      }
      index++;
    }
  }

  $(".saveBtn").on("click", function () {
    // get nearby values

    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save in localStorage
    localStorage.setItem(time, value);
    });
  // get current number of hours
  var currentHour = moment().hours();

 $("#hour-9").val(localStorage.getItem("hour-9"));
 now();
});

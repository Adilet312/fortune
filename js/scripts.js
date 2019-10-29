$(document).ready(function()
{
  $("form#teller").submit(function(event)
  {
    event.preventDefault();

    var total = 0;
    $("input:checkbox[name=1question]:checked").each(function()
    {
      var data = $(this).val();
      if (data === "5"){
        total+=5;
      } else if (data === "10"){
        total+=10
      }
        else if (data === "15") {
          total+=15
        }
    });
    if (total <= 15){
      $(".result").text("your luck is bad")
    } else if (total >= 16){
      $(".result").text("your luck is super bad")
    } else if (total === 0){
      $(".result").text("your luck is good")
    }

    $(".result").show();
  });
});

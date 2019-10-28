$(document).ready(function() {
  $("form.userCart").submit(function(event) {
    var items = ["item1", "item2", "item3", "item4"];

    items.forEach(function(item) {
      var userInput = $("input#" + item).val();
      $("#" + item).text(userInput);
    });
    $(".userCart").hide();
    $(".groceryList").show();
    event.preventDefault();
  })
})

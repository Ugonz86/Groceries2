$(document).ready(function() {
  $("form.userCart").submit(function(event) {
    var itemInput = ["item1", "item2", "item3", "item4"];
    var itemOutput = [];

    itemInput.forEach(function(item) {
      var userInput = $("input#" + item).val().toUpperCase();
      itemOutput.push(userInput);
    });

    itemOutput.sort();
    $(".groceryList ul").append("<li>" + itemOutput[0] + "</li>");
    $(".groceryList ul").append("<li>" + itemOutput[1] + "</li>");
    $(".groceryList ul").append("<li>" + itemOutput[2] + "</li>");
    $(".groceryList ul").append("<li>" + itemOutput[3] + "</li>");

    $(".groceryList").show();
    $(".userCart").hide();

    event.preventDefault();
  });
});

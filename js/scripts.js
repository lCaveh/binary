$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var decimal = $("#number").val();
    if (decimal.match("^[01]+$")) {
      var array = decimal.split('')
      var binaryArray = array.reverse()
      var result = 0

      binaryArray.forEach(function(num, index){
        result += Math.pow(2, index)*parseInt(num);
      });
      $("#story").append ("<p>"+result+"</p>");
      $("#story").show();
    } else {
      alert("This not binary number")
    }

  });
});

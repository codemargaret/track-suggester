$(document).ready(function() {
  $("form#survey").submit(function(event) {
  event.preventDefault();
    var design = $("select#design").val();
    var fast = $("select#fast").val();
    var focus = $("select#focus").val();
    var size = $("select#size").val();
    var bustype = $("select#bustype").val();
    var mic = $("select#mic").val();

    if (design === 'yes' && fast === 'no' || design === 'yes' && focus === 'looks' || focus === 'looks' && fast === 'no') {
      $('#css').show();
      $("#ruby,#csharp").hide();
    } else if (size === 'small' && bustype === 'start' || size === 'small' && mic === 'no' || mic === 'no' && size === 'small') {
        $('#ruby').show();
        $("#css,#csharp").hide();
    }
    else {
        $('#csharp').show();
        $("#css,#ruby").hide();
    }
  });
});

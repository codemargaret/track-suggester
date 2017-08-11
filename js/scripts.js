$(document).ready(function() {
  $("form#survey").submit(function(event) {
  event.preventDefault();
    var design = $("select#design").val();
    var fast = $("select#fast").val();
    var focus = $("select#focus").val();
    var size = $("select#size").val();
    var bustype = $("select#bustype").val();
  });
});

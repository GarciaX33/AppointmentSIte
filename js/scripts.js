
//var makeapt = function(name, aptdescr, aptdate, starttime, endtime) {
//  var apt = (name + ", " + aptdescr + ", " + aptdate + ", " + starttime + ", " + endtime);
//  return apt;
//}


$(document).ready(function() {
	$("#appointment").submit(function(event) {
    event.preventDefault();
  var name = ($("input#name1").val());

  var aptdescr = ($("input#descr1").val());

  var aptdate = ($("input#date1").val());

  var starttime = ($("input#time1").val());
  var endtime = ($("input#time2").val());
	//var result = makeapt(name, aptdescr, aptdate, starttime, endtime);
  //  $("#output").text(result);
    //$("#output").show();
    $(".name1").text(name);
    $(".descr1").text(aptdescr);
    $(".date1").text(aptdate);
    $(".time1").text(starttime);
    $(".time2").text(endtime);

    $("#output").show();

	});
});

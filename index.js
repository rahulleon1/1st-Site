$(document).ready(function() {
  var totGpa = 0;
  var totCred = 0;
  var gpa;
  var i;

  setTimeout(function() {
    $(".screen-overlay").css("visibility", "hidden");
  }, 5000);


  var selectedGrade;
  var selectedCredit;


  $(".add-code").click(function() {

    for (i = 1; i < 11; i++) {
      selectedGrade = $(".grade" + i).val();
      selectedCredit = $(".credit" + i).val();

      totGpa = totGpa + ((parseInt(selectedGrade)) * (parseInt(selectedCredit)));
      totCred = totCred + (parseInt(selectedCredit));

    }

    if (totCred == 0) {
      totCred = 1;
      totGpa = 0;
    }

    gpa = totGpa / totCred;
    gpa = gpa.toFixed(6);


    if (gpa >= 4) {
      $(".boxer").css("visibility", "hidden");
      $(".add-code").css("visibility", "hidden");
      $(".just4Fun").attr("src", "images/pass.png");
      $(".just4Fun").css("visibility", "visible");
      $(".result-gpa").css("left", "640px");
      $(".result-gpa2").css("left", "640px");
      $(".result-gpa").css("visibility", "visible");
      $(".result-gpa2").css("visibility", "visible");
      $(".result-gpa2").html("Your GPA is " + gpa);
    } else if (gpa == 0) {
      $(".boxer").css("visibility", "hidden");
      $(".add-code").css("visibility", "hidden");
      $(".just4Fun").attr("src", "images/browser.png");
      $(".just4Fun").css("visibility", "visible");
      $(".result-gpa").css("color", "#ff0000");
      $(".result-gpa2").css("color", "#ff0000");
      $(".result-gpa").css("left", "620px");
      $(".result-gpa2").css("left", "620px");
      $(".result-gpa").css("visibility", "visible");
      $(".result-gpa2").css("visibility", "visible");
      $(".result-gpa").text("Something is wrong");
      $(".result-gpa2").text("Reload the site and try again");
    } else {
      $(".boxer").css("visibility", "hidden");
      $(".add-code").css("visibility", "hidden");
      $(".just4Fun").attr("src", "images/fail.png");

      $(".just4Fun").css("visibility", "visible");
      $(".result-gpa").css("color", "#14ffec");
      $(".result-gpa2").css("color", "#14ffec");
      $(".result-gpa").css("visibility", "visible");
      $(".result-gpa").text("Your GPA is " + gpa);
    }

  });

});

//Function To Display Popup

function noFunction() {
  $( "#form" ).submit(function( event ) {
    if ($('#name').val() == '') {
      alert("Please enter your name");
      event.preventDefault();
    } else {
      $("#form").submit();
      }
  });
}

function yesFunction(){
  $( "#form" ).submit(function( event ) {
    if ($('#name').val() == '' || ($("select[name=g1_menu]").val() == " "))  {
      alert("Please check you have entered your name & menu choice");
      event.preventDefault();
    } else {
      $("#form").submit();
      }
  });
}

function yesPartner(){
  $( "#form" ).submit(function( event ) {
    if ($('#name').val() == '' || ($("select[name=g1_menu]").val() == " ") || ($('input[name=g2_name]').val() == '') || ($('select[name=g2_menu]').val() == " ")) {
      alert("Please check you have entered all your names & menu choices");
      event.preventDefault();
    } else {
      $("#form").submit();
      }
  });
}

function yesPartnerKids(){
  $( "#form" ).submit(function( event ) {
    if ($('#name').val() == '' || ($("select[name=g1_menu]").val() == " ")
     || ($('input[name=g2_name]').val() == '') || ($('select[name=g2_menu]').val() == " ")
     || ($('input[name=g3_name]').val() == '') || ($('select[name=g3_menu]').val() == " ")) {
      alert("Please check you have entered all your names & menu choices");
      event.preventDefault();
        } else {
        $("#form").submit();
      }
  });
}


function div_show() {
document.getElementById('abc').style.display = "block";
$(".yes").hide();
$(".send").hide();
$(".yes_partner").hide();
$(".yes_partner_kids").hide();
$(".main_guest").hide();
}

//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}

$(function(){
  $("select[name=attending]").change(function(){
      if($(this).val() == "Yes")
      {
        $(".yes").show();
        $(".send").show();
        $(".yes_partner").hide();
        $(".yes_partner_kids").hide();
        $(".main_guest").show();
        yesFunction();

                 } else if ($(this).val() == "Yes_Partner") {
                          $(".yes").show();
                          $(".send").show();
                          $(".yes_partner").show();
                          $(".main_guest").show();
                          $(".yes_partner_kids").hide();
                          yesPartner();

                                   } else if ($(this).val() == "Yes_Partner_Kids") {
                                           $(".yes").show();
                                           $(".send").show();
                                           $(".yes_partner").show();
                                           $(".main_guest").show();
                                           $(".yes_partner_kids").show();
                                           yesPartnerKids();

                                                    } else if ($(this).val() == "No") {
                                                             $(".main_guest").show();
                                                             $(".send").show();
                                                             $(".yes_partner_kids").hide();
                                                             $(".yes_partner").hide();
                                                             $(".yes").hide();
                                                             noFunction();

                                                             }

   });
});

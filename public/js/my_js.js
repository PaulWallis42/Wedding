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
location.reload();
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
        $("select[name=attending]").replaceWith("<input name='attending' class='reply_hide' value='Yes'></input>");

                 } else if ($(this).val() == "Yes_Partner") {
                          $(".yes").show();
                          $(".send").show();
                          $(".yes_partner").show();
                          $(".main_guest").show();
                          $(".yes_partner_kids").hide();
                          yesPartner();
                          $("select[name=attending]").replaceWith("<input name='attending' class='reply_hide' value='Yes & Partner'></input>");

                                   } else if ($(this).val() == "Yes_Partner_Kids") {
                                           $(".yes").show();
                                           $(".send").show();
                                           $(".yes_partner").show();
                                           $(".main_guest").show();
                                           $(".yes_partner_kids").show();
                                           yesPartnerKids();
                                           $("select[name=attending]").replaceWith("<input name='attending' class='reply_hide' value='Yes Partner & Kid(s)!!!'></input>");

                                                    } else if ($(this).val() == "No") {
                                                             $(".main_guest").show();
                                                             $(".send").show();
                                                             $(".yes_partner_kids").hide();
                                                             $(".yes_partner").hide();
                                                             $(".yes").hide();
                                                             noFunction();
                                                             $("select[name=attending]").replaceWith("<input name='attending' class='reply_hide' value='No'></input>");

                                                             }

   });
});

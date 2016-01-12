//Function To Display Popup
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
                 } else if ($(this).val() == "Yes_Partner") {
                          $(".yes").show();
                          $(".send").show();
                          $(".yes_partner").show();
                          $(".main_guest").show();
                          $(".yes_partner_kids").hide();
                                   } else if ($(this).val() == "Yes_Partner_Kids") {
                                           $(".yes").show();
                                           $(".send").show();
                                           $(".yes_partner").show();
                                           $(".main_guest").show();
                                           $(".yes_partner_kids").show();
                                                    } else if ($(this).val() == "No") {
                                                             $(".main_guest").show();
                                                             $(".send").show();
                                                             $(".yes_partner_kids").hide();
                                                             $(".yes_partner").hide();
                                                             $(".yes").hide();
                                                             }

   });
});

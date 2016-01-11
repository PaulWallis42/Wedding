//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
$(".yes").hide();
$(".send").hide();
$(".yes_partner").hide();
$(".yes_partner_kids").hide();
}

//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}

$(function(){
  $("#yes").click(function(){
      $(".yes").show();
      $(".send").show();
      $(".yes_partner").hide();
      $(".yes_partner_kids").hide();
  });
});

$(function(){
  $("#no").click(function(){
      $(".send").show();
      $(".yes").hide();
      $(".yes_partner").hide();
      $(".yes_partner_kids").hide();
  });
});

$(function(){
  $("#yes_partner").click(function(){
      $(".send").show();
      $(".yes").show();
      $(".yes_partner").show();
      $(".yes_partner_kids").hide();
  });
});


$(function(){
  $("#yes_partner_kids").click(function(){
      $(".send").show();
      $(".yes").show();
      $(".yes_partner").show();
      $(".yes_partner_kids").show();
  });
});

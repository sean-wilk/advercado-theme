var $j = jQuery.noConflict();

$j(document).ready(function(){
  $j(".woocommerce-page .form-row.vendor-customer-registration label.radio:nth-child(1)").addClass("active");

  $j(".woocommerce-page .form-row.vendor-customer-registration label.radio").click(function(){
    if(!$j(this).hasClass("active")){
      $j(".woocommerce-page .form-row.vendor-customer-registration label.radio").removeClass("active");
      $j(this).addClass("active");
    }
  });

  $j(".form-accordion .form-accordion-header").click(function(){
    if( !$j(this).parent().hasClass("active") ){
      $j(this).parent().addClass("active");
    } else {
      $j(this).parent().removeClass("active");
    }
  });

});

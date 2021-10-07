"use strict";

var $j = jQuery.noConflict();
$j(document).ready(function () {
  $j(".woocommerce-page .form-row.vendor-customer-registration label.radio:nth-child(1)").addClass("active");
  $j(".woocommerce-page .form-row.vendor-customer-registration label.radio").click(function () {
    if (!$j(this).hasClass("active")) {
      $j(".woocommerce-page .form-row.vendor-customer-registration label.radio").removeClass("active");
      $j(this).addClass("active");
    }
  });
  $j(".form-accordion .form-accordion-header").click(function () {
    if (!$j(this).parent().hasClass("active")) {
      $j(this).parent().addClass("active");
    } else {
      $j(this).parent().removeClass("active");
    }
  });
});
"use strict";
"use strict";

var $j = jQuery.noConflict();
$j(document).ready(function () {
  // Select and loop the container element of the elements you want to equalise
  $j('.sh-boxes').each(function () {
    // Cache the highest
    var highestBox = 0; // Select and loop the elements you want to equalise

    $j('.sh-box', this).each(function () {
      // If this box is higher than the cached highest then store it
      if ($j(this).height() > highestBox) {
        highestBox = $j(this).height();
      }
    }); // Set the height of all those children to whichever was highest

    $j('.sh-box', this).height(highestBox);
  });
});
$j(window).resize(function () {
  $j('.sh-boxes').each(function () {
    // Cache the highest
    var highestBox = 0; // Select and loop the elements you want to equalise

    $j('.sh-box', this).each(function () {
      // If this box is higher than the cached highest then store it
      if ($j(this).height() > highestBox) {
        highestBox = $j(this).height();
      }
    }); // Set the height of all those children to whichever was highest

    $j('.sh-box', this).height(highestBox);
  });
}); //---------------------------
// Desktop Only - Same Height
//---------------------------

var $j = jQuery.noConflict();
$j(document).ready(function () {
  if ($j(window).width() >= 1024) {
    // Select and loop the container element of the elements you want to equalise
    $j('.do-sh-boxes').each(function () {
      // Cache the highest
      var highestBox = 0; // Select and loop the elements you want to equalise

      $j('.do-sh-box', this).each(function () {
        // If this box is higher than the cached highest then store it
        if ($j(this).height() > highestBox) {
          highestBox = $j(this).height();
        }
      }); // Set the height of all those children to whichever was highest

      $j('.do-sh-box', this).height(highestBox);
    }); // Select and loop the container element of the elements you want to equalise

    $j('.hh-boxes').each(function () {
      // Cache the highest
      var highestBox = 0; // Select and loop the elements you want to equalise

      $j('.hh-box.full-height', this).each(function () {
        // If this box is higher than the cached highest then store it
        if ($j(this).height() > highestBox) {
          highestBox = $j(this).height();
        }
      }); // Set the height of all those children to whichever was highest

      $j('.hh-box.full-height', this).height(highestBox);
      $j('.hh-box.half-height', this).height(highestBox / 2 - 10);
    });
  }
});
$j(window).resize(function () {
  if ($j(window).width() >= 1024) {
    $j('.do-sh-boxes').each(function () {
      // Cache the highest
      var highestBox = 0; // Select and loop the elements you want to equalise

      $j('.do-sh-box', this).each(function () {
        // If this box is higher than the cached highest then store it
        if ($j(this).height() > highestBox) {
          highestBox = $j(this).height();
        }
      }); // Set the height of all those children to whichever was highest

      $j('.do-sh-box', this).height(highestBox);
    }); // Select and loop the container element of the elements you want to equalise

    $j('.hh-boxes').each(function () {
      // Cache the highest
      var highestBox = 0; // Select and loop the elements you want to equalise

      $j('.hh-box.full-height', this).each(function () {
        $j(this).css('height', 'auto'); // If this box is higher than the cached highest then store it

        if ($j(this).height() > highestBox) {
          highestBox = $j(this).height();
        }
      }); // Set the height of all those children to whichever was highest

      $j('.hh-box.full-height', this).height(highestBox);
      $j('.hh-box.half-height', this).height(highestBox / 2 - 10);
    });
  }
});
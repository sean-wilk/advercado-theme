<?php
function advercado_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

    wp_enqueue_style( 'main', get_stylesheet_directory_uri() . '/main.min.css');

    wp_enqueue_script('vendor-js', get_stylesheet_directory_uri() . '/asset/js/vendor.min.js', array(), '1.0.0', 'true' );

    wp_enqueue_script('custom-js', get_stylesheet_directory_uri() . '/asset/js/custom.min.js', array(), '1.0.0', 'true' );


    //wp_enqueue_script('vendor-walkthrough', get_stylesheet_directory_uri() . '/asset/js/separate/vendor-dashboard-walkthrough.js', array(), '1.0.0', 'true' );
}
add_action( 'wp_enqueue_scripts', 'advercado_enqueue_styles' );

/***************************************************************
* Adding Signup Wizard Styling
***************************************************************/

function advercado_dokan_enqueue_styles() {

    wp_enqueue_style( 'signup-custom', get_stylesheet_directory_uri() . '/asset/css/signup-wizard.css');
}
add_action( 'admin_print_styles', 'advercado_dokan_enqueue_styles', 10 );

/***************************************************************
* Removing Dokan Actions/Filters We Don't Need
***************************************************************/

// Adding Script to correctly deregister objects
include_once( get_stylesheet_directory() .'/inc/hard-unregister.php');

// Removing objects
add_action('wp', 'unregister_dokan_callbacks', 1);
function unregister_dokan_callbacks()
{
  // Dashboard - Removing Progress Bar to Move It
  do_hard_unregister_object_callback('dokan_dashboard_before_widgets', 10, 'show_profile_progressbar');

  // Product Archive - Removing Filters - Added Back in in Header
  //do_hard_unregister_object_callback('woocommerce_before_shop_loop', 1, 'start_column_layout');
  //do_hard_unregister_object_callback('woocommerce_before_shop_loop', 10, 'before_shop_loop');

  // Product Archive - No Products Found - Removing Filters
  //do_hard_unregister_object_callback('woocommerce_no_products_found', 1, 'start_column_layout');
  //do_hard_unregister_object_callback('woocommerce_no_products_found', 10, 'before_shop_loop');
}

/***************************************************************
* Dashboard Additions
***************************************************************/

// Moving profile_progress bar to left hand section
add_action('dokan_dashboard_before_widgets', 'advercado_welcome_banner', 1);
function advercado_welcome_banner() {
    if ( current_user_can( 'dokan_view_overview_menu' ) ) {
      $get_user = get_user_meta(dokan_get_current_user_id());
      $store_name = $get_user['dokan_store_name'][0];
      ?>
      <div class="dokan-panel dokan-panel-default advercado-welcome-message" style="background-image:url('<?= get_stylesheet_directory_uri() ?>/asset/img/welcome-bg@3x.png');">
        <div class="message-container">
          <h2>Welcome <?= $store_name ?></h2>
          <h4>Manage your store below</h4>
        </div>
      </div>
      <?
    }
}

// Moving profile_progress bar to left hand section
add_action('dokan_dashboard_left_widgets', 'show_profile_progressbar', 1);
function show_profile_progressbar() {
    if ( current_user_can( 'dokan_view_overview_menu' ) ) {
        echo dokan_get_profile_progressbar();
    }
}

add_action('advercado_shop_header_bottom', 'advercado_shop_header_bottom_loop', 1);
function advercado_shop_header_bottom_loop() {

    $show_filters = dokan_get_option( 'show_filters_before_locations_map', 'dokan_geolocation', 'on' );

    dokan_geo_filter_form( 'product' );
}

add_action('advercado_shop_header_after', 'advercado_shop_header_after_loop', 1);
function advercado_shop_header_after_loop() {

    $show_filters = dokan_get_option( 'show_filters_before_locations_map', 'dokan_geolocation', 'on' );
    dokan_geo_get_template( 'map', array( 'layout' => 'top' ) );
}

/***************************************************************
* Product Single Updates
***************************************************************/

/* add_filter( 'woocommerce_product_tabs', 'woo_remove_product_tabs', 98 );

function woo_remove_product_tabs( $tabs ) {
    unset( $tabs['geolocation'] ); 			    // Remove the location tab
    unset( $tabs['more_seller_product'] ); 	// Remove the more sellers tab
    return $tabs;
} */

function dokan_product_seller_link() {
    global $product;
    $author     = get_user_by( 'id', $product->post->post_author );
    $store_info = dokan_get_store_info( $author->ID );
    ?>
    <div class="product-seller-link" style="margin-top: 16px;">
      <span>
          <?php _e( 'View Sellers Store:', 'dokan' ); ?>
      </span>

      <span class="details">
          <?php printf( '<a href="%s">%s</a>', dokan_get_store_url( $author->ID ), $store_info['store_name'] ); ?>
      </span>
    </div>
<?php
}
add_action( 'woocommerce_single_product_summary_last', 'dokan_product_seller_link', 8 );

/***************************************************************
* Account Header Shortcode
***************************************************************/

function account_header_shortcode($atts) {
    extract(shortcode_atts(array(
        'account_type'      => 'user',
        'welcome_text'      => 'Welcome',
        'subtitle'          => 'Manage Your Account Below',
        'uuid'              => uniqid(),
    ), $atts));

  /* Call to template */
    ob_start();
    include( 'shortcodes/account-header.php' );
    return ob_get_clean();
}
add_shortcode('account_header', 'account_header_shortcode');

add_action( 'woocommerce_review_order_before_submit', 'bt_add_checkout_checkbox', 10 );

/***************************************************************
* Advertising Material Acknowledgement
***************************************************************/

function bt_add_checkout_checkbox() {

    woocommerce_form_field( 'checkout-checkbox', array( // CSS ID
       'type'          => 'checkbox',
       'class'         => array('form-row mycheckbox'), // CSS Class
       'label_class'   => array('woocommerce-form__label woocommerce-form__label-for-checkbox checkbox'),
       'input_class'   => array('woocommerce-form__input woocommerce-form__input-checkbox input-checkbox'),
       'required'      => true, // Mandatory or Optional
       'label'         => 'When purchasing advertising space, you\'ll need to provide the creative assets ahead of time. Please contact the seller to confirm the amount of time required if not already specified. By checking this box you are confirming you understand this and will provide the assets as needed.', // Label and Link
    ));
}

add_action( 'woocommerce_checkout_process', 'bt_add_checkout_checkbox_warning' );
/**
 * Alert if checkbox not checked
 */
function bt_add_checkout_checkbox_warning() {
    if ( ! (int) isset( $_POST['checkout-checkbox'] ) ) {
        wc_add_notice( __( 'Please read and acknowledge that you have read the checkbox' ), 'error' );
    }
}

/***************************************************************
* Increasing Decimal Precision to work with Long/Lat Calculations
***************************************************************/

add_filter('get_meta_sql','cast_decimal_precision');

function cast_decimal_precision( $array ) {

    $array['where'] = str_replace('DECIMAL','DECIMAL(10,3)',$array['where']);

    return $array;
}

/***************************************************************
* Updating Related Posts Query
***************************************************************/

add_filter( 'woocommerce_product_related_posts_query', 'related_products_latitude', 10, 3 );
function related_products_latitude( $query, $product_id, $args ){
    global $wpdb;
    global $product;

    $dokan_geo_latitude_post  = get_post_meta( $product->id, 'dokan_geo_latitude', true );

    if($dokan_geo_latitude_post){
      $distance = 10; //distance in km for square block around location
      $lat_distance = $distance/(2 * 110.574); //convert to co-ordinates

      $lat_min = $dokan_geo_latitude_post - $lat_distance;
      $lat_max = $dokan_geo_latitude_post + $lat_distance;

      $query['join']  .= " INNER JOIN {$wpdb->postmeta} as pm1 ON p.ID = pm1.post_id ";
      $query['where'] .= " AND pm1.meta_key = 'dokan_geo_latitude' AND pm1.meta_value BETWEEN " . $lat_min . " AND " . $lat_max . " ";
    }

    return $query;
}

add_filter( 'woocommerce_product_related_posts_query', 'related_products_longitude', 10, 3 );
function related_products_longitude( $query, $product_id, $args ){
    global $wpdb;
    global $product;

    $dokan_geo_longitude_post = get_post_meta( $product->id, 'dokan_geo_longitude', true );
    $dokan_geo_latitude_post  = get_post_meta( $product->id, 'dokan_geo_latitude', true );

    if( $dokan_geo_longitude_post && $dokan_geo_latitude_post ){
      $distance = 10; //distance in km for square block around location
      $long_distance = $distance/(2 * 111.320 * cos($dokan_geo_latitude_post)); //convert to co-ordinates

      $long_min = $dokan_geo_longitude_post - $long_distance;
      $long_max = $dokan_geo_longitude_post + $long_distance;

      $query['join']  .= " INNER JOIN {$wpdb->postmeta} as pm2 ON p.ID = pm2.post_id ";
      $query['where'] .= " AND pm2.meta_key = 'dokan_geo_longitude' AND pm2.meta_value BETWEEN " . $long_min . " AND " . $long_max . " ";
    }

    return $query;
}


add_filter('woocommerce_product_related_products_heading',function(){

   return 'Nearby Services & Spaces';

});

/***************************************************************
* Changing to local JS version so we can limit Google Places
* autocomplete to UK only. Update in lines 108-112 of JS File.
***************************************************************/

function dokan_script_update() {
    wp_deregister_script( 'dokan-geo-filters' );

    wp_enqueue_script( 'advercado-geo-filters', get_stylesheet_directory_uri() . '/asset/js/separate/advercado-geolocation-filters.min.js', array( 'jquery', 'underscore', 'dokan-maps' ), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'dokan_script_update' );

/***************************************************************
* Adding Favourites Section to WooCommerce My Account Section
***************************************************************/

// New Endpoint
add_action( 'init', 'my_account_new_endpoints' );

function my_account_new_endpoints() {
	add_rewrite_endpoint( 'wishlist', EP_ROOT | EP_PAGES );
}

// Add Content
add_action( 'woocommerce_account_wishlist_endpoint', 'wishlist_endpoint_content' );
function wishlist_endpoint_content() {
   get_template_part('templates/my-account-wishlist');
}

// Edit my account menu order

function my_account_menu_order() {
	$menuOrder = array(
		'orders'              => __( 'Your Orders', 'woocommerce' ),
		'edit-address'        => __( 'Addresses', 'woocommerce' ),
		'payment-methods'    	=> __( 'Payment Methods', 'woocommerce' ),
		'edit-account'    	  => __( 'Account Details', 'woocommerce' ),
		'wishlist'    	      => __( 'Wishlist', 'woocommerce' ),
		'following'    	      => __( 'Vendors', 'woocommerce' ),
		'support-tickets'    	=> __( 'Seller Support Tickets', 'woocommerce' ),
		'bookings'    	      => __( 'Bookings', 'woocommerce' ),
		'customer-logout'     => __( 'Logout', 'woocommerce' )
	);
	return $menuOrder;
}
add_filter ( 'woocommerce_account_menu_items', 'my_account_menu_order' );

/***************************************************************
* Dokan Dashboard - Menu Item Title & Order Change
***************************************************************/

add_filter( 'dokan_get_dashboard_nav', function($urls) {
    $urls['booking']['pos'] = 25;
    $urls['booking']['title'] = __( 'Bookable Products', 'dokan');
    return $urls;
} , 500);

/***************************************************************
* Overriding Signup Wizard
***************************************************************/

class Dokan_Setup_Wizard_Override extends Dokan_Seller_Setup_Wizard {

    /**
     * Introduction step.
     */
    public function dokan_setup_introduction() {
        $dashboard_url = dokan_get_navigation_url();
        ?>
        <h1 style="text-align: center;"><?php esc_attr_e( 'Welcome to Advercado!', 'dokan-lite' ); ?></h1>
        <p style="text-align: center;"><?php echo wp_kses( __( '<strong>Create your store in 3 simple steps.</strong>', 'dokan-lite' ), [ 'strong' => [] ] ); ?></p>
        <p style="text-align: center;"><?php esc_attr_e( 'Join us today! We\'ll show you everything you need to know.', 'dokan-lite' ); ?></p>
        <p class="wc-setup-actions step">
            <a href="<?php echo esc_url( $this->get_next_step_link() ); ?>" class="button-primary button button-large button-next lets-go-btn dokan-btn-theme"><?php esc_attr_e( 'Let\'s Go!', 'dokan-lite' ); ?></a>
        </p>
        <?php
        do_action( 'dokan_seller_wizard_introduction', $this );
    }
}

new Dokan_Setup_Wizard_Override;

/**
 * Is the current user registered for more than x days ago?
 *
 * Based on the compare idea in this answer:
 * http://stackoverflow.com/a/7130744/2078474
 *
 * @link   http://wordpress.stackexchange.com/a/143597/26350
 * @param  int  $reg_days_ago
 * @return bool
 */

function is_user_reg_matured( $reg_days_ago = 7 )
{
    $cu = wp_get_current_user();
    return ( isset( $cu->data->user_registered ) && strtotime( $cu->data->user_registered ) < strtotime( sprintf( '-%d days', $reg_days_ago ) ) ) ? TRUE : FALSE;
}


/***************************************************************
* Adding Range & CPC Fields
***************************************************************/

/*
* Saving product field data for edit and update
*/

 add_action( 'dokan_new_product_added','save_add_product_meta', 10, 2 );
 add_action( 'dokan_product_updated', 'save_add_product_meta', 10, 2 );

function save_add_product_meta($product_id, $postdata){
  if ( ! dokan_is_user_seller( get_current_user_id() ) ) {
    return;
  }

  if ( ! empty( $postdata['product_range'] ) ) {
    $product = wc_get_product( $product_id );
    $product_cost = $product->get_price();
    $product_range_thousands = round($postdata['product_range']/1000,1);
    $product_cost_per_thousand = $product_cost/$product_range_thousands;

    update_post_meta( $product_id, 'product_range', $postdata['product_range'] );
    update_post_meta( $product_id, 'product_cost_per_thousand', $product_cost_per_thousand );
  }
}

/*
* Showing field data on product edit page
*/

add_action('dokan_product_edit_after_product_tags','show_on_edit_page',99,2);

function show_on_edit_page($post, $post_id){
  $product_range = get_post_meta( $post_id, 'product_range', true );
?>
 <div class="dokan-form-group">
  <input type="hidden" name="product_range" id="dokan-edit-product-id" value="<?php echo esc_attr( $post_id ); ?>"/>
  <label for="product_range" class="form-label"><?php esc_html_e( 'Product Range (Nearest Thousand)', 'dokan-lite' ); ?></label>
  <input id="product_range" type="number" class="dokan-form-control" name="product_range" placeholder="<?php esc_attr__( '5000', 'dokan-lite' ); ?>" value="<?php echo esc_attr( $product_range ); ?>" min="0" step="1">
  <div class="dokan-product-title-alert dokan-hide">
   <?php esc_html_e( 'Please enter product range!', 'dokan-lite' ); ?>
  </div>
 </div>
<?php

    }

// showing on single product page
add_action('woocommerce_product_additional_information','show_product_range',13);

function show_product_range(){
  global $product;

  if ( empty( $product ) ) {
      return;
  }

  $product_range = get_post_meta( $product->get_id(), 'product_range', true );
  $product_cost_per_thousand = get_post_meta( $product->get_id(), 'product_cost_per_thousand', true );

  if ( ! empty( $product_range ) ) {
  ?>
    <table class="woocommerce-product-attributes shop_attributes">
			<tbody>
        <tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_product_range">
  		    <th class="woocommerce-product-attributes-item__label"><?php echo esc_attr__( 'Product Range', 'dokan-lite' ); ?></th>
    			<td class="woocommerce-product-attributes-item__value"><p><?php echo esc_attr( $product_range ); ?></p></td>
    		</tr>
        <tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_product_cpt">
  		    <th class="woocommerce-product-attributes-item__label"><a href="/help-center/understanding-cost-per-thousand/" target="_blank"><?php echo esc_attr__( 'Product CPT', 'dokan-lite' ); ?></a></th>
    			<td class="woocommerce-product-attributes-item__value"><p>£<?php echo esc_attr( round($product_cost_per_thousand,2) ); ?></p></td>
    		</tr>
    	</tbody>
    </table>
  <?php
  }
}

/***************************************************************
* Adding Dokan Vendor Dashboard Link for Vendors
***************************************************************/

// Thb Header Profile.
function thb_quick_dashboard() {
  if ( dokan_is_user_seller( get_current_user_id() ) ) {
    ?>
  	<a href="<?php echo dokan_get_navigation_url(); ?>" id="quick_profile"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 37"><defs><style>.cls-1{fill:#151515;}</style></defs><path class="cls-1" d="M36.08,10.64H27.55a.92.92,0,0,1-.91-.92V.92A.92.92,0,0,1,27.55,0h8.53A.92.92,0,0,1,37,.92v8.8A.92.92,0,0,1,36.08,10.64ZM28.47,8.81h6.7v-7h-6.7Z"/><path class="cls-1" d="M22.77,10.64H14.23a.92.92,0,0,1-.91-.92V.92A.92.92,0,0,1,14.23,0h8.54a.92.92,0,0,1,.91.92v8.8A.92.92,0,0,1,22.77,10.64ZM15.15,8.81h6.7v-7h-6.7Z"/><path class="cls-1" d="M9.45,10.64H.92A.92.92,0,0,1,0,9.72V.92A.92.92,0,0,1,.92,0H9.45a.92.92,0,0,1,.91.92v8.8A.92.92,0,0,1,9.45,10.64ZM1.83,8.81h6.7v-7H1.83Z"/><path class="cls-1" d="M36.08,23.82H27.55a.92.92,0,0,1-.91-.92V14.1a.92.92,0,0,1,.91-.92h8.53a.92.92,0,0,1,.92.92v8.8A.92.92,0,0,1,36.08,23.82ZM28.47,22h6.7V15h-6.7Z"/><path class="cls-1" d="M22.77,23.82H14.23a.92.92,0,0,1-.91-.92V14.1a.92.92,0,0,1,.91-.92h8.54a.92.92,0,0,1,.91.92v8.8A.92.92,0,0,1,22.77,23.82ZM15.15,22h6.7V15h-6.7Z"/><path class="cls-1" d="M9.45,23.82H.92A.92.92,0,0,1,0,22.9V14.1a.92.92,0,0,1,.92-.92H9.45a.92.92,0,0,1,.91.92v8.8A.92.92,0,0,1,9.45,23.82ZM1.83,22h6.7V15H1.83Z"/><path class="cls-1" d="M36.08,37H27.55a.92.92,0,0,1-.91-.92v-8.8a.92.92,0,0,1,.91-.92h8.53a.92.92,0,0,1,.92.92v8.8A.92.92,0,0,1,36.08,37Zm-7.61-1.83h6.7v-7h-6.7Z"/><path class="cls-1" d="M22.77,37H14.23a.92.92,0,0,1-.91-.92v-8.8a.92.92,0,0,1,.91-.92h8.54a.92.92,0,0,1,.91.92v8.8A.92.92,0,0,1,22.77,37Zm-7.62-1.83h6.7v-7h-6.7Z"/><path class="cls-1" d="M9.45,37H.92A.92.92,0,0,1,0,36.08v-8.8a.92.92,0,0,1,.92-.92H9.45a.92.92,0,0,1,.91.92v8.8A.92.92,0,0,1,9.45,37ZM1.83,35.17h6.7v-7H1.83Z"/></svg></a>
  	<?php
  }
}
add_action( 'thb_quick_profile', 'thb_quick_dashboard' );

/***************************************************************
* Registering Product Widget Area
***************************************************************/

function go_widgets_init() {

    register_sidebar( array(
        'name' => 'Product Widget Area - Desktop',
        'id' => 'product_widget_area',
        'before_widget' => '<div class="row advercado-product-location desktop-only"><div class="small-12 large-10 columns small-order-1 large-order-2">',
        'after_widget' => '</div></div>',
        'before_title' => '<h2>',
        'after_title' => '</h2>',
    ) );

    register_sidebar( array(
        'name' => 'Product Widget Area - mobile',
        'id' => 'product_widget_area_mobile',
        'before_widget' => '<div class="row advercado-product-location mobile-only"><div class="small-12 large-10 columns small-order-1 large-order-2">',
        'after_widget' => '</div></div>',
        'before_title' => '<h2>',
        'after_title' => '</h2>',
    ) );
}
add_action( 'widgets_init', 'go_widgets_init' );

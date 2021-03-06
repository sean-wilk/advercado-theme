<?php
/**
 * The template for displaying product content in the single-product.php template
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://docs.woocommerce.com/document/template-structure/
 * @author      WooThemes
 * @package     WooCommerce/Templates
 * @version     3.6.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
global $product;

$shop_product_style   = filter_input( INPUT_GET, 'shop_product_style', FILTER_SANITIZE_STRING );
$shop_product_style   = $shop_product_style ? $shop_product_style : ot_get_option( 'shop_product_style', 'style1' );
$shop_product_sidebar = ot_get_option( 'shop_product_sidebar', 'off' );
if ( in_array( $shop_product_style, array( 'style1', 'style2', 'style3', 'style4' ) ) ) {
	$classes[] = 'page-padding';
}
$classes[] = 'thb-product-detail';
$classes[] = 'thb-product-sidebar-' . $shop_product_sidebar;
$classes[] = 'thb-product-' . $shop_product_style;

$dokan_geo_latitude_post  = get_post_meta( $product->id, 'dokan_geo_latitude', true );
$dokan_geo_longitude_post = get_post_meta( $product->id, 'dokan_geo_longitude', true );
?>

<?php
	/**
	 * woocommerce_before_single_product hook.
	 *
	 * @hooked wc_print_notices - 10
	 */
	do_action( 'woocommerce_before_single_product' );

if ( post_password_required() ) {
	get_template_part( 'inc/templates/password-protected' );
	return;
}
?>
<div id="product-<?php the_ID(); ?>" <?php wc_product_class( $classes, $product ); ?>>

	<?php
		/**
		 * woocommerce_before_single_product_summary hook.
		 *
		 * @hooked woocommerce_show_product_sale_flash - 10
		 * @hooked woocommerce_show_product_images - 20
		 */
		do_action( 'woocommerce_before_single_product_summary' );
	?>

	<div class="summary entry-summary">

		<?php
			/**
			 * woocommerce_single_product_summary hook.
			 *
			 * @hooked woocommerce_template_single_title - 5
			 * @hooked woocommerce_template_single_rating - 10
			 * @hooked woocommerce_template_single_price - 10
			 * @hooked woocommerce_template_single_excerpt - 20
			 * @hooked woocommerce_template_single_add_to_cart - 30
			 * @hooked woocommerce_template_single_meta - 40
			 * @hooked woocommerce_template_single_sharing - 50
			 * @hooked WC_Structured_Data::generate_product_data() - 60
			 */
			do_action( 'woocommerce_single_product_summary' );
			do_action( 'woocommerce_single_product_summary_last' );
		?>

	</div><!-- .summary -->

	<?php
		/**
		 * woocommerce_after_single_product_summary hook.
		 *
		 * @hooked woocommerce_output_product_data_tabs - 10
		 * @hooked woocommerce_upsell_display - 15
		 * @hooked woocommerce_output_related_products - 20
		 */
		do_action( 'woocommerce_after_single_product_summary' );
	?>

</div><!-- #product-<?php the_ID(); ?> -->

<?php do_action( 'woocommerce_after_single_product' ); ?>

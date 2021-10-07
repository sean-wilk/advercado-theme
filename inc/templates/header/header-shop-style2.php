<?php
  $cat = get_queried_object();
  $cat_id = $cat->term_id;

  $args = array(
    'post_type' => 'product',
    'posts_per_page' => -1,
    'tax_query' => array(
        array(
            'taxonomy' => 'product_cat',
            'field' => 'id',
            'terms' => $cat_id
        )
    ),
    'meta_query' => array(
        array(
            'key' => '_stock_status',
            'value' => 'instock'
        ),
    )
  );

  $query = new WP_Query($args);

  $inStockCount = $query->found_posts;

?>
<div class="shop-header-container row">
  <div class="page-padding cf shop-header-style2 advercado-shop-header">
  	<h2 class="thb-shop-title"><?php woocommerce_page_title(); ?></h2>
    <?php  if ( $query && ! is_wp_error( $query ) && $inStockCount > 0 ) { ?>
    		<h3 class="thb-shop-subtitle"><?php echo $inStockCount; ?> Opportunities Match Your Search</h3>
      <?php } else { ?>
        <h3 class="thb-shop-subtitle">No Products Match Your Search</h3>
    <?php } ?>
    <?php do_action( 'advercado_shop_header_bottom' ); ?>
  </div>
</div>
<div class="map-location-container row">
  <?php do_action( 'advercado_shop_header_after' ); ?>
</div>

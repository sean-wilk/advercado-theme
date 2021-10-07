<?php
/**
 * Component for main content of the Shows Index Grid
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package go
 */
;
 global $current_user;
 wp_get_current_user();

 if ( $filter_by != "all" ) {
   $filter_array = explode(',', $filter_by);
 }

 if ( $account_type=="vendor" && current_user_can( 'dokan_view_overview_menu' ) ) {
   $get_user = get_user_meta(dokan_get_current_user_id());
   $name = $get_user['dokan_store_name'][0];
 } else if ( $account_type=="user" && is_user_logged_in() ) {
   $name = $current_user->display_name;
 }

 if(is_user_logged_in()){
 ?>


 <div class="dokan-panel dokan-panel-default advercado-welcome-message" style="background-image:url('<?= get_stylesheet_directory_uri() ?>/asset/img/welcome-bg@3x.png');" id="welcome-message-<?= $uuid ?>">
   <div class="message-container">
     <h2><?= $welcome_text ?> <?= $name ?></h2>
     <h4><?= $subtitle ?></h4>
   </div>
 </div>

<?php } ?>

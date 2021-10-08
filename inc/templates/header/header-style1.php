<?php
	$logo                = ot_get_option( 'logo', Thb_Theme_Admin::$thb_theme_directory_uri . 'assets/img/logo-light.png' );
	$logo_dark           = ot_get_option( 'logo_dark', Thb_Theme_Admin::$thb_theme_directory_uri . 'assets/img/logo-dark.png' );
	$fixed_header_shadow = ot_get_option( 'fixed_header_shadow' );
	$row_classes[]       = 'row align-middle';
	$row_classes[]       = ot_get_option( 'header_fullwidth', 'off' ) == 'on' ? 'full-width-row' : '';

	$header_class[] = 'header style1';
	$header_class[] = $fixed_header_shadow;
?>
<header class="<?php echo esc_attr( implode( ' ', $header_class ) ); ?>">
	<div class="<?php echo esc_attr( implode( ' ', $row_classes ) ); ?>">
		<div class="small-6 columns hide-for-large toggle-holder">
			<?php do_action( 'thb_mobile_toggle' ); ?>
		</div>
		<div class="large-6 columns show-for-large">
			<div class="menu-holder">
				<nav id="nav">
					<?php if ( has_nav_menu( 'nav-menu' ) ) { ?>
						<?php
						wp_nav_menu(
							array(
								'theme_location' => 'nav-menu',
								'depth'          => 4,
								'container'      => false,
								'menu_class'     => 'thb-full-menu',
								'walker'         => new thb_MegaMenu(),
							)
						);
						?>
					<?php } ?>
				</nav>
			</div>
		</div>
		<div class="logo-holder">
			<a href="<?php echo esc_url( home_url() ); ?>" class="logolink">
				<img src="<?php echo esc_attr( $logo ); ?>" class="logoimg bg--light desktop-logo" alt="<?php bloginfo( 'name' ); ?>"/>
				<img src="<?php echo esc_attr( $logo_dark ); ?>" class="logoimg bg--dark desktop-logo" alt="<?php bloginfo( 'name' ); ?>"/>
				<img src="<?php echo get_stylesheet_directory_uri() . '/asset/img/advercado-mobile-logo.svg'; ?>" class="logoimg mobile-logo" alt="<?php bloginfo( 'name' ); ?>"/>
			</a>
		</div>
		<div class="small-6 columns account-holder">
			<?php do_action( 'thb_secondary_area' ); ?>
		</div>
	</div>
</header>

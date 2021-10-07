<?php
/**
 * Do a hard unregister of an object's callback for the specified event name
 * and priority level.
 *
 * In WordPress, the callback key (or unique ID) is generated using the hash ID of
 * the object concatenated with the method name.  In the event that you do not have
 * the object itself, then we use this hard approach to first first the callback
 * function and then do the remove.
 *
 * This process works for both filter and action events.
 *
 * @since 1.0.0
 *
 * @param string $event_name The name of the filter or action event
 * @param integer $priority Priority level
 * @param string $method_name Callback's method name
 *
 * @return void
 */
function do_hard_unregister_object_callback( $event_name, $priority, $method_name ) {
	$callback_function = get_object_callback_unique_id_from_registry( $event_name, $priority, $method_name );
	if ( ! $callback_function ) {
		return false;
	}

	remove_filter( $event_name, $callback_function, $priority );
}

/**
 * Get the object's event registry unique ID for the given event name, priority
 * level, and method name.
 *
 * @since 1.0.0
 *
 * @param string $event_name The name of the filter or action event
 * @param integer $priority Priority level
 * @param string $method_name Callback's method name
 *
 * @return string|boolean
 */
function get_object_callback_unique_id_from_registry( $event_name, $priority, $method_name ) {
	global $wp_filter;

	if ( ! isset( $wp_filter[ $event_name ][ $priority ] ) ) {
		return false;
	}

	foreach( $wp_filter[ $event_name ][ $priority ] as $callback_function => $registration ) {

		if ( strpos( $callback_function, $method_name, 32) !== false) {
			return $callback_function;
		}
	}

	return false;
}
?>

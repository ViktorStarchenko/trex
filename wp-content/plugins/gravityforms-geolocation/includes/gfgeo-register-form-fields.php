<?php
// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register geolocation fields group
 */
class GFGEO_Fields_Group extends GF_Field {

	public $type = 'gfgeo_group_field';

	/**
	 * Button fields and group.
	 *
	 * @param [type] $field_groups [description]
	 */
	public function add_button( $field_groups ) {

		//geolocation fields group
		$field_groups[] = array(
			'name'   => 'gfgeo_geolocation_fields',
			'label'  => __( 'Geolocation Fields', 'gfgeo' ),
			'fields' => apply_filters( 'gfgeo_field_buttons', array(), $field_groups ),
		);

		return $field_groups;
	}
}
GF_Fields::register( new GFGEO_Fields_Group() );

// include fields files
include_once( 'fields/class-gfgeo-geocoder-field.php' );
include_once( 'fields/class-gfgeo-locator-button-field.php' );
include_once( 'fields/class-gfgeo-full-address-field.php' );
include_once( 'fields/class-gfgeo-coordinates-field.php' );
include_once( 'fields/class-gfgeo-google-map-field.php' );
//include( 'fields/class-gfgeo-map-icons-field.php' );


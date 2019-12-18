<?php 
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) {
    exit;
}

class GFGEO_GMW_Map_Icons_Field extends GF_Field {

	public $type = 'gfgeo_gmw_map_icons';

	/**
	 * Field Title.
	 *
	 * @return [type] [description]
	 */
	public function get_form_editor_field_title() {
		return __( 'GEO my WP Map Icons', 'gfgeo' );
	}

	/**
	 * Add field button
	 *
	 * @return [type] [description]
	 */
	public function get_form_editor_button() {
		return array(
			'group' => 'gfgeo_geolocation_fields',
			'text'  => __( 'Map Icons', 'gfgeo' )
		);
	}

	//settings
	function get_form_editor_field_settings() {

		return array(
			'conditional_logic_field_setting',
			'label_setting', 
			'description_setting',
			'css_class_setting',
			'visibility_setting'
		);
	}

	public function is_conditional_logic_supported() {
		return true;
	}

	public function get_field_input( $form, $value = '', $entry = null ) {

		$gmw_options = get_option( 'gmw_options' );

		$input  = '';
		$input .= '<div class="gfgeo-gmw-map-icons-wrapper">';
			
		$map_icons = $gmw_options['pt_map_icons']['all_icons'];
		$icons_url = $gmw_options['pt_map_icons']['url'];
		$cic 	   = 1;
			
		$chosen_icon = ! empty( $_POST['gfgeo_field_map_icons'] ) ? esc_attr( $_POST['gfgeo_field_map_icons'] ) : '';
			
		foreach ( $map_icons as $map_icon ) {

			$checked = ( ( $chosen_icon == $map_icon ) || $cic == 1 ) ? 'checked="checked"' : '';
			$input  .= '<span><input type="radio" name="gfgeo_field_map_icons" value="'.$map_icon.'" '.$checked.' />';
			$input  .= '<img src="'.$icons_url.$map_icon.'" style="width:30px;height:auto" /></span>';
			$cic++;
		}

		$input .= '</div>';

		return sprintf( "<div class='ginput_container ginput_gfgeo_gmw_map_icons'>%s</div>", $input );
	}

	public function allow_html() {
		return true;
	}
}

if ( class_exists( 'GMW_Premium_Settings_Addon' ) ) {
	GF_Fields::register( new GFGEO_GMW_Map_Icons_Field() );
}

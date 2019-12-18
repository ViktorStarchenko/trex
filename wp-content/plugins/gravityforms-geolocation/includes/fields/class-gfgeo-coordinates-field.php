<?php
// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register coordinates field
 *
 * @since  2.0
 *
 */
class GFGEO_Coordinates_Field extends GF_Field {

	/**
	 * Field type
	 * @var string
	 */
	public $type = 'gfgeo_coordinates';

	/**
	 * Field button
	 *
	 * @return [type] [description]
	 */
	public function get_form_editor_button() {
		return array(
			'group' => 'gfgeo_geolocation_fields',
			'text'  => __( 'Coordinates', 'gfgeo' ),
		);
	}

	/**
	 * Field label
	 * @return [type] [description]
	 */
	public function get_form_editor_field_title() {
		return __( 'Coordinates', 'gfgeo' );
	}

	/**
	 * Field settings
	 *
	 * @return [type] [description]
	 */
	public function get_form_editor_field_settings() {
		return array(
			// ggf options
			'gfgeo-geocoder-id',
			'gfgeo-latitude-placeholder',
			'gfgeo-longitude-placeholder',
			'gfgeo-custom-field-method',            //gform options
			'post_custom_field_setting',
			'conditional_logic_field_setting',
			'prepopulate_field_setting',
			'error_message_setting',
			'label_setting',
			'label_placement_setting',
			'admin_label_setting',
			'size_setting',
			'rules_setting',
			'visibility_setting',
			'duplicate_setting',
			'description_setting',
			'css_class_setting',
			'gfgeo-google-maps-link',
		);
	}

	/**
	 * Conditional logic
	 * @return boolean [description]
	 */
	public function is_conditional_logic_supported() {
		return true;
	}

	/**
	 * Generate the front-end input field
	 *
	 * @param  [type] $form  [description]
	 * @param  string $value [description]
	 * @param  [type] $entry [description]
	 * @return [type]        [description]
	 *
	 */
	public function get_field_input( $form, $value = '', $entry = null ) {

		$form_id         = absint( $form['id'] );
		$is_entry_detail = $this->is_entry_detail();
		$is_form_editor  = $this->is_form_editor();

		$logic_event = ! $is_form_editor && ! $is_entry_detail ? $this->get_conditional_logic_event( 'keyup' ) : '';
		$id          = (int) $this->id;
		$field_id    = $is_entry_detail || $is_form_editor || $form_id == 0 ? "input_$id" : 'input_' . $form_id . "_$id";

		$size         = esc_attr( $this->size );
		$class_suffix = $is_entry_detail ? '_admin' : '';
		$class        = $class_suffix;

		$max_length = is_numeric( $this->maxLength ) ? "maxlength='{$this->maxLength}'" : '';

		$tabindex      = $this->get_tabindex();
		$disabled_text = $is_form_editor ? 'disabled="disabled"' : '';

		$geocoder_id = ! empty( $this->gfgeo_geocoder_id ) ? esc_attr( $form_id . '_' . $this->gfgeo_geocoder_id ) : '';

		$lat_placeholder_value = ! empty( $this->gfgeo_latitude_placeholder ) ? $this->gfgeo_latitude_placeholder : __( 'Latitude', 'gfgeo' );
		$lng_placeholder_value = ! empty( $this->gfgeo_longitude_placeholder ) ? $this->gfgeo_longitude_placeholder : __( 'Longitude', 'gfgeo' );

		$lat_placeholder = sprintf( "placeholder='%s'", esc_attr( $lat_placeholder_value ) );
		$lng_placeholder = sprintf( "placeholder='%s'", esc_attr( $lng_placeholder_value ) );

		if ( ! is_array( $value ) && ! is_serialized( $value ) ) {

			if ( strpos( $value, '|' ) !== false ) {

				$latlng = explode( '|', $value );

			} elseif ( strpos( $value, ',' ) !== false ) {

				$latlng = explode( ',', $value );

			} else {

				$latlng = array( '', '' );
			}

			$value = array(
				'latitude'  => $latlng[0],
				'longitude' => $latlng[1],
			);

		} else {

			$value = maybe_unserialize( $value );
		}

		$latitude_val  = ! empty( $value['latitude'] ) ? sanitize_text_field( esc_attr( $value['latitude'] ) ) : '';
		$longitude_val = ! empty( $value['longitude'] ) ? sanitize_text_field( esc_attr( $value['longitude'] ) ) : '';

		$input  = '<span id="' . $field_id . '_latitude_container" class="ginput_left">';
		$input .= '<input name="input_' . $id . '[latitude]" id="' . $field_id . '_latitude" data-field_id="' . $form_id . '_' . $id . '" data-coords_field="latitude" data-geocoder_id="' . $geocoder_id . '" type="text" value="' . $latitude_val . '" class="' . $class . ' gfgeo-coordinates-field gfgeo-latitude-field" ' . $max_length . ' ' . $tabindex . ' ' . $logic_event . ' ' . $lat_placeholder . ' ' . $disabled_text . ' />';
		$input .= '</span>';

		$input .= '<span id="' . $field_id . '_longitude_container" class="ginput_right">';
		$input .= '<input name="input_' . $id . '[longitude]" id="' . $field_id . '_longitude" data-field_id="' . $form_id . '_' . $id . '" data-coords_field="longitude" data-geocoder_id="' . $geocoder_id . '" type="text" value="' . $longitude_val . '" class="' . $class . ' gfgeo-coordinates-field gfgeo-longitude-field" ' . $max_length . ' ' . $tabindex . ' ' . $logic_event . ' ' . $lng_placeholder . ' ' . $disabled_text . '/>';

		$input .= '</span>';

		return sprintf( "<div id='gfgeo-coordinates-wrapper-%s' class='ginput_complex ginput_container gfgeo-coordinates-wrapper' data-geocoder_id='%s' data-field_id='%s'>%s</div>", $form_id . '_' . $id, $geocoder_id, $form_id . '_' . $id, $input );
	}

	/**
	 * Generate coordinates data for email template tags
	 *
	 * @param  [type] $geocoder_data [description]
	 * @param  [type] $input_id      [description]
	 * @param  [type] $entry         [description]
	 * @param  [type] $form          [description]
	 * @param  [type] $modifier      [description]
	 * @param  [type] $raw_value     [description]
	 * @param  [type] $url_encode    [description]
	 * @param  [type] $esc_html      [description]
	 * @param  [type] $format        [description]
	 * @param  [type] $nl2br         [description]
	 * @return [type]                [description]
	 */
	public function get_value_merge_tag( $coordinates, $input_id, $entry, $form, $modifier, $raw_value, $url_encode, $esc_html, $format, $nl2br ) {

		$latlng = maybe_unserialize( $raw_value );

		// display specific fields based on tag entered
		// Will be used in confirmation page, email or query string
		if ( strpos( $input_id, '.' ) !== false ) {

			$tag_field_id = substr( $input_id, strpos( $input_id, '.' ) + 1 );

			if ( $tag_field_id == 1 && ! empty( $latlng['latitude'] ) ) {

				return $latlng['latitude'];

			} elseif ( $tag_field_id == 2 && ! empty( $latlng['longitude'] ) ) {

				return $latlng['longitude'];

			} else {

				return '';
			}

			// otherwise show all fields
		} else {

			// if passing via querystring
			if ( ! empty( $form['confirmation']['queryString'] ) ) {

				if ( is_array( $latlng ) ) {

					return $latlng['latitude'] . '|' . $latlng['longitude'];

				} else {

					return $latlng;
				}

				// confirmation page or email
			} else {

				$map_link = ! empty( $this->gfgeo_google_maps_link ) ? true : false;

				return $this->get_output_coordinates( $raw_value, $map_link );
			}
		}
	}

	/**
	 * Serialize the coordinates array before saving to entry. Gform does not allow saving unserialized arrays.
	 *
	 * @param  [type] $value      [description]
	 * @param  [type] $form       [description]
	 * @param  [type] $input_name [description]
	 * @param  [type] $lead_id    [description]
	 * @param  [type] $lead       [description]
	 *
	 * @return [type]             [description]
	 */
	public function get_value_save_entry( $value, $form, $input_name, $lead_id, $lead ) {

		if ( is_array( $value ) ) {
			foreach ( $value as &$v ) {
				$v = $this->sanitize_entry_value( $v, $form['id'] );
			}
		} else {
			$value = $this->sanitize_entry_value( $value, $form['id'] );
		}

		return empty( $value ) ? '' : is_array( $value ) ? serialize( $value ) : $value;
	}

	/**
	 * Display coordinates in entry list page
	 *
	 * @param  [type] $value    [description]
	 * @param  [type] $entry    [description]
	 * @param  [type] $field_id [description]
	 * @param  [type] $columns  [description]
	 * @param  [type] $form     [description]
	 * @return [type]           [description]
	 *
	 */
	public function get_value_entry_list( $coordinates, $entry, $field_id, $columns, $form ) {

		if ( empty( $coordinates ) ) {
			return '';
		}

		return $this->get_output_coordinates( $coordinates, true );
	}

	/**
	 * Display coordinates in entry page
	 *
	 * @param  [type] $value    [description]
	 * @param  [type] $entry    [description]
	 * @param  [type] $field_id [description]
	 * @param  [type] $columns  [description]
	 * @param  [type] $form     [description]
	 * @return [type]           [description]
	 *
	 */
	public function get_value_entry_detail( $coordinates, $currency = '', $use_text = false, $format = 'html', $media = 'screen' ) {

		if ( empty( $coordinates ) || $format == 'text' ) {
			return $coordinates;
		}

		// if in front-end submission display map link only if needed
		if ( ! empty( $_POST['gform_submit'] ) ) {

			$map_link = ! empty( $this->gfgeo_google_maps_link ) ? true : false;

			return $this->get_output_coordinates( $coordinates, $map_link );

			// in back end entry page display it all the time
		} else {

			return $this->get_output_coordinates( $coordinates, true );
		}
	}

	/**
	 * Generate the coordinates output
	 * @param  [type] $coordinates [description]
	 * @return [type]              [description]
	 */
	public function get_output_coordinates( $coordinates, $map_link = false ) {

		$coordinates = maybe_unserialize( $coordinates );

		if ( empty( $coordinates ) || ! is_array( $coordinates ) ) {
			return $coordinates;
		}

		$output  = '';
		$output .= '<li><strong>' . __( 'Latitude', 'gfgeo' ) . ':</strong> ' . $coordinates['latitude'] . '</li>';
		$output .= '<li><strong>' . __( 'Longitude', 'gfgeo' ) . ':</strong> ' . $coordinates['longitude'] . '</li>';

		if ( $map_link ) {

			$map_it = GFGEO_Helper::get_map_link( $coordinates );

			$output .= '<li>' . $map_it . '</li>';
		}

		return "<ul class='bulleted'>{$output}</ul>";
	}

	public function allow_html() {
		return false;
	}
}
GF_Fields::register( new GFGEO_Coordinates_Field() );

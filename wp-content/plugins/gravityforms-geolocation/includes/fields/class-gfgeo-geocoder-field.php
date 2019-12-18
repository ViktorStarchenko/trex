<?php
// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register Geocoder Field
 *
 * @since  2.0
 */
class GFGEO_Geocoder_Field extends GF_Field {

	/**
	 * Field type
	 *
	 * @var string
	 */
	public $type = 'gfgeo_geocoder';

	/**
	 * Field button.
	 *
	 * @return [type] [description]
	 */
	public function get_form_editor_button() {
		return array(
			'group' => 'gfgeo_geolocation_fields',
			'text'  => __( 'Geocoder', 'gfgeo' ),
		);
	}

	/**
	 * Field label.
	 *
	 * @return [type] [description]
	 */
	public function get_form_editor_field_title() {
		return __( 'Geocoder', 'gfgeo' );
	}

	/**
	 * Field settings.
	 *
	 * @return [type] [description]
	 */
	function get_form_editor_field_settings() {
		return array(
			'gfgeo-geocoder-settings',
			'post_custom_field_setting',
			'gfgeo-location-found-message',
			'gfgeo-hide-location-failed-message',
			'prepopulate_field_setting',
			'post_custom_field_setting',
			'prepopulate_field_setting',
			'gfgeo-ip-locator-status',
			'gfgeo-google-maps-link',
			'rules_setting',
			'duplicate_setting',
		);
	}

	/**
	 * conditional logic
	 *
	 * @return boolean [description]
	 */
	public function is_conditional_logic_supported() {
		return false;
	}

	public $geocoder_fields_tags = array(
		'',
		'place_name',
		'street_number',
		'street_name',
		'street',
		'premise',
		'subpremise',
		'neighborhood',
		'city',
		'county',
		'region_code',
		'region_name',
		'postcode',
		'country_code',
		'country_name',
		'address',
		'formatted_address',
		'latitude',
		'longitude',
	);

	/**
	 * Field input
	 *
	 * @param  [type] $form  [description]
	 * @param  string $value [description]
	 * @param  [type] $entry [description]
	 *
	 * @return [type]        [description]
	 */
	public function get_field_input( $form, $value = '', $entry = null ) {

		// Form Editor
		if ( $this->is_form_editor() ) {

			$content  = '<div class="gfgeo-hidden-container" style="border: 1px solid #E4E4E4;padding: 20px;background-color: #F6F6F6">';
			$content .= __( 'Note: This field will be hidden in the front-end form.', 'gfgeo' );
			$content .= '</span></div>';

			return $content;

			// Front-end form
		} else {

			// if updating post and geocoder saved in custom field will will get the value
			// directly from the custom field. For some reason the plugin returns
			// it as a comma separated value rather than serialized array which is the way it is being saved.
			if ( $form['gfgeo_post_update'] && ! empty( $this->postCustomFieldName ) ) {
				$value = get_post_meta( GFGEO_Render_Form::$update_post_id, sanitize_key( $this->postCustomFieldName ), true );
			}

			$value    = ! empty( $value ) ? maybe_unserialize( $value ) : array();
			$id       = (int) $this->id;
			$field_id = $geocoder_id = esc_attr( $form['id'] . '_' . $this->id );

			$input = '';

			// if not a form submission
			if ( empty( $_POST[ 'is_submit_' . $form['id'] ] ) ) {

				// check if default coords pass by URL. Possible from another from
				if ( ! empty( $this->allowsPrepopulate ) && ! empty( $this->inputName ) && ! empty( $_GET[ $this->inputName ] ) && strpos( $_GET[ $this->inputName ], '|' ) !== false ) {

					$input_coords = explode( '|', $_GET[ $this->inputName ] );
					$default_lat  = ! empty( $input_coords[0] ) ? sanitize_text_field( esc_attr( $input_coords[0] ) ) : '';
					$default_lng  = ! empty( $input_coords[1] ) ? sanitize_text_field( esc_attr( $input_coords[1] ) ) : '';

					// if value exists from custom fields or user meta
				} elseif ( ! empty( $value['latitude'] ) && ! empty( $value['longitude'] ) ) {

					$default_lat = sanitize_text_field( esc_attr( $value['latitude'] ) );
					$default_lng = sanitize_text_field( esc_attr( $value['longitude'] ) );

					//Otherwise, check for default coordinates in form options
				} elseif ( ! empty( $this->gfgeo_default_latitude ) && ! empty( $this->gfgeo_default_longitude ) ) {

					$default_lat = sanitize_text_field( esc_attr( $this->gfgeo_default_latitude ) );
					$default_lng = sanitize_text_field( esc_attr( $this->gfgeo_default_longitude ) );
				}

				// generate default coords if set. Only on first page load.
				if ( ! empty( $default_lat ) && ! empty( $default_lng ) ) {

					$input .= '<div class="gfgeo-default-coords-wrapper" data-geocoder_id="' . $geocoder_id . '">';
					$input .= '<input type="hidden" name="gfgeo_default_coords[latitude]" class="gfgeo_default_latitude ' . $field_id . '" value="' . $default_lat . '" />';
					$input .= '<input type="hidden" name="gfgeo_default_coords[longitude]" class="gfgeo_default_longitude ' . $field_id . '" value="' . $default_lng . '" />';
					$input .= '</div>';
				}
			}

			// generate geocoder hidden fields
			$input .= '<div id="gfgeo-geocoded-hidden-fields-wrapper-' . $field_id . '" class="gfgeo-geocoded-hidden-fields-wrapper">';

			//if ( empty( $_POST['is_submit_'.$form['id']] ) && ! empty( $this->postCustomFieldName ) ) {

			//	$value = get_post_meta( GFGEO_Render_Form::$update_post_id, sanitize_key( $this->postCustomFieldName ), true );
			//}

			// loop through location fields and create hidden geocoded fields
			foreach ( GFGEO_Helper::get_location_fields() as $name => $label ) {

				if ( '' == $name ) {
					continue;
				}

				$name = esc_attr( $name );

				// get default field value
				$field_value = ! empty( $value[ $name ] ) ? esc_attr( sanitize_text_field( stripslashes( $value[ $name ] ) ) ) : '';

				$input .= '<input type="hidden" id="input_' . $field_id . '_' . $name . '" name="input_' . $id . '[' . $name . ']" class="gfgeo-geocoded-field-' . $field_id . ' ' . $name . ' gfgeo-geocoded-field-' . $name . '" data-field_id="' . $field_id . '" value="' . $field_value . '">';
			}

			$input .= '</div>';

			$page_loaded = ! empty( $_POST[ 'gfgeo_page_' . $this->pageNumber . '_loaded' ] ) ? '1' : '';

			//$input .= '<input type="hidden" name="gfgeo_page_'.$this->pageNumber.'_loaded" id="gfgeo-page-'.$this->pageNumber.'-loaded" value="'.$page_loaded.'" />';

			return sprintf( '<div style="display:none" class="ginput_container ginput_gfgeo_geocoder">%s</div>', $input );
		}
	}

	/**
	 * Generate geocoded data output
	 *
	 * @param  [type] $geocoded_data [description]
	 * @return [type]                [description]
	 */
	public function get_geocoded_data_output( $geocoder_data, $map_link = false ) {

		// unserialize data
		$geocoder_data = maybe_unserialize( $geocoder_data );

		if ( empty( $geocoder_data ) || ! is_array( $geocoder_data ) ) {
			return $geocoder_data;
		}

		$map_it = '';

		// create google maps only if enabled
		if ( $map_link && ! empty( $geocoder_data['latitude'] ) && ! empty( $geocoder_data['longitude'] ) ) {

			$map_it = GFGEO_Helper::get_map_link( $geocoder_data );
		}

		$default_geo_fields = GFGEO_Helper::get_location_fields();

		unset( $default_geo_fields[''], $default_geo_fields['status'], $geocoder_data['status'] );

		// replace keys of the original array with address fields labels
		// this function uses array_intersect because by default array_combine
		// return false if the lenght is unequal in both array.
		// and since the number of output fields chagned is some versions
		// the lenght of array is different io older data.
		$geocoder_data = array_combine( array_intersect_key( $default_geo_fields, $geocoder_data ), array_intersect_key( $geocoder_data, $default_geo_fields ) );

		$output = '';

		// generate the output list of geocoded fields
		foreach ( $geocoder_data as $name => $value ) {

			// skip the status value
			if ( 'status' == $name || '' == $name ) {
				continue;
			}

			$value = ! empty( $value ) ? esc_html( $value ) : __( 'N/A', 'gfgeo' );

			$output .= '<li><strong>' . esc_attr( $name ) . ':</strong> ' . $value . '</li>';
		}

		if ( ! empty( $map_it ) ) {

			$output .= '<li>' . $map_it . '</li>';
		}

		return "<ul class='bulleted'>{$output}</ul>";
	}

	/**
	 * Generate geocoder data for email template tags
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
	public function get_value_merge_tag( $geocoder_data, $input_id, $entry, $form, $modifier, $raw_value, $url_encode, $esc_html, $format, $nl2br ) {

		if ( empty( $geocoder_data ) ) {
			return $geocoder_data;
		}

		$geocoder_data = maybe_unserialize( $raw_value );

		// display specific fields based on tag entered
		// Will be used in confirmation page, email or query string
		if ( strpos( $input_id, '.' ) !== false ) {

			$tag_field_id = substr( $input_id, strpos( $input_id, '.' ) + 1 );

			if ( ! empty( $geocoder_data[ $this->geocoder_fields_tags[ $tag_field_id ] ] ) ) {

				return $geocoder_data[ $this->geocoder_fields_tags[ $tag_field_id ] ];

			} else {

				return '';
			}

			// if passing value as a whole
		} else {

			// if passing via querystring
			if ( ! empty( $form['confirmation']['queryString'] ) ) {

				if ( is_array( $geocoder_data ) ) {

					return implode( '|', $geocoder_data );

				} else {

					return $geocoder_data;
				}
			} else {

				$map_link = ! empty( $this->gfgeo_google_maps_link ) ? true : false;

				return $this->get_geocoded_data_output( $raw_value, $map_link );
			}
		}
	}

	/**
	 * Serialize the geocoded array before saving to entry. Gform not allow saving unserialized arrays.
	 *
	 * @param  [type] $value      [description]
	 * @param  [type] $form       [description]
	 * @param  [type] $input_name [description]
	 * @param  [type] $lead_id    [description]
	 * @param  [type] $lead       [description]
	 *
	 * @return [type]             [description]
	 */
	public function get_value_save_entry( $value, $form, $input_name, $entry_id, $entry ) {

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
	 * Display geocoded in entry list page
	 *
	 * @param  [type] $value    [description]
	 * @param  [type] $entry    [description]
	 * @param  [type] $field_id [description]
	 * @param  [type] $columns  [description]
	 * @param  [type] $form     [description]
	 * @return [type]           [description]
	 *
	 */
	public function get_value_entry_list( $geocoded_data, $entry, $field_id, $columns, $form ) {

		if ( empty( $geocoded_data ) ) {
			return '';
		}

		return __( 'See data in entry page', 'gfgeo' );
	}

	/**
	 * Display geocoded data in entry page
	 *
	 * @param  [type] $value    [description]
	 * @param  [type] $entry    [description]
	 * @param  [type] $field_id [description]
	 * @param  [type] $columns  [description]
	 * @param  [type] $form     [description]
	 * @return [type]           [description]
	 *
	 */
	public function get_value_entry_detail( $geocoder_data, $currency = '', $use_text = false, $format = 'html', $media = 'screen' ) {

		if ( empty( $geocoder_data ) || 'text' == $format ) {
			return $geocoder_data;
		}

		return $this->get_geocoded_data_output( $geocoder_data, true );
	}

	public function allow_html() {
		return false;
	}
}
GF_Fields::register( new GFGEO_Geocoder_Field() );

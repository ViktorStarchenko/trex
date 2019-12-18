<?php
// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * GFGEO_Form_Editor
 *
 * Modify the "Form Editor" page of a form; Apply GGF settings to this page
 */
class GFGEO_Form_Editor {

	/**
	 * __construct function.
	 *
	 * @access public
	 * @return void
	 */
	public function __construct() {

		// abort if not editor page
		if ( empty( $_GET['id'] ) || 'gf_edit_forms' != $_GET['page'] || ! empty( $_GET['view'] ) ) {
			return;
		}

		add_action( 'gform_field_standard_settings', array( $this, 'fields_settings' ), 10, 2 );
		add_filter( 'gform_tooltips', array( $this, 'tooltips' ) );
		add_action( 'gform_editor_js_set_default_values', array( $this, 'set_default_labels' ) );
		add_action( 'gform_admin_pre_render', array( $this, 'render_form' ) );
		add_filter( 'gform_noconflict_scripts', array( $this, 'no_conflict_scripts' ) );
		add_filter( 'gform_noconflict_styles', array( $this, 'no_conflict_styles' ) );
	}

	/**
	 * Allow GFGEO scripts to load in no conflict mode
	 *
	 * @param  [type] $args [description]
	 *
	 * @return [type]       [description]
	 */
	public function no_conflict_scripts( $args ) {

		$args[] = 'gfgeo';
		$args[] = 'google-maps';
		$args[] = 'gfgeo-form-editor';

		return $args;
	}

	/**
	 * Allow GFGEO styles to load in no conflict mode
	 *
	 * @param  [type] $args [description]
	 *
	 * @return [type]       [description]
	 */
	public function no_conflict_styles( $args ) {

		$args[] = 'gfgeo';

		return $args;
	}

	/**
	 * Geolocation fields options
	 *
	 * @param  [type] $position [description]
	 * @param  [type] $form_id  [description]
	 *
	 * @return [type]           [description]
	 */
	public function fields_settings( $position, $form_id ) {

		if ( 10 == $position ) {
			?>

			<!-- default latitude -->
			<li class="field_setting gfgeo-settings gfgeo-geocoder-section-start">
				<h3> 
					<?php _e( 'Geolocation options', 'gfgeo' ); ?> 
				</h3>
			</li>

			<!-- default latitude -->
			<li class="field_setting gfgeo-settings gfgeo-geocoder-settings">
				<label for="gfgeo-default-latitude"> 
					<?php _e( 'Default Latitude', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_default_latitude_tt' ); ?>
				</label> 
				<input 
					type="text" 
					id="gfgeo-default-latitude" 
					size="25" 
					onkeyup="SetFieldProperty( 'gfgeo_default_latitude', this.value );">
			</li>

			<!-- default longitude -->

			<li class="field_setting gfgeo-settings gfgeo-geocoder-settings">
				<label for="gfgeo-default-longitude"> 
					<?php _e( 'Default Longitude', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_default_longitude_tt' ); ?>
				</label> 
				<input 
					type="text" 
					id="gfgeo-default-longitude" 
					size="25" 
					onkeyup="SetFieldProperty( 'gfgeo_default_longitude', this.value );">
			</li>

			<!-- Page locator -->
			<li class="field_setting gfgeo-settings gfgeo-geocoder-settings gfgeo-page-locator" >
				<input 
					type="checkbox" 
					id="gfgeo-page-locator" 
					onclick="SetFieldProperty( 'gfgeo_page_locator', this.checked );" 
				/>
				<label for="gfgeo-page-locator" class="inline"> 
					<?php _e( 'Enable Page Locator', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_page_locator_tt' ); ?>
				</label>
			</li>

		<?php } ?>

		<?php if ( 800 == $position ) { ?>

			<!-- User meta field -->
			<li class="field_setting gfgeo-settings gfgeo-geocoder-settings gfgeo-user-meta-field" >

				<label for="gfgeo-user-meta-field"> 
					<?php _e( 'User Meta Field Name', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_user_meta_field_tt' ); ?>
				</label>

				<input 
					type="text" 
					size="35" 
					id="gfgeo-user-meta-field" 
					class="" 
					onkeyup="SetFieldProperty( 'gfgeo_user_meta_field', this.value );"
				/>
			</li>

			<!-- geocoder meta fields -->
			<li class="field_setting gfgeo-settings gfgeo-geocoder-settings gfgeo-geocoder-custom-meta" >
				<label>
					<?php _e( 'Meta Fields Setup', 'gfgeo' ); ?>
					<?php gform_tooltip( 'gfgeo_geocoder_meta_fields_setup_tt' ); ?>
					<a 
						href="#" 
						title="show fields" 
						onclick="event.preventDefault();jQuery( this ).closest( 'li' ).find( '.gfgeo-geocoder-meta-fields-wrapper' ).slideToggle();">
						<?php _e( 'Show Fields', 'gfgeo' ); ?>
					</a>
				</label> 
				<?php
				GFGEO_Helper::custom_meta_fields( 'custom_field' );
				?>
			</li>

		<?php } ?>

		<?php if ( 300 == $position ) { ?>

			<li class="field_setting gfgeo-settings gfgeo-custom-field-method">
				<input 
					type="checkbox" 
					id="gfgeo-custom-field-method" 
					onclick="SetFieldProperty( 'gfgeo_custom_field_method', this.checked );" 
				/>
				<label for="gfgeo-custom-field-method" class="inline"> 
					<?php _e( 'Save custom field as serialized array', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_custom_field_method_tt' ); ?>
				</label>
			</li>

		<?php } ?>

		<?php if ( 10 == $position ) { ?>

			<!-- Location output fields -->

			<li class="field_setting gfgeo-settings gfgeo-dynamic-location-field">

				<label for="gfgeo-dynamic-location-field">
					<?php _e( 'Dynamic Location Field', 'gfgeo' ); ?>
					<?php gform_tooltip( 'gfgeo_dynamic_location_field_tt' ); ?>
				</label> 

				<select name="gfgeo_dynamic_location_field" id="gfgeo-dynamic-location-field" onchange="SetFieldProperty( 'gfgeo_dynamic_location_field', jQuery(this).val() );">
					<?php
					foreach ( GFGEO_Helper::get_location_fields() as $value => $name ) {

						if ( 'status' == $value ) {
							continue;
						}

						echo '<option value="' . $value . '">' . esc_attr( $name ) . '</option>';
					}
					?>
				</select>
			</li>

			<!-- gecoder fields ID -  -->

			<li class="field_setting gfgeo-settings gfgeo-geocoder-id">
				<label for="gfgeo-geocoder-id"> 
					<?php _e( 'Geocoder ID', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_geocoder_id_tt' ); ?>
				</label> 
				<select 
					name="gfgeo_geocoder_id" 
					id="gfgeo-geocoder-id"
					class="gfgeo-geocoder-id"
					onchange="SetFieldProperty( 'gfgeo_geocoder_id', jQuery( this ).val() );"
				>
				<!-- values for this field generate by jquery function -->
				<option value=""><?php _e( 'N/A', 'gfgeo' ); ?></option>
				</select>
			</li>

			<!-- Locator button label -->

			<li class="field_setting gfgeo-settings gfgeo-locator-button-label">
				<label for="gfgeo-locator-button-label"> 
					<?php _e( 'Button Label', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_locator_button_label_tt' ); ?>
				</label> 
				<input 
					type="text" 
					size="35" 
					id="gfgeo-locator-button-label" 
					class="" 
					onkeyup="SetFieldProperty( 'gfgeo_locator_button_label', this.value );"
				/>
			</li>

			<!-- infield locator button -->

			<li class="field_setting gfgeo-settings gfgeo-infield-locator-button">
				<input 
					type="checkbox" 
					id="gfgeo-infield-locator-button" 
					onclick="SetFieldProperty( 'gfgeo_infield_locator_button', this.checked );" 
				/>
				<label for="gfgeo-infield-locator-button" class="inline"> 
					<?php _e( 'Enable locator button', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_infield_locator_button_tt' ); ?>
				</label>
			</li>

			<!-- IP locator status  -->

			<li class="field_setting gfgeo-settings gfgeo-ip-locator-status">
				<label for="gfgeo-ip-locator-status"> 
					<?php _e( 'IP Address Locator', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_ip_locator_status_tt' ); ?>
				</label> 
				<select 
					<?php
					if ( ! GFGEO_IP_LOCATOR ) {
						echo 'disabled="disabled"';}
?>
					name="gfgeo_ip_locator_status" 
					id="gfgeo-ip-locator-status"
					class="gfgeo-ip-locator-status"
					onchange="SetFieldProperty( 'gfgeo_ip_locator_status', jQuery( this ).val() );"
				>
					<!-- values for this field generate by jquery function -->
					<option value=""><?php _e( 'Disabled', 'gfgeo' ); ?></option>
					<option value="default"><?php _e( 'Default', 'gfgeo' ); ?></option>
					<option value="fallback"><?php _e( 'Fall-back', 'gfgeo' ); ?></option>

				</select>

				<?php if ( ! GFGEO_IP_LOCATOR ) { ?>
					<br />
					<em style="color:red;font-size: 11px">To enabled this feature navigate to the Gravity Forms Settings page and under the Geolocation tab select the IP Address service that you would like to use.</em>

				<?php } ?>

			</li>

			<!-- Locator found message option -->

			<li class="field_setting gfgeo-settings gfgeo-location-found-message">
				<label for="gfgeo-location-found-message"> 
					<?php _e( 'Location Found Message', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_location_found_message_tt' ); ?>
				</label> 
				<input 
					type="text" 
					size="35" 
					id="gfgeo-location-found-message" 
					class="" 
					onkeyup="SetFieldProperty( 'gfgeo_location_found_message', this.value );"
				/>
			</li>

			<!-- Disable locator failed message -->

			<li class="field_setting gfgeo-settings gfgeo-hide-location-failed-message">
				<input 
					type="checkbox" 
					id="gfgeo-hide-location-failed-message" 
					class="" 
					onclick="SetFieldProperty( 'gfgeo_hide_location_failed_message', this.checked );"
				/>
				<label for="gfgeo-hide-location-failed-message" class="inline"> 
					<?php _e( 'Disable Location Failed Message', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_hide_location_failed_message_tt' ); ?>
				</label> 
			</li>

			<!-- Geocoder GEO my WP  post integrations -->
			<?php
			if ( class_exists( 'GEO_my_WP' ) ) {
				$disabled = false;
				$message  = '';
			} else {
				$disabled = true;
				$message  = __( 'This feature requires <a href="https://wordpress.org/plugins/geo-my-wp/" target="_blank">GEO my WP</a> plugin', 'gfgeo' );
			}
			?>
			<li class="field_setting gfgeo-settings gfgeo-geocoder-settings gfgeo-gmw-post-integration" >	
				<?php if ( ! $disabled ) { ?>
					<input 
						type="checkbox" 
						id="gfgeo-gmw-post-integration" 
						onclick="SetFieldProperty( 'gfgeo_gmw_post_integration', this.checked );"
					/>
				<?php } else { ?>
					<span class="dashicons dashicons-no" style="width:15px;line-height: 1.1;color: red;"></span>
				<?php } ?>

				<label for="gfgeo-gmw-post-integration" class="inline"> 
					<?php _e( 'GEO my WP Post Integration', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_gmw_post_integration_tt' ); ?>
				</label>
				<small style="display: block;color: red;margin-top: 2px;"><?php echo $message; ?></small>
			</li>

			<!-- GMW Phone  -->

			<li class="field_setting gfgeo-settings gfgeo-geocoder-settings gfgeo-gmw-post-integration-wrapper gfgeo-gmw-post-integration-phone">
				<label for="gfgeo-gmw-post-integration-phone"> 
					<?php _e( 'GEO my WP - Phone', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_gmw_post_integration_phone_tt' ); ?>
				</label> 
				<select 
					name="gfgeo_gmw_post_integration_phone" 
					id="gfgeo-gmw-post-integration-phone"
					class="gfgeo-gmw-post-integration-phone"
					onchange="SetFieldProperty( 'gfgeo_gmw_post_integration_phone', jQuery( this ).val() );"
				>
				<!-- values for this field generate by jquery function -->
				<option value=""><?php _e( 'N/A', 'gfgeo' ); ?></option>
				</select>
			</li>

			<!-- GMW Fax  -->

			<li class="field_setting gfgeo-settings gfgeo-geocoder-settings gfgeo-gmw-post-integration-wrapper gfgeo-gmw-post-integration-fax">
				<label for="gfgeo-gmw-post-integration-fax"> 
					<?php _e( 'GEO my WP - Fax', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_gmw_post_integration_fax_tt' ); ?>
				</label> 
				<select 
					name="gfgeo_gmw_post_integration_fax" 
					id="gfgeo-gmw-post-integration-fax"
					class="gfgeo-gmw-post-integration-fax"
					onchange="SetFieldProperty( 'gfgeo_gmw_post_integration_fax', jQuery( this ).val() );"
				>
				<!-- values for this field generate by jquery function -->
				<option value=""><?php _e( 'N/A', 'gfgeo' ); ?></option>
				</select>
			</li>

			<!-- GMW Email  -->

			<li class="field_setting gfgeo-settings gfgeo-geocoder-settings gfgeo-gmw-post-integration-wrapper gfgeo-gmw-post-integration-email">
				<label for="gfgeo-gmw-post-integration-email"> 
					<?php _e( 'GEO my WP - Email', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_gmw_post_integration_email_tt' ); ?>
				</label> 
				<select 
					name="gfgeo_gmw_post_integration_email" 
					id="gfgeo-gmw-post-integration-email"
					class="gfgeo-gmw-post-integration-email"
					onchange="SetFieldProperty( 'gfgeo_gmw_post_integration_email', jQuery( this ).val() );"
				>
				<!-- values for this field generate by jquery function -->
				<option value=""><?php _e( 'N/A', 'gfgeo' ); ?></option>
				</select>
			</li>

			<!-- GMW website  -->

			<li class="field_setting gfgeo-settings gfgeo-geocoder-settings gfgeo-gmw-post-integration-wrapper gfgeo-gmw-post-integration-website">
				<label for="gfgeo-gmw-post-integration-website"> 
					<?php _e( 'GEO my WP - Website', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_gmw_post_integration_website_tt' ); ?>
				</label> 
				<select 
					name="gfgeo_gmw_post_integration_website" 
					id="gfgeo-gmw-post-integration-website"
					class="gfgeo-gmw-post-integration-website"
					onchange="SetFieldProperty( 'gfgeo_gmw_post_integration_website', jQuery( this ).val() );"
				>
				<!-- values for this field generate by jquery function -->
				<option value=""><?php _e( 'N/A', 'gfgeo' ); ?></option>
				</select>
			</li>

			<!-- GEO my WP User integrations -->
			<li class="field_setting gfgeo-settings gfgeo-geocoder-settings gfgeo-gmw-user-integration" >	

				<?php if ( ! $disabled ) { ?>

					<input 
						type="checkbox" 
						id="gfgeo-gmw-user-integration" 
						onclick="SetFieldProperty( 'gfgeo_gmw_user_integration', this.checked );" 
						<?php echo $disabled; ?>
					/>

				<?php } else { ?>

					<span class="dashicons dashicons-no" style="width:15px;line-height: 1.1;color: red;"></span>

				<?php } ?>

				<label for="gfgeo-gmw-user-integration" class="inline"> 
					<?php _e( 'GEO my WP User Integration', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_gmw_user_integration_tt' ); ?>
				</label>

				<small style="display: block;color: red;margin-top: 2px;"><?php echo $message; ?></small>

			</li>

			<!-- latitude placehoolder --> 

			<li class="field_setting gfgeo-settings gfgeo-latitude-placeholder">
				<label for="gfgeo-latitude-placeholder"> 
					<?php _e( 'Latitude Placeholder', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_latitude_placeholder_tt' ); ?>
				</label> 
				<input 
					type="text" 
					size="35" 
					id="gfgeo-latitude-placeholder" 
					data-field="latitude"
					class="coordinates-placeholder"
					onkeyup="SetFieldProperty( 'gfgeo_latitude_placeholder', this.value );"
				/>
			</li>

			<!-- longitude placehoolder --> 
			<li class="field_setting gfgeo-settings gfgeo-longitude-placeholder">
				<label for="gfgeo-longitude-placeholder"> 
					<?php _e( 'Longitude Placeholder', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_longitude_placeholder_tt' ); ?>
				</label> 
				<input 
					type="text" 
					size="35" 
					id="gfgeo-longitude-placeholder" 
					class="coordinates-placeholder"
					data-field="longitude"
					onkeyup="SetFieldProperty( 'gfgeo_longitude_placeholder', this.value );" />
			</li>

			<!--  Map fields -->

			<li class="field_setting gfgeo-settings gfgeo-map-settings">
				<label for="gfgeo-map-default-latitude"> 
					<?php _e( 'Default Latitude', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_map_default_latitude_tt' ); ?>
				</label> 
				<input 
					type="text" 
					id="gfgeo-map-default-latitude" 
					size="15" 
					onkeyup="SetFieldProperty( 'gfgeo_map_default_latitude', this.value );"
				/>
			</li>

			<li class="field_setting gfgeo-settings gfgeo-map-settings">
				<label for="gfgeo-map-default-longitude"> 
					<?php _e( 'Default Longitude', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_map_default_longitude_tt' ); ?>
				</label> 
				<input 
					type="text" 
					id="gfgeo-map-default-longitude" 
					size="15" 
					onkeyup="SetFieldProperty( 'gfgeo_map_default_longitude', this.value );"
				/>
			</li>

			<li class="field_setting gfgeo-settings gfgeo-map-settings">
				<label for="gfgeo-map-type">
					<?php _e( 'Map Type', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_map_type_tt' ); ?>
				</label> 
				<select name="gfgeo_map_type" id="gfgeo-map-type" onchange="SetFieldProperty( 'gfgeo_map_type', jQuery(this).val() );">
						<option value="ROADMAP">ROADMAP</option>
						<option value="SATELLITE">SATELLITE</option>
						<option value="HYBRID">HYBRID</option>
						<option value="TERRAIN">TERRAIN</option>
				</select>
			</li>

			<li class="field_setting gfgeo-settings gfgeo-map-settings">
				<label for="gfgeo-zoom-level"> 
					<?php _e( 'Zoom Level', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_zoom_level_tt' ); ?>
				</label> 
				<select name="gfgeo_zoom_level" id="gfgeo-zoom-level" onchange="SetFieldProperty( 'gfgeo_zoom_level', jQuery(this).val() );">
						<?php $count = 18; ?>
						<?php
						for ( $x = 1; $x <= 18; $x++ ) {
							echo '<option value="' . $x . '">' . $x . '</option>';
						}
						?>
				</select>
			</li>

			<li class="field_setting gfgeo-settings gfgeo-map-settings">
				<label for="gfgeo-map-width"> 
					<?php _e( 'Map Width', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_map_width_tt' ); ?>
				</label> 
				<input 
					type="text" 
					id="gfgeo-map-width" 
					size="15" 
					onkeyup="SetFieldProperty( 'gfgeo_map_width', this.value );"
				/>
			</li>

			<li class="field_setting gfgeo-settings gfgeo-map-settings">
				<label for="gfgeo-map-height"> 
					<?php _e( 'Map Height', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_map_height_tt' ); ?>
				</label> 
				<input 
					type="text" 
					id="gfgeo-map-height" 
					size="15" 
					onkeyup="SetFieldProperty( 'gfgeo_map_height', this.value );">
			</li>

			<li class="field_setting gfgeo-settings gfgeo-map-settings">
				<label for="gfgeo-map-styles"> 
					<?php _e( 'Map Styles', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_map_styles_tt' ); ?>
				</label>
				<textarea 
					id="gfgeo-map-styles" 
					class="fieldwidth-3 fieldheight-2" 
					onblur="SetFieldProperty( 'gfgeo_map_styles', this.value );"></textarea>
			</li>

			<li class="field_setting gfgeo-settings gfgeo-map-settings">
				<label for="gfgeo-map-marker"> 
					<?php _e( 'Map Marker URL', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_map_marker_tt' ); ?>
				</label> 
				<input 
					type="text" 
					id="gfgeo-map-marker" 
					size="25" 
					onkeyup="SetFieldProperty( 'gfgeo_map_marker', this.value );">
			</li>

			<li class="field_setting gfgeo-settings gfgeo-map-settings">
				<input 
					type="checkbox" 
					id="gfgeo-draggable-marker" 
					onclick="SetFieldProperty( 'gfgeo_draggable_marker', this.checked );" 
				/>
				<label for="gfgeo-draggable-marker" class="inline"> 
					<?php _e( 'Draggable Map Marker', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_draggable_marker_tt' ); ?>
				</label>
			</li>

			<li class="field_setting gfgeo-settings gfgeo-map-settings">
				<input 
					type="checkbox" 
					id="gfgeo-set-marker-on-click" 
					onclick="SetFieldProperty( 'gfgeo_set_marker_on_click', this.checked );" 
				/>
				<label for="gfgeo-set-marker-on-click" class="inline"> 
					<?php _e( 'Set Map Marker on Click', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_set_marker_on_click_tt' ); ?>
				</label>
			</li>

			<li class="field_setting gfgeo-settings gfgeo-map-settings">
				<input 
					type="checkbox" 
					id="gfgeo-map-scroll-wheel" 
					onclick="SetFieldProperty( 'gfgeo_map_scroll_wheel', this.checked );" 
				/>
				<label for="gfgeo-map-scroll-wheel" class="inline"> 
					<?php _e( 'Enable Mouse Scroll-Wheel Zoom', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_map_scroll_wheel_tt' ); ?>
				</label>
			</li>

			<li class="field_setting gfgeo-settings gfgeo-map-settings">
				<input 
					type="checkbox" 
					id="gfgeo-disable-address-output" 
					onclick="SetFieldProperty( 'gfgeo_disable_address_output', this.checked );" 
				/>
				<label for="gfgeo-disable-address-output" class="inline"> 
					<?php _e( 'Disable Address Output ( beta )', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_disable_address_output_tt' ); ?>
				</label>
			</li>

			<!-- autocomplete options -->

			<li class="field_setting gfgeo-settings gfgeo-address-autocomplete">
				<input 
					type="checkbox" 
					id="gfgeo-address-autocomplete" 
					onclick="SetFieldProperty( 'gfgeo_address_autocomplete', this.checked );" 
				/>
				<label for="gfgeo-address-autocomplete" class="inline"> 
					<?php _e( 'Enable Google Address Autocomplete', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_address_autocomplete_tt' ); ?>
				</label>
			</li>

			<li class="field_setting gfgeo-settings gfgeo-address-autocomplete-types">
				<label for="gfgeo-address-autocomplete-types"> 
					<?php _e( 'Autocomplete Results Types', 'gfgeo' ); ?>
					<?php gform_tooltip( 'gfgeo_address_autocomplete_types_tt' ); ?>
				</label> 
				&#32;&#32;
				<select 
					name="gfgeo_address_autocomplete_types" 
					id="gfgeo-address-autocomplete-types"
					class="gfgeo-address-autocomplete-types"
					onchange="SetFieldProperty( 'gfgeo_address_autocomplete_types', jQuery( this ).val() );"
				>	
					<option value="">All types</option>
					<option value="geocode">Geocode</option>
					<option value="address">Address</option>
					<option value="establishment">Establishment</option>
					<option value="(regions)">Regions</option>
					<option value="(cities)">Cities</option>
				</select>
			</li>

			<li class="field_setting gfgeo-settings gfgeo-address-autocomplete-bounds">
				<label for="gfgeo-address-autocomplete-bounds"> 
					<?php _e( 'Address Autocomplete Bounds', 'gfgeo' ); ?> 
						<?php gform_tooltip( 'gfgeo_address_autocomplete_bounds_tt' ); ?>
				</label> 
				<input 
					type="text" 
					size="45" 
					id="gfgeo-address-autocomplete-bounds" 
					onkeyup="SetFieldProperty( 'gfgeo_address_autocomplete_bounds', this.value );"
					placeholder="Ex: -33.8902,151.1759|-33.8902,151.1759"
				/>
			</li>

			<li class="field_setting gfgeo-settings gfgeo-address-autocomplete-locator-bounds">
				<input 
					type="checkbox" 
					id="gfgeo-address-autocomplete-locator-bounds" 
					onclick="SetFieldProperty( 'gfgeo_address_autocomplete_locator_bounds', this.checked );" 
				/>
				<label for="gfgeo-address-autocomplete-locator-bounds" class="inline"> 
					<?php _e( 'Enable Page Locator Bounds', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_address_autocomplete_locator_bounds_tt' ); ?>
				</label>
			</li>

			<li class="field_setting gfgeo-settings gfgeo-address-autocomplete-placeholder">
				<label for="gfgeo-address-autocomplete-placeholder"> 
					<?php _e( 'Autocomplete Placeholder', 'gfgeo' ); ?> 
						<?php gform_tooltip( 'gfgeo_address_autocomplete_placeholder_tt' ); ?>
				</label> 
				<input 
					type="text" 
					size="35" 
					id="gfgeo-address-autocomplete-placeholder" 
					onkeyup="SetFieldProperty( 'gfgeo_address_autocomplete_placeholder', this.value );"
				/>
			</li>

			<li class="field_setting gfgeo-settings gfgeo-address-autocomplete-desc">
				<label for="gfgeo-address-autocomplete-desc"> 
					<?php _e( 'Field description', 'gfgeo' ); ?> 
						<?php gform_tooltip( 'gfgeo_address_autocomplete_desc_tt' ); ?>
				</label> 
				<input 
					type="text" 
					size="35" 
					id="gfgeo-address-autocomplete-desc" 
					onkeyup="SetFieldProperty('gfgeo_address_autocomplete_desc', this.value);">
			</li>

			<li class="field_setting gfgeo-settings gfgeo-address-autocomplete-country">
				<label for="gfgeo-address-autocomplete-country"> 
					<?php _e( 'Restrict Autocomplete Results', 'gfgeo' ); ?>
					<?php gform_tooltip( 'gfgeo_address_autocomplete_country_tt' ); ?>
				</label> 
				&#32;&#32;
				<select 
					name="gfgeo_address_autocomplete_country" 
					id="gfgeo-address-autocomplete-country"
					class="gfgeo-address-autocomplete-country"
					onchange="SetFieldProperty('gfgeo_address_autocomplete_country', jQuery(this).val());"
				>
				<?php
				foreach ( GFGEO_Helper::get_countries() as $value => $name ) {
					echo '<option value="' . $value . '">' . $name . '</option>';
				}
				?>
				</select>
			</li>

			<li class="field_setting gfgeo-settings gfgeo-geocoder-settings gfgeo-google-maps-link" >
				<input 
					type="checkbox" 
					id="gfgeo-google-maps-link" 
					onclick="SetFieldProperty( 'gfgeo_google_maps_link', this.checked );" 
				/>
				<label for="gfgeo-google-maps-link" class="inline"> 
					<?php _e( 'Enable Google Maps Link', 'gfgeo' ); ?> 
					<?php gform_tooltip( 'gfgeo_google_maps_link_tt' ); ?>
				</label>
			</li>

			<li class="field_setting gfgeo-settings gfgeo-geocoder-section-end"></li>

		<?php
}
	}

	/**
	 * Tooltips
	 */
	public function tooltips( $tooltips ) {

		// page locator
		$tooltips['gfgeo_page_locator_tt'] = __( 'The plugin will try to dynamically retrieve the user\'s current position when the form first loads. If location was found, it will auto-populate in the location fields attached to this geocoder. Note that if the page locator is enabled the default coordinates above will not take place.', 'gfgeo' );

		$tooltips['gfgeo_google_maps_link_tt'] = __( 'Display link to Google Maps in the form entry and notifications.', 'gfgeo' );

		// default coords
		$tooltips['gfgeo_default_latitude_tt']  = __( 'Enter the latitude of the initial location that will be displayed in the geolocation fields, attached to this geocoder, when the form first loads. Otherwise, leave  the field blank.', 'gfgeo' );
		$tooltips['gfgeo_default_longitude_tt'] = __( 'Enter the longitude of the initial location that will be displayed in the geolocation fields, attached to this geocoder, when the form first loads. Otherwise, leave  the field blank.', 'gfgeo' );

		// GEO my WP integration
		$tooltips['gfgeo_gmw_post_integration_tt'] = __( 'Check this checkbox if you\'d like to sync this geocoder with GEO my WP Posts Locator add-on. This location will then be saved in GEO my WP database and the post attached to it ( if at all created or udpated )will be searchable via GEO my WP search forms', 'gfgeo' );

		$tooltips['gfgeo_gmw_post_integration_phone_tt'] = __( 'Select the field that will be used for the GEO my WP Phone.', 'gfgeo' );

		$tooltips['gfgeo_gmw_post_integration_fax_tt'] = __( 'Select the field that will be used for the GEO my WP Fax.', 'gfgeo' );

		$tooltips['gfgeo_gmw_post_integration_email_tt'] = __( 'Select the field that will be used for the GEO my WP Email.', 'gfgeo' );

		$tooltips['gfgeo_gmw_post_integration_website_tt'] = __( 'Select the field that will be used for the GEO my WP Website.', 'gfgeo' );

		$tooltips['gfgeo_gmw_user_integration_tt'] = __( 'Check this checkbox if you\'d like to sync this geocoder with GEO my WP users database. This location will then be saved in GEO my WP database and the user attached to it will be searchable via GEO my WP search forms', 'gfgeo' );

		// user meta field
		$tooltips['gfgeo_user_meta_field_tt'] = __( 'Enter a user meta field where you\'d like to save the complete geocoded information as an array. Otherwise, leave  the field blank.', 'gfgeo' );

		// meta fields setup
		$tooltips['gfgeo_geocoder_meta_fields_setup_tt'] = __( 'Click the "Show Fields" link to see the list of the geocoded fields which you can save each of one of them into post custom field, user meta field and BuddyPress profile field ( BuddyPress plugin required ).', 'gfgeo' );

		// dynamic fiedlds
		$tooltips['gfgeo_dynamic_location_field_tt'] = __( 'Dynamically populate this field with the selected location field everytime geocoding takes place.', 'gfgeo' );

		// Geocoder ID
		$tooltips['gfgeo_geocoder_id_tt'] = __( 'Select the geocoder field ID that you would like to sync this field with.', 'gfgeo' );

		// locator button
		$tooltips['gfgeo_locator_button_label_tt']         = __( 'Enter the locator button label.', 'gfgeo' );
		$tooltips['gfgeo_infield_locator_button_tt']       = __( 'Display a locator icon, inside the text field, that will retrieve the user\'s current position once clicked.', 'gfgeo' );
		$tooltips['gfgeo_location_found_message_tt']       = __( 'Enable alert message that will show once the user poisiton was found.', 'gfgeo' );
		$tooltips['gfgeo_hide_location_failed_message_tt'] = __( 'Hide the alert message showing when the user poisiton was not found. Instead, it will show in the developer console log.', 'gfgeo' );
		$tooltips['gfgeo_ip_locator_status_tt']            = __( '( Beta feature ) Enable this feature so the plugin will retrive the user\'s current location based on the IP address. Choose "Default" to use the IP address instead of the browser\'s locator ( HTML5 geolocation ) or "Fallback" to use the IP address when the browser fails to retrive the location. Please note that while the IP address locator does not require the user\'s permission to retrive his location, like how the browser does, it is also not accurate compare to the HTML5 geolocation.', 'gfgeo' );

		// corrdinates
		$tooltips['gfgeo_latitude_placeholder_tt']  = __( 'Enter a placeholder text for the latitude textbox.', 'gfgeo' );
		$tooltips['gfgeo_longitude_placeholder_tt'] = __( 'Enter a placeholder text for the longitude textbox.', 'gfgeo' );
		$tooltips['gfgeo_custom_field_method_tt']   = __( 'By default the coordinates value will be saved comma separated: latitude,longitude ( ex 12345,6789 ). Check this checkbox if you\'d like to save the value as serialized array', 'gfgeo' );

		//map fields tooltips
		$tooltips['gfgeo_map_default_latitude_tt']   = __( 'Enter the latitude of the point that will show on the map when the form first loads.', 'gfgeo' );
		$tooltips['gfgeo_map_default_longitude_tt']  = __( 'Enter the longitude of the point that will show on the map when the form first loads.', 'gfgeo' );
		$tooltips['gfgeo_map_width_tt']              = __( 'Enter the map width in pixels or percentage.', 'gfgeo' );
		$tooltips['gfgeo_map_height_tt']             = __( 'Enter the map height in pixels or percentage.', 'gfgeo' );
		$tooltips['gfgeo_map_styles_tt']             = __( 'Enter custom map style. <a href="https://snazzymaps.com" target="_blank">Snazzy Maps website</a> has a large collection of map styles that you can use.', 'gfgeo' );
		$tooltips['gfgeo_map_marker_tt']             = __( 'Enter the URL of the icon that will be used as the map marker.', 'gfgeo' );
		$tooltips['gfgeo_map_type_tt']               = __( 'Choose the map type.', 'gfgeo' );
		$tooltips['gfgeo_zoom_level_tt']             = __( 'Set the zoom level of the map.', 'gfgeo' );
		$tooltips['gfgeo_draggable_marker_tt']       = __( 'Making marker draggable allows the front-end users to set location by dragging the map marker to the desired position.', 'gfgeo' );
		$tooltips['gfgeo_set_marker_on_click_tt']    = __( 'Set marker\'s location by a click on the map.', 'gfgeo' );
		$tooltips['gfgeo_map_scroll_wheel_tt']       = __( 'Allow map zoom via mouse scroll-wheel.', 'gfgeo' );
		$tooltips['gfgeo_disable_address_output_tt'] = __( 'Disable the output of the address fields when updating the marker\'s location. This way only the coordinates will be dynamically updated. This can be useful for a specific scenario where one wants to first find the location on the map by entering an address. Then, if the address entered is correct but the marker is not on the exact location on the map or the coordinates are not the exact desired coordinates, the visitor can drag the marker to find the exact coordinates without changing the address.', 'gfgeo' );

		// address autocomplete
		$tooltips['gfgeo_address_autocomplete_tt']                = __( 'Enable live suggested results, by Google Places API, while the user is typing an address.', 'gfgeo' );
		$tooltips['gfgeo_address_autocomplete_types_tt']          = __( 'Select the type of results that will be displayed in the suggested results. <a href="https://developers.google.com/maps/documentation/javascript/places-autocomplete#add_autocomplete" target="_blank">Click here</a> to read more about the autocomplete types.', 'gfgeo' );
		$tooltips['gfgeo_address_autocomplete_country_tt']        = __( 'Choose a country from the select drop-down menu to restrict the Google address autocomplete suggested results to that country.', 'gfgeo' );
		$tooltips['gfgeo_address_autocomplete_bounds_tt']         = __( 'Set bounds to display suggested results based on. Enter single or multiple sets of coordinates ( latitude and longitude comma separated ) when each set is follow by the | character.', 'gfgeo' );
		$tooltips['gfgeo_address_autocomplete_locator_bounds_tt'] = __( 'Display the address autocomplete suggested results based on the location returned from the page locator.', 'gfgeo' );
		$tooltips['gfgeo_address_autocomplete_placeholder_tt']    = __( 'Enter the placeholder text for the address autocomplete text field.', 'gfgeo' );
		$tooltips['gfgeo_address_autocomplete_desc_tt']           = __( 'Enter a description that you would like to display below the address autocomplete text field.', 'gfgeo' );

		return $tooltips;
	}

	/**
	 * New field default options
	 */
	public function set_default_labels() {
		?>
		case "gfgeo_geocoder" :
			field.label 					 		 = "Geocoder";
			field.gfgeo_page_locator 		 		 = false;
			field.gfgeo_location_found_message 		 = "";
			field.gfgeo_hide_location_failed_message = "";
			field.gfgeo_google_maps_link 	 		 = "";
			field.gfgeo_default_latitude 	 		 = "";
			field.gfgeo_default_longitude 	 		 = "";
			field.gfgeo_gmw_post_integration 		 = false;
			field.gfgeo_gmw_user_integration 		 = false;
			field.gfgeo_user_meta_field 	 		 = '';
			field.gfgeo_ip_locator_status 	   		 = "";
		break;

		case "gfgeo_locator_button" :
			field.label 					   		 = "Locator Button";
			field.gfgeo_locator_button_label   		 = "Get my current position";
			field.gfgeo_location_found_message 		 = "Location found.";
			field.gfgeo_hide_location_failed_message = "";
			field.gfgeo_ip_locator_status 	   		 = "";
		break;

		case "gfgeo_map" :
			field.label 			 	       = "Map";
			field.gfgeo_map_default_latitude   = "40.7827096";
			field.gfgeo_map_default_longitude  = "-73.965309";
			field.gfgeo_map_width  		 	   = "100%";
			field.gfgeo_map_height 		 	   = "300px";
			field.gfgeo_zoom_level 		 	   = "12";
			field.gfgeo_map_type   		 	   = "ROADMAP";
			field.gfgeo_map_styles   		   = "";
			field.gfgeo_map_icon         	   = "";
			field.gfgeo_draggable_marker 	   = true;
			field.gfgeo_set_marker_on_click    = false;
			field.gfgeo_map_scroll_wheel 	   = true;
			field.gfgeo_disable_address_output = false;
		break;

		case "gfgeo_address" :
			field.label 							 = "Address";
			field.gfgeo_address_autocomplete 		 = true;
			field.gfgeo_address_autocomplete_types 	 = '';
			field.gfgeo_address_autocomplete_bounds  = '';
			field.gfgeo_infield_locator_button 		 = true;
			field.gfgeo_location_found_message 		 = "Location found.";
			field.gfgeo_hide_location_failed_message = "";
			field.gfgeo_google_maps_link 	 		 = "";
		break;

		case "gfgeo_coordinates" :
			field.label 					  = "Coordinates";
			field.gfgeo_latitude_placeholder  = "Latitude";
			field.gfgeo_longitude_placeholder = "longitude";
			field.gfgeo_custom_field_method   = false;
		break;

		case "gfgeo_gmw_map_icons" :
			field.label = "Map Icons";
		break;
		<?php
	}

	/**
	 * On form load load scripts and styles
	 *
	 * @param  [type] $form [description]
	 * @return [type]       [description]
	 */
	public function render_form( $form ) {

		wp_enqueue_script( 'google-maps' );
		wp_enqueue_script( 'gfgeo-form-editor' );
		wp_enqueue_style( 'gfgeo' );

		return $form;
	}
}
$gfgeo_form_editor = new GFGEO_Form_Editor;

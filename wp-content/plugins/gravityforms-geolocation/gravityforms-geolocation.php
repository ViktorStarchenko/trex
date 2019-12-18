<?php
/*
 * Plugin Name: Gravity Forms Geolocation Add-on
 * Plugin URI: http://www.geomywp.com
 * Description: Enhance Gravity Forms plugin with geolocation features
 * Version: 2.5.1
 * Author: Eyal Fitoussi
 * Author URI: http://www.geomywp.com
 * Requires at least: 4.0
 * Tested up to: 4.9.1
 * Gravity Forms: 2.0+
 * Gravity Forms User Registration: 3.0+
 * GEO my WP: 2.6.1+
 * Text Domain: gfgeo
 * Domain Path: /languages/
*/

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

//load plugin after plugin_loaded to prevent conflicts
function init_gfgeolocation() {

	/**
	 * GGF Admin notice
	 * @return [type] [description]
	 */
	function gfgeo_geo_fields_admin_notice() {
		?>
		<div class="error">
			<p>
				<?php _e( 'Please deactivate Gravity Forms Geo Field add-on in order to use Gravity Forms Geolocation add-on.', 'gfgeo' ); ?>
			</p>
		</div>
		<?php
	}

	//abort if older version Gravity Forms GEO Field activated
	if ( class_exists( 'Gravity_Forms_GEO_Fields' ) ) {

		add_action( 'admin_notices', 'gfgeo_geo_fields_admin_notice' );

		return false;
	}

	// verify that Gravity Forms plugin is activated
	if ( class_exists( 'GFForms' ) ) {

		/**
		 * Include Gravity Forms add-on framework
		 */
		GFForms::include_addon_framework();

		/**
		 * Gravity Forms Geolocation child class
		 *
		 * @since 2.0
		 * @author Eyal Fitoussi
		 */
		class Gravity_Forms_Geolocation extends GFAddOn {

			//pLugin version
			protected $_version = '2.5.1';

			//required Gravity Forms
			protected $_min_gravityforms_version = '1.9';

			//Plugin's name
			protected $_title = 'Gravity Forms Geolocation';

			//plugin's item ID
			protected $_item_id = 2273;

			//License name
			protected $_license_name = 'gravity_forms_geo_fields';

			// add-on slug
			protected $_slug = 'gravityforms_geolocation';

			// add-on path
			protected $_path = 'gravityforms-geolocation/gravityforms-geolocation.php';

			// FILE
			protected $_full_path = __FILE__;

			// Short title
			protected $_short_title = 'Geolocation';

			private static $_instance = null;

			/**
			 * Creates a new instance of the Gravity_Forms_Geolocation.
			 *
			 * Only creates a new instance if it does not already exist
			 *
			 * @static
			 *
			 * @return object The Gravity_Forms_Geolocation class object
			 */
			public static function get_instance() {

				if ( null == self::$_instance ) {
					self::$_instance = new self;
				}

				return self::$_instance;
			}

			public function pre_init() {

				parent::pre_init();

				// this is a temporary solution.
				// For some reason GF_Field::get_value_entry_list() method does not fire for
				// the geolocation fields when placed within the init() funciton.
				// It only works when placed in pre_init();
				if ( is_admin() && ! empty( $_GET['page'] ) && 'gf_entries' == $_GET['page'] ) {
					include_once( 'includes/gfgeo-register-form-fields.php' );
				}
			}

			/**
			 * Initiate add-on
			 * @return [type] [description]
			 */
			public function init() {

				if ( ! defined( 'GMW_REMOTE_SITE_URL' ) ) {
					define( 'GMW_REMOTE_SITE_URL', 'https://geomywp.com' );
				}

				parent::init();

				//load textdomain
				load_plugin_textdomain( 'gfgeo', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );

				//define globals
				define( 'GFGEO_URL', untrailingslashit( plugins_url( basename( plugin_dir_path( $this->_full_path ) ), basename( $this->_full_path ) ) ) );
				define( 'GFGEO_PATH', untrailingslashit( plugin_dir_path( $this->_full_path ) ) );

				// get Google API key from settings
				$api_disable   = $this->get_plugin_setting( 'gfgeo_disable_google_maps_api' );
				$api_key       = $this->get_plugin_setting( 'gfgeo_google_maps_api_key' );
				$api_country   = $this->get_plugin_setting( 'gfgeo_google_maps_country' );
				$api_language  = $this->get_plugin_setting( 'gfgeo_google_maps_language' );
				$high_accuracy = $this->get_plugin_setting( 'gfgeo_enable_high_accuracy_mode' );
				$ip_locator    = $this->get_plugin_setting( 'gfgeo_enable_ip_locator' );

				define( 'GFGEO_DISABLE_GOOGLE_MAPS_API', ! empty( $api_disable ) ? true : false );
				define( 'GFGEO_GOOGLE_MAPS_API', ! empty( $api_key ) ? $api_key : '' );
				define( 'GFGEO_GOOGLE_MAPS_COUNTRY', ! empty( $api_country ) ? $api_country : '' );
				define( 'GFGEO_GOOGLE_MAPS_LANGUAGE', ! empty( $api_language ) ? $api_language : '' );
				define( 'GFGEO_HIGH_ACCURACY_MODE', ! empty( $high_accuracy ) ? true : false );
				define( 'GFGEO_IP_LOCATOR', ! empty( $ip_locator ) ? $ip_locator : false );

				if ( false != GFGEO_IP_LOCATOR ) {
					$ip_token = $this->get_plugin_setting( 'gfgeo_token_' . GFGEO_IP_LOCATOR );
				}

				define( 'GFGEO_IP_TOKEN', ! empty( $ip_token ) ? $ip_token : false );

				// include files in both front and back-end
				include_once( 'includes/class-gfgeo-helper.php' );
				include_once( 'includes/gfgeo-register-form-fields.php' );
				include_once( 'includes/class-gfgeo-form-submission.php' );
				include_once( 'includes/class-gfgeo-render-form.php' );

				// enqueue scripts
				add_action( 'wp_enqueue_scripts', array( $this, 'register_scripts' ) );
				add_action( 'admin_enqueue_scripts', array( $this, 'register_scripts' ) );
				// for future update to allow updating location from edit entry page.
				//add_action( 'admin_enqueue_scripts', array( $this, 'entry_details_editor_scripts' ) );
			}

			/**
			 * Admin init
			 * @return void
			 */
			public function init_admin() {

				parent::init_admin();

				// register addon to GEO my WP add-ons page if activated
				if ( class_exists( 'GEO_my_WP' ) ) {

					add_filter( 'gmw_admin_addons_page', array( $this, 'gmw_addon_init' ) );

					if ( version_compare( GMW_VERSION, '3.0', '<' ) ) {

						//Check for plugin updates
						if ( class_exists( 'GMW_License' ) ) {

							$gfgeo_license = new GMW_License(
								$this->_full_path,
								$this->_title,
								$this->_license_name,
								$this->_version,
								'Eyal Fitoussi',
								GMW_REMOTE_SITE_URL,
								$this->_item_id
							);
						}
					}

				// otherwise include updater files
				} else {

					//include_once( 'updater/geo-my-wp-updater.php' );
					include_once( 'updater/geo-my-wp-license-handler.php' );

					//Check for plugin updates
					if ( class_exists( 'GMW_License' ) ) {

						$gfgeo_license = new GMW_License(
							$this->_full_path,
							$this->_title,
							$this->_license_name,
							$this->_version,
							'Eyal Fitoussi',
							GMW_REMOTE_SITE_URL,
							$this->_item_id
						);
					}
				}

				// include form editor page class
				include( 'includes/admin/class-gfgeo-form-editor.php' );
			}

			/**
			 * Frontend init
			 * @return void
			 */
			/*public function init_frontend() {

				parent::init_frontend();

				//include frontend files
				include( 'includes/class-gfgeo-render-form.php' );
			}*/

			/**
			 * Include addon function - for GEO my WP
			 *
			 * @access public
			 * @return $addons
			 */
			public function gmw_addon_init( $addons ) {

				$addons[ $this->_license_name ] = array(
					'name'         => $this->_license_name,
					'item'         => $this->_title,
					'item_id'      => $this->_item_id,
					'title'        => 'Gravity Forms Geolocation',
					'version'      => $this->_version,
					'file'         => $this->_full_path,
					'basename'     => plugin_basename( $this->_full_path ),
					'author'       => 'Eyal Fitoussi',
					'desc'         => __( 'Enhance Gravity Forms plugin with geolocation features.', 'gfgeo' ),
					'license'      => true,
					'image'        => false,
					'require'      => array(),
					'license'      => true,
					'auto_trigger' => true,
					'min_version'  => false,
					'stand_alone'  => false,
					'core'         => false,
					'gmw_version'  => '2.6',
				);

				return $addons;
			}

			/**
			 * Geolocation settings tab in Settings page
			 *
			 * @return array
			 */
			public function plugin_settings_fields() {

				return array(
					array(
						'title'  => esc_html__( 'General Settings', 'gfgeo' ),
						'fields' => array(
							array(
								'name'              => 'gfgeo_google_maps_api_key',
								'tooltip'           => sprintf( esc_html__( 'Enter your Google Map API key. If you don\'t have an API key, click <a href="%1$s" target="_blank">Here</a> to create one. You can follow <a href="%2$s" target="_blank">this tutorial</a> on how to create the proper Maps API key.', 'gfgeo' ), 'https://developers.google.com/maps/documentation/javascript/get-api-key#get-an-api-key', 'http://docs.gravitygeolocation.com/article/101-create-google-map-api-key' ),
								'label'             => esc_html__( 'Google Maps API Key', 'gfgeo' ),
								'type'              => 'text',
								'class'             => 'large',
								'feedback_callback' => array( $this, 'is_valid_setting' ),
							),
							array(
								'name'              => 'gfgeo_google_maps_country',
								'tooltip'           => esc_html__( 'Enter the country code of the default country to be used with Google Maps API.', 'gfgeo' ),
								'label'             => esc_html__( 'Google Maps Country Code', 'gfgeo' ),
								'type'              => 'text',
								'size'              => '5',
								'feedback_callback' => array( $this, 'is_valid_setting' ),
							),
							array(
								'name'              => 'gfgeo_google_maps_language',
								'tooltip'           => esc_html__( 'Enter the language code of the default language to be used with Google Maps API.', 'gfgeo' ),
								'label'             => esc_html__( 'Google Maps Language', 'gfgeo' ),
								'type'              => 'text',
								'size'              => '5',
								'feedback_callback' => array( $this, 'is_valid_setting' ),
							),
							array(
								'name'    => 'gfgeo_disable_google_maps_api',
								'tooltip' => esc_html__( 'Check this checkbox if you\'d like to prevent Gravity Geolocation plugin from registering the Google Maps API. This can be useful when there is another plugin or theme that registering the Google Maps API on your site. This way you can prevent the error cause by multiple call to Google Maps API.', 'gfgeo' ),
								'label'   => esc_html__( 'Disable Google Maps API', 'gfgeo' ),
								'type'    => 'checkbox',
								'choices' => array(
									array(
										'name'   => 'gfgeo_disable_google_maps_api',
										'label'  => esc_html__( 'Disable', 'gfgeo' ),
										'values' => '1',
									),
								),
							),
							array(
								'name'    => 'gfgeo_enable_high_accuracy_mode',
								'tooltip' => esc_html__( 'Check this checkbox to enable high accuracy location mode. By doing so, the the auto-locator feature ( HTML5 geolocation ) might retrive a more accurate user current location. That is when using the auto-locator button and auto-locator on page load. Please note that higher accuracy might results in slower performance of the geolocator.', 'gfgeo' ),
								'label'   => esc_html__( 'High Accuracy Location Mode', 'gfgeo' ),
								'type'    => 'checkbox',
								'choices' => array(
									array(
										'name'   => 'gfgeo_enable_high_accuracy_mode',
										'label'  => esc_html__( 'Enable', 'gfgeo' ),
										'values' => '1',
									),
								),
							),
							array(
								'name'    => 'gfgeo_enable_ip_locator',
								'tooltip' => sprintf( esc_html__( '( beta feature ) Use this dropdown menu to enable the IP address locator services. You can do so by selecting the service that you would like to use. Once this feature is enabled, you will be able to set it in the locator button field and the page locator option of the form editor. You can use it instead of the HTML5 geolocation feature or as a fall-back when the HTML5 geolocation fails. Note that the location returned by the IP address, in most cases, is not very accurate.', 'gfgeo' ), 'http://dev.maxmind.com/geoip/geoip2/' ),
								'label'   => esc_html__( 'IP Address Locator', 'gfgeo' ),
								'type'    => 'select',
								'choices' => array(
									array(
										'label' => esc_html__( 'Disable', 'gfgeo' ),
										'value' => '',
									),
									array(
										'label' => esc_html__( 'ipinfo.io', 'gfgeo' ),
										'value' => 'ipinfo',
									),
									array(
										'label' => esc_html__( 'MaxMind', 'gfgeo' ),
										'value' => 'maxmind',
									),
								),
							),
							/*
							array(
								'name'              => '',
								'label'             => sprintf( esc_html__( 'Please note that MaxMind requires an API in order to use its services, and this plugin requires the Insights plan. You can find more info about it <a href="%s" target="_blank">here</a>. If you do not have an API key you can try using the ipinfo services which offers a free plan and does not require an API key.', 'gfgeo' ), 'https://www.maxmind.com/en/geoip2-precision-services' ),
								'tooltip'           => '',
								'type'              => 'text',
								'size'              => '5',
								'feedback_callback' => array( $this, 'is_valid_setting' ),
								'disabled'          => 'disabled',
							),
							*/
							array(
								'name'              => 'gfgeo_token_ipinfo',
								'label'             => esc_html__( 'ipinfo.io Token', 'gfgeo' ),
								'tooltip'           => sprintf( esc_html__( 'Enter your ipinfo token, if you have one, in this input box. A token is not required in order to use the free ipinfo service, which provides you with 1000 queries per day. If you need more than a 1000 queries per day, you should look into subscribing to one of the ipinfo premium plans which will provide you with a token. Click <a href="%s" target="_blank">here</a> for more information.', 'gfgeo' ), 'https://ipinfo.io/pricing' ),
								'type'              => 'text',
								'size'              => '50',
								'feedback_callback' => array( $this, 'is_valid_setting' ),
							),
						),
					),
				);
			}

			/**
			 * frontend_scripts function.
			 *
			 * @access public
			 * @return void
			 */
			public function register_scripts() {

				if ( ! GFGEO_DISABLE_GOOGLE_MAPS_API && ( ! class_exists( 'GEO_my_WP' ) || ! wp_script_is( 'google-maps', 'registered' ) ) ) {

					wp_deregister_script( 'google-maps' );

					$protocol = is_ssl() ? 'https' : 'http';

					// Build Google API url. elements can be modified via filters
					$google_url = apply_filters(
						'gfgeo_google_maps_api_url', array(
							'protocol' => is_ssl() ? 'https' : 'http',
							'url_base' => '://maps.googleapis.com/maps/api/js?',
							'url_data' => http_build_query(
								apply_filters(
									'gfgeo_google_maps_api_args', array(
										'libraries' => 'places',
										'region'    => GFGEO_GOOGLE_MAPS_COUNTRY,
										'language'  => GFGEO_GOOGLE_MAPS_LANGUAGE,
										'key'       => GFGEO_GOOGLE_MAPS_API,
									)
								), '', '&amp;'
							),
						)
					);

					wp_register_script( 'google-maps', implode( '', $google_url ), array( 'jquery' ), $this->_version, true );
				}

				$handles = 'google-maps';

				if ( class_exists( 'Google_Maps_Builder' ) ) {
					$handles = 'google-maps-builder-gmaps';
				}

				wp_register_script( 'gfgeo', GFGEO_URL . '/assets/js/gfgeo.min.js', array( 'jquery', $handles ), $this->_version, true );
				wp_register_script( 'gfgeo-form-editor', GFGEO_URL . '/assets/js/gfgeo-form-editor.min.js', array( 'jquery' ), $this->_version, true );
				wp_register_style( 'gfgeo', GFGEO_URL . '/assets/css/gfgeo.frontend.css', array(), $this->_version );

				//load maxmind if needed
				if ( 'maxmind' == GFGEO_IP_LOCATOR ) {
					wp_register_script( 'gfgeo-maxmind', '//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js', array( 'jquery' ), $this->_version, true );
				}
			}

			/**
			 * Update location in Edit Entry page.
			 *
			 * For future update
			 *
			 * @return [type] [description]
			 */
			/*
			public function entry_details_editor_scripts() {

				if ( rgget( 'page' ) == 'gf_entries' && rgget( 'view' ) == 'entry' && isset( $_POST['screen_mode'] ) && $_POST['screen_mode'] == 'edit' ) {

					wp_register_script( 'gfgeo-entry-details', GFGEO_URL.'/assets/js/gfgeo.entry.details.min.js', array( 'jquery' ), $this->_version, true );
					wp_register_style( 'gfgeo-entry-details', GFGEO_URL.'/assets/css/gfgeo.entry.details.css', array(), $this->_version );


					wp_enqueue_script( 'google-maps' );
					wp_enqueue_script( 'gfgeo-entry-details' );
					wp_enqueue_style( 'gfgeo-entry-details' );

					// localize plugin's options
					$plugin_options = array(
						'protocol'		=> is_ssl() ? 'https' : 'http',
						'country_code'  => GFGEO_GOOGLE_MAPS_COUNTRY,
						'language_code' => GFGEO_GOOGLE_MAPS_LANGUAGE,
						'high_accuracy' => GFGEO_HIGH_ACCURACY_MODE,
						'ip_locator' 	=> GFGEO_IP_LOCATOR,
						'ip_token'		=> GFGEO_IP_TOKEN
					);

					$forms 				= array();
					$forms[$_GET['id']] = GFAPI::get_form( $_GET['id'] );

					// pass data to JavaScript
					wp_localize_script( 'gfgeo-entry-details', 'gfgeo_options', $plugin_options );
					wp_localize_script( 'gfgeo-entry-details', 'gfgeo_gforms', $forms );
					wp_localize_script( 'gfgeo-entry-details', 'form_id', array( $_GET['id'] ) );
					wp_localize_script( 'gfgeo-entry-details', 'page', array( $_GET['paged'] ) );
				}
			}*/
		}

		GFAddOn::register( 'Gravity_Forms_Geolocation' );
	}
}
//Load Gravity Geolocation after Gravity Forms Loaded
add_action( 'gform_loaded', 'init_gfgeolocation', 45 );

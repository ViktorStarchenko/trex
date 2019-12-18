<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'database');

/** MySQL database username */
define('DB_USER', 'user');

/** MySQL database password */
define('DB_PASSWORD', 'pass');

/** MySQL hostname 192.168.0.106 / 84.201.230.196*/
define('DB_HOST', 'mysql');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '?!*zHeBq}uEwQ[?DA/II8F=c;M$32.>XeqAXSGrr%nl%MlfHMB!w_CJ-fsu-l}X{');
define('SECURE_AUTH_KEY',  ':IGqMN|ieaVB)Qg9}&1?.2WB#`M.-@,8^41y]=G|@J_55l#ZV+m<NHvOa8+m$3sp');
define('LOGGED_IN_KEY',    'D*gB=n1#y-UgsREPD|=i;=52`1wXDoni&-?<z4/;PyiItF%e.y~6/3`-+9YL6wg8');
define('NONCE_KEY',        ':&Z(IY+]/fnm^e&pyQ1DDlgC4nq~A[_!4--oMr+ER#NJDdsLq8eJrfw6zGoCA1wq');
define('AUTH_SALT',        '@hEtjHcwF^3$X~Q^lu K(+!rT,DS?t0a$Gr9$O?sL|_Kp@eT1pcusq5n,P:*mhNO');
define('SECURE_AUTH_SALT', '6C3y/y:(`a~v.GCy{C|leHQ5(yR,,D-t`:)XE!e~s+Jx;Ehy/~-B>+u(|H7AimOu');
define('LOGGED_IN_SALT',   'QGcg-v*>%yOK7HOH1p,e:Em Cfa<,}&y?_ipjgQwv|(ANifE5-8a2%!XX4B4U;:4');
define('NONCE_SALT',       '9)afi`V##%|4;fWzt4V|uCXC$2G32hp+v42R3+}/ETos6waK?xcvd}&elkUK3.Lh');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

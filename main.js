/**
 * Created by rappresent on 4/2/14.
 */

var bower = 'bower/';

'use strict';
require.config({
	paths: {
		'modernizr'        : bower + 'modernizr/modernizr',
		'foundation'       : bower + 'foundation/js/foundation',
		'jquery'           : bower + 'jquery/dist/jquery',
		'requirejsDomReady': bower + 'requirejs-domready/domReady',
		'angular'          : bower + 'angular/angular',
		'angularLoader'    : bower + 'angular-loader/angular-loader',
		'angularAMD'       : bower + 'angularAMD/angularAMD',
		'angularResource'  : bower + 'angular-resource/angular-resource',
		'angularAnimate'   : bower + 'angular-animate/angular-animate',
		'angularRoute'     : bower + 'angular-route/angular-route',
		'angularCookies'   : bower + 'angular-cookies/angular-cookies',
		'angularI18n'      : bower + 'angular-i18n/angular-i18n',
		'angularMocks'     : bower + 'angular-mocks/angular-mocks',
		'angularSanitize'  : bower + 'angular-sanitize/angular-sanitize',
		'angularTouch'     : bower + 'angular-touch/angular-touch',

		'debugger': 'res/js/debug',
		'config'  : 'res/js/config',
		'initial' : 'res/js/initial',
		'ipInfoDB': 'res/js/ipInfoDB',

		'jeecee': 'application/app'
	},

	/**
	 * todo : your preparation script, and dependencies one to other each (specific)
	 */
	shim : {
		/**
		 * todo : basic crucial librrary, angular no need jQuery, belive it!
		 */
		'foundation'  : {
			'deps'   : ['jquery', 'modernizr'],
			'exports': 'foundation'
		},
		'angular'        : {
			'deps'   : ['requirejsDomReady', 'jquery'],
			'exports': 'angular'
		},
		'angularAMD'     : {
			'deps'   : ['angular'],
			'exports': 'angularAMD'
		},
		'angularLoader'  : {
			'deps'   : ['angular'],
			'exports': 'angularLoader'
		},
		'angularRoute'   : {
			'deps'   : ['angular'],
			'exports': 'angularRoute'
		},
		'angularResource': {
			'deps'   : ['angular'],
			'exports': 'angularResource'
		},

		/**
		 * todo : your custom library
		 */
		'debugger': {
			'deps'   : [],
			'exports': 'debugger'
		},
		'config'  : {
			'deps'   : ['angular'],
			'exports': 'config'
		},
		'initial' : {
			'deps'   : ['config'],
			'exports': 'initial'
		},
		'ipInfoDB': {
			'deps'   : ['initial'],
			'exports': 'ipInfoDB'
		},
		'jeecee'  : {
			'deps'   : ['angular', 'jquery', 'foundation', 'config'],
			'exports': 'jeecee'
		}
	},

	/**
	 * todo : kick start! your application
	 */
	deps : ['jeecee']
});

/**
 * todo : before kick start open up your custom library here
 */
require(['foundation', 'debugger', 'config', 'initial', 'ipInfoDB'], function () {
	console.log(arguments);
});
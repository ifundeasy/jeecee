/**
 * Created by rappresent on 4/2/14.
 */

var bower = 'bower/';

'use strict';
require.config({
	paths: {
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
		'foundation'       : bower + 'foundation/js/foundation',

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
		'angular'        : {
			'deps'   : ['requirejsDomReady'],
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
		'config'  : {
			'deps'   : ['angular'],
			'exports': 'config'
		},
		'initial' : {
			'deps'   : ['config'],
			'exports': 'initial'
		},
		'ipInfoDB': {
			'deps'   : ['config'],
			'exports': 'ipInfoDB'
		},

		'debugger': {
			'deps'   : ['config'],
			'exports': 'debugger'
		},
		'jeecee'  : {
			'deps'   : ['debugger', 'config'],
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
require(['debugger', 'config', 'initial', 'ipInfoDB'], function () {
	console.log(arguments);
});
/**
 * Created by rappresent on 3/27/14.
 */

log(config);
config.initBase('./application');
define(['angularAMD', 'angularRoute'], function (angularAMD) {
	var application = angular.module("jeeceeApp", ['ngRoute']);

	application.config(function ($routeProvider) {
		$routeProvider
			.when("/home", angularAMD.route({
				templateUrl: config.view('default.html'),
				controller: 'defaultCtrl',
				controllerUrl: config.controller('default')
			}))
			.when("/agent", angularAMD.route({
				templateUrl: config.view('agent.html'),
				controller: 'agentCtrl',
				controllerUrl: config.controller('agent')
			}))
			.when("/xyclus", angularAMD.route({
				templateUrl: config.view('xyclus.html'),
				controller: 'xyclusCtrl',
				controllerUrl: config.controller('xyclus')
			}))
			//
			.otherwise({
				redirectTo: "/home"
			});
	});

	angularAMD.bootstrap(application);
	return application;
});

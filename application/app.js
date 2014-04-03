/**
 * Created by rappresent on 3/27/14.
 */

log(config);
define(['angularAMD', 'angularRoute'], function (angularAMD) {
	var application = angular.module("webapp", ['ngRoute']);

	application.config(function ($routeProvider) {
		$routeProvider
			.when("/home", angularAMD.route({
				templateUrl: 'application/views/home.html',
				controller: 'HomeCtrl',
				controllerUrl: 'application/controllers/home'
			}))
			.when("/view1", angularAMD.route({
				templateUrl: 'application/views/view1.html',
				controller: 'View1Ctrl',
				controllerUrl: 'application/controllers/view1'
			}))
			.otherwise({
				redirectTo: "/home"
			});
	});

	angularAMD.bootstrap(application);
	return application;
});

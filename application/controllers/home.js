/**
 * Created by rappresent on 4/2/14.
 */
define(['jeecee'], function (app) {
	app.register.controller('HomeCtrl', function ($scope) {
		$scope.message = "Message from HomeCtrl";
	});
});
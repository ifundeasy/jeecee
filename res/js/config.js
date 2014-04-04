/**
 * Created by rappresent on 3/27/14.
 */
function z() {
	var me = this;
}

z.prototype.initBase = function (string) {
	var me = this;
	string = string || './app';

	me.modules = {
		base       : string,
		views      : string + '/views/',
		controllers: string + '/controllers/',
		models     : string + '/models/',
		stores     : string + '/stores/'
	};

	return string
};

z.prototype.view = function (string) {
	var me = this;
	return me.modules.views + string;
};

z.prototype.controller = function (string) {
	var me = this;
	return me.modules.controllers + string;
};

z.prototype.numberWithCommas = function (x) {
	var parts = x.toString().split(",");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return parts.join(".");
};

z.prototype.toProperCase = function toProperCase(s) {
	return s.toLowerCase().replace(/^(.)|\s(.)/g, function ($1) {
		return $1.toUpperCase();
	});
};

z.prototype.init = function () {
	var me = this;
	me.initBase();

	window.model = {};
	window.store = {};
};

config = new z();
config.init();
/**
 * Created by rappresent on 3/27/14.
 */
function z () {
	var me = this;
	me.orderType = "undefined";
	me.orderNumb = "undefined";
}

z.prototype.initBase = function (string) {
	var me = this;
	string = string || './app';

	me.base = string;
	me.view = me.base + '/views/';
	me.ctrl = me.base + '/controllers/';
	me.model = me.base + '/model/';
	me.store = me.base + '/store/';

	return string
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

config = new z ();
config.init();
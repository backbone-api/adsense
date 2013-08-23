/* Backbone API: Adsense
 * Source: https://github.com/backbone-api/adsense
 *
 * Created by Makis Tracend (@tracend)
 * Distributed through [Makesites.org](http://makesites.org)
 * Released under the [MIT license](http://makesites.org/licenses/MIT)
 */

(function(Backbone, _, $){

	window.adsbygoogle = window.adsbygoogle || [];
	// load dependencies (assume jQuery is available?)
	var async = ( typeof c != "undefined" && !_.isUndefined(c.script) ) ? c.sript : $.getScript;
	async("//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")

	var Adsense = new Backbone.Model({
		id: 0
	});

	// namespace
	Adsense.Ads = {};

	// Support backbone-app (if available)
	var View = ( typeof APP != "undefined" && !_.isUndefined( APP.View) ) ? APP.View : Backbone.View;

	var Banner = View.extend({
		el: ".banner",
		options: {
			width: 0,
			height: 0
		},
		initialize: function( options ){
			this.options.pubID = Adsense.get("id");
			this.render();
			return View.prototype.initialize.call( this, options );
		},
		render: function(){
			var html = template( this.options );
			$(this.el).html( html );
			// queue an ad
			window.adsbygoogle.push({});
		}
	});

	Adsense.Ads.Banner = Banner;

	Adsense.Ads.MediumRect = Banner.extend({
		options: {
			width: 320,
			height: 250
		}
	});

	Adsense.Ads.LargeRect = Banner.extend({
		options: {
			width: 336,
			height: 280
		}
	});

	Adsense.Ads.Leaderboard = Banner.extend({
		options: {
			width: 728,
			height: 90
		}
	});

	Adsense.Ads.WideSkyscraper = Banner.extend({
		options: {
			width: 160,
			height: 600
		}
	});

	Adsense.Ads.Mobile = Banner.extend({
		options: {
			width: 320,
			height: 50
		}
	});

	// Templates
	// support mustache syntax
	_.templateSettings.interpolate = /\{\{(.+?)\}\}/g;
	var template = _.template('<ins class="adsbygoogle" style="display:inline-block;width:{{width}}px;height:{{height}}px" data-ad-client="ca-{{pubID}}" data-ad-slot="{{id}}"></ins>');


	// Fallbacks
	//APP = window.APP || (APP = { Models: {}, Collections: {}, Views: {} });
	if( _.isUndefined(Backbone.API) ) Backbone.API = {};
	Backbone.API.Adsense = Adsense;

	// alias APP.API
	if( typeof APP != "undefined" && (_.isUndefined( APP.API) || _.isUndefined( APP.API.Adsense) ) ){
		APP.API = APP.API || {};
		APP.API.Adsense = Backbone.API.Adsense;
	}

	// Shortcut
	if(typeof window.Adsense == "undefined"){
		window.Adsense = Adsense;
	}

})(this.Backbone, this._, this.$);

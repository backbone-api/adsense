(function(Backbone, _, $){

	window.adsbygoogle = window.adsbygoogle || [];
	// load dependencies (assume jQuery is available?)
	var async = ( typeof c != "undefined" && !_.isUndefined(c.script) ) ? c.sript : $.getScript;
	async("http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")

	var Adsense = new Backbone.Model({
		id: 0
	});

	// namespace
	Adsense.Models = {};
	Adsense.Views = {};

	Adsense.Views.Banner = Backbone.View.extend({
		el: ".banner",
		options: {
			width: 728,
			height: 90
		},
		initialize: function( options ){
			this.options.pubID = Adsense.get("id");
			this.render();
			return Backbone.View.prototype.initialize.call( this, options );
		},
		render: function(){
			var html = template( this.options );
			$(this.el).html( html );
			// queue an ad
			window.adsbygoogle.push({});
		}
	});

	// Templates
	// support mustache syntax
	_.templateSettings.interpolate = /\{\{(.+?)\}\}/g;
	var template = _.template('<ins class="adsbygoogle" style="display:inline-block;width:{{width}}px;height:{{height}}px" data-ad-client="ca-{{pubID}}" data-ad-slot="{{id}}"></ins>');

	if(typeof window.Adsense == "undefined") window.Adsense = Adsense;

})(this.Backbone, this._, this.$);

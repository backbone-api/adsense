(function(Backbone, _, $){

	(adsbygoogle = window.adsbygoogle || []).push({});
	// load dependencies (assume jQuery is available?)
	var async = ( c && !_.isUndefined(c.script) ) ? c.sript : $.getScript;
	async("http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")

	var Adsense = new Backbone.Model({
		pubID: 0
	});

	// namespace
	Adsense.Models = {};
	Adsense.Views = {};

	Adsense.Views.Banner = Backbone.View.extend({
		options: {
			width: 728,
			height: 90
		},
		render: function(){
			var html = template( this.options ) );
			$(this.el).html( html );
		}
	});

	// Templates
	// support mustache syntax

	_.templateSettings.interpolate = /\{\{(.+?)\}\}/g;

	var template = _.template('<ins class="adsbygoogle" style="display:inline-block;width:{{width}}px;height:{{height}}px" data-ad-client="ca-{{pubID}}" data-ad-slot="{{id}}"></ins>');

<script>


</script>

})(this.Backbone, this._, this.$);

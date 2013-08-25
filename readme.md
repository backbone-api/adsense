## Backbone API: AdSense

Backbone.js extension to dislpay banner ads from Google AdSense

## Install

Using Bower:
```
bower install backbone.api.adsense
```

## Usage

The plugin exposes an ```Adsense``` object in the global namespace.

First set the publisher id - only needed to be set once per page load:
```
Adsense.set({
	id: "pub-1234567890"
});
```

After that you may instantiate banners in any container, as needed. You can use the generic ```Adsense.Ads.Banner``` in which you'll need to specify the dimensions, or use one of the views, available for the main banner types, for example:
```
new Adsense.Ads.Leaderboard({
	el: "#my-banner-container",
	id: "1234567890"
});
```
If no ```el``` is defined it will fallback to any container that has a class of ```banner```.

For more insights on the options and a detailed list of available banners/views please visit the wiki:
https://github.com/backbone-api/adsense/wiki


## Examples

Samples available in this repo's ```examples``` folder:

* [Basic example](http://rawgithub.com/backbone-api/adsense/master/examples/basic.html)


## Credits

Created by Makis Tracend ( [@tracend](http://github.com/tracend) )

Distributed through [Makesites.org](http://makesites.org)

Released under the [MIT license](http://makesites.org/licenses/MIT)

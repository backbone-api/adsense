## Backbone API: AdSense

Backbone.js extension to dislpay banner ads from Google AdSense

## Install

Using Bower:
```
bower install backbone.api.adsense
```

## Usage

The plugin exposes an ```Adsense``` object in the global namespace. Use that to set the publisher id (only needed to be set once):


After that you may instantiate banners in any container. There are views for the main banner types, for example:
```
new Adsense.Ads.Leaderboard({
	id: "1234567890"
});
```
Look into the script for the list of available views...


## Examples

Samples available in this repo's ```examples``` folder:

* [Basic example](http://rawgithub.com/backbone-api/adsense/master/examples/basic.html)


## Credits

Created by Makis Tracend ( [@tracend](http://github.com/tracend) )

Distributed through [Makesites.org](http://makesites.org)

Released under the [MIT license](http://makesites.org/licenses/MIT)

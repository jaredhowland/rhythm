About Rhythm
============
Rhythm is a small set of [Sass files][1] built to assist in creating [mobile-first][8], [responsive websites][8] with [vertical rhythm][2] using [modular scales][3].

Installation
============
Rhythm is available as a [Bower package][14], a [Composer][9] [package][10], and as a manual download.

Bower
-----
1. If needed, install [Bower][14]
2. Run the following command: `bower install jaredhowland/rhythm`

Composer
--------
1. If needed, install [Composer][9]
2. Add the following to your `composer.json` file:
```json
"require": {
  "jaredhowland/rhythm": "~1.0"
}
```

Manual Installation
-------------------
1. [Download the latest `.zip` file][11].
2. Extract into your project.

Usage
=====

Import Rhythm
-------------
`@ import "path/to/rhythm";`

Basics
------
Any time you want to change a `font-size`, `line-height`, `padding`, or `margin`, use Rhythm instead:

```scss
p {
  @include font-size(18px);
}

h2 {
  @include line-height($h2, 2); // Double the computed line height for font-size `h2`
}

h1 {
  @include padding(2 0 1); // Double top padding, no side padding, and single line-height bottom padding
}

ul {
  @include margin(1); // Single line-height margin size around entire element
}
```

Full details can be found on the [documentation site][8].

[1]:  http://sass-lang.com/
[2]:  http://24ways.org/2006/compose-to-a-vertical-rhythm
[3]:  http://alistapart.com/article/more-meaningful-typography
[4]:  http://bradfrost.com/blog/web/mobile-first-responsive-web-design/
[5]:  https://getcomposer.org
[6]: http://packagist.org/
[7]: https://github.com/jaredhowland/rhythm/releases/latest
[8]: http://jaredhowland.github.io/rhythm
[9]:  https://getcomposer.org
[10]: http://packagist.org/
[11]: https://github.com/jaredhowland/rhythm/releases/latest
[12]: http://meyerweb.com/eric/tools/css/reset/
[13]: https://github.com/jaredhowland/rhythm/blob/master/LICENSE.md
[14]: http://bower.io/

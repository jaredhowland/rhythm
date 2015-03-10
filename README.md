Rhythm
======
Rhythm is a small set of [Sass files][1] built to assist in creating [mobile-first][4], [responsive websites][4] with [vertical rhythm][2] using [modular scales][3]. Rhythm aims to assist you in creating well-designed websites that work as well on mobile devices as they do on large desktops.

Installation
============
Rhythm is available as a [Composer][5] [package][6], but you can also manually download it and include it in your project.

Composer
--------
1. Update your project's `composer.json` file to require Rhythm:

    ```json
    {
      "require": {
        "jaredhowland/rhythm": "~1.0"
      }
    }
    ```

2. SCSS: `@import "path/to/vendor/jaredhowland/rhythm/src/rhythm";`

Manual Installation
-------------------
1. [Download the latest `.zip` file][7].
2. Extract into your project.
3. SCSS: `@import "rhythm";`

Usage
=====
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

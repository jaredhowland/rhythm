---
---

Table of Contents
=================
1. auto-gen TOC:
{:toc}

About Rhythm
============
Rhythm is a small set of [Sass files][1] built to assist in creating [mobile-first][8], [responsive websites][8] with [vertical rhythm][2] using [modular scales][3].

Click on "[Toggle grid]" at the top of this page to see Rhythm in action. The grid must be toggled off and on again after resizing the page to a different breakpoint.

[SassDoc][15] documentation is also available: [documentation][16]

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
{% highlight json %}
"require": {
  "jaredhowland/rhythm": "~1.0"
}
{% endhighlight %}

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
Rhythm generates a vertical rhythm using modular scales for multiple breakpoints based on the values defined in `_variables.scss`. To change the defaults, import a file that redefines the variables before importing Rhythm.

Any time you need to change an element's vertical properties, use Rhythm's mixins instead:

* `font-size` &mdash; `@include font-size(1.2em);`
* `line-height` &mdash; `@include line-height(1.2em, 2);`
* `margin-top` and `margin-bottom` &mdash; `@include margin-top(1);`
* `padding-top` and `padding-bottom` &mdash; `@include padding-bottom(2);`

Adjusting Vertical Properties
=============================
**All of the examples assume you have not changed any of the default variables.**

Font Sizes
----------
To adjust the font-size of an element across all breakpoints, use the `font-size` mixin:

{% highlight scss %}
p {
  @include font-size(14px);
}
{% endhighlight %}

CSS output:

{% highlight css %}
p {
  font-size: 0.875rem;
  line-height: 1.3125rem
}

@media screen and (min-width: 30rem) {
  p {
    font-size: 0.875rem;
    line-height: 1.6875rem
  }
}

@media screen and (min-width: 48rem) {
  p {
    font-size: 0.875rem;
    line-height: 2rem
  }
}

@media screen and (min-width: 62rem) {
  p {
    font-size: 0.875rem;
    line-height: 2.25rem
  }
}

@media screen and (min-width: 75rem) {
  p {
    font-size: 0.875rem;
    line-height: 2.4375rem
  }
}
{% endhighlight %}

All Rhythm mixins and variables can accept any combination of the following units: `px`, `%`, or `rem`.

To set a different `font-size` for each breakpoint, use a list of all `font-size`s that is the same length as the number of defined breakpoints.

{% highlight scss %}
p {
  @include font-size(10px 12px 13px 14px 16px);
}
{% endhighlight %}

CSS output:

{% highlight css %}
p {
  font-size: 0.625rem;
  line-height: 1.3125rem
}

@media screen and (min-width: 30rem) {
  p {
    font-size: 0.75rem;
    line-height: 1.6875rem
  }
}

@media screen and (min-width: 48rem) {
  p {
    font-size: 0.8125rem;
    line-height: 2rem
  }
}

@media screen and (min-width: 62rem) {
  p {
    font-size: 0.875rem;
    line-height: 2.25rem
  }
}

@media screen and (min-width: 75rem) {
  p {
    font-size: 1rem;
    line-height: 2.4375rem
  }
}
{% endhighlight %}

Alternatively, you can use the `font-size`s defined in your modular scale.

{% highlight scss %}
h2 {
  @include font-size($h3);
}
{% endhighlight %}

Or

{% highlight scss %}
h2 {
  @include font-size($gamma);
}
{% endhighlight %}
CSS output:

{% highlight css %}
h2 {
  font-size: 1.125rem;
  line-height: 1.3125rem
}

@media screen and (min-width: 30rem) {
  h2 {
    font-size: 1.25rem;
    line-height: 1.6875rem
  }
}

@media screen and (min-width: 48rem) {
  h2 {
    font-size: 1.375rem;
    line-height: 2rem
  }
}

@media screen and (min-width: 62rem) {
  h2 {
    font-size: 1.5rem;
    line-height: 2.25rem
  }
}

@media screen and (min-width: 75rem) {
  h2 {
    font-size: 1.625rem;
    line-height: 2.4375rem
  }
}
{% endhighlight %}
**Not Recommended**: If you have an element that you would like to set the `font-size` for but not the `line-height`, you can do the following:

{% highlight scss %}
span {
  @include font-size($epsilon, false);
}
{% endhighlight %}
CSS output:

{% highlight css %}
span {
  font-size: 0.875rem
}

@media screen and (min-width: 30rem) {
  span {
    font-size: 0.8125rem
  }
}

@media screen and (min-width: 48rem) {
  span {
    font-size: 0.875rem
  }
}

@media screen and (min-width: 62rem) {
  span {
    font-size: 0.9375rem
  }
}

@media screen and (min-width: 75rem) {
  span {
    font-size: 1rem
  }
}
{% endhighlight %}
Changing the `font-size` without also changing the `line-height` runs the very real risk of throwing off your vertical scale.

Line Heights
------------
Line heights are set for each breakpoint based on the `$breakpoints` map from your `variables` Sass file. If no `line-height` is defined for a breakpoint, the modular scale is used as the line-height.

Normally, if you adjust the `line-height` you will also want to adjust the `font-size` and line length. However, if the modular scale is crowding an element and you want to increase the `line-height`, you must do it using a multiple of the generated `line-height`. Use the `line-height` mixin to do this.

To maintain a vertical rhythm, `line-height` is calculated based on a given `font-size`. The mixin requires the `font-size`(s) and the scale value you would like to increase the line-height by:

{% highlight scss %}
h2 {
  @include line-height($h2, 2);
}
{% endhighlight %}
CSS output:

{% highlight css %}
h2 {
  line-height: 2.625rem
}

@media screen and (min-width: 30rem) {
  h2 {
      line-height: 3.375rem
  }
}

@media screen and (min-width: 48rem) {
  h2 {
    line-height: 4rem
  }
}

@media screen and (min-width: 62rem) {
  h2 {
    line-height: 4.5rem
  }
}

@media screen and (min-width: 75rem) {
  h2 {
    line-height: 4.875rem
  }
}
{% endhighlight %}
You can pass a single `font-size` or the same number of `font-size`s as there are defined breakpoints.

Margins
-------
Because Rhythm includes v2.0 of Eric Meyer's [reset stylesheet][12], all margins are defaulted to `0`. Use the `margin`, `margin-top`, `margin-right`, `margin-bottom`, and `margin-left` mixins to adjust the margins. The mixins require you to define the scale value by which you would like the margin to be increased.

### margin()
The `margin()` mixin behaves just like the CSS `margin`. You can pass one, two, three, or four scale values:

{% highlight scss %}
h1 {
  @include margin(1);
}

h2 {
  @include margin(1 0);
}

h3 {
  @include margin(1 3 2);
}

h4 {
  @include margin(1 1 0 0);
}
{% endhighlight %}
CSS output:

{% highlight css %}
h1 {
  margin: 1.3125rem
}

@media screen and (min-width: 30rem) {
  h1 {
    margin: 1.6875rem
  }
}

@media screen and (min-width: 48rem) {
  h1 {
    margin: 2rem
  }
}

@media screen and (min-width: 62rem) {
  h1 {
    margin: 2.25rem
  }
}

@media screen and (min-width: 75rem) {
  h1 {
    margin: 2.4375rem
  }
}

h2 {
  margin: 1.3125rem 0rem
}

@media screen and (min-width: 30rem) {
  h2 {
    margin: 1.6875rem 0rem
  }
}

@media screen and (min-width: 48rem) {
  h2 {
    margin: 2rem 0rem
  }
}

@media screen and (min-width: 62rem) {
  h2 {
    margin: 2.25rem 0rem
  }
}

@media screen and (min-width: 75rem) {
  h2 {
    margin: 2.4375rem 0rem
  }
}

h3 {
  margin: 1.3125rem 3.9375rem 2.625rem
}

@media screen and (min-width: 30rem) {
  h3 {
    margin: 1.6875rem 5.0625rem 3.375rem
  }
}

@media screen and (min-width: 48rem) {
  h3 {
    margin: 2rem 6rem 4rem
  }
}

@media screen and (min-width: 62rem) {
  h3 {
    margin: 2.25rem 6.75rem 4.5rem
  }
}

@media screen and (min-width: 75rem) {
  h3 {
    margin: 2.4375rem 7.3125rem 4.875rem
  }
}

h4 {
  margin: 1.3125rem 1.3125rem 0rem 0rem
}

@media screen and (min-width: 30rem) {
  h4 {
    margin: 1.6875rem 1.6875rem 0rem 0rem
  }
}

@media screen and (min-width: 48rem) {
  h4 {
    margin: 2rem 2rem 0rem 0rem
  }
}

@media screen and (min-width: 62rem) {
  h4 {
    margin: 2.25rem 2.25rem 0rem 0rem
  }
}

@media screen and (min-width: 75rem) {
  h4 {
    margin: 2.4375rem 2.4375rem 0rem 0rem
  }
}
{% endhighlight %}

### margin-top(), margin-right(), margin-bottom(), margin-left()

The `margin-top()`, `margin-right()`, `margin-bottom()`, and `margin-left` mixins work just as you would expect:

{% highlight scss %}
p {
  @include margin-top(2);
}
{% endhighlight %}
CSS output:

{% highlight css %}
p {
  margin-top: 2.625rem;
}

@media screen and (min-width: 30rem) {
  p {
    margin-top: 3.375rem
  }
}

@media screen and (min-width: 48rem) {
  p {
    margin-top: 4rem
  }
}

@media screen and (min-width: 62rem) {
  p {
    margin-top: 4.5rem
  }
}

@media screen and (min-width: 75rem) {
  p {
    margin-top: 4.875rem
  }
}
{% endhighlight %}
Padding
-------
The `padding()`, `padding-top()`, `padding-right()`, `padding-bottom()`, and `padding-left()` mixins work exactly like the corresponding `margin` mixins.

Variables
=========
The following variables (shown with their default values) can be redefined before importing Rhythm:

{% highlight scss %}
/*-----------------------*/
/* Breakpoint defaults   */
/*-----------------------*/

$breakpoints: (
  bp-0: (
    breakpoint: 0px, // Mobile first
    font-size: 16px 18px,
    line-height: 1.5,
    modular-scale: golden
  ),
  bp-1: (
    breakpoint: 480px, // ~ Extra small screen up
    font-size: 18px 20px,
    line-height: 1.5,
    modular-scale: golden
  ),
  bp-2: (
    breakpoint: 768px, // ~ Small screen/tablet up
    font-size: 20px 22px,
    modular-scale: golden // no line-height specified so scale is used
  ),
  bp-3: (
    breakpoint: 992px, // ~ Medium screen up
    font-size: 22px 24px,
    modular-scale: golden // no line-height specified so modular-scale is used
  ),
  bp-4: (
    breakpoint: 1200px, // ~Desktop up
    font-size: 24px 26px,
    modular-scale: golden // no line-height specified so modular-scale is used
  )
) !default;

/*------------------------------------------------------------ */
/* Modular scales
-------------------------------------------------------------- */
$modular-scales: () !default; // Used to define custom scales if desired

$modular-scale-ratios: (
  golden:           1.618,
  minor-second:     1.067,
  major-second:     1.125,
  minor-third:      1.2,
  major-third:      1.25,
  perfect-fourth:   1.333,
  augmented-fourth: 1.414,
  perfect-fifth:    1.5,
  minor-sixth:      1.6,
  major-sixth:      1.667,
  minor-seventh:    1.778,
  major-seventh:    1.875,
  octave:           2,
  major-tenth:      2.5,
  major-eleventh:   2.667,
  major-twelfth:    3,
  double-octave:    4
);

$modular-scales: map-merge($modular-scale-ratios, $modular-scales);

/*------------------------------------------------------------ */
/* Fonts
-------------------------------------------------------------- */

// Serif fonts.
$serif-font-family: 'Georgia, serif' !default;

// Sans-serif fonts.
$sans-serif-font-family: 'Helvetica, sans-serif' !default;

// Monospace fonts.
$monospace-font-family: 'Menlo, monospace' !default;

// Default font types.
$body-font:      unquote($serif-font-family) !default;
$heading-font:   unquote($serif-font-family) !default;
$monospace-font: unquote($monospace-font-family) !default;

/*------------------------------------------------------------ */
/* Typography
-------------------------------------------------------------- */

// Indent value for paragraphs
$indent-value: 1rem !default;

// Drop caps.
$dropcap-float-position: left !default;
$dropcap-font-size:      4em !default;
$dropcap-font-family:    inherit !default;
$dropcap-txt-indent:     0 !default;
$dropcap-margin:         10px 10px 0 0 !default;
$dropcap-padding:        0 20px !default;
$dropcap-color:          inherit !default;
$dropcap-line-height:    1 !default;
$dropcap-bg:             transparent !default;

/*------------------------------------------------------------ */
/* Colors
-------------------------------------------------------------- */

// Background colors.
$background-color:      #F5F5F5 !default;
$code-background-color: darken($background-color, 7%) !default;

// Text colors.
$heading-color:         #2E2E2E !default;
$body-color:            #444444 !default;
$body-color-muted:      #CCCCCC !default;
$link-color:            #265C83 !default;
$link-hover-color:      lighten($link-color, 10%) !default;
$link-background-color: transparent !default;
{% endhighlight %}
*Modular Scales*. When you first call Rhythm, a modular scale is generated for you based on the `$breakpoint` values you have defined. You can use multiple base `font-size`s to create a more robust [scale][5]. It is recommended that you use no more than two `font-size`s to generate the scale but Rhythm will accept as many as you give it. Scale options include:

  * `golden`
  * `minor-second`
  * `major-second`
  * `minor-third`
  * `major-third`
  * `perfect-fourth`
  * `augmented-fourth`
  * `perfect-fifth`
  * `minor-sixth`
  * `major-sixth`
  * `minor-seventh`
  * `major-seventh`
  * `octave`
  * `major-tenth`
  * `major-eleventh`
  * `major-twelfth`
  * `double-octave`

To create a custom scale, create a `$modular-scales` map before importing Rhythm:

{% highlight scss %}
$modular-scales: (my-scale: 2.3, my-scale-2: 2.4);
{% endhighlight %}
Then, redefine your `$breakpoints` variable to use your new scale:

{% highlight scss %}
$breakpoints: (
  bp-0: (
    breakpoint: 0px, // Mobile first
    font-size: 16px 18px,
    line-height: 1.5,
    modular-scale: my-scale
  )
);
{% endhighlight %}
Rhythm also creates lists for every breakpoint for various font sizes based on the selected modular scale. The Rhythm implementation of this closely resembles the one found in the article "[Pragmatic, Practical Font Sizing in CSS][6]." Specifically, it sets the following variables from largest font size to smallest:

  * `$tera`
  * `$giga`
  * `$mega`
  * `$alpha`, `$h1`
  * `$beta`, `$h2`
  * `$gamma`, `$h3`
  * `$delta`, `$h4`
  * `$epsilon`, `$h5`
  * `$zeta`, `$h6`

For example, if you want to set your `h1`'s `font-size` to be one scale down from the default, you can do the following:

{% highlight scss %}
h1 {
  @include font-size($h2);
}
{% endhighlight %}

License
=======
[The MIT License (MIT)][13]

[1]:  http://sass-lang.com/
[2]:  http://24ways.org/2006/compose-to-a-vertical-rhythm
[3]:  http://alistapart.com/article/more-meaningful-typography
[4]:  http://necolas.github.io/normalize.css/
[5]:  http://modularscale.com/scale/?px1=18&px2=27&ra1=1.5&ra2=0
[6]:  http://csswizardry.com/2012/02/pragmatic-practical-font-sizing-in-css/
[7]:  http://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
[8]:  http://bradfrost.com/blog/web/mobile-first-responsive-web-design/
[9]:  https://getcomposer.org
[10]: http://packagist.org
[11]: https://github.com/jaredhowland/rhythm/releases/latest
[12]: http://meyerweb.com/eric/tools/css/reset/
[13]: https://github.com/jaredhowland/rhythm/blob/master/LICENSE.md
[14]: http://bower.io
[15]: http://sassdoc.com
[16]: rhythm/sassdoc

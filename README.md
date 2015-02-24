Rhythm
======
Rhythm is a small set of [Sass files][1] built to assist in creating [mobile-first][8], [responsive websites][8] with [vertical rhythm][2] using [modular scales][3]. Translated, Rhythm aims to assist you in creating well-designed websites that work as well on mobile devices as they do on large desktops.

Installation
============
Rhythm is available as a [Composer][9] [package][10], but you can also manually download it and include it in your project.

Composer
--------
1. If you have not done so already, install [Composer][9]

2. Update your project's `composer.json` file to require Rhythm:

    ```json
    {
      "require": {
        "jaredhowland/rhythm": "~0.2.0"
      }
    }
    ```

3. SCSS: `@import "path/to/vendor/jaredhowland/rhythm/src/rhythm";`

Manual Installation
-------------------
1. [Download the latest `.zip` file][11].
2. Extract into your project.
3. SCSS: `@import "rhythm";`

Usage
=====
Including Rrhythm with your Sass files automatically generates a vertical rhythm for you using modular scales for multiple breakpoints based on the values defined in `_variables.scss`. To change the defaults, redefine the variables before importing Rhythm.

Any time an element's vertical properties are changed, you must offset this change to maintain a vertical rhythm. The major properties that change an element's vertical rhythm include:

* `font-size`
* `line-height`
* `margin-top` and `margin-bottom`
* `padding-top` and `padding-bottom`

Use Rhythm any time you want to adjust those properties and it will perform the mathematical acrobatics required to restore the vertical rhythm to your site.

Examples
========

Rhythm includes v2.0 of Eric Meyer's [reset stylesheet][12].













    If you want to override any default variables, create a `variables-custom.scss` file and import it before you import Rhythm. Alternatively, redefine the variable(s) in your primary `.scss` file before you `@import "rhythm";`.

3. After importing Rhythm, set your base `font-size` and `line-height` in your primary `.scss` file:

    ```scss
    body {
      // Base font-size: 18px
      // Base line-height: 1.3
      @include rhythm(18px, 1.3);
    }
    ```

    `font-size` can be set in `px`, `%`, or `rem`. [`line-height` should always be unitless][7].

4. *Margins*. If you would like to add a top and bottom margin to an element:

    ```scss
    p {
      @include margin();
    }
    ```

    Will generate<sup> * </sup>:

    ```css
    p {
      margin-top: 1.3rem;
      margin-bottom: 1.3rem;
    }
    ```
    <sup> * </sup> <small>If you do not pass any variables to `margin` Rhythm assumes the element has the base `font-size` and base `line-height`.</small>

    To maintain a vertical rhythm, your margins must be derived from your `line-height`. If you would like twice your `line-height` for a top margin and no margin on bottom, do the following:

    ```scss
    p {
      @include margin(2, 0);
    }
    ```

    Will generate:

    ```css
    p {
      margin-top: 2.6rem;
      margin-bottom: 0;
    }
    ```

    The numbers passed to `@include margin();` must sum to a whole number to maintain the rhythm (*e.g.* cannot be 0.5 and 0.75 as that sums to 1.25).

    If you are adding margin to an element that is a different size than your base sizes, you must also pass along the `font-size`:

    ```scss
    p {
      font-size: 24px;
      @include margin(1, 1, 24px);
    }
    ```

5. *Font Sizes*. If you change a font size, you have to change the `line-height` to maintain the rhythm. Use the `fs-lh` mixin to do this automatically.

    ```scss
    p {
      @include fs-lh(1.2rem);
    }
    ```

    Will generate<sup> * </sup>:

    ```css
    p {
      font-size: 1.2rem;
      line-height: 1.21875; // ([base font size] * [base line height]) / [new font size]: 23.4/19.2 = 1.21875
    }
    ```
    <sup> * </sup> <small>This assumes 18px is the base `font-size` and 1.3 is the base `line-height`.</small>

6. *Modular Scales*. When you first call Rhythm, a modular scale is generated for you based on the `$modular-scale` variable set in your `variables-custom.scss` file or in the `.scss` file before you `@import "rhythm";`. It combines your base `font-size` and base `line-height` to create the [scale][5].The default scale is the `golden` ratio. Options include:

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

    To change scales, simply redefine `$modular-scale`. If you wanted the `minor-second` scale, for example, do the following:

    ```scss
    $modular-scale: minor-second;
    ```

    Rhythm also creates variables for various font sizes based on the selected modular scale. The Rhythm implementation of this closely resembles the one found in the article "[Pragmatic, Practical Font Sizing in CSS][6]." Specifically, it sets the following variables from largest font size to smallest:

    * `$tera`
    * `$giga`
    * `$mega`, `$h1`
    * `$alpha`, `$h2`
    * `$beta`, `$h3`
    * `$gamma`, `$h4`
    * `$delta`, `$h5`
    * `$epsilon`, `$h6`
    * `$zeta`

    For example, if you want to set your `h1`'s `font-size`, you can do the following:

    ```scss
    h1 {
      @include fs-lh($h1);
    }
    ```

    Alternatively, if you want a slightly smaller `h1`, you can do the following:

    ```scss
    h1 {
      @include fs-lh($alpha);
    }
    ```

7. *Responsive*. If you want to have a responsive design, create a new file and name it `_responsive.scss`. Import it as the very last line of your primary `.scss` file:

    ```scss
    @import "path/to/vendor/jaredhowland/rhythm/src/rhythm";
    …
    @import "path/to/_responsive.scss";
    ```

    Place the following in your `_responsive.scss` file:

    ```scss
    /* Extra small devices (phones, less than 768px) */
    /* No media query since this is the default in Rhythm */

    /* Small devices (tablets, 768px and up) */
    @media (min-width: $screen-sm-min) {

    }

    /* Medium devices (desktops, 992px and up) */
    @media (min-width: $screen-md-min) {

    }

    /* Large devices (large desktops, 1200px and up) */
    @media (min-width: $screen-lg-min) {

    }
    ```

    Rhythm assumes your base style sheet defines styles for the smallest screens and any subsequent media queries define styles for larger screens.

    For every element that you set a new `font-size`, `line-height`, or `margin` in your primary `.scss` file, you will need to redefine those elements if you want things to display differently at various breakpoints. For example, if your primary `.scss` file looks as follows:

    ```scss
    @import "path/to/vendor/jaredhowland/rhythm/src/rhythm";

    body {
      @include rhythm(18px, 1.3);
    }

    h1 {
      @include fs-lh($h1);
      @include margin(2, 0, $h1);
    }

    .title {
      @include fs-lh($h2);
    }

    .subtitle {
      text-transform: uppercase;
    }

    @import "path/to/_responsive.scss";
    ```

    You will need something like the following in your `_responsive.scss` file if you want larger screens to have a larger base `font-size` and base `line-height`:

    ```scss
    /* Extra small devices (phones, less than 768px) */
    /* No media query since this is the default in Rhythm */

    /* Small devices (tablets, 768px and up) */
    @media (min-width: $screen-sm-min) {
      body {
        @include rhythm(20px, 1.5);
      }

      h1 {
        @include fs-lh($h2);
        @include margin(2, 0, $h2);
      }

      .title {
        @include fs-lh($h1);
      }
    }

    /* Medium devices (desktops, 992px and up) */
    @media (min-width: $screen-md-min) {

    }

    /* Large devices (large desktops, 1200px and up) */
    @media (min-width: $screen-lg-min) {

    }
    ```

[1]:  http://sass-lang.com/
[2]:  http://24ways.org/2006/compose-to-a-vertical-rhythm
[3]:  http://alistapart.com/article/more-meaningful-typography
[4]:  http://necolas.github.io/normalize.css/
[5]:  http://modularscale.com/scale/?px1=18&px2=27&ra1=1.5&ra2=0
[6]:  http://csswizardry.com/2012/02/pragmatic-practical-font-sizing-in-css/
[7]:  http://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
[8]:  http://bradfrost.com/blog/web/mobile-first-responsive-web-design/
[9]:  https://getcomposer.org
[10]: http://packagist.org/
[11]: https://github.com/jaredhowland/rhythm/releases/latest
[12]: http://meyerweb.com/eric/tools/css/reset/

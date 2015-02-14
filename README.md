Rhythm
======
Rhythm is a small set of [Sass files][1] to create a [vertical rhythm][2] for your website using [modular scales][3].

Usage
=====
1. Update your `composer.json` to require Rhythm:

    ```
    {
      "require": {
        "jaredhowland/rhythm": "~0.0.2"
      }
    }
    ```

2. Add the following to the top of your primary `.scss` file:

    ```
    @import "path/to/vendor/jaredhowland/rhythm/src/rhythm";
    ```

    If you want to override any default variables, create a `variables-custom.scss` file and import it before you import Rhythm. Alternatively, redefine the variable(s) in your primary `.scss` file before you `@import "rhythm";`.

3. After importing Rhythm, set your base `font-size` and `line-height` in your primary `.scss` file:

    ```
    body {
      // Base font-size: 18px
      // Base line-height: 1.3
      @include rhythm(18px, 1.3);
    }
    ```

    `font-size` can be set in `px`, `%`, or `rem`. [`line-height` should always be unitless][7].

4. *Margins*. If you would like to add a top and bottom margin to an element:

    ```
    p {
      @include margin();
    }
    ```

    Will generate<sup> * </sup>:

    ```
    p {
      margin-top: 1.3rem;
      margin-bottom: 1.3rem;
    }
    ```
    <sup> * </sup> <small>If you do not pass any variables to `margin` Rhythm assumes the element has the base `font-size` and base `line-height`.</small>

    To maintain a vertical rhythm, your margins must be derived from your `line-height`. If you would like twice your `line-height` for a top margin and no margin on bottom, do the following:

    ```
    p {
      @include margin(2, 0);
    }
    ```

    Will generate:

    ```
    p {
      margin-top: 2.6rem;
      margin-bottom: 0;
    }
    ```

    The numbers passed to `@include margin();` must sum to a whole number to maintain the rhythm (*e.g.* cannot be 0.5 and 0.75 as that sums to 1.25).

    If you are adding margin to an element that is a different size than your base sizes, you must also pass along the `font-size`:

    ```
    p {
      font-size: 24px;
      @include margin(1, 1, 24px);
    }
    ```

5. *Font Sizes*. If you change a font size, you have to change the `line-height` to maintain the rhythm. Use the `fs-lh` mixin to do this automatically.

    ```
    p {
      @include fs-lh(1.2rem);
    }
    ```

    Will generate<sup> * </sup>:

    ```
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

    ```
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

    ```
    h1 {
      @include fs-lh($h1);
    }
    ```

    Alternatively, if you want a slightly smaller `h1`, you can do the following:
    ```
    h1 {
      @include fs-lh($alpha);
    }
    ```

[1]: http://sass-lang.com/
[2]: http://24ways.org/2006/compose-to-a-vertical-rhythm
[3]: http://alistapart.com/article/more-meaningful-typography
[4]: http://necolas.github.io/normalize.css/
[5]: http://modularscale.com/scale/?px1=18&px2=27&ra1=1.5&ra2=0
[6]: http://csswizardry.com/2012/02/pragmatic-practical-font-sizing-in-css/
[7]: http://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/

Rhythm
======
Rhythm is a small set of [Sass files][1] to create a [vertical rhythm][2] for your website using [modular scales][3].

Usage
=====
1. Download [normalize.css][4] and Rhythm.

2. Add the following to your primary `.scss` file:
    ```
    @import "path/to/normalize";
    @import "path/to/rhythm";

    …
    ```
    If you wish to override any default variables, create a `variables-custom.scss` file and import it before you import `rhythm`. Alternatively, redefine the variable(s) in your primary `.scss` file before you `@import "rhythm";`.

3. Add the following to your primary `.scss` file:

    ```
    * {
      margin: 0;
      padding: 0;
    }

    html {
      font-size: 100%;
      line-height: 1;
      text-rendering: optimizeLegibility;
    }

    body {
      @include rhythm(18px, 1.3); // base font-size: 18px; base line-height: 1.3
    }
    ```

4. *Margins*. If you would like to add a top and bottom margin to an element:

    ```
    p {
      @include margin();
    }
    ```

    Generates (if you do not pass any variables to `margin` it assumes the base font-size and base line-height):

    ```
    p {
      margin-top: 1.3rem;
      margin-bottom: 1.3rem;
    }
    ```

    To maintain a vertical rhythm, your margins must be derived from your line-height. If you would like twice your line-height for a top margin and no margin on bottom, do the following:

    ```
    p {
      @include margin(2, 0);
    }
    ```

    Generates:

    ```
    p {
      margin-top: 2.6rem;
      margin-bottom: 0;
    }
    ```

    The numbers passed to `@include margin()` must sum to a whole number to maintain the rhythm (*e.g.* cannot be 0.5 and 0.75 as that sums to 1.25).

    If you are adding margin to an element that is a different size than your base sizes, you must also pass along the font-size:

    ```
    p {
      font-size: 24px;
      @include margin(1, 1, 24px);
    }
    ```

5. *Font Sizes*. If you change a font size, you have to change the line-height to maintain the rhythm. Use the `fs-lh` mixin to do this automatically.

    ```
    p {
      @include fs-lh(1.2rem);
    }
    ```

    Generates (assuming 18px is base font-size and 1.3 is base line-height):

    ```
    p {
      font-size: 1.2rem;
      line-height: 1.21875; // ([base font size] * [base line height]) / [new font size]: 23.4/19.2 = 1.21875
    }
    ```

6. *Modular Scales*. When you first call Rhythm, a modular scale is generated for you based on the `$modular-scale` variable set in your `variables-custom.scss` file or in the file before you `@import "rhythm";`. It combines your base font-size and base line-height to create the [scale][5].The default scale is the `golden` ratio. Other options include:

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

    For example, if you want to set your `h1` font-size, you can do the following:

    ```
    h1 {
      @include fs-lh($h1);
    }
    ```

    Alternatively, if you want a slightly smaller `h1`, you could do the following:
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

const autoprefixer = require('autoprefixer');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');

module.exports = {
  // Necessary for external CSS imports to work
  // https://github.com/facebookincubator/create-react-app/issues/2677
  ident: 'postcss',
  plugins: [
    postcssFlexbugsFixes,
    autoprefixer({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ],
      flexbox: 'no-2009',
    }),
  ],
};

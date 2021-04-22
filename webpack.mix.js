let mix = require('laravel-mix');

mix.sass('src/scss/master.scss', 'dist/css/')

mix.js('src/js/main.js', 'dist/js/').options({
  processCssUrls: false
});

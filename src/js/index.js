(function() {
  'use strict';

  // Stylesheets
  require('lib/normalize.css');
  require('lib/skeleton.css');
  require('scss/style.scss');

  // new Vivus('indiana', {duration: 200}, function(v) {
  //   v.el.classList.add('done');
  // });

  new Vivus('logo', {
    duration: 200,
    animTimingFunction: Vivus.EASE
  });
})();

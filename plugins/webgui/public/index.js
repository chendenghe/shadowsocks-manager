angular.module('app', [
  'ngMaterial',
  'ui.router',
  'ngMessages',
  'ja.qr',
  'chart.js',
  'angularMoment',
  'ngWebSocket',
  'ngStorage',
  'angular-inview',
  'hc.marked',
  'pascalprecht.translate',
  'ngclipboard',
]);

angular.element(() => {
  angular.bootstrap(document, ['app']);
});
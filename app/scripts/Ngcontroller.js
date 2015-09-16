function MainController($scope) {
  
}
angular.module('sidenote', ['hc.marked']).config(['markedProvider', function(markedProvider) {
      markedProvider.setOptions({gfm: true});}]).controller('MainController', MainController);
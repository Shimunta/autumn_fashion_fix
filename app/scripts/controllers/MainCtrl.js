(function() {
  function MainCtrl(Data, $scope) {
    this.posts = Data.getData();

  // set the default limit when the page loads
  $scope.limit = 3;
  // loadMore function to add addtional posts
  $scope.loadMore = function() {
    $scope.limit = $scope.limit += 6;
  }
}

  angular
    .module('Fashion')
    .controller('MainCtrl', ['Data', '$scope', MainCtrl]);
})();

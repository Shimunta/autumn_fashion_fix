(function() {
  function MainCtrl(Data) {
    this.posts = Data.getData();
  }

  angular
    .module('Fashion')
    .controller('MainCtrl', ['Data', MainCtrl]);
})();

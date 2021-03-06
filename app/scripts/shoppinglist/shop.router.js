'use strict';
(function () {
  angular.module('app.shopping').config(shoppingRouter);
  function shoppingRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('shopingList', {
      url: '/shoppinglist',
      templateUrl: 'app/scripts/shoppinglist/shop.view.html',
      controller: 'ShopCtrl',
      controllerAs: 'vm',
      resolve: {
        loadShopping: function (userStorage) {
          return userStorage.getBooks();
        }
      }
    });
    $urlRouterProvider.otherwise('/');
  }
})();
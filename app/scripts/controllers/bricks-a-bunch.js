'use strict';

/**
 * @ngdoc function
 * @name serviceQuizApp.controller:BricksABunchCtrl
 * @description
 * # BricksABunchCtrl
 * Controller of the serviceQuizApp
 */
angular.module('serviceQuizApp')
  .controller('BricksABunchCtrl', ['brickWarehouse', function (warehouse) {
    this.redBricks = warehouse.bricks.red;
    this.name = 'Bricks A Bunch';

    this.addToCart = function(price) {
      warehouse.decreaseQty('red', price);
    };
  }]);

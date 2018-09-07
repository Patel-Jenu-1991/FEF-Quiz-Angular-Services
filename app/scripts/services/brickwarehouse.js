'use strict';

/**
 * @ngdoc service
 * @name serviceQuizApp.brickWarehouse
 * @description
 * # brickWarehouse
 * Service in the serviceQuizApp.
 */
angular.module('serviceQuizApp')
  .service('brickWarehouse', function () {
    // AngularJS will instantiate a singleton by calling 'new' on this function
    // works yet the response is not available outside of the scope
    // of the chained function
    // this.getBricks = function() {
    //   return $.ajax( '../extras/bricks.json' );
    // };
    this.bricks = {
      'red': {
        '1x1': {
          'quantity': 29,
          'price': 0.01
        },
        '2x2': {
          'quantity': 48,
          'price': 0.03
        },
        '2x6': {
          'quantity': 37,
          'price': 0.05
        },
      },
      'blue': {
        '2x2': {
          quantity: 7,
          price: 0.02
        },
        '2x4': {
          quantity: 2,
          price: 0.04
        }
      },
      'green': {
        '2x4': {
          quantity: 13,
          price: 0.04
        },
        '2x8': {
          quantity: 41,
          price: 0.08
        }
      }
    };

    this.decreaseQty = function(color, size) {
      this.bricks[color][size].quantity -= 1;
    };
  });

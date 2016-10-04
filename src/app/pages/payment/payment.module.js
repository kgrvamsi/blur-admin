/**
@author: KGR Vamsi
created on 30-09-2016
**/

(function () {
  'use strict';

  angular.module('BlurAdmin.pages.payment', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('payment', {
          url: '/payment',
          templateUrl: 'app/pages/payment/payment.html',
          title: 'Payment',
          sidebarMeta: {
            icon: 'ion-cash',
            order: 500,
          },
        });
  }

})();


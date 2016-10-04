/**
@author: KGR Vamsi
created on 02-10-2016
**/

(function () {
  'use strict';

  angular.module('BlurAdmin.pages.posts', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('posts', {
          url: '/posts',
          templateUrl: 'app/pages/posts/posts.html',
          title: 'Posts',
          sidebarMeta: {
            icon: 'ion-compose',
            order: 300,
          },
        });
  }

})();


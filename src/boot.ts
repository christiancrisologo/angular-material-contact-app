/// <reference path="_all.ts" />
module MyApp{
    angular.module('myApp',['ngMaterial','ngMdIcons','ngMessages'])
    .service('userService',UserService)
    .controller('mainController',MainController)
    .config(($mdIconProvider:angular.material.IIconProvider,
    $mdThemingProvider:angular.material.IThemingProvider)=>{
        $mdIconProvider
        .defaultIconSet('./assets/svg/avatars.svg',128)
        .icon('menu','./assets/svg/menu.svg',24)
        .icon('google_plus','./assets/svg/google_plus.svg',512)
        .icon('hangouts','./assets/svg/hangouts.svg',512)
        .icon('twitter','./assets/svg/twitter.svg',512)
        .icon('phone','./assets/svg/phone.svg',512);

        //$mdThemingProvider.theme('default').dark();
        
        $mdThemingProvider.theme('default')
        .primaryPalette('blue',
        {
            'default':'300',
            'hue-1':'100',
            'hue-2':'600',
            'hue-3':'A100'
        })
        .accentPalette('red',
        {
            'default':'200'
        }).dark();
        
        
    })
}
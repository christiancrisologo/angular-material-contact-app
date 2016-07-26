/// <reference path="_all.ts" />
var MyApp;
(function (MyApp) {
    angular.module('myApp', ['ngMaterial', 'ngMdIcons', 'ngMessages'])
        .service('userService', MyApp.UserService)
        .controller('mainController', MyApp.MainController)
        .config(function ($mdIconProvider, $mdThemingProvider) {
        $mdIconProvider
            .defaultIconSet('./assets/svg/avatars.svg', 128)
            .icon('menu', './assets/svg/menu.svg', 24)
            .icon('google_plus', './assets/svg/google_plus.svg', 512)
            .icon('hangouts', './assets/svg/hangouts.svg', 512)
            .icon('twitter', './assets/svg/twitter.svg', 512)
            .icon('phone', './assets/svg/phone.svg', 512);
        //$mdThemingProvider.theme('default').dark();
        // $mdThemingProvider.theme('default')
        //     .primaryPalette('blue', {
        //     'default': '300',
        //     'hue-1': '100',
        //     'hue-2': '600',
        //     'hue-3': 'A100'
        // })
        //     .accentPalette('red', {
        //     'default': '200'
        // }).dark();
            
        // $mdThemingProvider.definePalette('customPalette',
        // {
        //     '40':'ffebee',
        //     '50':'ffebee',
        //     '100':'ffcdd2',
        //     '200':'ef9a9a',
        //     '400':'ef5350',
        //     '500':'f44336',
        //     '600':'e53935',
        //     '700':'d32f2f',
        //     '900':'b71c1c',
        //     '800':'c62828',
        //     'A100':'ff8a80',
        //     'A200':'ff5252',
        //     'A400':'ff1744',
        //     'A700':'d50000',
        //     'contrastDefaultColor':'light',
        //     'contrastDefaultColors':[
        //         '40','100','200','300','400','A100'
        //     ],
        //     'contrastLightColors':undefined            
        // });
         
        // $mdThemingProvider.theme('default')
        //    .primaryPalette('customPalette');
        
        
        var neoRedMap = $mdThemingProvider.extendPalette('red',
        {
            '500':'ff0000'
        });
        $mdThemingProvider.definePalette('neonRed',neoRedMap);
        $mdThemingProvider.theme('default')
            .primaryPalette('neonRed');
        
    });

})(MyApp || (MyApp = {}));
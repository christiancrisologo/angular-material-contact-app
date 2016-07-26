/// <reference path="../_all.ts" />
module MyApp{
    export class ContactPanelController{
        static $inject = [
            '$mdPanel',
            'userService',
            '$mdBottomSheet'
            ];
        constructor(
            private $mdPanel:angular.material.IPanelService,
            private userService:IUserService,
            private $mdBottomSheet:angular.material.IBottomSheetService)
            {
                this.user = userService.selectedUser;
            }
            
        user:User;
        
        actions = [
            {name:'Phone' , icon: 'phone'},
            {name:'Twitter' , icon: 'twitter'},
            {name:'Goole++' , icon: 'google_plus'},
            {name:'Hangouts' , icon: 'hangouts'}
        ];
        
        submitContact(action):void{
            this.$mdBottomSheet.hide(action);
        }
    }
}
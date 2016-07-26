/// <reference path="../_all.ts" />

module MyApp{
    export class AddUserController{
        static $inject = [
            '$mdDialog'            
        ];
        constructor(
            private $mdDialog:angular.material.IDialogService
        ){ }
        
        user:CreateUser;
        
        
        cancel():void{
            this.$mdDialog.cancel();
        }
        save():void{
            this.$mdDialog.hide(this.user);
        }
        
        avatars=[
            'svg-1','svg-2','svg-3','svg-4','svg-5'
        ]
    }
}
/// <reference path="../_all.ts" />
var MyApp;
(function (MyApp) {
    var AddUserController = (function () {
        function AddUserController($mdDialog) {
            this.$mdDialog = $mdDialog;
            this.avatars = [
                'svg-1', 'svg-2', 'svg-3', 'svg-4', 'svg-5'
            ];
        }
        AddUserController.prototype.cancel = function () {
            this.$mdDialog.cancel();
        };
        AddUserController.prototype.save = function () {
            this.$mdDialog.hide(this.user);
        };
        AddUserController.$inject = [
            '$mdDialog'
        ];
        return AddUserController;
    }());
    MyApp.AddUserController = AddUserController;
})(MyApp || (MyApp = {}));

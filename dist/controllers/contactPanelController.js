/// <reference path="../_all.ts" />
var MyApp;
(function (MyApp) {
    var ContactPanelController = (function () {
        function ContactPanelController($mdPanel, userService, $mdBottomSheet) {
            this.$mdPanel = $mdPanel;
            this.userService = userService;
            this.$mdBottomSheet = $mdBottomSheet;
            this.actions = [
                { name: 'Phone', icon: 'phone' },
                { name: 'Twitter', icon: 'twitter' },
                { name: 'Goole++', icon: 'google_plus' },
                { name: 'Hangouts', icon: 'hangouts' }
            ];
            this.user = userService.selectedUser;
        }
        ContactPanelController.prototype.submitContact = function (action) {
            this.$mdBottomSheet.hide(action);
        };
        ContactPanelController.$inject = [
            '$mdPanel',
            'userService',
            '$mdBottomSheet'
        ];
        return ContactPanelController;
    }());
    MyApp.ContactPanelController = ContactPanelController;
})(MyApp || (MyApp = {}));

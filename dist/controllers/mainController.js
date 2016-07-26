/// <reference path="../_all.ts" />
var MyApp;
(function (MyApp) {
    var MainController = (function () {
        function MainController(userService, $mdSidenav, $mdToast, $mdDialog, $mdMedia, $mdBottomSheet) {
            this.userService = userService;
            this.$mdSidenav = $mdSidenav;
            this.$mdToast = $mdToast;
            this.$mdDialog = $mdDialog;
            this.$mdMedia = $mdMedia;
            this.$mdBottomSheet = $mdBottomSheet;
            //vars
            this.users = [];
            this.selected = null;
            this.searchText = '';
            this.tabIndex = 0;
            this.newNote = new MyApp.Note('', null);
            var self = this;
            this.userService.loadAllUsers()
                .then(function (users) {
                self.users = users;
                self.selected = users[0];
                self.userService.selectedUser = self.selected;
            });
        }
        MainController.prototype.toggleSideNav = function () {
            this.$mdSidenav('left').toggle();
        };
        MainController.prototype.selectUser = function (user) {
            this.selected = user;
            this.userService.selectedUser = this.selected;
            // display the sidenav
            var sideNav = this.$mdSidenav('left');
            if (sideNav.open()) {
                sideNav.close();
            }
            this.tabIndex = 0;
        };
        MainController.prototype.clearNotes = function ($event) {
            var confirm = this.$mdDialog.confirm()
                .title('Are you sure you want to delete all notes?')
                .textContent('All notes will be deleted, you can\'t undo this action.')
                .targetEvent($event)
                .ok('yes')
                .cancel('no');
            var self = this;
            this.$mdDialog.show(confirm)
                .then(function () {
                self.selected.notes = [];
                self.openToast('Notes are cleared');
            });
        };
        MainController.prototype.setFormScope = function (scope) {
            this.formScope = scope;
        };
        MainController.prototype.addNote = function () {
            this.selected.notes.push(this.newNote);
            //reset the form
            this.formScope.noteForm.$setUntouched();
            this.formScope.noteForm.$setPristine();
            this.newNote = new MyApp.Note('', null);
            this.openToast('Note added!');
        };
        MainController.prototype.removeNote = function (note) {
            var foundIndex = this.selected.notes.indexOf(note);
            this.selected.notes.splice(foundIndex, 1);
        };
        MainController.prototype.openToast = function (message) {
            this.$mdToast.show(this.$mdToast.simple().textContent(message)
                .position('top right')
                .hideDelay(1000));
        };
        MainController.prototype.showContactOptions = function ($event) {
            this.$mdBottomSheet.show({
                parent: angular.element(document.getElementById('wrapper')),
                templateUrl: './dist/views/contact-sheet.html',
                controller: MyApp.ContactPanelController,
                controllerAs: 'vm',
                bindToController: true,
                targetEvent: $event
            }).then(function (clickItem) {
                clickItem && console.log(clickItem.name + ' clicked');
            });
        };
        MainController.prototype.addUser = function ($event) {
            var self = this;
            // get the fullscreen from mobile or desktop
            var useFullScreen = (this.$mdMedia('sm') || this.$mdMedia('xs'));
            useFullScreen;
            var d = this.$mdDialog.show({
                templateUrl: './dist/views/new-user-dialog.html',
                parent: angular.element(document.body),
                targetEvent: $event,
                controller: MyApp.AddUserController,
                controllerAs: 'vm',
                clickOutsideToClose: true,
                fullscreen: useFullScreen
            }).then(function (user) {
                var newUser = MyApp.User.fromCreate(user);
                self.users.push(newUser);
                self.openToast('User Added');
            }, function () {
                console.log('You Cancelled the dialog!');
            });
        };
        MainController.$inject = [
            'userService',
            '$mdSidenav',
            '$mdToast',
            '$mdDialog',
            '$mdMedia',
            '$mdBottomSheet'];
        return MainController;
    }());
    MyApp.MainController = MainController;
})(MyApp || (MyApp = {}));

/// <reference path="../_all.ts" />

module MyApp {
    export class MainController {
        static $inject = [
            'userService',
            '$mdSidenav',
            '$mdToast',
            '$mdDialog',
            '$mdMedia',
            '$mdBottomSheet'];

        constructor(
            private userService: IUserService,
            private $mdSidenav: angular.material.ISidenavService,
            private $mdToast: angular.material.IToastService,
            private $mdDialog: angular.material.IDialogService,
            private $mdMedia: angular.material.IMedia,
            private $mdBottomSheet: angular.material.IBottomSheetService) {
            var self = this;
            this.userService.loadAllUsers()
                .then((users: User[]) => {
                    self.users = users;
                    self.selected = users[0];
                    self.userService.selectedUser = self.selected;
                });
        }

        //vars
        users: User[] = [];
        selected: User = null;
        searchText: string = '';
        tabIndex: number = 0;
        newNote :Note = new Note('',null);
        
        
        toggleSideNav(): void {
            this.$mdSidenav('left').toggle();
        }

        selectUser(user: User): void {
            this.selected = user;
            this.userService.selectedUser = this.selected;

            // display the sidenav
            var sideNav = this.$mdSidenav('left');
            if (sideNav.open()) {
                sideNav.close();
            }
            this.tabIndex = 0;
        }

        clearNotes($event: any): void {
            var confirm = this.$mdDialog.confirm()
                .title('Are you sure you want to delete all notes?')
                .textContent('All notes will be deleted, you can\'t undo this action.')
                .targetEvent($event)
                .ok('yes')
                .cancel('no');
            var self = this;
            this.$mdDialog.show(confirm)
                .then(
                () => {
                    self.selected.notes = [];
                    self.openToast('Notes are cleared');
                }
                );
        }
        
        formScope:any;
        setFormScope(scope){
            this.formScope = scope;
        }
        
        addNote(){
            this.selected.notes.push(this.newNote);
            
            //reset the form
            this.formScope.noteForm.$setUntouched();
            this.formScope.noteForm.$setPristine();
            
            
            this.newNote = new Note('',null);
            this.openToast('Note added!');
            
        }
        
        removeNote(note: Note): void {
            var foundIndex = this.selected.notes.indexOf(note);
            this.selected.notes.splice(foundIndex, 1);


        }

        openToast(message: string): void {
            this.$mdToast.show(
                this.$mdToast.simple().textContent(message)
                    .position('top right')
                    .hideDelay(1000)

            );

        }


        showContactOptions($event: any): void {
            this.$mdBottomSheet.show(
                {
                    parent: angular.element(document.getElementById('wrapper')),
                    templateUrl: './dist/views/contact-sheet.html',
                    controller: ContactPanelController,
                    controllerAs: 'vm',
                    bindToController: true,
                    targetEvent: $event

                }
            ).then(
                (clickItem) => {
                    clickItem && console.log(clickItem.name + ' clicked');
                }
                )
        }

        addUser($event: any): void {
            var self = this;
            // get the fullscreen from mobile or desktop
            var useFullScreen = (this.$mdMedia('sm') || this.$mdMedia('xs'));
            useFullScreen
            var d = this.$mdDialog.show(
                {
                    templateUrl: './dist/views/new-user-dialog.html',
                    parent: angular.element(document.body),
                    targetEvent: $event,
                    controller: AddUserController,
                    controllerAs: 'vm',
                    clickOutsideToClose: true,
                    fullscreen: useFullScreen
                }
            ).then(
                (user: CreateUser) => {
                    var newUser = User.fromCreate(user);
                    self.users.push(newUser);
                    self.openToast('User Added');
                },
                () => {
                    console.log('You Cancelled the dialog!');
                }
                )

        }

    
    }
}
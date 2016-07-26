/// <reference path="_all.ts" />
var MyApp;
(function (MyApp) {
    var User = (function () {
        function User(name, avatar, bio, notes) {
            this.name = name;
            this.avatar = avatar;
            this.bio = bio;
            this.notes = notes;
        }
        //create new user for add user
        User.fromCreate = function (user) {
            return new User(user.firstName + ' ' + user.lastName, user.avatar, user.bio, []);
        };
        return User;
    }());
    MyApp.User = User;
    var Note = (function () {
        function Note(title, date) {
            this.title = title;
            this.date = date;
        }
        return Note;
    }());
    MyApp.Note = Note;
    var CreateUser = (function () {
        function CreateUser(firstName, lastName, avatar, bio) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.avatar = avatar;
            this.bio = bio;
        }
        return CreateUser;
    }());
    MyApp.CreateUser = CreateUser;
})(MyApp || (MyApp = {}));

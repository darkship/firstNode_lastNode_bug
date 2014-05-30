if (Meteor.isClient) {
    Template.hello.show = function () {
        return true
    };

    Template.hello.events({
        'click input': function (evt, tpl) {
            console.log("hello click",tpl)
        }
    });
    Template.hello2.events({
        'click input': function (evt, tpl) {
            console.log("hello2 click",tpl)
        }
    });
    UI.body.events({
        'click input': function (evt, tpl) {
            console.log("UI.body click",tpl)
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}

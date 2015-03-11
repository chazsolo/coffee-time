Brews = new Mongo.Collection('brews');

Meteor.methods({
    brewInsert: function (brewAttributes) {
        console.log("Creating brew: ", brewAttributes);
        check(brewAttributes, {
            dtz: Date
        });

        //var user = Meteor.user();
        var brew = _.extend(brewAttributes, {
            submitted: new Date()
        });

        var brewId = Brews.insert(brew);

        return {
            _id: brewId
        };
    }
});
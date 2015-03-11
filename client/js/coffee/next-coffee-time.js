var notScheduled = "Hmm...nothing scheduled!";
Session.setDefault('nextBrew', notScheduled);
var timerId;
Template.NextCoffeeTime.rendered = function () {
    var brew = Brews.findOne({"dtz": {"$gte": new Date()}}, {"sort": {"dtz": 1}});
    if(brew) {
        console.log("Starting brew timer...", brew);
        timerId = countdown(
            function (timeSpan) {
                console.log(timeSpan);
                Session.set('nextBrew', timeSpan.toString());
            },
            brew.dtz,
            countdown.HOURS | countdown.MINUTES | countdown.SECONDS,
            1
        );
    }
};

Template.NextCoffeeTime.destroyed = function () {
    clearInterval(timerId);
    Session.set('nextBrew', notScheduled);
};

Template.NextCoffeeTime.helpers({
    nextBrew: function(){
        return Session.get('nextBrew');
    },
    next: function(){
        return Brews.findOne({}, {sort: {dtz: 1}}).dtz;
    }
});
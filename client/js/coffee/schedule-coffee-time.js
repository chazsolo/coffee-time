Template.ScheduleCoffeeTime.rendered = function() {
    $('.datetimepicker').datetimepicker();
};

Template.ScheduleCoffeeTime.events({
    'submit form': function(e){
        e.preventDefault();

        var brew = {
            dtz: moment($(e.target).find('[name=dtz]').val()).toDate()
        };

        Meteor.call('brewInsert', brew, function (error, result) {
            if(error){
                return throwError(error.reason);
            }


        });
    }
});
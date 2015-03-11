Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {name: 'next-coffee-time'});

Router.route('/schedule', {name: 'schedule-coffee-time'});

Router.route('/contribute', {name: 'contribute-coffee-beans'});
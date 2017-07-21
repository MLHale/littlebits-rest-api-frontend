import Ember from 'ember';


var defaultitems = Ember.A([
  {
    title: '2017 Gencyber Announcement',
    description: 'We are excited to have you!',
    img: 'img/NGC-logo.png',
    link: '',
    link_external: 'http://www.nebraskagencyber.com'

  },
	{
		title: 'Event Template',
		description: 'You are seeing this template, because you haven\'t loaded any data into your client yet. This Template will be used to display events from your Cloudbit',
    img: 'img/littlebits.jpg',
    link: 'index'

	},


]);

export default Ember.Route.extend({
  getData(){
    var items = Ember.A([]);
    return Ember.$.get('/api/deviceevents').then(function(events){
      events.forEach(function(event){
        // console.log(event);
        items.addObject({
          id: event.pk,
          eventtype: event.fields.eventtype.replace('amplitude:',''),
          requestor: event.fields.requestor,
          timestamp: event.fields.timestamp,
          userid: event.fields.userid,
          img: 'img/littlebits.jpg',
          link: 'index'
        });
      });
      return items.reverse()
    });
  },
	model() {
    return this.getData();
	},
  setupController(controller, model){
    this._super(controller, model);
    controller.set('defaultitems', defaultitems);
    var route = this;
    setInterval(Ember.run.later(route, function() {
      // code here will execute within a RunLoop about every minute
      if(controller.get('auth.isLoggedIn')){
        route.getData().then(function(data){
          if(data[0].id!=controller.get('content')[0].id){
            controller.get('content').insertAt(0, data[0]);
          }
        });
      }
    }, 5), 3000);
  }
});

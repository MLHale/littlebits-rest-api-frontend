import Ember from 'ember';

var items = Ember.A([
  {
    title: '2017 Gencyber Announcement',
    description: 'We are excited to have you!',
    img: 'img/NGC-logo.png',
    link: '',
    link_external: 'http://www.nebraskagencyber.com'

  },
	{
		title: 'Event Template',
		description: 'This Template will be used to load events from your Cloudbit',
    img: 'img/littlebits.jpg',
    link: 'index'

	},


]);

export default Ember.Route.extend({
	model() {
		return items;
	}
});

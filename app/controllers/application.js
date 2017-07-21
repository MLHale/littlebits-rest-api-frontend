import Ember from 'ember';

export default Ember.Controller.extend({
  showMenu: '',
  actions: {
    toggleMenu(){
      if (this.get('showMenu')){
        this.set('showMenu', '');
      }
      else{
        this.set('showMenu', 'active');
      }

    },
    logout(){
      this.get('auth').logout();
    },
    activateCloudbit(){
      var data = {
        'eventtype': 'dashboard_on',
        'timestamp': Date.now(),
        'userid': this.get('auth.userid')
      };
      Ember.$.post('/api/activatecloudbit', data, function(response){

      })
    }
  }
});

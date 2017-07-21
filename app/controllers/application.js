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
        eventtype: 'dashboard_on',
        timestamp: Date.now().toString(),
        userid: this.get('auth.userid')
      };

      Ember.$.ajax({
        url:'/api/activatecloudbit',
        type:"POST",
        data: JSON.stringify(data),
        contentType:"application/json",
        dataType:"json",
        success: function(response){
          console.log('Attempting to turn cloudbit on. Response from server is: ');
          console.log(response);
        }
      });
    }
  }
});

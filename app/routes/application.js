import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    this.rs.client.dashtab.getObject('settings.json').then((savedSettings) => {
      if (typeof savedSettings === 'undefined' || savedSettings.name === '') {
        this.transitionTo('welcome');
      }
    }, (error) => {
      console.error(error);
    });
  },

  model() {
    let client = this.rs.client.dashtab;

    return Ember.RSVP.hash({
      settings: client.getObject('settings.json')
    });
  },

  actions: {

    goToNameConfig() {
      this.transitionTo('welcome');
    }

  }

});

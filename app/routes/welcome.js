import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    let client = this.rs.get('client.dashtab');

    return client.getObject('settings.json').then((savedSettings) => {
      if (typeof savedSettings === 'undefined') {
        return { name: '' };
      } else {
        return savedSettings;
      }
    }, (error) => {
      console.error(error);
    });
  },

  actions: {

    persistModel() {
      this.rs.storeSettings(
        this.get('controller.model')
      ).then(() => {
        this.transitionTo('index');
      }, (error) => {
        console.error(error);
      });
    }

  }

});

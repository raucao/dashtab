/* global remoteStorage */
import Ember from 'ember';

export default Ember.Service.extend({

  client: {
    dashtab: null,
    profile: null
  },

  initializeRemoteStorage: function() {
    remoteStorage.access.claim('dashtab', 'rw');
    remoteStorage.caching.enable('/dashtab/');
    // remoteStorage.displayWidget();
    this.set('client.dashtab', remoteStorage.scope('/dashtab/'));
    this.declareTypes();
  }.on('init'),

  declareTypes() {
    // App settings object
    this.get('client.dashtab').declareType('settings', {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        }
      },
      "required": ["name"]
    });
  },

  storeSettings(settings) {
    return this.get('client.dashtab')
               .storeObject('settings', 'settings.json', settings);
  }

});

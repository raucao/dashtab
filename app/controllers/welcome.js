import Ember from 'ember';

export default Ember.Controller.extend({

  needs: ['application'],

  modelBinding: 'controllers.application.model.settings'

});

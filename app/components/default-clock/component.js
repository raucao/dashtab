import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({

  classNames: ['component', 'clock'],
  timeFormat: '24h',
  time: new moment(),

  tick() {
    let self = this;
    this.set('time', new moment());
    setTimeout(function(){ self.tick(); }, 2000);
  },

  formattedTime: function() {
    // TODO support 12h format
    let output = new moment().format('H:mm');

    return output;
  }.property('time'),

  greeting: function() {
    let greeting;

    if (moment().hour() < 12) {
      greeting = "Good morning";
    } else if (moment().hour() < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }

    return greeting;
  }.property(),

  startClock: function() {
    this.tick();
  }.on('init'),


  actions: {

    goToNameConfig() {
      this.sendAction('goToNameConfig');
    }

  }

});

import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  // TODO update time regularly

  classNames: ['component', 'clock'],
  timeFormat: '24h',

  formattedTime: function() {
    // TODO support 12h format
    let output = new moment().format('HH:mm');

    return output;
  }.property(),

  formattedGreeting: function() {
    // TODO use name from config
    return `${this.get('greeting')}, Râu!` ;
  }.property('greeting'),

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

});

import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['component', 'background-image'],

  setBackgroundImage: function(imgSrc) {
    this.$('.image').css('background-image', `url(${imgSrc})`);
    this.$('.image').fadeIn(300);
  },

  loadBackgroundImage: function() {
    let imgSrc = '/img/arizona.jpg';
    let imgEl  = document.createElement('img');

    imgEl.onload = () => {
      this.setBackgroundImage(imgSrc);
    };

    imgEl.src = imgSrc;

  }.on('didInsertElement')

});

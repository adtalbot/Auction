Auction.AboutController = Ember.Controller.extend({
  isPictureShowing: false,
  actions: {
    showPicture: function() {
      this.set('isPictureShowing', true);
    }
  }
});

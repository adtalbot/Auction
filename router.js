Auction.Router.map(function () {
  this.resource('auction', {path: '/'});
  this.resource('products');
  this.resource('about');
  this.resource('contact', function() {
    this.resource('phone');
    this.resource('email');
  });
});

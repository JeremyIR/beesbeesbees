var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.color = 'yellow';
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = new Grub();
HoneyMakerBee.prototype.makeHoney = function(honeyPot) {
  return this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function(honeyPot) {
  return this.honeyPot--;
};
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

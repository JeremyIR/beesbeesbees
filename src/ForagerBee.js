var ForagerBee = function() {
    HoneyMakerBee.call(this);
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Grub.prototype);
ForagerBee.prototype.forage = function(treasure) {
    this.treasureChest.push(treasure);
};
ForagerBee.prototype.constructor = ForagerBee;

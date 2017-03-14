//factory function form
function Person(name) {
  person.name = name;
  person.friends = [];

  this.prototype.addFriend = function(friend) {
    this.friends.push(friend);
  };

  this.prototype.createGreeting = function(other) {
    return 'Yo ' + other.name + '! from ' + this.name + '.';
  };

  this.prototype.greet = function(other) {
    console.log(this.createGreeting(other));
  };

}

var tess = Person('Tess');

var brenda = Person('Brenda');

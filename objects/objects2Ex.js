//One //Two

var spiderman = {
  name: 'Spiderman',
  realName: 'Peter Parker',
  //sayHi: sayHi
};
var superman = {
  name: 'Superman',
  realName: 'Clark Kent',
 // sayHi: sayHi
};

function sayHi() {
  console.log('I am ' + this.name + '!');
}

function revealIdentity(){
    console.log('My real name is '+this.realName +'.');
}

// spiderman.sayHi();
// superman.sayHi();

revealIdentity.apply(spiderman);
revealIdentity.apply(superman);

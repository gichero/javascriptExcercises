var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black',
  showInfo: showInfo
};
var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown',
  showInfo: showInfo
};
 function showInfo(){
    console.log(this.firstName, this.lastName, this.eyeColor, this.hairColor);
 }
 daughter.__proto__ = mom;

 mom.showInfo();
 daughter.showInfo();

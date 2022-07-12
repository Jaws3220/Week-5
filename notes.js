//class Faction {
 //   constructor (red, blue, gray, white){
 //       this.red = red
 //       this.blue = blue
 //       this.gray = grey
  //      this.white = white
 //   }

 //   introduce(){
 //       console.log('')
  //  }
//}

//----------------------------------------------------------------------------------

//class User {
  //  constructor(name){
   //     this.name = name;
  //  }
   // greet(){
  //     alert('Hello ' + this.name + '!')
  //  }
//}

class Student {
    constructor (firstName, lastName, phoneNumber, grade) {
        this.firstName = firstName
        this.lastName = lastName
        this.phoneNumber = phoneNumber
        this.grade = grade
    }
    introduce() {
        console.log (`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`)
    }
} 

let student1 = new Student('Vicki', 'Wheeler', '8907890000', 'D' )
let student2 = new Student('Autumn', 'Wheeler', '7897890000', 'B')

student1.introduce()
student2.introduce()


//Inheritance class

class Notificationsender{
    constructor(status){
        this.status = status
    }

    sendNotification(notification){
        console.log('Sending: ' + notification);
    }
    findUsersWithStatus(status){
        let users = getUsers(status);
        return users;
    }
}

class PromotionSender extends Notificationsender {
    constructor(status) {
        super(status);
    }

    calculateDisconut(status){
        if (status === 'GOLD') {
            return .3;
        } else if (status === 'SILVER') {
            return .15;
        }
        return 0
    }
}

class CollectionsSender extends Notificationsender {
    constructor(status) {
        super(status);
    }
 
    calculateFee(status) {
        if (status === 'OVERDUE') {
            return 10;
        } else if (status === 'DELIQUENT') {
            return 25;
        }
        return 5;
    }
}

let collectionsSender = new CollectionsSender('OVERDUE');
collectionsSender.sendNotification('This is a test collection notification');

//handling exceptions

//list.push('hello');
//console.log('goodbye');
//error will not display what is in console.log

try {
    list.push('hello');
} catch(err) {
    console.log(err);
}
console.log('goodbye');

// use try catch block to wrap code that you do not have control over
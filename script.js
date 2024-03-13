//complete this code
class Person {
  constructor (name, age) {
    this.pname = name;
    this.p_age= age;
  }

  get name(){
    return this.pname;    
  }
  get age(){
    return this.p_age;    
  }
  set age(age){
    this.p_age = age;
  }
}

class Student extends Person {
  study(name){        
      console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {

  teach(){
      console.log(`${this.name} is teaching`);
  } 
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

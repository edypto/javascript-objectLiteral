//Un objeto literal en JavaScript es una forma de crear un objeto directamente en el código, sin necesidad de utilizar una clase o un constructor.

const person = {
    firstName: "edwin",
    lastName: "bolivar",
    age: 40,
    email: "edforestpto@gmail.com",
    
    
  };
  person.age = 45;
  person.sign = 'virgo'
  delete person.email;

  //read-1
  console.log(person.email)

  //read 2
  console.log(person['firstName'])
  // modify object
  console.log(person.age)
  //delete
  console.log(person.email)

  //add
  console.log(person)

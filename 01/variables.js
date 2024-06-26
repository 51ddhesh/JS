const id = 1234
console.log(id);
/*
id = 4321 won't work as the variable id is of const type
we cannot modify it further
*/
let email = "username@mail.com"
let passkey = "password"
city = "New Delhi"
//we can declare variables as above

console.table([id, email, passkey, city])
//print in form a table

let state;
//this will create a space in the memory
//on printing this variable we will get "undefined"
console.log(state);
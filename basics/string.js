const name="abhii"
const repo=5

// console.log(name+repo);

console.log(`Hello my name is ${name}. and my count is ${repo}`);

const gamename = new String('Abhii patil')
// console.log(typeof gamename);
// console.log(gamename[0]);
// console.log(gamename.__proto__);
// console.log(gamename.length);
// console.log(gamename.toUpperCase());
console.log(gamename.charAt(3));
console.log(gamename.indexOf('b'));

const newString = gamename.substring(0,3)
console.log(newString);

const anotherString = gamename.slice(-8,4)
console.log(anotherString);

const newOne = " Abhinandan "
console.log(newOne);
console.log(newOne.trim());

const url ="https://abhii.com/abhii%2patil"
console.log(url.replace('%2','-'));

console.log(url.includes('abhii'));

console.log(gamename.split(' '));








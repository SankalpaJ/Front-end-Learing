let x = 'Coding is fun';
console.log(x);      // Coding is fun

// length
console.log(x.length);   // 13
console.log(x.charAt(0));  // C
console.log(x.charAt(1));  // o
console.log(x.charAt(6));  // space

// charAt or at are same
console.log(x.at(0));      // C

// slice(start, end):-- used to cut or extract specific position of String & it not include last char.
console.log(x.slice(0, 6));       // Coding
console.log(x.slice(-8, -2));     // g is f
console.log(x.slice(0, 5));   // Codin
console.log(x.slice(-4)); 

// substring(start, end):- same as slice but it includes last char
console.log(x.substring(0, 7));  // Coding_
console.log(x.substring(0, 5));  // Codin
console.log(x.substr(-4));       // _fun

// split()
console.log(x.split(' '));  // [ 'Coding', 'is', 'fun' ]



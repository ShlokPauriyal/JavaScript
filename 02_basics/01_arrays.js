const marvelHeros = ["Thor", "Hulk", "Spiderman"]
const dcHeros = ["Superman", "Batman", "Flash"]

// marvelHeros.push(dcHeros);   // 1. PUSH METHOD
// // console.log(marvelHeros);
// console.log(marvelHeros[3]); // o/p:- [ 'Superman', 'Batman', 'Flash' ]
// console.log(marvelHeros[3][1]); // o/p:- batman


// let Heros = marvelHeros.concat(dcHeros);  //    2. CONCAT METHOD
// console.log(Heros);

// console.log(...marvelHeros, ...dcHeros); //     3. spread operaor in JS -> SPREAD OUT EACH ELEMENTS OF BOTH ARRAY

// console.log(Array.isArray("Shlok")); // isArray method
// console.log(Array.from("shlok")); // from method -> is used to create a new array from the argument you pass

// console.log(Array.from({name: "Shlok"})); //  converts an iterable or array-like object into an array
console.log(Array.of(1,2,"shlok")); // creates a new array from the arguments you pass to it


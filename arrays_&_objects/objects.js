// Unorders, key value pairs!
let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1, 2, 3, 4, 5]
}

//      #               #               #
//    firstName    isIntrsuctor     favouriteNumbers

console.log(Object.keys(instructor));
console.log(Object.entries(instructor));
console.log(instructor.hasOwnProperty("firstName"))
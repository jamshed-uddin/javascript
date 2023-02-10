const friends = [23, 45, 65, 34, 76, 54, 36, 73];
// const partial = friends.slice(3, 5);
// console.log(partial); output [ 34, 76 ]

//to remove element from an array and insert new element .will change the original element
const partial = friends.splice(2, 4);
// const partial = friends.splice(2, 4, items to add);
console.log(partial);

//****push */

var friends = ['rahim', 'karim', 'john',]
//push to add another element.pushed element will at last
friends.push('jack')  
friends.push('bruce')
// console.log(friends)

//to push element at the beginning  .unshift(element)
friends.unshift('nicole')
// console.log(friends)

//to push an element in specific position position
friends.splice(1,0, 'kate')  //here 1 is the position of the new element.0 fot not to delete the element which was at the position 1.
// console.log(friends)







//pop  to get an element out 

var number = [23, 43, 34, 64, 34]
number.pop() //we don't have to mention element just by putting bracket it will pop the element out
var popItOut = number.pop() //pop can be done by declaring var

//to remove first element of an array
number.shift()
console.log(number)

// console.log(number)












































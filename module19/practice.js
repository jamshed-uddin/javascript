//consition--if module is not comprehensive join support
// var work = ['module unlock', 'watch and practice', 'take notes', 'finish module and practice', 'understand the module']

// if (work[4] != 'understand the module'){
//     console.log('go for next')
// }
// else{
//     console.log('join support seasion')
// }

// -----------for loop------------------------
// var work = ['module unlock', 'watch and practice', 'take notes', 'finish module and practice', 'understand the module']

// for( i = 0 ; i < work.length; i++){
//     var workIndex = work[i];
//     console.log(workIndex);
// }
//---------for loop reverse---------------
// var work = ['module unlock', 'watch and practice', 'take notes', 'finish module and practice', 'understand the module']

// for( i = work.length-1 ; i >= 0; i--){
//     var workIndex = work[i];
//     console.log(workIndex);
// }

//-------while loop--------------
// var work = ['module unlock', 'watch and practice', 'take notes', 'finish module and practice', 'understand the module']
// var i = 0;

// while( i < work.length ){
//     var workIndex = work[i]
//     console.log(workIndex);
//     i++;
// }
// while loop reverse
var work = ['module unlock', 'watch and practice', 'take notes', 'finish module and practice', 'understand the module']
var i = work.length-1

while( i > 0 ){
    var workIndex = work[i]
    console.log(workIndex);
    i--;
}

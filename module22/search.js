var sentence = "We are going to play football";

console.log(sentence.includes("play"));

//index

console.log(sentence.indexOf("going"));

//starts with

console.log(sentence.startsWith("We")); //these are case sensitive if the letter case doesn't match output will be false

console.log(sentence.endsWith("football")); //endswith also case sensitive

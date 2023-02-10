const names = [
  "rahim",
  "karim",
  "atik",
  "rahim",
  "ratul",
  "emon",
  "raihan",
  "atik",
];

function removeduplicate(names) {
  let unique = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (unique.includes(name) === false) {
      unique.push(name);
    }
  }
  return unique;
}

const uniqueName = removeduplicate(names);
console.log(uniqueName);

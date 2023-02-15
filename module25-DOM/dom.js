const liCollection = document.getElementsByTagName("li");

for (const li of liCollection) {
  // console.log(li);
}

const allHeading = document.getElementsByTagName("h1");
for (const h1 of allHeading) {
  // console.log(h1);
}

const main = document.getElementById("main-container");
const section = document.createElement("section");
const heading = document.createElement("h1");
heading.innerText = "Food";
section.appendChild(heading);

const foodList = document.createElement("ul");

const li1 = document.createElement("li");
li1.innerText = "Burgir";
foodList.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "Pasta";
foodList.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "Fries";
foodList.appendChild(li3);

section.appendChild(foodList);
main.appendChild(section);

const birdList = document.getElementById("birds-list");
const li = document.createElement("li");
li.innerText = "Raven";
birdList.appendChild(li);

//set inner html method

const section2 = document.createElement("section");
section2.innerHTML = `<h1>Movies</h1>
<ul>
<li>Intersteller</li>
<li>Once upon a time in hollywood</li>
<li>Pirates of caribbean</li>
</ul>
`;
main.appendChild(section2);

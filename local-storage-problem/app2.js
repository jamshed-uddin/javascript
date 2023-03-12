const getElement = document.getElementById("counter");
const getElementValue = getElement.innerText;
// console.log(getElementValue);

let countValue = 0;
const increaseValue = () => {
  countValue++;
  getElement.innerText = countValue;
  console.log(getElement.innerText);
  setLocalStorage();
};

const setLocalStorage = () => {
  localStorage.setItem("count", getElement.innerText);
};

const getLocalStorageValue = () => {
  const getFromLocal = localStorage.getItem("count");
  getElement.innerText = getFromLocal;
};
getLocalStorageValue();

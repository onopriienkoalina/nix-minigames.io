let myArray = [];
		
function randomize() {
const min = Number(document.getElementById('inputmin').value);
const max = Number(document.getElementById('inputmax').value);
const choose = Number(document.getElementById('choose').value);
const replace = Number(document.getElementById('replace').checked);
var counter = Number(document.getElementById('choose').value);
const inside = Number((+max - min + +1));
const possible = Number(max - min + +1);

if (max < min) {
document.getElementById('answer').innerHTML = "Максимум має бути більшим ніж мінімум";
}
else {

if ((replace == "0" && choose > possible)) {
  document.getElementById('answer').innerHTML = "Кількість не може перевищувати діапазон чисел";
}

else { 
if (replace == "0") {

myArray = [];

  let text = "";
  do {
    const random = Math.floor(Math.random() * (inside) ) + +min;
    const isitin = myArray.includes(random);
      if (isitin == false) {
        myArray.push(random);
        text += random + ", ";
        var counter = counter - 1;
      }
    }
  while (counter > 0);
document.getElementById('answer').innerHTML = text;
}

else {
  let text = "";
  do {
    const random = Math.floor(Math.random() * (inside) ) + +min;
    text += random + ", ";
    var counter = counter - 1;
  }
  while (counter > 0);
document.getElementById('answer').innerHTML = text;
}
}
}
}
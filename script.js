/* console.log("Nord Glow");
console.log("Nord Glow");
console.log("Nord Glow");
// jag rörde 3 rader


 */

/* 


function totalMinutes(hours, minutes) {
  return hours * 60 + minutes;
}

const travel = totalMinutes(2, 15);
console.log(travel); // 135
*/
/* 
const isMember = true;
let shipping = 79;

if (isMember === true) {
  shipping = 0;
}
  
// console.log(shipping);
else {
  console.log("Ordinar frakt for att du er inte member!");
}
console.log(shipping);
 */
//Array
/* const cities = ["Malmö", "Göteborg"];
console.log(cities[1]);
console.log(cities.length);

// Objet
const product = { title: "Hörlurar", stock: 4, inStock: true };
console.log(product.title);
console.log(product.inStock);
console.log(product.stock);

for (const city of cities) {
  console.log(city);
}
 */

//
/*const tempC = 5;

if (tempC > 0) {
  console.log("varmt");
} else if (tempC >= 10) {
  console.log("ljummet");
} else if (tempC >= 0) {
  console.log("kallt");
} else {
  console.log("svinkallt");
}

 */

/* const routes = ["Linje 2", "Linje 5", "Linje 8"];
for (const route of routes) {
  console.log("Avgår: ", route);
}
 */
/* function triple(n) {
  return n * 3;
} */
/* 
const double = (n) => n * 2 + 5;
console.log(double(10)); // samma jobb, annan stavning
 */

/* Skapa en array med minst 4 egna strängar och loopa dem med for...of.

Skapa ett objekt (t.ex. { title, urgency, isOpen }). Logga två egenskaper.

Skriv en function som tar emot två tal (eller title + prefix) och returnerar något du loggar.

En if/else if/else utifrån urgency eller liknande. */

/* const maten = ["Kyckling", "Pommes", "Korv", "Rotfrukter"];
for (const mat of maten) {
  console.log(mat);
}

const matiugn = { title: "Ta ut", urgency: 1, isOpen: true };
console.log(matiugn.title);
console.log(matiugn.isOpen); 

function () {
  if (age >= 18) {
    return "Can vote";
  } else {
    return "Can not Vote";
  }
}
console.log(canVote(17));*/
/* 
function canVote(age) {
  if (age >= 18) {
    return "Can vote";
  } else {
    return "Can not Vote";
  }
}
console.log(canVote(17));

const maten = ["Kyckling", "Pommes", "Korv", "Rotfrukter"];
for (const mat of maten) {
  console.log(mat);
} */

/* onst note = { title: "Ta ut", urgency: 1, isOpen: true };
/* console.log(note.title);
console.log(note.isOpen); */

/* function label(ett, tvo) {
  return ett + ": " + tvo;
}
console.log(label("Idag", note.title)); // "Idag: " Ta ut

 */
const note = { title: "Ta ut", urgency: 100, isOpen: true };

if (note.urgency === 1) {
  console.log("TA UT NU");
} else if (note.urgency === 2) {
  console.log("En stund till");
} else {
  console.log("Chilla");
}

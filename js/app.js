const food = [
  {
    title: "Зайрмаг",
    img: "images/cardImages/icecream.png",
    discount: "30%",
    category: "Хямдралтай",
    price: "4760₮",
  },
  {
    title: "Панкейк",
    img: "images/cardImages/pancake.png",
    discount: "20%",
    category: "Хямдралтай",
    price: "4800₮",
  },
  {
    title: "Өглөөний хоолг",
    img: "images/cardImages/breakfast.png",
    discount: "20%",
    category: "Хямдралтай",
    price: "4800₮",
  },
  {
    title: "Банана сендвич",
    img: "images/cardImages/bananas.png",
    discount: "20%",
    category: "Хямдралтай",
    price: "4800₮",
  },
  {
    title: "Салмон загас",
    img: "images/cardImages/salmon.png",
    price: "11,800₮",
    category: "Үндсэн хоол",
  },
  {
    title: "Бөөрөнхий мах",
    img: "images/cardImages/meatball.png",
    price: "14,000₮",
    category: "Үндсэн хоол",
  },
  {
    title: "Самрын нухаш",
    img: "images/cardImages/peanut.png",
    price: "9800₮",
    category: "Үндсэн хоол",
  },
  {
    title: "Чикен бургер",
    img: "images/cardImages/burger.png",
    price: "4800₮",
    category: "Үндсэн хоол",
  },
  {
    title: "Детокс салад",
    img: "images/cardImages/salad.png",
    price: "6800₮",
    category: "Салад ба зууш",
  },
  {
    title: "Кобб салад",
    img: "images/cardImages/saladkobb.png",
    price: "6800₮",
    category: "Салад ба зууш",
  },
  {
    title: "Авакадо салад",
    img: "images/cardImages/saladavacado.png",
    price: "6800₮",
    category: "Салад ба зууш",
  },
  {
    title: "Сендвич",
    img: "images/cardImages/sendvich.png",
    price: "4800₮",
    category: "Салад ба зууш",
  },
  {
    title: "Донатс",
    img: "images/cardImages/donuts.png",
    price: "5800₮",
    category: "Амттан",
  },
  {
    title: "Орео дессерт",
    img: "images/cardImages/oreodessert.png",
    price: "7800₮",
    category: "Амттан",
  },
  {
    title: "Вафли",
    img: "images/cardImages/vavli.png",
    price: "5800₮",
    category: "Амттан",
  },
  {
    title: "Макрон",
    img: "images/cardImages/makron.png",
    price: "3800₮",
    category: "Амттан",
  },
];

let mainFood = "";
let dessert = "";
let salad = "";
let discount = "";

for (let i = 0; i < food.length; i++) {
  if (food[i].category == "Хямдралтай") {
    discount += `<img src='${food[i].img}'>
   <h3>${food[i].title}</h3>
   <p>${food[i].price}</p>   `;
  } else if (food[i].category == "Үндсэн хоол") {
    mainFood += `<img src='${food[i].img}'>
    <h3>${food[i].title}</h3>
    <p>${food[i].price}</p>   `;
  } else if (food[i].category == "Салад ба зууш") {
    salad += `<img src='${food[i].img}'>
    <h3>${food[i].title}</h3>
    <p>${food[i].price}</p>   `;
  } else if (food[i].category == "Амттан") {
    dessert += `<img src='${food[i].img}'>
    <h3>${food[i].title}</h3>
    <p>${food[i].price}</p>   `;
  }
}

document.querySelector(".discount").innerHTML = discount;

document.querySelector(".main-food").innerHTML = mainFood;

document.querySelector(".salad").innerHTML = salad;

document.querySelector(".dessert").innerHTML = dessert;

const greateFood = (arr, container) => {
  let html = document.querySelector(container);

  arr.map((item) => {
    let food = `  <div class='col-md-3'>
  <div class="image"><img src="${item.img}" alt="zurag" /></div>
  <div class="col"><h3>${item.title}</h3></div>
  <div class="col">${item.price}</div>
  </div>
`;

    html.innerHTML += food;
  });
};

const xhrFood = new XMLHttpRequest();
xhrFood.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const datas = JSON.parse(this.responseText);
    let mainFood = datas.filter((food) => food.category == "Үндсэн хоол");

    let dessert = datas.filter((food) => food.category == "Амттан");

    let salad = datas.filter((food) => food.category == "Салад ба зууш");

    let discount = datas.filter((food) => food.discount > 0);
    greateFood(discount, "#discount-row");
    greateFood(mainFood, "#mainDish-row");
    greateFood(salad, "#salad-row");
    greateFood(dessert, "#dessert-row");
  }
};
xhrFood.open("GET", "/js/data.json", true);

xhrFood.send();

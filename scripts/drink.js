const drinks = [
    {
      name: "Coffee",
      image: "./img/drinks-round/0.png",
      id: 0,
      type:"gluten",
      price: "3.50",
      description: [
        " Roast beef",
        " Bell peppers ",
        " Mushrooms",
        " Onions",
        " Tomatoes",
        " Marinara",
      ],
      info:
  
        "Drink",
    },
    {
      name: "Cappuccino",
      image: "./img/drinks-round/1.png",
      id: 1,
      type:"vegan",
      price: "2.50",
      description: [
        " Jamon",
        "  Bell peppers",
        " Pepperocini",
        " Olives",
        " Mozzarella",
        " Gouda",
        " Marinara",
      ],
      info:
        "Drink",
    },
    {
      name: "Natural Juice",
      image: "./img/drinks-round/5.png",
      type:"gluten",
      id: 2,
      price: "4.50",
      description: [
        " Ham",
        " Pizza sauce",
        " Chared pineapple",
        " Cheddar",
        " Jalapeno",
      ],
      info:
        " Drink",
    },
    {
      name: "Cocktail",
      image: "./img/drinks-round/8.png",
      type:"vegan",
      id: 3,
      price: "4.99",
      description: [
        " Ham",
        " Pizza sauce",
        " Chared pineapple",
        " Cheddar",
        " Jalapeno",
      ],
      info:
        " Drink",
    },
    {
      name: "Cocktail",
      image: "./img/drinks-round/10.png",
      type:"gluten",
      id: 4,
      price: "6.99",
      description: [" Ham", " Chared pineapple", " Cheddar", " Jalapeno"],
      info:
        "Drink",
    },
    {
      name: "Cocktail",
      image: "./img/drinks-round/4.png",
      type:"vegan",
      id: 5,
      price: "6.50",
      description: [
        " Tomatoes",
        " Pizza sauce",
        " Basil",
        " Cheddar",
        " Jalapeno",
      ],
      info:
        " Drink",
    },
    {
      name: "Cocktail",
      image: "./img/drinks-round/9.png",
      type:"guten",
      id: 6,
      price: "5.99",
      description: [
        " omatoes",
        " Pizza sauce",
        " Calamari",
        " Cheddar",
        " Jalapeno",
      ],
      info:
        " Drink",
    },
        {
      name: "Cocktail",
      image: "./img/drinks-round/7.png",
      type:"vegan",
      id: 7,
      price: "7.99",
      description: [
        " Tomatoes",
        " Pizza sauce",
        " Chared pineapple",
        " Cheddar",
        " Jalapeno",
        " Eggplant",
      ],
      info:
        " Drink",
    },
    {
      name: "Homemade Drink",
      image: "./img/drinks-round/8.png",
      type:"gluten",
      id: 8,
      price: "4.99",
      description: [
        " Tomato",
        " Kabana",
        " Garlic oil",
        " Onions",
        " Mozzarella",
      ],
      info:
        "Drink",
    },
  ];
  

let drink=document.querySelector('.drinks');
drink.addEventListener('click',()=>{
  // drink.style.cssText='border-bottom:2px solid rgb(248, 110, 110);';
  //drink.style.cssText='color: #a6a6a5';
  // salad.style.cssText='border-bottom:none;';
  // pizza.style.cssText='none';
    pizza_options.innerHTML='';
    for (let i = 0; i < drinks.length; i++) {
        pizza_options.innerHTML += `<div class="item ">
     <img class="pizza_img" src="${drinks[i]["image"]}" alt="${drinks[i]["name"]}" width="90%">
     <i class="fas fa-plus-circle icon"></i>
     <span class="price">$${drinks[i]["price"]}</span>
     <span class="name">${drinks[i]["name"]}</span>
     <span class="description">${drinks[i]["info"]}.</span>
    </div>`;
        
    }
})

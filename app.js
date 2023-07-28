// Wrap your code inside a DOMContentLoaded event to ensure it runs after the DOM is fully loaded

  const slider = document.querySelector(".slider");
  const wrapper = document.querySelector(".sliderWrapper"); 
  const menuItems = document.querySelectorAll(".menuItem");

  const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      desc:"Air Force shoes are iconic athletic footwear created by Nike, featuring Air-Sole technology for excellent comfort and shock absorption. They started as basketball shoes but became a cultural fashion staple, loved for their versatile style and durability. With various designs and collaborations, Air Force shoes remain a timeless symbol of sneaker culture and urban fashion." ,
      colors: [
        {
          code: "green",
          img: "./img/airforce.png",
        },
        {
          code: "black",
          img: "./img/air.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      desc: "Air Jordan: Iconic basketball shoes and apparel linked to Michael Jordan, offering performance, style, and Air cushioning technology. A cultural symbol transcending sports into fashion and urban culture." , 
      
      
      colors: [
        {
          code: "lightblue",
          img: "./img/airjordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      desc: "Blazer shoes: Timeless style, versatile appeal. Perfect for any occasion, from casual to semi-formal. Iconic and comfortable, a favorite among sneaker enthusiasts. Elevate your look with a touch of sophistication.",
      colors: [
        {
          code: "orange",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Air max",
      price: 129,
      desc: "Air Max shoes: The epitome of cushioned comfort and style. With their signature visible air units, Air Max sneakers provide superior impact absorption and support for all-day wear. Loved by athletes and fashion enthusiasts, these iconic shoes offer a perfect blend of performance and streetwear fashion. Step into the future with Air Max, where innovation meets urban culture.",
      colors: [
        {
          code: "white",
          img: "./img/airmax.png",
        },
        {
          code: "black",
          img: "./img/airmax2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Runner",
      price: 99,
      desc: "Runner Nike shoes: Designed for performance and endurance. Engineered with cutting-edge technology to enhance your running experience. These lightweight and breathable sneakers provide exceptional support and cushioning for long-distance runs or everyday workouts. Embrace comfort and style with Nike's Runner shoes, the perfect choice for athletes and fitness enthusiasts.",
      colors: [
        {
          code: "white",
          img: "./img/runner.png",
        },
        {
          code: "black",
          img: "./img/runner2.png",
        },
      ],
    },
  ];
  
  let choosenProduct = products[0];
  
  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");
  const currentProductDesc = document.querySelectorAll(".productDesc");

  menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      wrapper.style.transform = `translateX(${-100 * index}vw)`;

      //change the choosen product
    chosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    currentProductDesc.textContent = choosenProduct.desc;
    currentProductColors.forEach((color,index) =>{
      color.style.backgroundColor = choosenProduct.colors[index].code;
    
    
  });
});
});



currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});




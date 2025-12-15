var categories = document.getElementById("categories");
  var content = document.getElementById("content");

  
  var pije = [
    { title: "Margarita", desc: "6.99$", img: "Img/photo2.png" },
    { title: "Whiskey Sour", desc: "5.99$", img: "Img/photo3.png" },
    { title: "Martini", desc: "7.99$", img: "Img/photo4.png" },
    { title: "Negroni", desc: "6.99$", img: "Img/photo5.png" },
    { title: "Aperol Spritz", desc: "5.99$", img: "Img/photo6.png" },
    { title: "Mojito", desc: "5.99$", img: "Img/photo7.png" },
    { title: "Espresso Martini", desc: "7.99%", img: "Img/photo8.png" },
    { title: "Cosmopolitan", desc: "6.99$", img: "Img/photo9.png" },
    { title: "French 75", desc: "8.99$", img: "Img/photo10.png" },
    { title: "Chocolate Old Fashioned", desc: "7.99$", img: "Img/photo11.png" }
  ];

  var dessert = [
    { title: "Crème Brûlée", desc: "7.99$", img: "Img/d1.png" },
    { title: "Mochi", desc: "5.99", img: "Img/d2.png" },
    { title: "Tiramisu", desc: "4.99$", img: "Img/d3.png" },
    { title: "Apple Pie", desc: "4.99$", img: "Img/d4.png" },
    { title: "Brownies", desc: "3.99$", img: "Img/d5.png" },
    { title: "Nanaimo Bar", desc: "5.99$", img: "Img/d6.png" },
    { title: "Churros", desc: "6.99$", img: "Img/d7.png" },
    { title: "Cheesecake", desc: "5.99$", img: "Img/d8.png" },
    { title: "Ice Cream", desc: "3.99$", img: "Img/d9.png" },
    { title: "Gulab Jamun", desc: "6.99", img: "Img/d10.png" }
  ];

  var ushqim = [
    { title: "Crisp Paupiette", desc: "28.99$", img: "Img/u1.png" },
    { title: "Char in Beeswax", desc: "20.99$", img: "Img/u2.png" },
    { title: "Artichoke Tart", desc: "24.99$", img: "Img/u3.png" },
    { title: "Lobster Bay Caviar", desc: "32.99$", img: "Img/u4.png" },
    { title: "Sushi Omakase", desc: "36.99$", img: "Img/u5.png" },
    { title: "Parmigiano Reggiano", desc: "27.99$", img: "Img/u6.png" },
    { title: "Millefeuille with Eel", desc: "42.99$", img: "Img/u7.png" },
    { title: "Roasted Sladesdown Duck", desc: "40.99$", img: "Img/u8.png" },
    { title: "Crayfish Tail Tartare", desc: "37.99$", img: "Img/u9.png" },
    { title: "Potato and Roe", desc: "33.99$", img: "Img/u10.png" }
  ];

  
  function showCategory(name) {
    categories.className = "categories top";
    content.innerHTML = "";

    var list;

    if (name === "pije") {
      list = pije;
    }

    if (name === "dessert") {
      list = dessert;
    }

    if (name === "ushqim") {
      list = ushqim;
    }

    for (var i = 0; i < list.length; i++) {
      content.innerHTML +=
        '<div class="card">' +
          '<img src="' + list[i].img + '">' +
          '<div class="text">' +
            '<h4>' + list[i].title + '</h4>' +
            '<p>' + list[i].desc + '</p>' +
          '</div>' +
        '</div>';
    }

    
  }
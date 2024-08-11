document.addEventListener("DOMContentLoaded", function () {
  const cardData1 = [
    {
      imageUrl: "https://i.postimg.cc/K4hSFjyr/cafe-espresso.jpg",
      text: "Café Expreso",
      precio: "2200",
    },
    {
      imageUrl: "https://i.postimg.cc/dVtv07y4/image.jpg",
      text: "Café Cortado",
      precio: "3200",
    },
    {
      imageUrl:
        "https://i.postimg.cc/3xR5TPsq/Receta-de-Cafe-con-Leche-Evaporada.jpg",
      text: "Café con leche",
      precio: "3400",
    },
    {
      imageUrl: "https://i.postimg.cc/Y03Zc3bk/image.jpg",
      text: "Capuccino",
      precio: "3400",
    },
    {
      imageUrl:
        "https://i.postimg.cc/nrcTmtGb/911afeef717a9325ed8965b33ea897e2.jpg",
      text: "Lagrima",
      precio: "3000",
    },
    {
      imageUrl: "https://i.postimg.cc/7YhmYwLS/submarino-con-medialunas.jpg",
      text: "Submarino",
      precio: "3400",
    },
  ];

  const cardData2 = [
    {
      imageUrl: "https://i.postimg.cc/Y0sNmLSY/image.jpg",
      text: "Agua Saborizada",
      precio: "1200",
    },
    {
      imageUrl: "https://i.postimg.cc/3xpjdRQ0/imageedit-3-4516158279.png",
      text: "Coca-Cola",
      precio: "1200",
    },
    {
      imageUrl: "https://i.postimg.cc/vmsr9sGq/image.jpg",
      text: "Sprite",
      precio: "1200",
    },
    {
      imageUrl:
        "https://i.postimg.cc/C5XDKyv4/340851-c69574b1579eea1aa015695098355021-1024-1024.jpg",
      text: "Monster",
      precio: "1600",
    },
    {
      imageUrl:
        "https://i.postimg.cc/SsKz7Q3r/Schweppes-pomelo-lata-x-354-ml-1599590963-0-0.jpg",
      text: "Schweppes Pomelo (Lata 350ml)",
      precio: "1000",
    },
    {
      imageUrl:
        "https://i.postimg.cc/zG1b2F43/pampa-dorada-pampeana-be6b035ed2accc085f17206317251027-1024-1024.png",
      text: "cerveza rubia pampa dorada",
      precio: "1600",
    },
  ];

  const cardData3 = [
    {
      imageUrl: "https://i.postimg.cc/23N6JCcg/exprimido.png",
      text: "Exprimido de naranja",
      precio: "3000",
    },
    {
      imageUrl:
        "https://i.postimg.cc/vHn3CMHh/55410181-batido-de-leche-de-pl-tano-en-el-fondo-blanco.jpg",
      text: "Licuado de banana (Leche)",
      precio: "3500",
    },
    {
      imageUrl:
        "https://i.postimg.cc/c1gm8ZYW/smothie-recetas-p9yr7ilcssfrltfequcy1d6rch10nctqox81w0c1nc.jpg",
      text: "Licuado de frutilla y mango (leche o agua)",
      precio: "3500",
    },
    {
      imageUrl: "https://i.postimg.cc/tg4dRHyL/hacer-zumo-natural.jpg",
      text: "Batido saludable naranja (naranja, zanahoria, mango y jengibre)",
      precio: "3033",
    },
    {
      imageUrl:
        "https://i.postimg.cc/L41t8DK6/batido-verde-de-espinacas-con-manzana-y-pepino.jpg",
      text: "Batido saludable verde (pepino, manzana y kiwi)",
      precio: "3300",
    },
  ];

  const cardData4 = [
    {
      imageUrl: "https://i.postimg.cc/dVtZrmXC/91-receta.jpg",
      text: "Chipacitos (2 unidades)",
      precio: "1200",
    },
    {
      imageUrl:
        "https://i.postimg.cc/PqCLFfdr/criollitos-crop1710780342816-jpg-1310222040.jpg",
      text: "Criollitos (100gr)",
      precio: "1700",
    },
    {
      imageUrl:
        "https://i.postimg.cc/RFr0scPX/tostadas-jq1-d2c40500309175ab1315119478812711-640-0.jpg",
      text: "Tostado",
      precio: "2200",
    },
    {
      imageUrl: "https://i.postimg.cc/qv3VmW9H/photo.jpg",
      text: "Focaccia Especial (jamon crudo, queso tybo, tomate, queso roquefort)",
      precio: "4500",
    },
    {
      imageUrl:
        "https://i.postimg.cc/8czgtcVZ/d3b0f97f-ad2f-44fa-8690-5a136b6ed4a4.jpg",
      text: "Focaccia Rellena (jamon, queso, tomate y albahaca)",
      precio: "3300",
    },
    {
      imageUrl:
        "https://i.postimg.cc/HkcHqr8K/focaccia-rellena-1200-e1612528978649.jpg",
      text: "Focaccia Veggie (queso tybo, tomate, queso roquefort, lactonesa de albahaca)",
      precio: "3600",
    },
  ];

  const cardData5 = [
    {
      imageUrl:
        "https://i.postimg.cc/LX0xF81C/facturas-de-argentina-para-la-merienda.jpg",
      text: "Facturas",
      precio: "800",
    },
    {
      imageUrl:
        "https://i.postimg.cc/6qJYp1Mn/alfajores-chocolate1-a250d0856fe0ee982916607456687766-640-0.webp",
      text: "Alfajores de chocolate (blanco o negro)",
      precio: "1000",
    },
    {
      imageUrl: "https://i.postimg.cc/JnbjP7QH/DSC00628-01-e1588557286234.jpg",
      text: "Alfajores de maicena",
      precio: "500",
    },
  ];

  const cardData6 = [
    {
      imageUrl:
        "https://i.postimg.cc/767j9zc1/tarta-lemon-pie-con-merengue-43048292-800x800.jpg",
      text: "Lemon pie",
      precio: "2500",
    },
    {
      imageUrl: "https://i.postimg.cc/MGBsJSDq/photo.jpg",
      text: "Cabsha",
      precio: "2500",
    },
    {
      imageUrl:
        "https://images.ecestaticos.com/6a9HPGNIgXUu7ROOp81TuDce9WY=/0x107:2117x1300/1200x1200/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Faa8%2F26e%2F5f1%2Faa826e5f1d9b1c2efa3faf8b58688558.jpg",
      text: "Frutos Secos",
      precio: "2500",
    },
    {
      imageUrl: "https://i.postimg.cc/TPjrcY0L/1600977247274.jpg",
      text: "Manzana con nuez",
      precio: "2500",
    },
    {
      imageUrl:
        "https://assets.elgourmet.com/wp-content/uploads/2023/03/cuadr_7olVwv2FaZz6HOBucCs54D1A8jWSxK-1024x683.png.webp",
      text: "Coco y dulce de leche",
      precio: "2500",
    },
  ];

  // Obtener los contenedores de las filas desde el HTML
  const firstRow = document.getElementById("firstRow");
  const secondRow = document.getElementById("secondRow");
  const thirdRow = document.getElementById("thirdRow");
  const fourthRow = document.getElementById("fourthRow");
  const fifthRow = document.getElementById("fifthRow");
  const sixthRow = document.getElementById("sixthRow");

  // Función para crear una tarjeta
  function createCard(imageUrl, text, precio) {
    const colDiv = document.createElement("div");
    colDiv.classList.add("col-lg-3", "mb-2"); // Clases de Bootstrap para columnas

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = imageUrl; // Asignar la URL de la imagen
    img.alt = "Card image cap"; // Texto alternativo de la imagen

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = text; // Asignar texto dinámico

    const priceText = document.createElement("p");
    priceText.classList.add("card-text", "font-weight-bold");
    priceText.textContent = `$${precio}`; // Asignar el precio

    // Construir la estructura de la tarjeta
    cardBody.appendChild(cardText);
    cardBody.appendChild(priceText); // Agregar el precio al cuerpo de la tarjeta
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);
    colDiv.appendChild(cardDiv);

    return colDiv;
  }

  // Agregar tarjetas del primer conjunto (cardData1) a la primera fila
  cardData1.forEach(function (item) {
    const cardElement = createCard(item.imageUrl, item.text, item.precio);
    firstRow.appendChild(cardElement);
  });

  // Agregar tarjetas de otros conjuntos a las filas correspondientes
  cardData2.forEach(function (item) {
    const cardElement = createCard(item.imageUrl, item.text, item.precio);
    secondRow.appendChild(cardElement);
  });

  cardData3.forEach(function (item) {
    const cardElement = createCard(item.imageUrl, item.text, item.precio);
    thirdRow.appendChild(cardElement);
  });

  cardData4.forEach(function (item) {
    const cardElement = createCard(item.imageUrl, item.text, item.precio);
    fourthRow.appendChild(cardElement);
  });

  cardData5.forEach(function (item) {
    const cardElement = createCard(item.imageUrl, item.text, item.precio);
    fifthRow.appendChild(cardElement);
  });

  cardData6.forEach(function (item) {
    const cardElement = createCard(item.imageUrl, item.text, item.precio);
    sixthRow.appendChild(cardElement);
  });
});

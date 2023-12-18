const path = require('path');
const data = [
  {
    product_id: 1,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 3,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp"
  },
  {
    product_id: 2,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Charmander",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 3,
    product_sku: "PKM001002",
    img_front: "/img/pokemon/charmander-1.webp",
    img_back: "/img/pokemon/charmander-box.webp"
  },
  {
    product_id: 3,
    licence_name: "Harry Potter",
    category_name: "Figuras coleccionables",
    product_name: "Hermione",
    product_description: "Figura coleccionable Harry Potter",
    product_price: 1799.99,
    dues: 3,
    product_sku: "HP001001",
    img_front: "/img/harry-potter/hermione-1.webp",
    img_back: "/img/harry-potter/hermione-box.webp"
  },
  {
    product_id: 1,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp"
  },
  {
    product_id: 1,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp"
  },
  {
    product_id: 1,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp"
  },
  {
    product_id: 1,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp"
  },
  {
    product_id: 1,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp"
  }, {
    product_id: 1,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp"
  }
];
module.exports = {
  shopView: (req, res) => {

    res.render(path.resolve(__dirname, '../views/shop/shop.ejs'), {
      title: "Tienda", 
      data
    })
  },

  itemView: (req, res) => {
    const itemId = req.params.id;
    const item = data.find(item => item.product_id ==itemId);
    res.render(path.resolve(__dirname, '../views/shop/item.ejs'),
      {
        
        title: "Item",
        item
      })
  },

  addItemToCart: (req, res) => res.send('Route to add a item to cart'),

  cartView: (req, res) => {
    res.render(path.resolve(__dirname, '../views/shop/cart.ejs'), {
      title: "Carrito"
    })
  },


  checkout: (req, res) => res.send('Route to receive the selected products and init the buy process')
};
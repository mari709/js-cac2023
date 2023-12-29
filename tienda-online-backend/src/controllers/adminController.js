const path = require('path');
const { getAll, getOne, create } = require('../models/productModels');

module.exports = {
    adminView: async (req, res) => {
      const data = await getAll();

      res.render(path.resolve(__dirname, '../views/admin/admin.ejs'),
      {
        title: "Admin",
        data
      })
    },
    
    createView:  (req, res) => {
      res.render(path.resolve(__dirname, '../views/admin/create.ejs'),
      {
        title: "Crear Item"
      })
    },


    createItem: async  (req, res) => {
      //console.log(req.body);
      //console.log(req.files);

      //importante el orden ya que se crea en este orden
      const product_schema = {
        product_name: req.body.name,
        product_description: req.body.description,
        price: Number(req.body.price),
        stock: Number(req.body.stock),
        discount: Number(req.body.discount),
        sku: req.body.sku,
        dues: Number(req.body.dues),
        image_front: req.files[0].originalname,
        image_back: req.files[1].originalname,
        licence_id: Number(req.body.licence),
        category_id: Number(req.body.category)
      }

      await create([Object.values(product_schema)]);
      res.redirect('/admin');
      
      //console.log( "array: ", [Object.values(product_schema)]);
      //console.log(result);
      //res.send('Create Route that receive a new item data to add in Database');
    },
    
    editView: async (req, res) =>{
      const { id } = req.params;
      const [product]= await getOne({product_id: id});

      res.render(path.resolve(__dirname, '../views/admin/edit.ejs'),
      {
        title: "Editar item", 
        product
      })
    },
    editItem:  (req, res) => res.send('Edit Route that receive data to modify an item in Database'),
    deleteItem:  (req, res) => res.send('Delete Route that receive the ID to the item to delete from database'),
  };
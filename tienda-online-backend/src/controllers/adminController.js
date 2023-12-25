const path = require('path');
const { getAll, getOne } = require('../models/productModels');

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


    createItem:  (req, res) => res.send('Create Route that receive a new item data to add in Database'),
    
    editView: async (req, res) =>{
      const { id } = req.params;
      const [product ]= await getOne(id);

      res.render(path.resolve(__dirname, '../views/admin/edit.ejs'),
      {
        title: "Editar item", 
        product
      })
    },
    editItem:  (req, res) => res.send('Edit Route that receive data to modify an item in Database'),
    deleteItem:  (req, res) => res.send('Delete Route that receive the ID to the item to delete from database'),
  };
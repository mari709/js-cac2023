const path = require('path');

module.exports = {
    adminView: (req, res) => {
      res.render(path.resolve(__dirname, '../views/admin/admin.ejs'),
      {
        title: "Admin"
      })
    },
    
    createView:  (req, res) => {
      res.render(path.resolve(__dirname, '../views/admin/create.ejs'),
      {
        title: "Crear Item"
      })
    },


    createItem:  (req, res) => res.send('Create Route that receive a new item data to add in Database'),
    
    editView:  (req, res) =>{
      res.render(path.resolve(__dirname, '../views/admin/edit.ejs'),
      {
        title: "Editar item"
      })
    },
    editItem:  (req, res) => res.send('Edit Route that receive data to modify an item in Database'),
    deleteItem:  (req, res) => res.send('Delete Route that receive the ID to the item to delete from database'),
  };
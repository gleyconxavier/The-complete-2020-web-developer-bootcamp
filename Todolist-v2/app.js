// jshint esversion:6

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const _ = require("lodash");

mongoose.connect("mongodb://localhost:27017/todoListDB", {useNewUrlParser: true, useUnifiedTopology: true});

const itemsSchema = {
  name: String
};

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item ({
  name:"Bem vindo a sua lista de tarefas."
});

const item2 = new Item ({
  name:"<-- Clique aqui para deletar um item."
});

const item3 = new Item ({
  name:"Clique no botão de + para adicionar uma tarefa."
});

const defaultItems = [item1, item2, item3];

const listSchema = {
  name: String,
  items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);

app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {

  Item.find({}, (err, foundItems) => {
    if(foundItems.length === 0) {
      Item.insertMany(defaultItems, (err) => {
        if(err) {
          console.log(err);
        } else {
          console.log("Successfully inserted into db.");
        }
      });
      res.redirect("/");
    } else {
      res.render("list", {listTitle: "Hoje",newListItems: foundItems});
    }
  });
});

app.post("/", (req, res) => {

  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item ({
    name: itemName
  });

  if(listName === "Hoje") {
    item.save();
    res.redirect("/");
  } else {
    List.findOne({name: listName}, (err, foundList) => {
      foundList.items.push(item);
      foundList.save();
      res.redirect("/"+listName);
    });
  }

});

app.post("/delete", (req, res) => {
  const checkedItemId=req.body.checkbox;
  const listName=req.body.listName;

  if(listName === "Hoje") {
    Item.findByIdAndRemove(checkedItemId, (err) =>{
      if(!err) {
        console.log("Item deleted:"+checkedItemId);
        res.redirect("/");
      }
    });
  } else {
    List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, (err, foundList) => {
      if(!err) {
        res.redirect("/"+listName);
      } else {
        console.error(err);
      }
    });
  }

});

app.get("/:customListName", (req, res) =>{
  const customListName = _.capitalize(req.params.customListName);

  List.findOne({name:customListName}, (err, foundList) => {
    if(!err){
      if(!foundList) {

        const list = new List({
          name: customListName,
          items: defaultItems
        });

        list.save();
        res.redirect("/"+customListName);
      } else {
        res.render("list", {listTitle: foundList.name, newListItems: foundList.items});
      }
    }
  });

});

app.get("/about", (req, res) => {
  res.render("about");
});

const port = 3000 || '';

app.listen(port, (req, res) => {
  console.log("Servidor iniciou em: http://localhost:" + port);
});
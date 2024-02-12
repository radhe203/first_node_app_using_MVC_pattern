const path = require("path");
const fs = require("fs");
const { json } = require("body-parser");
const p = path.join(__dirname, "..", "data", "products.json");

const getProductsFromfile = (cb) => {
  fs.readFile(p, (err, filecontent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(filecontent));
    }
  });
};

class product {
  constructor(t) {
    this.title = t;
  }
  save() {
    //   let products = [];
    //    fs.readFile(p,(err,filecontent)=>{
    //     if(!err){
    //         products = JSON.parse(filecontent);
    //     }
    //     products.push(this);
    //     fs.writeFile(p,JSON.stringify(products),(err)=>{
    //         console.log(err)
    //     })
    //    })

    getProductsFromfile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    //     fs.readFile(p, (err, filecontent) => {
    //       if (err) {
    //         cb([]);
    //       }
    //       cb(JSON.parse(filecontent));
    //     });
    //   }

    getProductsFromfile(cb);
  }
}
module.exports = product;

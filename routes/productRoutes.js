const mongoose = require('mongoose');
const Product = mongoose.model('products');

module.exports = (app) => {

  app.get(`/api/product`, async (req, res) => {
    let products = await Product.find();
    return res.status(200).send(products);
  });



/*app.post('/api/product', function (req, res) {
        console.log("in POST products")
    var newUsers = new Products({
            id: uuid.v4(),
        name: req.body.name,
        desc: req.body.desc
    })

    newProducts.save(function (err, newProducts) {
        if (err) return console.error(err);
        res.send('Posted products: ' + req.body.name + req.body.desc)
    })
})*/



  app.post(`/api/product`, async (req, res) => {
    let product = await Product.create(req.body);
    return res.status(201).send({
      error: false,
      product
    })
  })

  app.put(`/api/product/:id`, async (req, res) => {
    const {id} = req.params;

    let product = await Product.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      product
    })

  });

  app.delete(`/api/product/:id`, async (req, res) => {
    const {id} = req.params;

    let product = await Product.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      product
    })

  })
  
}
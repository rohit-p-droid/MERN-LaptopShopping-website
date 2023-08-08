const router = require("express").Router()
const Product = require("../models/Product")

//add product
router.post("/regProduct", async (req, res) => {
  const newProduct = new Product({
    brandName: req.body.brandName,
    productName: req.body.productName,
    shortInfo: req.body.shortInfo,
    image: req.body.image,
    processor: req.body.processor,
    ram: req.body.ram,
    storage: req.body.storage,
    graphics: req.body.graphics,
    price: req.body.price
  });

  try {
    const saveProduct = await newProduct.save()
    res.status(201).json(saveProduct)
  } catch (err) {
    res.status(500).json(err)
  }
})

//GET PRODUCT BY ID
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT BY BRAND NAME
router.get("/get/:brand", async (req, res) => {
  try {
    const product = await Product.find({brandName:req.params.brand})
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }

  // const qNew = req.query.new;
  // const qCategory = req.query.category;
  // try {
  //   let products;

  //   if (qNew) {
  //     products = await Product.find().sort({ id: -1 }).limit(1);
  //   } else if (qCategory) {
  //     products = await Product.find({
  //       categories: {
  //         $in: [qCategory],
  //       },
  //     });
  //   } else {
  //     products = await Product.find();
  //   }

  //   res.status(200).json(products);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
})



module.exports = router

        // "brandName": "HP",
        // "productName": "HP pavellian 1234",
        // "shortInfo": "Ryzen 5 8Gb Ram 512 GB SSD",
        // "image": "HP Image.jpg",
        // "processor": "Ryzen 5",
        // "ram" : "8GB",
        // "storage": "512 SSD",
        // "graphics": "4GB",
        // "price": 6
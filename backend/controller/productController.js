const catchAsyncError = require("../middleware/catchAsyncError");
const Product = require("../models/productModel");
const WProduct = require("../models/WomenModel");
const MProduct = require("../models/WomenModel");
const ApiFeature = require("../utils/apifeature");
const ErrorHandler = require("../utils/errorhandler");
const cloudinary = require("cloudinary");


// Create Product 
exports.createProduct = catchAsyncError(async (req, res, next) => {
  // let images = [];

  // if (typeof req.body.images === "string") {
  //   images.push(req.body.images);
  // } else {
  //   images = req.body.images;
  // }

  // const imagesLinks = [];

  // for (let i = 0; i < images.length; i++) {
  //   const result = await cloudinary.v2.uploader.upload(images[i], {
  //     folder: "products",
  //   });

  //   imagesLinks.push({
  //     public_id: result.public_id,
  //     url: result.secure_url,
  //   });
  // }

  // req.body.images = imagesLinks;
req.body.user=req.user.id;
    const product = await Product.create(req.body);


    res.status(201).json({
        success: true,
        product
    });
});
// // Create women Product 
// exports.CreateWomenProduct = catchAsyncError(async (req, res, next) => {

// req.body.user=req.user.id;
//     const product = await Product.create(req.body);


//     res.status(201).json({
//         success: true,
//         product
//     });
// });

// // Create Men Product 
// exports.CreateMenProduct = catchAsyncError(async (req, res, next) => {

//   req.body.user=req.user.id;
//       const product = await Product.create(req.body);
  
  
//       res.status(201).json({
//           success: true,
//           product
//       });
//   });

//Update product 
exports.updateProduct = catchAsyncError( async (req, res, next) => {


    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found",404));
    }

    
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });
    res.status(200).json({
        success: true,
        product
    })
});


// //GET ALL PRODUCT   
// exports.getAllProducts = catchAsyncError(async (req, res, next) => {
//     const resultPerPage = 5;
// const productCount=await product.countDocuments();
    
//   const apiFeature = new ApiFeature(Product.find(), req.query).search().filter().pagination(resultPerPage);
      
  
//     let products = await apiFeature.query;
  
//     res.status(200).json({
//       success: true,
//       products,
  
//     });
//   });


// Get All Product
exports.getAllProducts = catchAsyncError(async (req, res, next) => {
    const resultPerPage =6;
    const productsCount = await Product.countDocuments()+await WProduct.countDocuments()+await MProduct.countDocuments() ;
    // const WproductsCount = await WProduct.countDocuments();

    const apiFeature = new ApiFeature(Product.find(), req.query)
      .search()
      .filter();
    const apiFeature1 = new ApiFeature(WProduct.find(), req.query)
      .search()
      .filter();
    const apiFeature2 = new ApiFeature(MProduct.find(), req.query)
      .search()
      .filter();
    
  
    let products = await apiFeature.query ;
    let Wproducts = await apiFeature1.query ;
    let Mproducts = await apiFeature2.query ;
    // let Allproducts = products+Wproducts;
    let filteredProductsCount = products.length+Wproducts.length+Mproducts.length;
  
    apiFeature.pagination(resultPerPage);
    apiFeature1.pagination(resultPerPage);
    apiFeature2.pagination(resultPerPage);
    products = await apiFeature.query.clone();
    Wproducts = await apiFeature1.query.clone();
    Mproducts = await apiFeature2.query.clone();
    // Allproducts = await apiFeature.query.clone();
  
    res.status(200).json({
      success: true,
      productsCount,
      resultPerPage,
      filteredProductsCount,
    // Allproducts,
    products,
    Wproducts,
    Mproducts,

      
      
      
    });
  });


//   //GET ALL Women PRODUCT   
// exports.getAllWomenProducts = catchAsyncError(async (req, res, next) => {
//   const resultPerPage = 12;
//   const productsCount = await WProduct.countDocuments();

//   const apiFeature = new ApiFeature(WProduct.find(), req.query)
//     .search()
//     .filter();

//   let products = await apiFeature.query;
//   let filteredProductsCount = products.length;

//   apiFeature.pagination(resultPerPage);
//   products = await apiFeature.query.clone();

//   res.status(200).json({
//     success: true,
//     productsCount,
//     resultPerPage,
//     filteredProductsCount,
//     products,
//   });
  
// });

// Delete Product 
exports.deleteProduct =catchAsyncError( async (req, res, next) => {


    let product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Product not found",404));
    }
    await product.remove();

    res.status(200).json({
        success: true,
        message: "Product deleted successfully"
    })
});

// Get product detail 

exports.detailsProduct =catchAsyncError( async (req, res, next) => {


    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found",404));
    }



    res.status(200).json({
        success: true,
        product,
    })
});

// Create New Review or Update the review
exports.createProductReview = catchAsyncError(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);

  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  let avg = 0;
  product.ratings =
  product.reviews.forEach((rev) => {
    avg += rev.rating;
  })

 / product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});









  // Get All Reviews of a product
exports.getProductReviews = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.query.id);
  
    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }
  
    res.status(200).json({
      success: true,
      reviews: product.reviews,
    });
  });
  // Delete Review
exports.deleteReview = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.query.productId);
  
    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }
  
    const reviews = product.reviews.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );
  
    let avg = 0;
  
    reviews.forEach((rev) => {
      avg += rev.rating;
    });
  
    let ratings = 0;
  
    if (reviews.length === 0) {
      ratings = 0;
    } else {
      ratings = avg / reviews.length;
    }
  
    const numOfReviews = reviews.length;
  
    await Product.findByIdAndUpdate(
      req.query.productId,
      {
        reviews,
        ratings,
        numOfReviews,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
  
    res.status(200).json({
      success: true,
      message: "Delete Reviews Successfully",

    });
  });
  

// Get All admin Product
exports.getAdminProducts = catchAsyncError(async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
  products
    
    
    
  });
});

const catchAsyncError = require("../middleware/catchAsyncError");
const WProduct = require("../models/WomenModel");
const ApiFeature = require("../utils/apifeature");
const ErrorHandler = require("../utils/errorhandler");



// Create women Product 
exports.CreateWomenProduct = catchAsyncError(async (req, res, next) => {

    req.body.user=req.user.id;
        const product = await WProduct.create(req.body);
    
    
        res.status(201).json({
            success: true,
            product
        });
    });

//Update product 
exports.updateWomenProduct = catchAsyncError( async (req, res, next) => {


    let product = await WProduct.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found",404));
    }

    
    product = await WProduct.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });
    res.status(200).json({
        success: true,
        product
    })
});


//GET ALL Women PRODUCT   
exports.getAllWomenProducts = catchAsyncError(async (req, res, next) => {
    const resultPerPage = 6;
    const productsCount = await WProduct.countDocuments() ;
    // const WproductsCount = await WProduct.countDocuments();

    const apiFeature = new ApiFeature(WProduct.find(), req.query)
      .search()
      .filter();
    
  
    let products = await apiFeature.query ;
    
    let filteredProductsCount = products.length;
  
    apiFeature.pagination(resultPerPage);
    products = await apiFeature.query.clone();
  
    res.status(200).json({
      success: true,
      productsCount,
      resultPerPage,
      filteredProductsCount,
      products,
      
      
    });
  });

  exports.getAdminWomenProducts = catchAsyncError(async (req, res, next) => {
    const products = await WProduct.find();
  
    res.status(200).json({
      success: true,
      products,
    });
  });
// // Get All Product
// exports.getAllProducts = catchAsyncError(async (req, res, next) => {
//     const resultPerPage = 12;
//     const productsCount = await Product.countDocuments();

//     const apiFeature = new ApiFeature(Product.find(), req.query)
//       .search()
//       .filter();
  
//     let products = await apiFeature.query;
//     let filteredProductsCount = products.length;
  
//     apiFeature.pagination(resultPerPage);
//     products = await apiFeature.query.clone();
  
//     res.status(200).json({
//       success: true,
//       productsCount,
//       resultPerPage,
//       filteredProductsCount,
//       products,
//     });
//   });
// Delete Product 
exports.deleteWomenProduct =catchAsyncError( async (req, res, next) => {


    let product = await WProduct.findById(req.params.id);
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

exports.detailsWomenProduct =catchAsyncError( async (req, res, next) => {


    const product = await WProduct.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found",404));
    }



    res.status(200).json({
        success: true,
        product,
    })
});
// // Create New Review or Update the review
// exports.createProductReview = catchAsyncError(async (req, res, next) => {
//     const { rating, comment, productId } = req.body;
  
//     const review = {
//       user: req.user._id,
//       name: req.user.name,
//       rating: Number(rating),
//       comment,
//     };
  
//     const product = await Product.findById(productId);
  
//     const isReviewed = product.reviews.find(
//       (rev) => rev.user.toString() === req.user._id.toString()
//     );
  
//     if (isReviewed) {
//       product.reviews.forEach((rev) => {
//         if (rev.user.toString() === req.user._id.toString())
//           (rev.rating = rating), (rev.comment = comment);
//       });
//     } else {
//       product.reviews.push(review);
//       product.numOfReviews = product.reviews.length;
//     }
  
//     let avg = 0;
  
//     product.reviews.forEach((rev) => {
//       avg += rev.rating;
//     });
  
//     product.ratings = avg / product.reviews.length;
  
//     await product.save({ validateBeforeSave: false });
  
//     res.status(200).json({
//       success: true,
//       message: "Add reviews Successfully",

//     });
//   });
//   // Get All Reviews of a product
// exports.getProductReviews = catchAsyncError(async (req, res, next) => {
//     const product = await Product.findById(req.query.id);
  
//     if (!product) {
//       return next(new ErrorHandler("Product not found", 404));
//     }
  
//     res.status(200).json({
//       success: true,
//       reviews: product.reviews,
//     });
//   });
//   // Delete Review
// exports.deleteReview = catchAsyncError(async (req, res, next) => {
//     const product = await Product.findById(req.query.productId);
  
//     if (!product) {
//       return next(new ErrorHandler("Product not found", 404));
//     }
  
//     const reviews = product.reviews.filter(
//       (rev) => rev._id.toString() !== req.query.id.toString()
//     );
  
//     let avg = 0;
  
//     reviews.forEach((rev) => {
//       avg += rev.rating;
//     });
  
//     let ratings = 0;
  
//     if (reviews.length === 0) {
//       ratings = 0;
//     } else {
//       ratings = avg / reviews.length;
//     }
  
//     const numOfReviews = reviews.length;
  
//     await Product.findByIdAndUpdate(
//       req.query.productId,
//       {
//         reviews,
//         ratings,
//         numOfReviews,
//       },
//       {
//         new: true,
//         runValidators: true,
//         useFindAndModify: false,
//       }
//     );
  
//     res.status(200).json({
//       success: true,
//       message: "Delete Reviews Successfully",

//     });
//   });

// Create New Review or Update the review
exports.createProductReview = catchAsyncError(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await WProduct.findById(productId);

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

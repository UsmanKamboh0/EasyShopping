const catchAsyncError = require("../middleware/catchAsyncError");
const KProduct = require("../models/KidModel");
const ApiFeature = require("../utils/apifeature");
const ErrorHandler = require("../utils/errorhandler");


// Create Men Product 
exports.CreateKidProduct = catchAsyncError(async (req, res, next) => {

    req.body.user=req.user.id;
        const product = await KProduct.create(req.body);
    
    
        res.status(201).json({
            success: true,
            product
        });
    });

    
// Get All Admin Men Product
exports.getAdminMenProducts = catchAsyncError(async (req, res, next) => {
    const products = await KProduct.find();
  
    res.status(200).json({
      success: true,
      products,
    });
  });


  // Get All Men Product
exports.getAllKidProducts = catchAsyncError(async (req, res, next) => {
    const resultPerPage = 6;
    const productsCount = await KProduct.countDocuments();

    const apiFeature = new ApiFeature(KProduct.find(), req.query)
      .search()
      .filter();
  
    let products = await apiFeature.query;
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
  // Delete Product 
exports.deleteKidProduct =catchAsyncError( async (req, res, next) => {


    let product = await KProduct.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Product not found",404));
    }
    await product.remove();

    res.status(200).json({
        success: true,
        message: "Product deleted successfully"
    })
});

//Update product 
exports.updateKidProduct = catchAsyncError( async (req, res, next) => {


    let product = await KProduct.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found",404));
    }

    
    product = await KProduct.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });
    res.status(200).json({
        success: true,
        product
    })
});


// Get product detail 

exports.detailsKidProduct =catchAsyncError( async (req, res, next) => {


    const product = await KProduct.findById(req.params.id);

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
  
    const product = await KProduct.findById(productId);
  
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
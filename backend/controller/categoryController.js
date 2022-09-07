const catchAsyncError = require("../middleware/catchAsyncError");
const Category = require("../models/categoryModel");
const ApiFeature = require("../utils/apifeature");
const ErrorHandler = require("../utils/errorhandler");

//Create Category
exports.createCategory = catchAsyncError(async (req, res, next) => {


  const category = await Category.create(req.body);




  res.status(201).json({
      success: true,
      category,
  });
});

//update Category

exports.updateCategory = catchAsyncError( async (req, res, next) => {


  let category = await Category.findById(req.params.id);

  if (!category) {
      return next(new ErrorHandler("category not found",404));
  }

  
  category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false
  });
  res.status(200).json({
      success: true,
      category
  })
});

//Delete Category
exports.deleteCategory =catchAsyncError( async (req, res, next) => {


  let category = await Category.findById(req.params.id);
  if (!Category) {
      return next(new ErrorHandler("Category not found",404));
  }
  await category.remove();

  res.status(200).json({
      success: true,
      message: "Category deleted successfully"
  })
});
//Detail of the Category
exports.detailsCategory =catchAsyncError( async (req, res, next) => {


  let category= await Category.findById(req.params.id);

  if (!category) {
      return next(new ErrorHandler("Category not found",404));
  }



  res.status(200).json({
      success: true,
      category,
  })
});
// Get all Category
exports.getAllCategory = catchAsyncError(async (req, res, next) => {
    const getAllCategory = await Category.find({});
  res.status(200).send(getAllCategory);
});


const express =require ("express");
const {  getAllCategory, createCategory, updateCategory, deleteCategory, detailsCategory } = require("../controller/categoryController");



const router = express.Router();


router.route("/categories").get(getAllCategory);
router.route("/category/new").post(createCategory);
router.route("/category/:id").put(updateCategory).delete(deleteCategory).get(detailsCategory);



module.exports=router
const express =require ("express");
const {getAdminMenProducts, CreateMenProduct,createProductReview,getProductReviews,deleteMenProduct,updateMenProduct,detailsMenProduct, getAllMenProducts } = require("../controller/MenProductController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");



const router = express.Router();

router.route("/Mproducts")
  .get( getAllMenProducts);
router.route("/Mproduct/Men").post(isAuthenticatedUser, authorizeRoles("admin"), CreateMenProduct);
router.route("/Mproduct/Men/:id").put(isAuthenticatedUser, authorizeRoles("admin"),updateMenProduct).delete(isAuthenticatedUser, authorizeRoles("admin"),deleteMenProduct);
router.route("/Mproduct/Men/:id").get(detailsMenProduct);
router.route("/Mproduct/review").put(isAuthenticatedUser, createProductReview);
router
  .route("/admin/Menproducts")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminMenProducts);
router
  .route("/Men/reviews")
  .get(getProductReviews);
//   .delete(isAuthenticatedUser, deleteReview);
  module.exports=router


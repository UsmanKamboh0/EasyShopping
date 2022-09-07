const express =require ("express");
const {getAdminWomenProducts, CreateWomenProduct,createProductReview, getAllWomenProducts, deleteWomenProduct, updateWomenProduct, detailsWomenProduct } = require("../controller/WomenProductController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");



const router = express.Router();

router.route("/Wproduct/review").put(isAuthenticatedUser, createProductReview);

// router
//   .route("/reviews")
//   .get(getProductReviews)
//   .delete(isAuthenticatedUser, deleteReview);
  module.exports=router


  // women product
  router
  .route("/admin/Womenproducts")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminWomenProducts);
  router.route("/Wproducts")
  .get( getAllWomenProducts);
  router.route("/Wproduct/Women").post(isAuthenticatedUser, authorizeRoles("admin"), CreateWomenProduct);
  router.route("/Wproduct/Women/:id").put(isAuthenticatedUser, authorizeRoles("admin"),updateWomenProduct).delete(isAuthenticatedUser, authorizeRoles("admin"),deleteWomenProduct);
router.route("/Wproduct/Women/:id").get(detailsWomenProduct);

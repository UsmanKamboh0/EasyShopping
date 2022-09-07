const express =require ("express");
const {CreateKidProduct,createProductReview,getAllKidProducts,getAdminMenProducts,deleteKidProduct,updateKidProduct,detailsKidProduct} = require("../controller/KidProductController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

// router.route("/Mproducts")
//   .get( getAllMenProducts);
router.route("/Kproduct/Kid").post(isAuthenticatedUser, authorizeRoles("admin"), CreateKidProduct);
router.route("/Kproduct/Kid/:id").put(isAuthenticatedUser, authorizeRoles("admin"),updateKidProduct).delete(isAuthenticatedUser, authorizeRoles("admin"),deleteKidProduct);
router
  .route("/admin/Kidproducts")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminMenProducts);
  router.route("/Kproduct/Kid/:id").get(detailsKidProduct);
  router.route("/Kproducts")
  .get( getAllKidProducts);
  router.route("/Kproduct/review").put(isAuthenticatedUser, createProductReview);

module.exports=router
import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Loading from "../../../LoadingError/Loading";
import Message from "../../../LoadingError/Error";

import Toast from "../../../LoadingError/Toast";
import"../Admin1.css"
// import SideBar from "./Sidebar";
import {PRODUCT_UPDATE_RESET} from "../../../../Redux/Constants/ProductConstants";
import { Link } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";
import {
  clearErrors,
  updateProduct,

  getProductDetails,
} from "../../../../Redux/Actions/ProductActions";
const EditProductMain = ( props ) => {
    const { productId } = props;
  const dispatch = useDispatch();
//   const alert = useAlert();

const { product,  error } = useSelector(
  (state) => state.productDetails
);
  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.productEdit);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [Stock, setStock] = useState(0);
  const [image1, setimage1] = useState("");
  const [image2, setimage2] = useState("");

  const categories = [
    "Sale",
        "Clothing",
        
        "Shoes",
        "Accessories",
        "Collection",
        "Caps",
        "Glasses",
  ];
  const ToastObjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
  };

  useEffect(() => {
    if (product && product._id !== productId) {
      dispatch(getProductDetails(productId));
    } else {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setCategory(product.category);
      setStock(product.Stock);
      setimage1(product.image1);
      setimage2(product.image2);
    }
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
        toast.success("Product Updated", ToastObjects);
      dispatch({ type: PRODUCT_UPDATE_RESET });
    }
  }, [
    dispatch,
    alert,
    error,
    history,
    isUpdated,
    productId,
    product,
    updateError,
  ]);

  const updateProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("Stock", Stock);
    myForm.set("image1", image1);
    myForm.set("image2", image2);

    
    dispatch(updateProduct(productId, myForm));
  };

  

  return (
    <Fragment>
      
       
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Toast/>


     
        <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={updateProductSubmitHandler}>
          <div className="content-header">
            <button   className="btn1 btn-primary  ">
            <Link to="/adminproducts" style={{color:"white"}}>
              Go to products
            </Link>
            </button>
            <h2 className="content-title">Edit Product</h2>
            <div>
              <button type="submit" className="btn1 btn-primary">
                Publish now
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
              <div className="card-body">
                  {updateError && (
                    <Message variant="alert-danger">{updateError}</Message>
                  )}
                  {loading&& <Loading />}
                  {loading ? (
                    <Loading />
                  ) : error ? (
                    <Message variant="alert-danger">{error}</Message>
                  ) : (
                    <>
                      <div className="mb-4">
                        <label htmlFor="product_title" className="form-label">
                          Product title
                        </label>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="form-control"
                          id="product_title"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_price" className="form-label">
                          Price
                        </label>
                        <input
                          type="number"
                          placeholder="Type here"
                          className="form-control"
                          id="product_price"
                          required
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_price" className="form-label">
                          Count In Stock
                        </label>
                        <input
                          type="number"
                          placeholder="Type here"
                          className="form-control"
                          id="product_price"
                          required
                          value={Stock}
                          onChange={(e) => setStock(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Description</label>
                        <textarea
                          placeholder="Type here"
                          className="form-control"
                          rows="7"
                          required
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Category</label>
                        <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Choose Category</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Images</label>
                        <input
                          className="form-control"
                          type="text"
                          value={image1}
                          required
                          onChange={(e) => setimage1(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Images</label>
                        <input
                          className="form-control"
                          type="text"
                          value={image2}
                          required
                          onChange={(e) => setimage2(e.target.value)}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>

    </Fragment>
  );
};

export default EditProductMain;

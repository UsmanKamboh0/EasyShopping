import React, { useEffect } from "react";
import TopTotal from "../HomeScreen/TopTotal";
import LatestOrder from "../HomeScreen/LatestOrder";
import SaleStatistics from "../HomeScreen/SaleStatistics";
import ProductsStatistics from "../HomeScreen/ProductsStatistics";
import { useSelector, useDispatch } from "react-redux";
import {
  getAdminProduct,
} from "../../../Redux/Actions/ProductActions";
import {
  MlistProduct
} from "../../../Redux/Actions/MenAction";
import {
  WlistProduct
} from "../../../Redux/Actions/WomenProductAction";
import "./Admin1.css"
import { listOrders } from "../../../Redux/Actions/OrderActions";
const Main = () => {
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  const { products } = useSelector((state) => state.productList);
  const MenproductList = useSelector((state) => state.MenproductList);
    const {  mproducts} = MenproductList;
    const WomenproductList = useSelector((state) => state.WomenproductList);
    const { wproducts} = WomenproductList;

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });


  useEffect(() => {

    dispatch(getAdminProduct());
    dispatch(MlistProduct());
    dispatch(listOrders());
    dispatch(WlistProduct());
  }, [dispatch]);
  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  
  
  return (
    <>
      <br></br>
      <br></br>
      <br></br>

      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title"> Dashboard </h2>
        </div>

        {/* Top Total */}
        <TopTotal orders={orders} products={products}  mproducts={mproducts} wproducts={wproducts} />
        <div className="row">
          {/* STATICS */}
          <SaleStatistics />
          <ProductsStatistics />
        </div>
        

        
       <h3> LATEST ORDER </h3>
        <div className="card mb-4 shadow-sm">
          <LatestOrder orders={orders} loading={loading} error={error} />
        </div>
      </section>
    </>
  );
};

export default Main;

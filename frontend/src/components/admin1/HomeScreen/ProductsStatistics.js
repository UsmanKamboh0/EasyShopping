import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAdminProduct,
  deleteProduct,
} from "../../../Redux/Actions/ProductActions";
import {
  WlistProduct
} from "../../../Redux/Actions/WomenProductAction";
import {
  MlistProduct
} from "../../../Redux/Actions/MenAction";
const ProductsStatistics = () => {

  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
const { products } = useSelector((state) => state.productList);
const WomenproductList = useSelector((state) => state.WomenproductList);
const { wproducts} = WomenproductList;
const MenproductList = useSelector((state) => state.MenproductList);
const {  mproducts} = MenproductList;
let outOfStock = 0;
let woutOfStock = 0;
let moutOfStock = 0;

wproducts &&
wproducts.forEach((item) => {
  if (item.Stock === 0) {
    woutOfStock += 1;
  }
});
mproducts &&
mproducts.forEach((item) => {
  if (item.Stock === 0) {
    moutOfStock += 1;
  }
});
products &&
products.forEach((item) => {
  if (item.Stock === 0) {
    outOfStock += 1;
  }
});


useEffect(() => {

dispatch(getAdminProduct());
dispatch( WlistProduct());
dispatch( MlistProduct());
}, [dispatch]);
let totalAmount = 0;
orders &&
orders.forEach((item) => {
  totalAmount += item.totalPrice;
});

const lineState = {
labels: ["Initial Amount", "Amount Earned"],
datasets: [
  {
    label: "TOTAL AMOUNT",
    backgroundColor: ["#4CAF50"],
    hoverBackgroundColor: ["rgb(197, 72, 49)"],
    data: [0, totalAmount],
  },
],
};
  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [moutOfStock + woutOfStock + outOfStock, products.length - outOfStock + wproducts.length - woutOfStock + mproducts.length - moutOfStock],
      },
    ],
  };
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h3 className="card-title">Products statistics</h3>
          <Doughnut data={doughnutState} />
        </article>
      </div>
    </div>
  );
};

export default ProductsStatistics;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Line } from "react-chartjs-2";

const SaleStatistics = () => {
    const dispatch = useDispatch();

    const orderList = useSelector((state) => state.orderList);
    const { loading, error, orders } = orderList;

    const { products } = useSelector((state) => state.productList);
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

  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h3 className="card-title">Sale statistics</h3>
         
          <Line data={lineState} />
        </article>
      </div>
    </div>
  );
};

export default SaleStatistics;

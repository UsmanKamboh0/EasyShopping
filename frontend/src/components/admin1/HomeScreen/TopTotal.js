import React from "react";
import { useSelector, useDispatch } from "react-redux";

const TopTotal = (props) => {
  const { orders, products ,mproducts, wproducts } = props;
  let totalSale = 0;
  if (orders) {
    orders.map((order) =>
      order.isPaid === true ? (totalSale = totalSale + order.totalPrice) : null
    );
  }

  let totalAmount = 0;
orders &&
  orders.forEach((item) => {
    totalAmount += item.totalPrice;
  });
  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
          <article className="icontext">
            <span className="icon icon-sm rounded-circle alert-primary">
              <i className="text-primary fas fa-usd-circle"></i>
            </span>
            <div className="text">
              <h6 className="mb-1">Total Sales</h6>{" "}
               Rs:{totalAmount}/-

            </div>
          </article>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
          <article className="icontext">
            <span className="icon icon-sm rounded-circle alert-success">
              <i className="text-success fas fa-bags-shopping"></i>
            </span>
            <div className="text">
              <h6 className="mb-1">Total Orders</h6>
              {orders ? <span>{orders.length}</span> : <span>0</span>}
              

            </div>
          </article>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
          <article className="icontext">
            <span className="icon icon-sm rounded-circle alert-warning">
              <i className="text-warning fas fa-shopping-basket"></i>
            </span>
            <div className="text">
              <h6 className="mb-1">Total Products</h6>
              {products ? <span>{products.length + mproducts.length + wproducts.length}</span> : <span>0</span>}
              {/* {mproducts ? <span>{mproducts.length}</span> : <span>0</span>} */}
            </div>
          
            
          </article>
        </div>
      </div>
    </div>
  );
};

export default TopTotal;

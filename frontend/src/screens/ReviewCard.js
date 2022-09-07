import { Rating } from "@material-ui/lab";
import React from "react";
import profilePng from "../images/Profile1.png";

const ReviewCard = ({ review }) => {
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <>
      <section class="product-tab-part position-r pb-10">
        <div class="container">
          <div class="product-tab-inner">
            <div class="row">
             <div class="">
                          
                          <ul class="">
                            <li>
                          
                              <div class="comment-detail">
                                <span class="commenter"><span>{review.name}</span> (05 Jan 2020)</span>
                                <p>{review.comment}</p>
                                <a href="#" class=""><Rating {...options} /></a>
                              </div>
                              <div class="clearfix"></div>
                            </li>
                            
                          </ul>
                        </div>
              </div>
            </div>
          </div>
    </section>










   
    </>

  );
};

export default ReviewCard;

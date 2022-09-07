import React from 'react'
import OwlCarousel from 'react-owl-carousel';

// import "../components/css/glass-case.css"


const Testimonial = () => {
  return (
      <>
      
      <section class=" testimonial-section position-r ptb-100">


				<div class="container">
					<div class="col-12">
						<div class="heading-part text-center mb-30 mb-sm-20">
							<h2 class="main_title">Testimonial</h2>
							<br></br>
							<br></br>
							<br></br>
							<br></br>
							<br></br>

						</div>

					</div>
					<div class="row">

						<div class="team-inner testimonial-slider  ">


							<OwlCarousel items={1} margin={8} autoplay={true} >
								<div class="item testimonial-main">
									<div class="client-img-main">

										<div class="client-img">

											<img className="img" src={'images/testimonial_img1.jpg'} alt="usman" />
											<div class="quote-img">
												<img className="img" src={'images/quote-img.png'} alt="usman" />

											</div>
										</div>
									</div>
									<div class="clear-fix"></div>
									<div class="client-detail">
										<p>make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was make a type specimen book. It has survived not only five centuries.</p>
										<h4 class="sub-title client-title">- john Doe - </h4>
										<div class="designation">Founder</div>
									</div>
								</div>
								{/* first testimonial end */}
								<div class="item testimonial-main">
									<div class="client-img-main">

										<div class="client-img">

											<img className="img" src={'images/testimonial_img2.jpg'} alt="usman" />
											<div class="quote-img">
												<img className="img" src={'images/quote-img.png'} alt="usman" />

											</div>
										</div>
									</div>
									<div class="clear-fix"></div>
									<div class="client-detail">
										<p>make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was make a type specimen book. It has survived not only five centuries.</p>
										<h4 class="sub-title client-title">- john Doe - </h4>
										<div class="designation">Founder</div>
									</div>
								</div>
								<div class="item testimonial-main">
									<div class="client-img-main">

										<div class="client-img">

											<img className="img" src={'images/testimonial_img3.jpg'} alt="usman" />
											<div class="quote-img">
												<img className="img" src={'images/quote-img.png'} alt="usman" />

											</div>
										</div>
									</div>
									<div class="clear-fix"></div>
									<div class="client-detail">
										<p>make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was make a type specimen book. It has survived not only five centuries.</p>
										<h4 class="sub-title client-title">- john Doe - </h4>
										<div class="designation">Founder</div>
									</div>
								</div>



							</OwlCarousel>
						</div>
					</div>

				</div>


			</section>
			<br></br>
			<br></br>
			<br></br>

			{/* <div class="brand-part pb-100">
				<div class="container">
					<div class="brand-part-inner">
						<div class="row">
							<div class="brand-salider brand-slider ">

                            <div class="item">
										<img src="images/brand-img1.png" alt="brand-img" />
                                        <img src="images/brand-img2.png" alt="brand-img" />
                                        <img src="images/brand-img3.png" alt="brand-img" />
                                        <img src="images/brand-img4.png" alt="brand-img" />
                                        <img src="images/brand-img5.png" alt="brand-img" />
                                        <img src="images/brand-img6.png" alt="brand-img" />
                                       
									</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
      </>
  )
}

export default Testimonial
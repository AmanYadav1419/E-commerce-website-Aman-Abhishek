import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";

// Import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import ProductDisplay from "./ProductDisplay";

const SingleProduct = () => {
  const [Products, setProducts] = useState([]);
  const { id } = useParams();
  // console.log(id)

  useEffect(() => {
    fetch("/src/products.json")
      .then((res) => res.json())
      .then((dataShop) => setProducts(dataShop));
  }, []);

  //   console.log(Products)

  const result = Products.filter((p) => p.id === id);
  //   console.log(result);

  return (
    <div>
      <PageHeader
        title={"Our Shop Single Page"}
        curPage={"Shop/ Single Product"}
      />
      <div className="shop-single padding-tb aside-bg">
        <div className="container">
          <div className="row justify-content-center">
            {/* Left side */}
            <div className="col-lg-8 col-12">
              <article>
                <div className="product-details">
                  <div className="row align-items-center">
                    {/* Image */}
                    <div className="col-md-6 col-12">
                      <div className="product-thumb">
                        <div className="swiper-container pro-single-top">
                          <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            Loop={"true"}
                            autoplay={{
                              delay: 2000,
                              disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            navigation={{
                              prevEl: ".pro-single-prev",
                              nextEl: ".pro-single-next",
                            }}
                            className="mySwiper"
                          >
                            {result.map((item, index) => {
                              <SwiperSlide key={index}>
                                <div className="single-thumb">
                                  <img src={item.img} alt="" />
                                </div>
                              </SwiperSlide>;
                            })}
                          </Swiper>
                          <div className="pro-single-next">
                            <i className="ico-rounded-left"></i>
                          </div>
                          <div className="pro-single-prev">
                            <i className="ico-rounded-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Details section */}
                    <div className="col-md-6 col-12">
                      <div className="post-content">
                        <div>
                          {
                            result.map(item => <ProductDisplay key={item.id} item={item}/>)
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* reviews */}
                <div className="review">Review</div>
              </article>
            </div>

            {/* Right side */}
            <div className="col-lg-4 col-12">Right Side</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

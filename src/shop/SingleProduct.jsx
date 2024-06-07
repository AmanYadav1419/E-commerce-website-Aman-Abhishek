import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import PopularPost from "./PopularPost";
import Tags from "./Tags";

// Import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import ProductDisplay from "./ProductDisplay";
import Review from "./Review";

const SingleProduct = () => {
  const [Products, setProducts] = useState([]);
  const { id } = useParams();
  // console.log(id)

  useEffect(() => {
    fetch("/src/products.json")
      .then((res) => res.json())
      .then((dataShop) => setProducts(dataShop));
  }, []);

  // console.log(Products)

  const result = Products.filter((p) => p.id === id);
  // console.log(result);

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
                          <Swiper className="mySwiper">
                            {result.map((item, index) => (
                              <SwiperSlide key={index}>
                                <div className="single-thumb">
                                  <img src={item.img} alt="" />
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                          <div className="pro-single-next">
                            <i className="icofont-rounded-left"></i>
                          </div>
                          <div className="pro-single-prev">
                            <i className="icofont-rounded-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Details section */}
                    <div className="col-md-6 col-12">
                      <div className="post-content">
                        <div>
                          {result.map((item) => (
                            <ProductDisplay key={item.id} item={item} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* reviews */}
                <div className="review">
                  <Review />
                </div>
              </article>
            </div>

            {/* Right side */}
            <div className="col-lg-4 col-12">
              <aside className="ps-lg-4">
                {/* popular posts */}
                <PopularPost />
                {/* tags */}
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

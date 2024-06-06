import React, { useState } from "react";
import Ratting from "../components/Ratting";
const reviwtitle = "Add a Review";

let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];

const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);

  return (
    <>
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li className="desc" onClick={() => setReviewShow(!reviewShow)}>
          Description
        </li>
        <li className="rev" onClick={() => setReviewShow(!reviewShow)}>
          Review 4
        </li>
      </ul>

      {/* desc and review content */}
      <div
        className={`review-content ${
          reviewShow ? "review-content-show" : "description-content-show"
        }`}
      >
        <div className="review-showing">
          <ul className="content lab-ul">
            {ReviewList.map((review, index) => (
              <li key={index}>
                <div className="post-thumb">
                  <img src={review.imgUrl} alt={review.imgAlt} />
                </div>
                <div className="post-content">
                  <div className="entry-meta">
                    <div className="posted-on">
                      <a href="#">{review.name}</a>
                      <p>{review.date}</p>
                    </div>
                  </div>
                  <div className="entry-content">
                    <p>{review.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* add review feild */}
          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviwtitle}</h5>
              </div>

              <form action="action" className="row">
                <div className="col-md-4 col-12">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full name *"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Your Email *"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <div className="rating">
                    <span className="me-2">Your Rating </span>
                    <Ratting />
                  </div>
                </div>

                <div className="col-md-12 col-12">
                  <textarea
                    name="message"
                    id="message"
                    rows="8"
                    placeholder="Type Your Message Here"
                  ></textarea>
                </div>

                <div className="col-12">
                  <button type="submit" className="default-button">
                    <span>submit Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* description */}
        <div className="description">
          {/* this is a random data */}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
            laboriosam quibusdam rem ab, assumenda animi, minima inventore dolor
            sapiente eligendi cupiditate a consectetur magnam sed accusantium
            repellat similique. Temporibus enim sunt, error ullam atque
            praesentium veniam sit ex dolore ipsam corrupti totam eveniet dummy
            image not accurate this is only for dummy purpose.
          </p>

          <div className="post-item">
            <div className="post-thumb">
              {/* dummy image not accurate this is only for dummy purpose*/}
              <img src="/src/assets/images/shop/01.jpg" alt="" />
            </div>
            <div className="post-content">
              <ul className="lab-ul">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Earum, fugiat!
                </li>
                <li>consectetur adipisicing elit. Earum, fugiat!</li>
                <li>sit amet consectetur adipisicing elit. Earum, fugiat!</li>
                <li>Earum, fugiat! ipsum dolor sit amet.</li>
                <li>
                  ipsum dolor sit amet consectetur adipisicing elit. Earum,
                  fugiat!
                </li>
              </ul>
            </div>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
            laboriosam quibusdam rem ab, assumenda animi, minima inventore dolor
            sapiente eligendi cupiditate a consectetur magnam sed accusantium
            repellat similique. Temporibus enim sunt, error ullam atque
            praesentium veniam sit ex dolore ipsam corrupti totam eveniet dummy
            image not accurate this is only for dummy purpose.
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;

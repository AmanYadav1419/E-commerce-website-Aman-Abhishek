import React from "react";
import PageHeader from "../components/PageHeader";
import GoogleMap from "../components/GoogleMap";

const subTitle = "Get in touch with us";
const title = "We're Always Eager To Hear From You!";
const conSubTitle = "Get in touch with Contact us";
const conTitle =
  "Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send our Message";

const contactList = [
  {
    imgUrl: "/src/assets/images/icon/01.png",
    imgAlt: "contact icon",
    title: "Office Address",
    desc: "1201 park street, Fifth Avenue",
  },
  {
    imgUrl: "/src/assets/images/icon/02.png",
    imgAlt: "contact icon",
    title: "Phone number",
    desc: "+22698 745 632,02 982 745",
  },
  {
    imgUrl: "/src/assets/images/icon/03.png",
    imgAlt: "contact icon",
    title: "Send email",
    desc: "admin@shopcart.com",
  },
  {
    imgUrl: "/src/assets/images/icon/04.png",
    imgAlt: "contact icon",
    title: "Our website",
    desc: "www.shopcart.com",
  },
];

// handle submit message button
const handleSubmitMessageBtn = (event) => {
  event.preventDefault();
  alert("form submited");
};

const Contact = () => {
  return (
    <div>
      <PageHeader title={"Get In Touch With US"} curPage={"Contact Us"} />

      <div className="map-address-section padding-tb section-bg">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">{subTitle}</span>
            <h2 className="title">{title}</h2>
          </div>

          <div className="section-wrapper">
            <div className="row flex-row-reverse">
              <div className="col-x-4 col-lg-5 col-12">
                <div className="contact-wrapper">
                  {contactList.map((item, index) => (
                    <div key={index} className="contact-item">
                      <div className="contact-thumb">
                        <img src={item.imgUrl} alt={item.imgAlt} />
                      </div>
                      <div className="contact-content">
                        <h6 className="title">{item.title}</h6>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* google map */}
              <div className="col-xl-8 col-lg-7 col-12">
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-section padding-tb">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">{conSubTitle}</span>
            <h2 className="title">{conTitle}</h2>
          </div>

          {/* contact us form */}
          <div className="section-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name *"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email *"
                />
              </div>

              <div className="form-group">
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Phone Number *"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject *"
                />
              </div>

              <div className="form-group w-100">
                <textarea
                  name="message"
                  id="message"
                  rows="8"
                  placeholder="Your Message *"
                ></textarea>
              </div>

              <div className="form-group w-100 text-center">
                <button
                  onClick={handleSubmitMessageBtn}
                  className="lab-btn"
                  type="submit"
                >
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

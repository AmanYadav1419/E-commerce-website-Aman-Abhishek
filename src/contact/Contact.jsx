import React from "react";
import PageHeader from "../components/PageHeader";

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

const Contact = () => {
  return <div>
    <PageHeader title={"Get In Touch With US"} curPage={"Contact Us"}/>

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
                        {
                            contactList.map((item,index)=> (
                                <div key={index} className="contact-item">
                                    <div className="contact-thumb">
                                    <img src={item.imgUrl} alt={item.imgAlt} />
                                    </div>
                                    <div className="contact-content">
                                        <h6 className="title">{item.title}</h6>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                
            </div>
        </div>
    </div>
    </div>    
  </div>;
};

export default Contact;

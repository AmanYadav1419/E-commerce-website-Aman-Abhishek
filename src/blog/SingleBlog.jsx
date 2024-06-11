import React from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";

// social icons list
const socialList = [
  {
    iconName: "icofont-facebook",
    siteLink: "#",
    className: "facebook",
  },
  {
    iconName: "icofont-twitter",
    siteLink: "#",
    className: "twitter",
  },
  {
    iconName: "icofont-linkedin",
    siteLink: "#",
    className: "linkedin",
  },
  {
    iconName: "icofont-instagram",
    siteLink: "#",
    className: "instagram",
  },
  {
    iconName: "icofont-pinterest",
    siteLink: "#",
    className: "pinterest",
  },
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  //   console.log(id);

  // filter blog
  const result = blog.filter((b) => b.id === Number(id));
  //   console.log(result[0]);

  return (
    <div>
      <PageHeader title={"Single Blog Page"} curPage={"Blog / Blog Details"} />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            {/* Left Side */}
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>

                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((value, index) => (
                                      <li key={index}>
                                        <i className={value.iconName}></i>
                                        {value.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <p>
                                  random text : Lorem ipsum dolor sit amet
                                  consectetur adipisicing elit. Dolor illo
                                  minima dignissimos. Eum nihil quisquam
                                  veritatis cum iusto nesciunt accusamus quidem,
                                  magni est pariatur minus beatae assumenda
                                  cumque placeat. Nihil!. Lorem ipsum dolor sit
                                  amet consectetur adipisicing elit. Dolor,
                                  aperiam. Mollitia veniam ullam corrupti
                                  ratione. Lorem ipsum dolor sit, amet
                                  consectetur adipisicing elit. Voluptatum, rem?
                                </p>

                                <blockquote>
                                  <p>
                                    Dyanmically recaptiualize disturbuted
                                    technologies is wherease turnkey channels
                                    and anotoconncetly provide acess to
                                    resources leveling expertise vias worldwide
                                    deilerables volstickly extend anwer vortals
                                  </p>
                                  <cite>
                                    <a href="#">...Melissa Hunter</a>
                                  </cite>
                                </blockquote>

                                <p>
                                  Lorem ipsum dolor sit amet consectetur,
                                  adipisicing elit. Eveniet perspiciatis
                                  numquam, tempore repudiandae dolorum
                                  praesentium dignissimos sit sequi! Eum, quasi.
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Labore, neque.
                                </p>
                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />

                                <p>
                                  Lorem ipsum dolor sit, amet consectetur
                                  adipisicing elit. Sint iste provident autem
                                  quam non magnam odit cupiditate sequi id
                                  architecto! Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Aliquid, quia.
                                </p>

                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://youtu.be/_w3R2VwRyF4?si=QrQfEMVnu01v6x"
                                    className="video-button popup"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>

                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Error et quidem, laboriosam
                                  eveniet itaque eligendi. Earum, corrupti
                                  doloremque quidem harum voluptate magnam
                                  aliquam fugiat. Itaque ducimus labore
                                  praesentium ab consectetur? Lorem ipsum dolor
                                  sit amet consectetur adipisicing elit.
                                  Quibusdam, accusamus.
                                </p>

                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Bussiness</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>

                                  <ul className="lab-ul social-icons">
                                    {socialList.map((item, index) => (
                                      <li key={index}>
                                        <a
                                          href={item.siteLink}
                                          className={item.className}
                                        >
                                          <i className={item.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="navigation-part">
                      <div className="left">
                        <a href="#" className="prev">
                          <i className="icofont-double-left"></i> PreVious Blog
                        </a>

                        <a href="#" className="title">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Nemo, doloremque.
                        </a>
                      </div>

                      <div className="right">
                        <a href="#" className="next">
                          <i className="icofont-double-right"></i> Next Blog
                        </a>

                        <a href="#" className="title">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Nemo, doloremque.
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">Right Side</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;

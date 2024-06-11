import React from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";

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

                                
                              </div>
                            </div>
                          ))}
                        </div>
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

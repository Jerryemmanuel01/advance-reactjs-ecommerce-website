import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();

  const result = blog.filter((b) => b.id === Number(id));
  // console.log(result[0]);
  return (
    <div>
      <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Details"} />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
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
                                <h2>{item.title}</h2>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>{" "}
                                        {val.text}{" "}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rem exercitationem quasi necessitatibus itaque quia cupiditate ipsam in? Dignissimos ullam voluptatum veritatis, magni corrupti, in aliquid maxime odio mollitia doloribus repellat nobis voluptatibus officia minus. Tenetur maxime labore, fugiat perspiciatis dolore ullam, assumenda, optio expedita ab sed corrupti porro voluptatem?</p>
                                
                                <blockquote>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, enim earum. Incidunt voluptas distinctio, ad repudiandae deserunt at quae ipsum quos eligendi, nihil blanditiis, vel laboriosam ab. Accusantium, beatae hic?</p>
                                    <cite>
                                        <a href="#">...Melissa Munter</a>
                                    </cite>
                                </blockquote>
                               
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cumque voluptates doloribus tenetur, quasi odio id ratione. Perferendis neque quos enim beatae odit eius accusamus? Quidem eos, maxime explicabo recusandae, eveniet quia nesciunt incidunt modi doloribus accusamus quisquam! Quia deserunt odit, magnam autem nobis blanditiis? Esse, iste ipsum sed id obcaecati dicta et vel cum ullam quos debitis, facilis libero.
                                </p>
                                
                                <img src="/src/assets/images/blog/single/01.jpg" alt="" />
                               
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laboriosam molestiae veritatis ad quasi facilis omnis in. Dicta in impedit enim dolores alias ipsum totam, accusamus, nesciunt doloribus voluptates ullam rerum, non facilis ex iure mollitia neque quidem explicabo voluptatem. Quibusdam tempora aliquam maxime, sit debitis consectetur. Voluptates error excepturi accusamus quidem, earum maxime quisquam magnam obcaecati dignissimos tempora aspernatur voluptas aliquam nemo ut labore explicabo delectus odio. Nisi placeat aliquid iure quia excepturi repellendus ad quis, tempora repudiandae necessitatibus.
                                </p>

                                <div className="video-thumb">
                                    <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                    <a href="https://youtu.be/_W3R2VwRyF4?si=dQrQfEMwVnu01v6x" className="video-button popup">
                                        <i className="icofont-ui-play"></i>
                                    </a>
                                </div>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis alias eius molestiae non a magni inventore, architecto esse possimus in, distinctio incidunt consequuntur animi! Nesciunt quidem adipisci explicabo atque, illum vel autem assumenda perferendis quod dolorem? Rerum aliquid distinctio officia omnis, aperiam pariatur! Ea excepturi quas, eius quo maiores, earum voluptas esse repudiandae aspernatur dignissimos nobis? Dolorum ut autem corporis natus, minus aperiam vero expedita enim sunt adipisci odio dignissimos perferendis dolorem unde obcaecati mollitia possimus facere tempora dolore alias?</p>

                                <div className="tags-section">
                                    <ul className="tags lab-ul">
                                        <li>
                                            <a href="#">Agency</a>
                                        </li>
                                        <li>
                                            <a href="#">Business</a>
                                        </li>
                                        <li>
                                            <a href="#">Personal</a>
                                        </li>
                                    </ul>
                                    <ul className="lab-ul social-icons">
                                        {
                                            socialList.map((val,i) => (
                                                <li key={i}>
                                                    <a href="#" className={val.className}>
                                                        <i className={val.iconName}></i>
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>

                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="navigations-part">
                        <div className="left">
                            <a href="#" className="prev">
                                <i className="icofont-double-left"></i> Previous Blog
                            </a>
                            <a href="#" className="title">
                                Evisculate Parallel Processes via Technica Sound Modals Authoritative
                            </a>
                        </div>
                        <div className="right">
                            <a href="#" className="prev">
                                <i className="icofont-double-right"></i> Next Blog
                            </a>
                            <a href="#" className="title">
                                Evisculate Parallel Processes via Technica Sound Modals Authoritative
                            </a>
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

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {


  const [items, setItems] = useState([]);
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:300/service-items`)
      .then((res) => res.json())
      .then((info) => setItems(info));
  }, []);


  useEffect(() => {
    fetch(`http://localhost:300/service`)
      .then((res) => res.json())
      .then((info) => setService(info));
  }, []);


  return (
    // <>
    // {
    //   service.map(s =>       
    //   <section
    //     id="services"
    //     className="services-area pb-90 fix"
    //     style={{
    //       backgroundImage: "url(img/bg/services-bg-aliments.png)",
    //       backgroundRepeat: "no-repeat",
    //       backgroundPosition: "center",
    //     }}
    //   >
    //     <div className="container">
    //       <div className="row align-items-center">
    //         <div className="col-lg-4 col-md-12">
    //           <div className="about-title second-atitle pb-20">
    //             <h5>{s.serviceText}</h5>
    //             <h2>{s.serviceHeading}</h2>
    //             <p>
    //                {s.serviceDetails}
    //             </p>
    //           </div>
    //           <div className="slider-btn mt-10">
    //             <Link 
    //               to ={s.buttonLink}
    //               className="template-btn"
    //               data-animation="fadeInRight"
    //               data-delay=".8s"
    //             >
    //               {s.buttonText}
    //             </Link>

    //           </div>
    //         </div>
    //         <div className="col-lg-8 col-md-12">

    //           <div className="row">
    //             {
    //               items.map(item=> 
    //                 <div className="col-lg-4 col-md-6">
    //               <div
    //                 className="services-box wow fadeInDown animated"
    //                 data-delay=".5s"
    //               >
    //                 <div className="services-icon">
    //                   <img src={item.serviceIcon} alt="icon01" />
    //                 </div>
    //                 <div className="services-content2">
    //                   <h5>
    //                     {item.serviceTitle}
    //                   </h5>
    //                   <p>
    //                     {item.serviceDetails}
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>)

    //             }





    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   )

    // }





    // </>

    <>
      <section className="service-section section-gap bg-color-secondary section-doted-bg">
        <div className="container">

          {
            service.map(e => <div className="section-heading text-center heading-white mb-60">
              <h2 className="title">{e.serviceHeading}</h2>
              <span className="tagline">{e.servicesubHeading}</span>
            </div>
            )
          }

          <div className="iconic-bordered-boxes white-version">
            {
              items.map(c => <div className="single-box">
                <div className="icon">
                  <img src={c.serviceIcon} alt="Code" />
                </div>
                <h4 className="title">
                  <a href="/">{c.serviceTitle}</a>
                </h4>
                <p>
                  {c.serviceDetails}
                </p>
              </div>
              )
            }






          </div>
        </div>
      </section>


    </>


  );
};

export default ServicesSection;

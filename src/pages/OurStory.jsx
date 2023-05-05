import React from 'react';
import bgStoryPhoto from "./../../Public/blob-haikei.svg";
import LazyLoad from 'react-lazy-load';
const OurStory = () => {
    return (
      <div className="md:grid grid-cols-2 ms-5 mt-10">
        <div className="">
          <h1 className="text-4xl text-deep-orange-600 mb-2">Our Story</h1>
          <h1>
            Traditional & Modern Service <span>Since 1970</span>
          </h1>
          <p className="me-3 mb-2">
            Ut neque turpis dolor sit amet consectetur adipiscing elit purus
            egestas diam sit vitae egestas suspendisse amet ultricies eu. Eget
            at porttitor morbi blandit ac vitae, dolor. Gravida eu vel ac
            luctus. Hac a vel est malesuada tellus sed nunc, etiam maecenas.
          </p>
          <LazyLoad>
            <img
              src="https://fastwpdemo.com/newwp/ticrou/wp-content/uploads/2022/09/signature-1.png"
              alt=""
            />
          </LazyLoad>
          <button className="btn btn-outline btn-warning mt-4 ">
            <div className="card-actions justify-end">
              <div className="badge text-slate-100">more Story</div>
            </div>
          </button>
        </div>
        <div
          style={{
            backgroundImage: `url(${bgStoryPhoto})`,

            backgroundRepeat: "no-repeat",
          }}
        >
          <LazyLoad>
            <img
              className="h-full"
              src="https://fastwpdemo.com/newwp/ticrou/wp-content/uploads/2022/09/about-1.png"
              alt=""
            />
          </LazyLoad>
        </div>
      </div>
    );
};

export default OurStory;
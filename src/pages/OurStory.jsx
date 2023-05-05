import React from 'react';
import bgStoryPhoto from "./../../Public/blob-haikei.svg";
import LazyLoad from 'react-lazy-load';
const OurStory = () => {
    return (
      <div
        style={{
          backgroundImage: `url(https://img.freepik.com/free-vector/white-background-with-wavy-lines_23-2149124446.jpg?w=1380&t=st=1683297268~exp=1683297868~hmac=86ff81e30b7e7dbf5da18024716a7aaa398f3c17454a517d7838bebe96ef59b4)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "695px",
        }}
      >
        <div className="md:grid side-container   grid-cols-2 ms-5 mt-10">
          <div className="">
            <h1 className="text-amber-700 mt-28 text-font text-7xl mb-5 ">
              Our Story
            </h1>
            <h1 className="fontStyle text-lg">
              Traditional & Modern Service{" "}
              <span className="text-font text-gray-700 text-4xl">
                Since 1970
              </span>
            </h1>
            <p className="me-3 mb-2 text-gray-600 mt-7 mb-5">
              Ut neque turpis dolor sit amet consectetur adipiscing elit purus
              egestas diam sit vitae egestas suspendisse amet ultricies eu. Eget
              at porttitor morbi blandit ac vitae, dolor. Gravida eu vel ac
              luctus. Hac a vel est malesuada tellus sed nunc, etiam maecenas.
            </p>

            <img
              src="https://fastwpdemo.com/newwp/ticrou/wp-content/uploads/2022/09/signature-1.png"
              alt=""
            />

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
                className="h-full "
                src="https://fastwpdemo.com/newwp/ticrou/wp-content/uploads/2022/09/about-1.png"
                alt=""
              />
            </LazyLoad>
          </div>
        </div>
      </div>
    );
};

export default OurStory;
import React from 'react';
import bgStoryPhoto from "./../../Public/blob-haikei.svg";
const OurStory = () => {
    return (
      <div className="md:grid grid-cols-2">
        <div className=''>
          <h1>Our Story</h1>
          <h1>
            Traditional & Modern Service <span>Since 1970</span>
          </h1>
          <p>
            Ut neque turpis dolor sit amet consectetur adipiscing elit purus
            egestas diam sit vitae egestas suspendisse amet ultricies eu. Eget
            at porttitor morbi blandit ac vitae, dolor. Gravida eu vel ac
            luctus. Hac a vel est malesuada tellus sed nunc, etiam maecenas.
          </p>
          <img
            src="https://fastwpdemo.com/newwp/ticrou/wp-content/uploads/2022/09/signature-1.png"
            alt=""
          />
          <button> more Story</button>
        </div>
        <div
          style={{
            backgroundImage: `url(${bgStoryPhoto})`,
            
            backgroundRepeat: "no-repeat",
           
          }}
        >
          <img className='h-full'
            src="https://fastwpdemo.com/newwp/ticrou/wp-content/uploads/2022/09/about-1.png"
            alt=""
          />
        </div>
      </div>
    );
};

export default OurStory;
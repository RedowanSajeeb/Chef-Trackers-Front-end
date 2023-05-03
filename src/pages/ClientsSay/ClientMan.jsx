import React from 'react';
import ClientsSay from './ClientsSay';

const ClientMan = () => {
    return (
      <div className='md:grid grid-cols-2 items-center'>
        <div>
          <img
            src="https://fastwpdemo.com/newwp/ticrou/wp-content/uploads/2022/09/men-1.png"
            alt=""
          />
        </div>
        <div>
          <h2>Testimonials</h2>
          <h1>
            What Clients Say About <span>Kitchen Kismet</span>
          </h1>
          <div>
            <ClientsSay></ClientsSay>
          </div>
        </div>
      </div>
    );
};

export default ClientMan;
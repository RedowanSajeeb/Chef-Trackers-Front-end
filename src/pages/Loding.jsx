import React from 'react';
import { BallTriangle} from 'react-loader-spinner';

const Loding = () => {
    return (
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
         
        }}
      >
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#FFBF00"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    );
};

export default Loding;
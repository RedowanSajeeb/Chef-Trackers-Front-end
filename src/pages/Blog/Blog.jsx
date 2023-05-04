import React from 'react';
import Pdf from "react-to-pdf";
const ref = React.createRef();
const Blog = () => {
  
    return (
      <div ref={ref} className="">
        <div>
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
          </Pdf>
          ;
        </div>
        Hello CodeSandbox Start editing to see some magic happen!
      </div>
    );
};

export default Blog;
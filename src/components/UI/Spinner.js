import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = () => (
    <div className="loader">
        <Loader 
            type="ThreeDots"
            color="#da6a6a"
            height="100"	
            width="100"
        />
    </div> 
);

export default Spinner;
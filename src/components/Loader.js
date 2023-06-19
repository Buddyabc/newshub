import React from 'react';
import loading from './loading.gif';
import lightLoader from "./lightLoader.gif"

const Loader =(props)=> {

    return (
      <>
      {props.modeText==="light" &&
      <div className='text-center'>
            <img src={loading} alt="loading" />
      </div>}
      {props.modeText==="dark" &&
      <div className='text-center'>
            <img src={lightLoader} alt="loading" />
      </div>}
      </>
    )
  
}
export default Loader;

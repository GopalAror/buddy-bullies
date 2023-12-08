import React from 'react'
const Mycard = (props) => {
  return (
    <>
      <div className="col-xl-4 col-md-6 col-12 d-xl-block position-relative z-2  d-flex justify-content-center ">
        <div className="card-sec2 d-flex flex-column text-white mt-40">
          <img className='w-50' src={props.img} alt="gopal" />
          <h3 className=' m-0 text-white poppins fw-semibold fs-xl lh-100 pt-5'>{props.h3}</h3>
          <p dangerouslySetInnerHTML={{__html:props.p}} className='pt-4 text-white m-0 opacity-70 poppins fs-sm fw-normal lh-150'></p>
        </div>
      </div>
    </>
  )
}
export default Mycard
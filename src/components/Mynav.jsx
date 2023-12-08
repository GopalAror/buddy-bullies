import React from 'react'

const Mynav = () => {    
    function myNav() {
        document.querySelector(".mobileView").classList.toggle("view")
        document.body.classList.toggle("overflow-hidden")
    }
     return (
        <div className="d-flex flex-column vh-100">
            <nav className='relative'>
                <div className='container d-flex align-items-center justify-content-between h-80'>
                   <ul className='mb-0'><li className='list-unstyled'><a className='text-white lh-normal poppins fs-xm fw-medium  text-decoration-none ' href="#">Logo</a></li></ul>
                    <label className='d-flex flex-column gap-2 menu d-md-none position-absolute' onClick={myNav}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <ul className='d-flex align-items-center gap-80 mobileView mb-0 ps-0 '>
                        <li className='list-unstyled'><a className='text-white lh-normal poppins fs-s fw-medium text-decoration-none ' href="#">Minting</a></li>
                        <li className='list-unstyled'><a className='text-white lh-normal poppins fs-s fw-medium text-decoration-none ' href="#">Road Map</a></li>
                        <li className='list-unstyled'><a className='text-white lh-normal poppins fs-s fw-medium text-decoration-none' href="#">Faq</a></li>
                        <li className='list-unstyled'><a className='text-white lh-normal poppins fs-s fw-medium text-decoration-none' href="#">Team</a></li>
                        <li className='list-unstyled'><a className='text-white lh-normal poppins fs-s fw-medium text-decoration-none' href="#">Join Us</a></li>
                    </ul>
                </div>
            </nav>
            <div className="flex-grow-1 h-100">
            <div className="container head h-100 d-flex align-items-center">
                <div>
                <h1 className="text-white max-w-515 poppins fs-3xl fw-normal lh-124 m-0"> Vitae nunc, <span className="fw-bold">blandit a odio </span></h1>
                <p className="text-white max-w-547 lh-41 poppins fw-normal fs-xm opacity-70 m-0 pt-4">Semper in egestas risus id tempus. Pellentesque dolor eros sollicitudin feugiat ut odio
                    semper. Mattis fermentum eget ut vestibulum dolor diam</p>
                <button className="btn position-relative z-3 lightblue fs-l poppins lh-normal fw-medium bg-white px-40 mt-5">Get Started</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Mynav
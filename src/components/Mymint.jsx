import React from 'react'
import gif from "../assets/ezgif-6-99e160664e9b.gif";
import insta from "../assets/insta.svg";
import twitr from "../assets/twitr.svg";
import discord from "../assets/discord.svg";
const Mymint = () => {
    return (
        <div>
            <div className="gradient"></div>
            <div className="elepis2"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12 position-relative ">
                        <div className="elepis1"></div>
                        <img className="w-100 z-1 relative" src={gif} alt="pig" />
                    </div>
                    <div className="col-md-6 col-12 z-index d-flex flex-column justify-content-end pl-130">
                        <h2 className="text-white poppins fw-semibold fs-2xl lh-136 m-0">Mint Your Bat</h2>
                        <h6 className="text-white poppins fs-xl fw-medium lh-136 m-0 pt-4">Minting: 1,5 SOL</h6>
                        <p className="m-0 text-white poppins fs-xs fw-normal lh-136 opacity-50 text-decoration-line-through">Before 2 SOL</p>
                        <h6 className="text-white poppins fs-xl fw-medium lh-136 m-0 pt-4">Whitelist: 0,88 SOL</h6>
                        <p className="m-0 text-white poppins fs-xs fw-normal lh-136 opacity-50 text-decoration-line-through">Before 1 SOL</p>
                        <div>
                            <button className="btn lightblue fs-l poppins lh-normal fw-medium bg-white px-40 mt-60">Coming soon</button>
                        </div>
                        <div className=" mt-5 d-flex gap-4">
                            <a href="https://www.instagram.com/" target='_blank'><img className="icon" src={insta} alt="icon" /> </a>
                            <a href="https://twitter.com/" target='_blank'><img className="icon" src={twitr} alt="icon" /> </a>
                            <a href="https://discord.com/" target='_blank'><img className="icon" src={discord} alt="icon" /> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mymint
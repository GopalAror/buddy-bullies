import React from 'react'
import gif from "../assets/ezgif-6-99e160664e9b.gif";
import insta from "../assets/insta.svg";
import twitr from "../assets/twitr.svg";
import discord from "../assets/discord.svg";
const Mymint = () => {
    return (
        <div>
            <div class="gradient"></div>
            <div class="elepis2"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-12 position-relative ">
                        <div class="elepis1"></div>
                        <img class="w-100 z-1 relative" src={gif} alt="pig" />
                    </div>
                    <div class="col-md-6 col-12 z-index d-flex flex-column justify-content-end pl-130">
                        <h2 class="text-white poppins fw-semibold fs-2xl lh-136 m-0">Mint Your Bat</h2>
                        <h6 class="text-white poppins fs-xl fw-medium lh-136 m-0 pt-4">Minting: 1,5 SOL</h6>
                        <p class="m-0 text-white poppins fs-xs fw-normal lh-136 opacity-50 text-decoration-line-through">Before 2 SOL</p>
                        <h6 class="text-white poppins fs-xl fw-medium lh-136 m-0 pt-4">Whitelist: 0,88 SOL</h6>
                        <p class="m-0 text-white poppins fs-xs fw-normal lh-136 opacity-50 text-decoration-line-through">Before 1 SOL</p>
                        <div>
                            <button class="btn lightblue fs-l poppins lh-normal fw-medium bg-white px-40 mt-60">Coming soon</button>
                        </div>
                        <div class=" mt-5 d-flex gap-4">
                            <a href="https://www.instagram.com/"><img class="icon" src={insta} alt="icon" /> </a>
                            <a href="https://twitter.com/"><img class="icon" src={twitr} alt="icon" /> </a>
                            <a href="https://discord.com/"><img class="icon" src={discord} alt="icon" /> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mymint
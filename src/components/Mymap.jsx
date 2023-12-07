import React from 'react'
import Mycard from './Mycard';
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import c5 from "../assets/c5.png";
import c6 from "../assets/c6.png";
function Mymap() {
    const Cards = [
        {
            logo: c1,
            title: "ART COLLECTION",
            para:"Complete the art collection in full with +70 unique traits, and publish our rarity chart on our webpage."
        },
        {
            logo: c2,
            title: "SPECIAL BULLIES",
            para:"20 Buddybullies {out of 10k} will have a very special and ersonalized resembling of famous people who are into NFTs {those will be available after the minting}."
        },
        {
            logo: c3,
            title: "BREEDING",
            para:"Our BuddyBullies will not come alone, as we will announce the breeding function after the minting and you will be able to get a PuppyBully { for free}."
        },
        {
            logo:c4,
            title: "DIGITALMARKETS",
            para:"Communicate with all the digital markets available in the Solana NFT world  for getting our collection successfully listed."
        },
        {
            logo:c5,
            title: "MERCH",
            para:"The team is working on the future merch thet will be available for the community members directly on our webpage."
        },
        {
            logo: c6,
            title: "CHARITY",
            para:"We will be giving 30% of the royalties to charity permanently and we will keep spending on marketing, promotions and partnership.50% of the riyalties will go back to the community as rewards."
        }
    ]
    return (
        <div className="mymap">
            <div className="container">
                <div className="row pt-150">
                    {Cards.map((c) => <Mycard img={c.logo} h3={c.title} p={c.para} />)}
                </div>
            </div>
        </div>
    )
}
export default Mymap;
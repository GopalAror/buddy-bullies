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
            id: 0,
            logo: c1,
            title: "ART COLLECTION",
            para: "Complete the art collection in full with +70 unique traits, and publish our rarity chart on our webpage."
        },
        {
            id: 1,
            logo: c2,
            title: "SPECIAL BULLIES",
            para: `20 <span class="fw-medium">Buddybullies</span> {out of 10k} will have a very special and  <span class="fw-medium">ersonalized</span> resembling of famous people who are into <span class="fw-medium">NFTs</span> {those will be available after the minting}.`
        },
        {
            id: 2,
            logo: c3,
            title: "BREEDING",
            para: `Our <span class="fw-medium">BuddyBullies</span> will not come alone, as we will announce the <span class="fw-medium">breeding function</span> after the minting and you will be able to get a <span class="fw-medium">PuppyBully</span> { for free}.`
        },
        {
            id: 3,
            logo: c4,
            title: "DIGITALMARKETS",
            para: `Communicate with all the digital markets available in the <span class="fw-medium">Solana</span> NFT world  for getting our collection successfully listed.`
        },
        {
            id: 4,
            logo: c5,
            title: "MERCH",
            para: `The team is working on the future <span class="fw-medium">merch thet</span> will be available for the community members directly on our <span class="fw-medium">webpage</span>.`
        },
        {
            id: 5,
            logo: c6,
            title: "CHARITY",
            para: `We will be giving 30% of the <span class="fw-medium">royalties to charity</span> permanently and we will keep spending on marketing, promotions and partnership.50% of the <span class="fw-medium">riyalties</span> will go back to the <span class="fw-medium">community</span> as rewards.`
        }
    ]
    return (
        <div className="mymap">
            <div className="container">
                <div className="row pt-150">
                    {Cards.map((c) => <Mycard key={c.id} img={c.logo} h3={c.title} p={c.para} />)}
                </div>
            </div>
        </div>
    )
}
export default Mymap;
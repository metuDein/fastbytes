import React from 'react'

const OurServices = () => {
  return (
    <section className='ourServices' id='#services'>
                <h2>What We Offer</h2>
                <p> With our extensive network and strategic partnerships, we ensure seamless transportation of goods across various modes, including road, air, sea, and rail</p>
            <div className='services'>
                <article className='services--card'>
                    <img src="images/service-icon-3.png" alt="" />
                    <h2>Air Freight </h2>
                    <p>With FastByte Air Freight, you benefit from our extensive network of global airline partnerships, ensuring access to an extensive range of routes and destinations.</p>
                </article>
                <article className='services--card'>
                    <img src="images/service-icon-1.png" alt="" />
                    <h2>Road Freight </h2>
                    <p>We understand the importance of timely deliveries and cost-effective transportation. Our dedicated team of road logistics experts works closely with you to optimize the logistics process, ensuring efficient route planning and timely pickups and deliveries</p>
                </article>
                <article className='services--card'>
                    <img src="images/service-icon-2.png" alt="" />
                    <h2> Ocean Freight </h2>
                    <p>With a wide range of routes and coverage to destinations worldwide. Whether you require full container loads (FCL), less-than-container loads (LCL), or specialized cargo handling, we have the expertise and resources to handle it all.</p>
                </article>
                <article className='services--card'>
                    <img src="images/service-icon-4.png" alt="" />
                    <h2> Rail Freight </h2>
                    <p>FastByte Rail Freight is known for its commitment to safety and security. We collaborate with reputable rail operators who adhere to stringent safety standards, ensuring the integrity and protection of your goods during transit. </p>
                </article>
            </div>
    </section>
  )
}

export default OurServices
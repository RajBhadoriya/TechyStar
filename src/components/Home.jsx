import React from 'react'
import vg from "../assets/2 .webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className="home" id="home">
        <main>
            <h1>TechyStar</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>


    <div className="home2">
        <img src={vg} alt="Graphics"/>

        <div>
            <p>
                we are your one and only solution to the tech problems 
                you face
                everyday. We are leading tech company whose aim is to 
                increase the problem solving ability  in children.
            </p>
        </div>
    </div>

    <div className="home3" id="about">
        <div>
            <h1>Who we are?</h1>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem consequatur laborum fuga saepe vitae commodi enim? Voluptatem soluta neque deserunt. Nesciunt, quis ipsam consequuntur minus odit mollitia debitis libero aut porro tenetur, commodi praesentium atque dignissimos est ut similique dolore exercitationem provident natus deleniti animi non! Voluptatum est, ipsam, corrupti rem beatae architecto commodi repellat ut, cupiditate saepe fugit quidem! Eligendi dolores, ducimus veritatis incidunt minima officia numquam consectetur commodi ullam dolore? Doloribus perferendis aut beatae, nostrum veritatis quaerat eveniet exercitationem vitae harum? Fugit accusantium dolorum earum, dolore quis saepe. Illo, ipsam. Vero officiis ut, veniam accusantium placeat expedita adipisci.
            </p>
        </div>
        
    </div>

    <div className="home4" id="brands">
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{
                        animationDelay:"0.3s",
                    }}>
                        <AiFillGoogleCircle/>
                        <p>Google</p>
                    </div>

                    <div style={{
                        animationDelay:"0.5s",
                    }}>
                        <AiFillAmazonCircle/>
                        <p>Amazon</p>
                    </div>

                    <div style={{
                        animationDelay:"0.7s",
                    }}>
                        <AiFillYoutube/>
                        <p>Youtube</p>
                    </div>

                    <div style={{
                        animationDelay:"0.9s",
                    }}>
                        <AiFillInstagram/>
                        <p>Instagram</p>
                    </div>
                </article>
            </div>
        </div>
    </>
  )
}

export default Home
import  "./Hero.css"
import Img1 from "../assets/images/svg/client-databiz.svg"
import Img2 from "../assets/images/svg/client-audiophile.svg"
import Img3 from "../assets/images/svg/client-meet.svg"
import Img4 from "../assets/images/svg/client-maker.svg"
import HeroImg from "../assets/images/png/image-hero-desktop.png"
const Hero  = () => {
    return ( 
        <hero>
            <heroLeft>
               <h1>Make remote work </h1> 
               <p> Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
               <buttom>
                    <button>LearnMore</button>
                    <image>
                        <img src={Img1} alt="" />
                        <img src={Img2} alt="" />
                        <img src={Img3} alt="" />
                        <img src={Img4} alt="" />
                    </image>
               </buttom>
            </heroLeft>

            <heroRight>
                <img id="heroImg" src={HeroImg} alt="" />
            </heroRight>
        </hero>
     );
};
 
export default Hero;
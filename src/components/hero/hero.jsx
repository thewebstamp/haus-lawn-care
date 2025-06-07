import './hero.css';
import { Images } from '../../assets/images';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();

    return (
        <div className="hero-wrap">
            <div className="hero-container">
                <div className="hero-background">
                    <img src={Images.heroImg1} alt="" />
                </div>
                <div className="hero">
                    <div className="hero-top">
                        <div className="small-headline">HAUS LAWN CARE</div>
                        <h1>All-Season Lawn & Landscape Care You Can Count On</h1>
                        <p><b>Family-Owned, Licensed, and Reliable.<br /></b>Whether it’s weekly mowing, mulch installation, or privacy fencing, Haus Lawn Care brings expert service to <b>Clarksburg & Bridgeport.</b></p>
                        <div className="hero-btn">
                            <a id='hero-f-btn' className='hero-f-btn' onClick={() => {navigate('/contact')}} href="#">Get Free Quote</a>
                            <a id='hero-s-btn' className='hero-s-btn' href="#services">See Services</a>
                        </div>
                    </div>

                    <div className="hero-base">
                        <img src={Images.heroImg1} alt="" />
                        <img src={Images.heroImg2} alt="" />
                        <img src={Images.heroImg3} alt="" />
                        <img src={Images.heroImg4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
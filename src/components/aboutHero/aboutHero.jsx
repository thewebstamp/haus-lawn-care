import './aboutHero.css';
import { Images } from '../../assets/images.js';

function AboutHero() {
    return (
        <div className="about-hero">
            <div className='ah-top'>
                <div className='img-wrap'>
                    <img className='ah-img-1' src={Images.about1} />
                    <img className='ah-img-2' src={Images.about2} />
                    <img className='ah-img-height' src={Images.about1} />
                </div>
            </div>
            
            <div className='ah-base'>
                <div className='ah-headline'>LEARN ABOUT US</div>
                <h2>West Virginia’s Trusted Lawn and Landscape Experts.</h2>
                <p>At Haus Lawn Care, we believe your yard should be a source of pride—not stress. As a family-owned and operated business based in Clarksburg, WV, we bring a personal touch to every lawn we care for. Whether it’s weekly mowing, a fresh landscape design, or tackling a full seasonal cleanup, our team is committed to getting the job done right—on time, every time.<br /><br />We proudly serve Clarksburg, Bridgeport, and surrounding areas with licensed, insured, and neighborly service. Our All Seasons Package lets you enjoy a clean, polished yard all year long—without the hassle.<br /><b>Dependable. Professional. Local. That’s the Haus Lawn Care promise.</b></p>
            </div>
        </div>
    )
}

export default AboutHero;
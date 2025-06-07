import './aboutComp.css';
import { useNavigate } from 'react-router-dom';
import { Images } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef } from 'react';

function AboutComp() {
    const navigate = useNavigate();
    const aboutT = useRef();
    const aboutB = useRef();

    function slideUp() {
        if (window.location.pathname == "/") {
            if (window.innerHeight * 0.9 >= aboutT.current.getBoundingClientRect().top) {
                aboutT.current.classList.add("slide-up");
            } else {
                aboutT.current.classList.remove("slide-up");
            }

            if (window.innerHeight * 0.9 >= aboutB.current.getBoundingClientRect().top) {
                aboutB.current.classList.add("slide-up");
            } else {
                aboutB.current.classList.remove("slide-up");
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", slideUp);

        return () => {
            if (window.location.pathname == "/") {
                aboutT.current.classList.remove("slide-up");
                aboutB.current.classList.remove("slide-up");
            }
        }
    }, []);

    return (
        <div className="about-comp">
            <div className="about-comp-imgs" ref={aboutT}>
                <img className='a-height' src={Images.acompImg1} alt="" />
                <img className='a-img-1' src={Images.acompImg1} alt="" />
                <img className='a-img-2' src={Images.acompImg2} alt="" />
            </div>

            <div className="about-comp-text" ref={aboutB}>
                <div className="a-headline">ABOUT US</div>
                <h2>Dedicated Lawn Care from People Who Care.</h2>
                <p>As a family-owned and operated business based in Clarksburg, WV, we bring a personal touch to every lawn we care for. Whether it’s weekly mowing, a fresh landscape design, or tackling a full seasonal cleanup, our team is committed to getting the job done right—on time, every time.</p>
                <div className="about-bullet">
                    <div className="item">
                        <FontAwesomeIcon className='a-check' icon={faCheck} />
                        <span>Locally Trusted</span>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon className='a-check' icon={faCheck} />
                        <span>great Service</span>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon className='a-check' icon={faCheck} />
                        <span>Fast Response</span>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon className='a-check' icon={faCheck} />
                        <span>good Rates</span>
                    </div>
                </div>
                <a href="#" onClick={() => { navigate("/about") }}>Learn &nbsp;More</a>
            </div>
        </div>
    )
}

export default AboutComp;
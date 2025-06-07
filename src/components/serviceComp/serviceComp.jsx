import './serviceComp.css';
import { useNavigate } from 'react-router-dom';
import { Images } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState, useEffect } from 'react';

function ServiceComp() {
    const navigate = useNavigate();
    const [ourServices, setOurServices] = useState([
        {
            title: 'Weekly Mowing',
            description: 'Reliable cuts for a neat, healthy lawn.',
            image: Images.mowing
        },
        {
            title: 'Landscape Design',
            description: 'Custom plans to beautify your property.',
            image: Images.landscaping
        },
        {
            title: 'Mulch Installation',
            description: 'Fresh mulch for health and curb appeal.',
            image: Images.mulching
        },
        {
            title: 'Stone Work',
            description: 'Durable stone features for any yard.',
            image: Images.stone
        },
        {
            title: 'Shrub Removal',
            description: 'Clear overgrown shrubs and reclaim space.',
            image: Images.shrub
        },
        {
            title: 'Fall Cleanup',
            description: 'Clear leaves and prep for colder weather.',
            image: Images.fall
        },
        {
            title: 'Snow Removal',
            description: 'Fast clearing of snow from driveways.',
            image: Images.snow
        },
        {
            title: 'Spring Cleanup',
            description: 'Remove winter debris, prep for growth.',
            image: Images.spring
        },
        {
            title: 'Privacy Fencing',
            description: 'Secure, stylish fencing for peace of mind.',
            image: Images.fence
        }
    ]);

    function scrollLeft() {
        const sItems = document.querySelectorAll('.items');
        setOurServices((o) => {
            o.push(o[0]);
            o.shift();
            return [...o];
        });
        sItems.forEach((item) => {
            item.classList.add("s-slide-left");
            setTimeout(() => {
                item.classList.remove("s-slide-left");
            }, 400);
        })
    }

    function scrollRight() {
        const sItems = document.querySelectorAll('.items');
        setOurServices((o) => {
            o.unshift(o[o.length-1]);
            o.pop();
            return [...o];
        });
        sItems.forEach((item) => {
            item.classList.add("s-slide-right");
            setTimeout(() => {
                item.classList.remove("s-slide-right");
            }, 400);
        })
    };

        const serviceT = useRef();
        const serviceB = useRef();
    
        function slideUp() {
            if (window.location.pathname == "/") {
                if (window.innerHeight * 0.9 >= serviceT.current.getBoundingClientRect().top) {
                    serviceT.current.classList.add("slide-up");
                } else {
                    serviceT.current.classList.remove("slide-up");
                }
    
                if (window.innerHeight * 0.9 >= serviceB.current.getBoundingClientRect().top) {
                    serviceB.current.classList.add("slide-up");
                } else {
                    serviceB.current.classList.remove("slide-up");
                }
            }
        }
    
        useEffect(() => {
            window.addEventListener("scroll", slideUp);
    
            return () => {
                if (window.location.pathname == "/") {
                    serviceT.current.classList.remove("slide-up");
                    serviceB.current.classList.remove("slide-up");
                }
            }
        }, []);

    return (
        <div className="service-comp" id='services'>
            <div className="s-up" ref={serviceT}>
                <div className="s-heading">
                    <div className="s-headline">OUR SERVICES</div>
                    <h2>Complete Lawn & Landscape Solutions, Year-Round.</h2>
                </div>
                <div className="s-text">
                    <p>Expert lawn care and landscaping services designed to keep your yard beautiful and healthy all year round, hassle-free. <br /><b>Explore our full list of services below:</b></p>
                    <a href="#" onClick={()=>{navigate("/contact")}}>Contact Us</a>
                </div>
            </div>

            <div className="s-base-wrap" ref={serviceB}>
                <div className="s-base">
                    <div className="top">
                        <div className="s-top-case">
                            {ourServices.map((item, i) => (
                                <div key={i} className="items">
                                    <div className="item-card">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <img src={item.image} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="control">
                        <FontAwesomeIcon id='s-control-l' icon={faArrowLeft} onClick={scrollRight} />
                        <FontAwesomeIcon id='s-control-r' icon={faArrowRight} onClick={scrollLeft} />
                    </div>
                </div>
                <a href="#" onClick={()=>{navigate("/contact")}}>Contact Us</a>
            </div>
        </div>
    )
}

export default ServiceComp;
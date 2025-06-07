import './testimonial.css';
import { Images } from '../../assets/images';
import { useRef, useEffect } from 'react';

function Testimonial() {
    const testimonial = [
        {
            name: 'KAREN T.',
            address: 'Clarksburg, WV',
            review: "We hired Haus Lawn Care for spring cleanup and weekly mowing. They’re always on time, professional, and our yard looks fantastic! They also follow up and make sure we’re satisfied after every visit."
        },
        {
            name: 'MARK R.',
            address: 'Bridgeport, WV',
            review: "After getting our bushes removed and rock installed, the yard looks brand new. Couldn’t be happier! The team worked efficiently and cleaned everything up better than we expected."
        },
        {
            name: 'JENNA M.',
            address: 'Fairmont, WV',
            review: "They handled snow removal quickly—even during the worst storm. Extremely reliable service. Always professional and respectful of our property and time, no matter the job."
        }
    ];

    const testimonialB = useRef();

    function slideUp() {
        if (window.location.pathname == "/") {
            if (window.innerHeight * 0.9 >= testimonialB.current.getBoundingClientRect().top) {
                testimonialB.current.classList.add("slide-up");
            } else {
                testimonialB.current.classList.remove("slide-up");
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", slideUp);

        return () => {
            if (window.location.pathname == "/") {
                testimonialB.current.classList.remove("slide-up");
            }
        }
    }, []);

    return (
        <div className="testimonial-comp">
            <div className="t-top">
                <div className="t-screen"></div>
                <img src={Images.testimonial} alt="" />
            </div>

            <div className="t-base" ref={testimonialB}>
                <div className="t-headline">⭐⭐⭐⭐⭐ WHAT OUR CLIENTS SAY!</div>
                <h2>We Let Our Work & Our Clients Do The Talking.</h2>
                <div className="testimonial-wrap">
                    {testimonial.map((review, i) => (
                        <div className="t-reviews" key={i}>
                            <div className="review">
                                <div className="big-circle"></div>
                                <div className="small-circle"></div>
                                <p>{review.review}</p>
                            </div>
                            <p className='a'>{review.name}</p>
                            <p className='t-address'>{review.address}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* <div className="base-rev">
                <a className='facebook-review' href="https://web.facebook.com/TLCLAWN21/reviews" target='_blank'><img src={Images.review} alt="" /></a>
            </div> */}
        </div>
    )
}

export default Testimonial;
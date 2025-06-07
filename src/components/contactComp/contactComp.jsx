import './contactComp.css';
import { Images } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ContactComp() {
    const contact = [
        {
            icon: faPhone,
            form: 'Phone Number',
            detail: '+1 304-476-1740',
            openLink: "tel:+13044761740"
        },
        {
            icon: faEnvelope,
            form: 'Email',
            detail: 'Hauslawncare @gmail.com',
            openLink: "mailto:Hauslawncare@gmail.com?Subject=Project Enquiry"
        }
    ];

    return (
        <div className="contact-comp">
            <div className="cc-top">
                <div className="cc-headline">CONTACT US</div>
                <h2>Get in Touch for Fast, Reliable Service.</h2>
                <div className="cc-info">
                    {contact.map((info, i) => (
                        <div key={i} className="cc-item">
                            <hr />
                            <div className="ic-info">
                                <a href={info.openLink}><FontAwesomeIcon className='ci-icon' icon={info.icon} /></a>
                                <div className="info">
                                    <p className='cc-solid'>{info.form}</p>
                                    <a href={info.openLink}>{info.detail}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="cc-base">
                <img src={Images.heroImg3} alt="" />
            </div>

            <div className="cc-socials">
                <a href="https://web.facebook.com/hauslawncare" target='_blank'><FontAwesomeIcon className='ccs-icon' icon={faFacebookMessenger} /></a>
                <a href="#"><FontAwesomeIcon className='ccs-icon' icon={faInstagram} /></a>
            </div>
        </div>
    )
}

export default ContactComp;
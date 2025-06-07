import './footer.css';
import { useNavigate } from 'react-router-dom';
import { Images } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

function Footer({home, about, contact }) {
    const navigate = useNavigate();

    return (
        <div className="footer-comp">
            <div className="f-top-1">
                <a href="#" onClick={()=>{navigate("/")}}><img src={Images.ddr_logo} alt="" /></a>
                <p>Family-Owned, Licensed, and Reliable.</p>
                <a href="mailto:Hauslawncare@gmail.com?Subject=Project Enquiry" target='_blank'><span>Email:</span>&nbsp; Hauslawncare @gmail.com</a>
                <a id='location' href="https://www.bing.com/maps?q=2877+Gregory+Run+Rd%2c+Clarksburg%2c+WV%2c+United+States%2c+26301&FORM=HDRSC6" target='_blank'><b>Address:</b>&nbsp; 2877 Gregory Run Rd, Clarksburg, WV, United States, 26301.</a>
            </div>

            <div className="f-top-2">
                <div className="company">Company</div>
                <ul>
                    <li className={home}><a href="#" onClick={()=>{navigate("/")}}>Home</a></li>
                    <li className={about}><a href="#" onClick={()=>{navigate("/about")}}>About us</a></li>
                    <li className={home} onClick={()=>{navigate("/")}}><a href="#services">Our services</a></li>
                    <li className={home} onClick={()=>{navigate("/")}}><a href="#portfolio">Portfolio</a></li>
                    <li className={contact}><a href="#" onClick={()=>{navigate("/contact")}}>Contact us</a></li>
                </ul>
            </div>

            <div className="f-top-3">
                <div className="social-media">Social Media</div>
                <div className="sm-app">
                    <a href="#"><FontAwesomeIcon className='med-app' icon={faInstagram} /></a>
                    <a href="https://web.facebook.com/hauslawncare" target='_blank'><FontAwesomeIcon className='med-app' icon={faFacebookF} /></a>
                </div>
            </div>

            <p className="copyright">&copy;{new Date().getFullYear()} All Rights Reserved By Haus Lawn Care.</p>
        </div>
    )
}

export default Footer;
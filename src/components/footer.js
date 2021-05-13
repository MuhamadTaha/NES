import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faSchool, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className='container'>
                    <div class="row justify-content-center">

                        <div class="col-md-3 col-11 contact-us">
                            <h4> Contact Us </h4>
                            <div class="contact-us-element">
                                <FontAwesomeIcon icon={faSchool}> </FontAwesomeIcon>
                                <p> Nile Egyptian Schools </p>
                            </div>

                            <div class="contact-us-element">
                                <FontAwesomeIcon icon={faMapMarkerAlt}> </FontAwesomeIcon>
                                <p> 27 Mossadak, Dokki, Giza, Egypt </p>
                            </div>

                            <div class="contact-us-element">
                                <FontAwesomeIcon icon={faPhoneAlt}> </FontAwesomeIcon>
                                <p> 02 33389870 </p>
                            </div>

                            <div class="contact-us-element">
                                <FontAwesomeIcon icon={faEnvelope}> </FontAwesomeIcon>
                                <p> admission@nes.moe.edu.eg </p>
                            </div>
                        </div>

                        <div class="col-md-3 col-11 brief">
                            <h4> NES Brief </h4>
                            <p> Our vision is to play a leading role in transforming teaching &emp; learning culture through providing innovative cutting-edge pedagogical (teaching and learning) approaches and use of partnerships, and technology. </p>
                        </div>

                        <div class="col-md-3 col-11 partners">
                            <h4> NES Partners </h4>
                            <img src="https://i.ibb.co/KDBxBvT/cambridge.jpg" alt="Nile Egyptian School" />

                        </div>

                        <div class="col-md-3 col-11 contact-us">
                            <h4> Keep in Touch </h4>
                            <div class="footer-social">
                                <a href="https://www.facebook.com/nesofficial1" target="_blank">
                                    <FontAwesomeIcon icon={faFacebookF}> </FontAwesomeIcon>
                                </a>
                                <a href="https://www.instagram.com/nesofficial1/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram}> </FontAwesomeIcon>
                                </a>
                                <a href="https://www.youtube.com/" target="_blank">
                                    <FontAwesomeIcon icon={faYoutube}> </FontAwesomeIcon>
                                </a>
                                <a href="https://www.linkedin.com" target="_blank">                                     <FontAwesomeIcon icon={faLinkedinIn}> </FontAwesomeIcon>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
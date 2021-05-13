import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faSchool, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { useTranslation } from "react-i18next";

function Footer() {

    const { t } = useTranslation();
    return (
        <footer>
            <div className='container'>
                <div class="row justify-content-center">

                    <div class="col-md-4 col-11 contact-us">
                        <h4> {t('footer_contact_title')} </h4>
                        <div class="contact-us-element">
                            <FontAwesomeIcon icon={faSchool}> </FontAwesomeIcon>
                            <p> {t('footer_contact_school_name')} </p>
                        </div>

                        <div class="contact-us-element">
                            <FontAwesomeIcon icon={faMapMarkerAlt}> </FontAwesomeIcon>
                            <p> {t('footer_contact_address')} </p>
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

                    <div class="col-md-5 col-11 brief">
                        <h4>{t('footer_brief_title')}</h4>
                        <p>{t('footer_brief_desc')} </p>
                    </div>

                    <div class="col-md-3 col-11 contact-us">
                        <h4> {t('footer_touch_title')} </h4>
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
                            <a href="https://www.linkedin.com" target="_blank">
                                <FontAwesomeIcon icon={faLinkedinIn}> </FontAwesomeIcon>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}


export default Footer;
import React from 'react';
import { useTranslation } from "react-i18next";

function About_us() {

    const { t } = useTranslation();
    return (
        <section id='about-us' >
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='about-part col-12'>
                        <h3 className='sec_title'> {t('about_brief_title')} </h3>
                        <p className='sec-desc'> {t('about_brief_desc_1')} </p>
                        <p className='sec-desc'> {t('about_brief_desc_2')} </p>
                        <p className='sec-desc'> {t('about_brief_desc_3')} </p>
                        <p className='sec-desc'> {t('about_brief_desc_4')} </p>
                        <p className='sec-desc'> {t('about_brief_desc_5')} </p>
                    </div>

                    <div className='about-part col-12'>
                        <h3 className='sec_title'> {t('about_vision_title')} </h3>
                        <p className='sec-desc'> {t('about_vision_desc')} </p>
                    </div>

                    <div className='about-part col-12'>
                        <h3 className='sec_title'> {t('about_message_title')} </h3>
                        <p className='sec-desc'> {t('about_message_desc')} </p>
                    </div>

                    <div className='about-part col-12'>
                        <h3 className='sec_title'> {t('about_educational_system_title')} </h3>
                        <p className='sec-desc'> {t('about_educational_system_desc_main')} </p>
                        <ul className='sec-list'>
                            <li> {t('about_educational_system_desc_1')} </li>
                            <li> {t('about_educational_system_desc_2')} </li>
                            <li> {t('about_educational_system_desc_3')} </li>
                            <li> {t('about_educational_system_desc_4')} </li>
                            <li> {t('about_educational_system_desc_5')} </li>
                            <li> {t('about_educational_system_desc_6')} </li>
                            <li> {t('about_educational_system_desc_7')} </li>
                        </ul>
                    </div>

                    <div className='about-part col-12'>
                        <h3 className='sec_title'> {t('about_competitive_features_title')} </h3>
                        <ul className='sec-list'>
                            <li> {t('about_competitive_features_desc_1')} </li>
                            <li> {t('about_competitive_features_desc_2')} </li>
                            <li> {t('about_competitive_features_desc_3')} </li>
                            <li> {t('about_competitive_features_desc_4')} </li>
                            <li> {t('about_competitive_features_desc_5')} </li>
                            <li> {t('about_competitive_features_desc_6')} </li>
                            <li> {t('about_competitive_features_desc_7')} </li>
                            <li> {t('about_competitive_features_desc_8')} </li>
                            <li> {t('about_competitive_features_desc_9')} </li>
                            <li> {t('about_competitive_features_desc_10')} </li>
                        </ul>

                    </div>

                    <div className='about-part col-12'>
                        <h3 className='sec_title'> {t('about_certificate_title')} </h3>
                        <p className='sec-desc'> {t('about_certificate_desc_main')} </p>
                        <p className='sec-desc'> {t('about_certificate_desc_1_time')} </p>
                        <ul className='sec-list'>
                            <li> {t('about_certificate_desc_1_name')} </li>
                        </ul>
                        <p className='sec-desc'> {t('about_certificate_desc_2_time')} </p>
                        <ul className='sec-list'>
                            <li> {t('about_certificate_desc_2_name')} </li>
                        </ul>
                    </div>

                    <div className='about-part col-12'>
                        <h3 className='sec_title'> {t('about_school_grade_title')} </h3>
                        <p className='sec-desc'> {t('about_school_grade_desc_main')} </p>
                        <ul className='sec-list'>
                            <li> {t('about_school_grade_desc_1')} </li>
                            <li> {t('about_school_grade_desc_2')} </li>
                            <li> {t('about_school_grade_desc_3')} </li>
                            <li> {t('about_school_grade_desc_4')} </li>
                        </ul>
                    </div>

                    <div className='about-part col-12'>
                        <h3 className='sec_title'> {t('about_ministry_approval_title')} </h3>
                        <p className='sec-desc'> {t('about_ministry_approval_desc')} </p>
                    </div>

                    <div className='about-part col-12'>
                        <h3 className='sec_title'> {t('about_curriculum_title')} </h3>
                        <p className='sec-desc'> {t('about_curriculum_desc')} </p>
                    </div>

                    <div className='about-part col-12'>
                        <h3 className='sec_title'> {t('about_teachers_title')} </h3>
                        <p className='sec-desc'> {t('about_teachers_desc_1')} </p>
                        <p className='sec-desc'> {t('about_teachers_desc_2')} </p>
                    </div>

                    <div className='about-part col-12'>
                        <h3 className='sec_title'> {t('about_facilities_title')} </h3>
                        <p className='sec-desc'> {t('about_facilities_desc_main')} </p>
                        <ul className='sec-list'>
                            <li> {t('about_facilities_desc_1')} </li>
                            <li> {t('about_facilities_desc_2')} </li>
                            <li> {t('about_facilities_desc_3')} </li>
                            <li> {t('about_facilities_desc_4')} </li>
                            <li> {t('about_facilities_desc_5')} </li>
                            <li> {t('about_facilities_desc_6')} </li>
                        </ul>
                    </div>

                    <div className='about-part col-12'>
                        <h3 className='sec_title'> {t('about_apply_title')} </h3>
                        <p className='sec-desc'> {t('about_apply_desc')} </p>
                        <a href='http://nes.moe.edu.eg/' target='_blank'> http://nes.moe.edu.eg </a>
                    </div>

                </div>
            </div>
        </section>
    )
}


export default About_us;
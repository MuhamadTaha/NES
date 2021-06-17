import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";

function School_Branch(props) {

    const { t } = useTranslation();

    const schoolData = props.location.clickedSchoolData

    var schoolId = 1

    if (schoolData !== undefined) {
        schoolId = props.location.clickedSchoolData.id
    }

    return (
        <section id='school-branch'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-10 row'>
                        <div className='col-6'>
                            <img src="https://i.ibb.co/dM86q1Z/NES-Logo.png" alt="NES-Logo" border="0" />
                        </div>
                        <div className='col-6'>
                            <h2 className='sec_title'> {t(`school_name_${schoolId}`)}  </h2>
                            <p className='sec-desc'> {t(`school_desc_${schoolId}`)}  </p>
                            <ul className='sec-list'>
                                <li> {t('0_school_details_0')} </li>
                                <li> {t('0_school_details_0')} </li>
                                <li> {t('0_school_details_0')} </li>
                                <li> {t('0_school_details_0')} </li>
                                <li> {t('0_school_details_0')} </li>
                                <li> {t('0_school_details_0')} </li>
                                <li> {t('0_school_details_0')} </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default School_Branch;
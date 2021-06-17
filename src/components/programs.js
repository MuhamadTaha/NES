import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";

function Programs(props) {

    const { t } = useTranslation();

    const progData = props.location.clickedProgData

    var progId = 1

    if (progData !== undefined) {
        progId = props.location.clickedProgData.id
    }

    return (
        <section id='programs'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-10 row'>
                        <div className='col-6'>
                            <img src="https://i.ibb.co/C2Qcvqt/MFOM.png" alt="NES-Logo" border="0" width='80%' />
                        </div>
                        <div className='col-6'>
                            <h2 className='sec_title'>{t('0_programs_0')} {t(`nav_title_3_sub_${progId}`)}  </h2>
                            <p className='sec-desc'> {t(`nav_title_3_sub_${progId}_desc`)}  </p>
                            <ul className='sec-list'>
                                <li> {t('0_details_0')} </li>
                                <li> {t('0_details_0')} </li>
                                <li> {t('0_details_0')} </li>
                                <li> {t('0_details_0')} </li>
                                <li> {t('0_details_0')} </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Programs;
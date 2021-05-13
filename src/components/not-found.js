import React from 'react';
import { useTranslation } from "react-i18next";

function NotFound() {
    const { t } = useTranslation();

    return (
        <section id='not-found'>
            <div className='container'>
                <h3>{t('error_title')}</h3>
                <p>{t('error_message')}</p>
            </div>
        </section>
    )
}

export default NotFound;

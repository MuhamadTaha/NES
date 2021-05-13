import React, { Component } from 'react';
import { useTranslation } from "react-i18next";

function Header() {
    const { t } = useTranslation();
    return (
        <header>
            <div className='container'>
                <h3> {t('about_brief_title')} </h3>
            </div>
        </header>
    )
}


export default Header;
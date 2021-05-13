import React, { Component } from 'react';
import Header from './header.js';
import { useTranslation } from "react-i18next";

function Home_Sections() {
    const { t } = useTranslation();
        return (
            <section id='home'>
                <div className='container'>
                    <h1> {t('home_text')} </h1>
                    <Header />
                </div>
            </section>
        )
    }


export default Home_Sections;
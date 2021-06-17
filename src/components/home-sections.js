import React, { Component } from 'react';
import Header from './header.js';
import { useTranslation } from "react-i18next";

function Home_Sections() {
    const { t } = useTranslation();
    return (
        <section id='home'>
            <div className='container'>

                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://i.ibb.co/z5p8Vqh/slider1.jpg" alt="school-1" border="0" width='100%' />
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.ibb.co/2ZQ9HwQ/slider2.jpg" alt="school-1" border="0" width='100%' />
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.ibb.co/1GSHdz5/slider3.jpg" alt="school-1" border="0" width='100%' />
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.ibb.co/fSNh0BL/slider4.jpg" alt="school-1" border="0" width='100%' />
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.ibb.co/x77wdCh/slider6.jpg" alt="school-1" border="0" width='100%' />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                <h1 className='sec_title'> {t('home_text')} - {t('footer_contact_school_name')} </h1>

                <Header />
            </div>
        </section>
    )
}


export default Home_Sections;
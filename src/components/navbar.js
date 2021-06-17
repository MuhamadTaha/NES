import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube, faLinkedinIn, faInstagram, } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link, withRouter } from 'react-router-dom'

import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from 'js-cookie'

const GlobalIcon = ({ width = 20, height = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16" >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
  </svg>
);

export default withRouter(function Navbar({ location }) {
  const { t } = useTranslation();
  const languages = [
    {
      code: "en",
      name: "English",
      country_code: "gb",
      direction: "ltr"
    },
    {
      code: "ar",
      name: "العربية",
      country_code: "eg",
      direction: "rtl"
    },
  ];

  const currentLanguageCode = cookies.get('i18next') || 'en';
  const currentLanguage = languages.find(l => l.code === currentLanguageCode);

  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    const { pathname } = location;
    setCurrentPath(pathname)

    document.body.dir = currentLanguage.direction || 'ltr'
    var sections = document.querySelector('section')
    var header = document.querySelector('header')
    var footer = document.querySelector('footer')

    if (document.body.dir === 'rtl') {
      if (sections != null) { sections.classList.add('ar-text'); }
      if (header != null) { header.classList.add('ar-text'); }
      if (footer != null) { footer.classList.add('ar-text'); }
      document.getElementById('lang-modify-1').classList.add('ar-text');
      document.getElementById('margin-modify').classList.add('mr-auto');
      document.getElementById('margin-modify').classList.remove('ml-auto');
    } else {
      if (sections != null) { sections.classList.remove('ar-text') }
      if (header != null) { header.classList.remove('ar-text') }
      if (footer != null) { footer.classList.remove('ar-text') }
      document.getElementById('lang-modify-1').classList.remove('ar-text')
      document.getElementById('margin-modify').classList.add('ml-auto');
      document.getElementById('margin-modify').classList.remove('mr-auto');
    }

  }, [currentLanguage, document.body.dir, location.pathname]);

  return (
    <div className="nav-container" id="lang-modify-1">

      <div id="top-nav">
        <div className="container">
          <div className="d-flex justify-content-between">

            <div class="nav-data">
              <p class="nav-slogan"> {t('nav_slogan')} </p>
            </div>

            {/*
            <div class="nav-Social d-flex">
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
 */}
            <div className="dropdown d-flex">
              <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" > <GlobalIcon /> </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {languages.map(({ code, name, country_code }) => (
                  <li key={country_code}>
                    <button className="dropdown-item" onClick={() => i18next.changeLanguage(code)} disabled={code === currentLanguageCode} >
                      <span className={`flag-icon flag-icon-${country_code}`}> </span> {name}
                    </button>
                  </li>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="d-flex justify-content-between">

            <div>
              <Link to="/" class="nav-link"><img src="https://i.ibb.co/dM86q1Z/NES-Logo.png" width="80px" /></Link>
            </div>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto" id='margin-modify'>
                <li class="nav-item active">

                  <Link to="/" class="nav-link"> {t('nav_title_0')} </Link>
                </li>

                <li class="nav-item">
                  <NavLink to="/about" class="nav-link"> {t('nav_title_1')} </NavLink>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> {t('nav_title_2')} <span> <FontAwesomeIcon icon={faChevronDown} ></FontAwesomeIcon></span> </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown" >
                    <a class="dropdown-item" href="#">{t('nav_title_2_sub_1')}</a>
                    <a class="dropdown-item" href="#">{t('nav_title_2_sub_2')}</a>
                    <a class="dropdown-item" href="#">{t('nav_title_2_sub_3')}</a>
                  </div>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> {t('nav_title_3')} <span><FontAwesomeIcon icon={faChevronDown} ></FontAwesomeIcon> </span> </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">

                    <Link class="dropdown-item" to={{
                      pathname: '/Programs',
                      clickedProgData: {
                        name: t('nav_title_3_sub_1'),
                        desc: t('nav_title_3_sub_1_desc'),
                        id: 1
                      }
                    }} exact > {t('nav_title_3_sub_1')} </Link>

                    <Link class="dropdown-item" to={{
                      pathname: '/Programs',
                      clickedProgData: {
                        name: t('nav_title_3_sub_2'),
                        desc: t('nav_title_3_sub_2_desc'),
                        id: 2
                      }
                    }} exact > {t('nav_title_3_sub_2')} </Link>

                    <Link class="dropdown-item" to={{
                      pathname: '/Programs',
                      clickedProgData: {
                        name: t('nav_title_3_sub_3'),
                        desc: t('nav_title_3_sub_3_desc'),
                        id: 3
                      }
                    }} exact > {t('nav_title_3_sub_3')} </Link>

                    <Link class="dropdown-item" to={{
                      pathname: '/Programs',
                      clickedProgData: {
                        name: t('nav_title_3_sub_4'),
                        desc: t('nav_title_3_sub_4_desc'),
                        id: 4
                      }
                    }} exact > {t('nav_title_3_sub_4')} </Link>

                  </div>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" > {t('nav_title_4')} <span> <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon> </span> </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item" to={{
                      /* pathname: `/school-branch/${t('school_name_1')}`,*/
                      pathname: '/school-branch',
                      clickedSchoolData: {
                        name: t('school_name_1'),
                        desc: t('school_desc_1'),
                        id: 1
                      }
                    }} exact > {t('school_name_1')} </Link>

                    <Link class="dropdown-item" to={{
                      pathname: '/school-branch',
                      clickedSchoolData: {
                        name: t('school_name_2'),
                        desc: t('school_desc_2'),
                        id: 2
                      }
                    }} exact > {t('school_name_2')} </Link>

                    <Link class="dropdown-item" to={{
                      pathname: '/school-branch',
                      clickedSchoolData: {
                        name: t('school_name_3'),
                        desc: t('school_desc_3'),
                        id: 3
                      }
                    }} exact > {t('school_name_3')} </Link>

                    <Link class="dropdown-item" to={{
                      pathname: '/school-branch',
                      clickedSchoolData: {
                        name: t('school_name_4'),
                        desc: t('school_desc_4'),
                        id: 4
                      }
                    }} exact > {t('school_name_4')} </Link>

                    <Link class="dropdown-item" to={{
                      pathname: '/school-branch',
                      clickedSchoolData: {
                        name: t('school_name_5'),
                        desc: t('school_desc_5'),
                        id: 5
                      }
                    }} exact > {t('school_name_5')} </Link>

                    <Link class="dropdown-item" to={{
                      pathname: '/school-branch',
                      clickedSchoolData: {
                        name: t('school_name_6'),
                        desc: t('school_desc_6'),
                        id: 6
                      }
                    }} exact > {t('school_name_6')} </Link>

                    <Link class="dropdown-item" to={{
                      pathname: '/school-branch',
                      clickedSchoolData: {
                        name: t('school_name_7'),
                        desc: t('school_desc_7'),
                        id: 7
                      }
                    }} exact > {t('school_name_7')} </Link>

                    <Link class="dropdown-item" to={{
                      pathname: '/school-branch',
                      clickedSchoolData: {
                        name: t('school_name_8'),
                        desc: t('school_desc_8'),
                        id: 8
                      }
                    }} exact > {t('school_name_8')} </Link>

                    <Link class="dropdown-item" to={{
                      pathname: '/school-branch',
                      clickedSchoolData: {
                        name: t('school_name_9'),
                        desc: t('school_desc_9'),
                        id: 9
                      }
                    }} exact > {t('school_name_9')} </Link>

                    <Link class="dropdown-item" to={{
                      pathname: '/school-branch',
                      clickedSchoolData: {
                        name: t('school_name_10'),
                        desc: t('school_desc_10'),
                        id: 10
                      }
                    }} exact > {t('school_name_10')} </Link>

                    <Link class="dropdown-item" to={{
                      pathname: '/school-branch',
                      clickedSchoolData: {
                        name: t('school_name_11'),
                        desc: t('school_desc_11'),
                        id: 11
                      }
                    }} exact > {t('school_name_11')} </Link>

                    <Link class="dropdown-item" to={{
                      pathname: '/school-branch',
                      clickedSchoolData: {
                        name: t('school_name_12'),
                        desc: t('school_desc_12'),
                        id: 12
                      }
                    }} exact > {t('school_name_12')} </Link>

                    <Link class="dropdown-item" to={{
                      pathname: '/school-branch',
                      clickedSchoolData: {
                        name: t('school_name_13'),
                        desc: t('school_desc_13'),
                        id: 13
                      }
                    }} exact > {t('school_name_13')} </Link>

                    <Link class="dropdown-item" class="dropdown-item" to={{
                      pathname: '/school-branch',
                      clickedSchoolData: {
                        name: t('school_name_14'),
                        desc: t('school_desc_14'),
                        id: 14
                      }
                    }} exact > {t('school_name_14')} </Link>

                  </div>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" > {t('nav_title_5')} <span> <FontAwesomeIcon icon={faChevronDown} ></FontAwesomeIcon> </span> </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#"> {t('nav_title_5_sub_1')} </a>
                    <a class="dropdown-item" href="#"> {t('nav_title_5_sub_2')} </a>
                  </div>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> {t('nav_title_6')} <span> <FontAwesomeIcon icon={faChevronDown} ></FontAwesomeIcon> </span> </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#"> {t('nav_title_6_sub_1')} </a>
                    <a class="dropdown-item" href="#"> {t('nav_title_6_sub_2')} </a>
                    <a class="dropdown-item" href="#"> {t('nav_title_6_sub_3')} </a>
                    <a class="dropdown-item" href="#"> {t('nav_title_6_sub_4')} </a>
                    <a class="dropdown-item" href="#"> {t('nav_title_6_sub_5')} </a>
                    <a class="dropdown-item" href="#"> {t('nav_title_6_sub_6')} </a>
                    <a class="dropdown-item" href="#"> {t('nav_title_6_sub_7')} </a>
                    <a class="dropdown-item" href="#"> {t('nav_title_6_sub_8')} </a>
                  </div>
                </li>

                <li class="nav-item">
                  <NavLink to="/" class="nav-link">{t('nav_title_7')}</NavLink>
                </li>

              </ul>
            </div>

          </div>
        </div>
      </nav>
    </div >
  );
});


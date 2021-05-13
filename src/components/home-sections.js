import React, { Component } from 'react';
import Header from './header.js';

class Home_Sections extends Component {
    render() {
        return (
            <div>
                <div className='home'>
                    <div className='container'>
                        <h1> Home </h1>
                        <Header />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home_Sections;
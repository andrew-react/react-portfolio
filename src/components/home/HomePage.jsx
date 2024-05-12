import React, { Component } from 'react';
import './../../styles/home.css';

export class HomePage extends Component {
  render() {
    return (
        <section>

            <div className='promo-about-block'>
                <div className='text-block'>
                    <h1>Hi, my name is Andrey</h1>
                    <h3>a front-end developer</h3>
                    <h5>JUNIOR</h5>
                </div>
                <button>
                    Download CV
                </button>
            </div>

            <div className='skills-block'>
                <div className='text-block'>
                    <span className='title'>Front-end</span>
                    <span className='skills'>HTML, CSS, JavaScript, React JS, TypeScript, NPM</span>
                </div>
            </div>

        </section>
    )
  }
};

export default HomePage;
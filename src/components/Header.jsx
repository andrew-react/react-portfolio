import React, { Component } from 'react'
import './../styles/header.css';
import HomePage from './home/HomePage';
import ProjectsPage from './projects/ProjectsPage';
import ContactsPage from './contacts/ContactsPage';
import { IoIosSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import { MdOutlineLanguage } from "react-icons/md";

export class Header extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isDark: false
        }

        this.changeTheme = this.changeTheme.bind(this)
    }

  render() {
    return (
      <header>

        <div className='logo-block'>
            <span>
                <span className='logo-react-word'>React</span>
                <span className='logo-portfolio-word'>portfolio</span>
            </span>
        </div>

        <div className='nav-block'>
            <ul>
                <li>
                    <span className='header-btn' onClick={() => {this.props.switchPage(<HomePage />)}}>Home</span>
                </li>

                <li>
                    <span className='header-btn' onClick={() => {this.props.switchPage(<ProjectsPage />)}}>Projects</span>
                </li>

                <li>
                    <span className='header-btn' onClick={() => {this.props.switchPage(<ContactsPage />)}}>Contacts</span>
                </li>

                <li className='adaptive'>
                    <div className='language-block' onClick={() => {this.props.changeLanguage()}}>
                        <span>{this.props.siteLanguage ? 'Ru' : 'En'}</span>
                        <MdOutlineLanguage className='lang-icon' size={22} />
                    </div>
                </li>

                <li>
                    <div className={this.state.isDark ? 'dark-theme-block light-slider' : 'dark-theme-block dark-slider'}>
                        <div className={this.state.isDark ? 'night-theme-btn' : 'light-theme-btn'} onClick={() => {this.changeTheme()}}>
                            {this.state.isDark === false ? <IoIosSunny className='theme-icon' color='whitesmoke' size={26}/> : null || this.state.isDark === true ? <IoMdMoon color='whitesmoke' className='theme-icon' size={26} /> : null}
                        </div>
                    </div>
                </li>
            </ul>
        </div>

      </header>
    )
  }

  changeTheme() {
    this.setState({isDark: !this.state.isDark})
  }
};

export default Header;
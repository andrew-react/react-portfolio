import React, { Component } from 'react';
import './../styles/footer.css';
import { SlSocialVkontakte, SlSocialGithub } from "react-icons/sl";
import { PiTelegramLogoLight } from "react-icons/pi";

export class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vkActive: false,
            tgActive: false,
            gitActive: false,
            onHover: 'black'
        }
    }

  render() {
    return (
        <footer>

            <div className='icons-block'>
                {/* eslint-disable-next-line */}
                <a rel='noreferrer' target='_blank' href='https://vk.com/zxc887'><SlSocialVkontakte 
                    size={36} 
                    color='white' 
                    className='icon' />
                </a>
                {/* eslint-disable-next-line */}
                <a rel='noreferrer' target='_blank' href='https://t.me/cursed_zxc887'><PiTelegramLogoLight 
                    size={36} 
                    color='white' 
                    className='icon' />
                </a>
                {/* eslint-disable-next-line */}
                <a rel='noreferrer' target='_blank' href={null}><SlSocialGithub 
                    size={36} 
                    color='white' 
                    className='icon' />
                </a>
            </div>

            <div className='copyright-block'>
                &copy; Все права защищены.
            </div>

        </footer>
    )
  }
};

export default Footer;
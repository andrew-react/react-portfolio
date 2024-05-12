import React, { Component } from 'react';
import './../../styles/contacts.css';

export class ContactsPage extends Component {
  render() {
    return (
      <section className='contacts-section'>
        <div className='contacts-title-block'>
            <span>Contacts</span>
        </div>
        <div className='contacts-block'>
            <ul>
                <li className='title'>Full name:</li>
                <li className='info'>Andrey Samarov</li>
                <li className='title'>E-mail:</li>
                <li className='info'>andrewmurphy1082@gmail.com</li>
                <li className='title'>Phone number:</li>
                <li className='info'>+7(952)633-10-82</li>
            </ul>
        </div>
      </section>
    )
  }
}

export default ContactsPage
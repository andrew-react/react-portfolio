import React, { Component } from 'react';
import './styles/reset.css';
import './styles/common.css';
import Header from './components/Header';
import HomePage from './components/home/HomePage';
import Footer from './components/Footer';
import './styles/adaptive.css';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRu: false,
      currentPage: <HomePage />
    }

    this.switchPage = this.switchPage.bind(this)
    this.changeLanguage = this.changeLanguage.bind(this)
  }

  render() {
    return (
      <>
        <Header changeLanguage={this.changeLanguage} siteLanguage={this.state.isRu} switchPage={this.switchPage} />
        {this.state.currentPage}
        <Footer />
      </>
    )
  }

  switchPage(page) {
    this.setState({currentPage: page})
  }

  changeLanguage() {
    this.setState({isRu: !this.state.isRu})
  }

};

export default App;

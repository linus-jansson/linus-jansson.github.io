import './assets/css/style.css';
import React from 'react';


import Header from './components/Header'
import Footer from './components/Footer'
import Work from './components/Work'
import Skills from './components/Skills'
import Contact from './components/Contact'



class App extends React.Component {
  constructor() {
    super();
    this.state = { isHovered: false };
    // bind toggleHover function to this
    this.toggleHover = this.toggleHover.bind(this);
  }
  
  toggleHover() {
    // change hover to !hover
    this.setState(prevState => ({isHovered: !prevState.isHovered}));
  }

  render()
  {
    return (
      <div className="App">
        <Header />
        <Skills/>
        <Work/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}



export default App;

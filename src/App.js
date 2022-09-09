import './App.css';
import React from 'react';


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
        <header className="App-header">
          <h3>Made By Linus Jansson</h3>
          <p>Want to get in contact with me?</p>
          <div onMouseOver={() => this.setState({isHovered: true})} onMouseOut={() => this.setState({isHovered: false}) } >
            { this.state.isHovered ?
                <a className="App-link" 
                href="mailto:contact@limpan.dev" 
                target="_blank" 
                rel="noopener noreferrer">
                    contact@limpan.dev
                </a> :
                <a className="App-link" 
                    href="mailto:contact@limpan.dev" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    Mail me!
                </a>
            }
            
          </div>
        </header>
      </div>
    );
  }
}



export default App;

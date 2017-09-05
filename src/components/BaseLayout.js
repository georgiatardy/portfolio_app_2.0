import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {NavLink} from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <div>
        <header>
           <div className="link"><NavLink to="/">Landing</NavLink></div>
           <div className="link"><NavLink to="/Home">Home</NavLink></div>
           <div className="link"><NavLink to="/Portfolio">Portfolio</NavLink></div>
           <div className="link"><NavLink to="/Contact">Contact</NavLink></div>
           <div className="link"><NavLink to="/References">References</NavLink></div>
        </header>
           <section className="body">
           {this.props.children}
           </section>
        <footer>
           <a href="https://www.georgiatardyart.com">Fine Art || Design</a>
           <a href="https://www.instagram.com/georgiatardyart/">Instagram</a>
           <a href="https://www.facebook.com/georgiatardyart">Facebook</a>
           <a href="https://www.linkedin.com/in/georgiatardyartist/">Linkedin</a>
        </footer>
     </div>

    );
  }
}

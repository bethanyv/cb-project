import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MoviePageComponent } from './components/Pages/MoviePageComponent';
import { IntlProvider } from 'react-intl';
import { defaultMessages } from './lib/intl/messages/messages';

function App() {
  return (
    <IntlProvider locale="en" key='en' messages={defaultMessages}>
      <div className="cb-app">
        <div className="cb-header">
          <div className='cb-banner'>
            <img src={logo} className="cb-logo" alt="logo" />
            <p className='cb-title'>The Cam and Bethany Page</p>
          </div>
        </div>
        <div className='cb-main-content'>
          <MoviePageComponent />
        </div>
      </div>
    </IntlProvider>
  );
}

export default App;

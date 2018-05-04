import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AppBar from './components/AppBar';
import Footer from './components/Footer';

/* 
  Try to change theme prop to "light".
  Also "dark" theme is default theme.
*/

const App = () => {
  return (
    <div>
      <AppBar
        transparent={true}
        theme="dark"
        menuItems={
          [
            {
              title: "Signal Empowering",
              href: "/signal_empowering"
            }, {
              title: "Produkte",
              href: "/products"
            }, {
              title: "Support",
              href: "/support"
            }, {
              title: "Blog",
              href: "/blog"
            }
          ]
        }
      />
      <div style={{paddingTop: "48px"}}>
        {/*Some content here*/}
        <Footer
          theme="dark"
          menuItems={
            [
              {
                href: "/datenschutz",
                title: "Datenschutz"
              }, {
                href: "/nutzungsbestimmungen",
                title: "Nutzungsbestimmungen"
              }, {
                href: "/impressum",
                title: "Impressum"
              }
            ]
          }
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
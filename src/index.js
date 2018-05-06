/* Styles bundle */
import './stylesheets/main.css';

import React from 'react';
import ReactDOM from 'react-dom';

import AppBar from './components/AppBar';
import Footer from './components/Footer';
import SubBar from './components/SubBar';

/* 
  Try to change theme prop to "light".
  Also "dark" theme is default theme.
*/

const App = () => {
  return (
    <div>
      <AppBar
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
        <SubBar
          theme={"light"}
          menuItems={[
            {
              iconName: "map",
              title: "SES"
            }, {
              iconName: "pi",
              title: "PiBoard"
            }, {
              iconName: "drift",
              title: "Drift"
            }, {
              iconName: "dashboard",
              title: "Timeswipe"
            }, {
              iconName: "tap",
              title: "Zubehör"
            }
          ]}
        />
        <SubBar
          theme={"dark"}
          menuItems={[
            {
              iconName: "copy",
              title: "Significance"
            }, {
              iconName: "smooth",
              title: "Denoise"
            }
          ]}
        />
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
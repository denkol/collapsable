/* Styles bundle */
import './stylesheets/main.css';

import React from 'react';
import ReactDOM from 'react-dom';

import AppBar from './components/AppBar';
import Footer from './components/Footer';
import SubBar from './components/SubBar';
import ProductMenu from './components/ProductMenu';
import Btn from './components/Btn';

import test_bg from './bg.png';

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

      <div style={{paddingTop: "48px", height: "3000px"}}>
        {/*Some content here*/}
        
        <ProductMenu
          theme="dark"
          isSticky={true}
          actionBtn={<Btn text="Kaufen" />}
          title={ {text: "SES", href: "/ses" } }
          menuItems={[
            {
              title: "Überblick", 
              href: "/uberblick", 
              isDisabled: true
            }, {
              title: "Technische Daten", 
              href: "/technische_daten", 
              isDisabled: false
            } 
          ]}
        />

        <div style={{backgroundSize: "cover", backgroundImage: `url(${test_bg})`, height: "500px", width: "100%" }}></div>
        
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
              title: "Significance",
              
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
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppBar from './components/AppBar';
import Collapsable from './components/Collapsable';

const App = () => {
  return (
    <div>
      <AppBar
        theme="light"
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
        {/*Content here*/}
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
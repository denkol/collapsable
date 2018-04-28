import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Collapsable from './components/Collapsable';

const items = [
  {
    id: 0,
    title: "Frequently Asked Questions",
    titleSize: "32px",
    expandIcon: true,
    fullwidthBorder: true,
    content: [
      {
        id: 2,
        title: "What is the iPhone Upgrade Program?",
        titleSize: "14px",
        expandIcon: true,
        border: true,
        content: (
          <div>
            <p>The iPhone Upgrade Program is the easiest way to get a new iPhone every year, as well as the security and protection of AppleCare+. You can purchase iPhone 8, iPhone 8 Plus, or iPhone X with the iPhone Upgrade Program on apple.com, using the Apple Store app, or at an Apple Store.</p>
            <a href="/">Learn more about the iPhone Upgrade Program</a>
          </div>
        ),
      },
      {
        id: 3,
        title: "I’m already part of the iPhone Upgrade Program. How do I upgrade my current iPhone?",
        titleSize: "14px",
        expandIcon: false,
        border: true,
        content: ( 
          <div>
            <p>The iPhone Upgrade Program is the easiest way to get a new iPhone every year, as well as the security and protection of AppleCare+. You can purchase iPhone 8, iPhone 8 Plus, or iPhone X with the iPhone Upgrade Program on apple.com, using the Apple Store app, or at an Apple Store.</p>
            <a href="/">Learn more about the iPhone Upgrade Program</a>
          </div>
        )
      },
    ],
  },
  {
    id: 1,
    title: "Frequently Asked Questions #2",
    titleSize: "32px",
    content: <Collapsable border={true} />,
    expandIcon: true,
    border: false,
    fullwidthBorder: true
  }
];

const RenderList = (items) => {
  return items.map(item => {

    //Saving our content
    let content = item.content;

    //Is it array?
    if(content.length >= 1) { 
      content = RenderList(content);
    } 

    //Render our layout
    return (
      <React.Fragment key={item.id}>
        <Collapsable {...item} content={content} />
      </React.Fragment>
    )}
  );
};


const App = () => {
  return (
    <div style={{display:'flex'}}>
      {/*
        You can add any styles to parent component
        <Collapsable /> always will be fluid width.
      */}
      <div style={{width:'50%', padding: '0 20px'}}>
        {RenderList(items)}
      </div>
      <div style={{width:'50%', backgroundColor: 'pink', height: '20px'}} />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {


  componentDidMount() {

  }

  render() {
    // console.log(x);
    return (
      <div className="myapp-body" style = {{background: `url('/bgimg1.jpg')`, backgroundSize: "cover"}}>
      <div>
        <div className="heading">
          Abhijit Patel<br />
        </div>
        <div className="app-content">
          <div className="row">
          <div className="col-1">
            <a target='_blank' href="https://www.linkedin.com/in/abhijit-patel-9247a7111/"><img src="/linkedin-logo.png"/></a>
            <a target='_blank' href="https://github.com/devAbnull"><img src="/github-logo.png"/></a>
            <a target='_blank' href="https://twitter.com/devAbnull"><img src="/twitter-logo-button.png"/></a>
            <a target='_blank' href="mailto:abhijitdev9@gmail.com"><img src="/close-envelope.png"/></a>
          </div>
          <div className="col-11">
            Hey there!!<br />
            I am an undergrad from DA-IICT (Dhirubhai Ambani Institute of Information and Communication Technology).<br />
            I am frontend developer with ReactJS as my favorite tool. I have been using it for more than a year now.<br />
            Previously I was using python as my major language for development. I was developing UI modules and major UI twerks for Sugar Labs.
            I have completed my GSoC during summer 2016 for Sugar Labs. Then became mentor in the following GSoC'17. I was also the part of mentor team during Google Code In (Dec 2016) for Sugar Labs as well.
          </div>
          </div>
          <div className="text-align-right">
            Resume: <a href="/Resume_Abhijit_Patel.pdf"><img src="/resume.png" /></a>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;

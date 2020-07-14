import React, {Component} from "react";


import "bootstrap/dist/css/bootstrap.min.css";

import '@front10/landing-page-book/dist/themes/default/index.css';

import Footer from "@front10/landing-page-book/dist/components/Footer";

const sections = [
  {
    sections: [
      {
        name: "Products",
        url: "#products"
      },
     
    ]
  },
  { 
    sections: [
      {
        name: "About",
        url: "#about"
      },
    ]
  },
  {
    sections: [
      {
        name: "Contact",
        url: "#contact"
      },
    ]
  }
];
export default class App extends Component {
    render() { 
        return (      
            <div className="wrap" >     
                <div className ="footer bg-dark">
                    <div className="container">                 
                    <Footer
                        copyright="shOpnOw, Inc"
                        sections={sections}
                        socialUrl="https://vivek-shopnow-netlify.com"
                        socials={["facebook", "linkedin", "google", "twitter"]}
                    />
                    </div>
                </div>
            </div>
                )};
                }

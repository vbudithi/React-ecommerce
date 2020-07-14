import React from 'react';
import "../App.css";

export default function Title({name, title}) {
        return (
            <div className="row">
                <div className="col-10 mx-auto my-2 text-center text-tiltle">
                  <h1 className ="font-weight-bold">
                    <div className="title">
                    {name} {title}        
                     </div>     
                     <hr />     
                  </h1>
                </div>
            </div>
        ); 
}



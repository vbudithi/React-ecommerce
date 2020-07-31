import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import { ButtonContainer , Button } from './Button';


const Navbar = () => {
    return (
     <div className= "container">
      <nav className ="navbar navbar-expand-lg navbar-white bg-white px-sm-0 mb-6 ">
                <Link to ='/'>
                   <img src={logo} alt ="store" className="navbar-brand" />
                </Link>
              <ul className="navbar-nav align-items-center">
                  <li className="nav-item ml-5">
                      <Link to ="/" className="nav-link">
                          <Button primary>
                               PRODUCTS
                          </Button>                   
                      </Link>
                  </li>       
                  <li className="nav-item ml-5">
                      <Link to ="/about" className="nav-link">
                          <Button>                            
                              ABOUT
                          </Button>
                      </Link>
                  </li>        
                  <li className="nav-item ml-5">
                      <Link to ="/contact" className="nav-link">
                          <Button>                            
                              CONTACT
                          </Button>
                      </Link>
                  </li>        

              </ul>
              <Link to ='/cart' className="ml-auto">
                <ButtonContainer>
                  <span className = "mr-2">
                      <i className="fas fa-shopping-cart"/>
                  </span>                      
                    Cart
                </ButtonContainer>
              </Link>
              
       </nav>
    </div>
    );
};


//Responsive MobileNavbar

const MobileList = () => {
    const [active, setActive]= useState(false)
     return(
         <>  <Link to ='/'>
         <img src={logo} alt ="store" className="navbar-brand" />
      </Link>
             <Button
                  onClick = {() => {
                       setActive(!active);
                  }}
             > 
                <i className="fa fa-bars" aria-hidden="true" >
                   &ensp;  MENU
                 </i>
                 
             </Button>
             {active && <MobileNavbar />}
         </>

     )
}
const MobileNavbar = () => {

 return(
        <nav>
            <div className="container">
                <Link to ="/" className="nav-link">
                    <p className="listStyle">
                        PRODUCTS       
                    </p>             
                </Link>
                <Link to ="/about" className="nav-link">   
                    <p className="listStyle">          
                        ABOUT
                    </p>  
                </Link>
                <Link to ="/contact" className="nav-link">      
                    <p className="listStyle">       
                        CONTACT
                    </p> 
                </Link>
                <Link to ='/cart' className="nav-link"> 
                    <p className="listStyle">            
                         CART
                    </p> 
                </Link>   
           
            </div>
        </nav>
 );

}
 const List = () => {
    const [isMobile,setIsMobile] = useState(
            window.matchMedia("(max-width:790px)").matches  
         );
     
         useEffect(()=>{
             window.addEventListener('resize',() =>{
                 setIsMobile(window.matchMedia("(max-width:790px)").matches);
             })
         })
        return(
            <nav>
                  {isMobile ? <MobileList /> : <Navbar />}     
            </nav>
        );
    };
    
    export default List;
import React, {Component} from 'react';
import{Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/contactus/Contact';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

class App extends Component {
  render() {
  return (
       <React.Fragment>
           <Navbar />
            <Switch>   
            <Route exact path="/" component = {ProductList} />            
             <Route path="/details" component = {Details} />    
             <Route path ="/cart" component ={Cart} />
             <Route path ="/about" component ={About}/>
             <Route path ="/contact" component ={Contact}/>
             <Route path="/Footer" component ={Footer}/>
             <Route component ={Default} />
            </Switch>
       </React.Fragment>
    );
   }
 }
export default App;

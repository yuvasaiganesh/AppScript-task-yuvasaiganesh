
    import React from 'react';
    import ProductsGrid from './components/ProductGrid';
    import Navbar from './components/Navbar';
    import "./App.css"
    import Footer from './components/Footer';
    import {Helmet} from "react-helmet";
    
    
    
    
    
    const App = () => (
      <div className='app'>
        <Helmet>
            <title>AppScript Home Page</title>
            <meta name="description" content="Home & Products Component" />
        </Helmet>
        <Navbar />
      <ProductsGrid />
      <Footer/>
      </div>
    )
    
    export default App;
  
    
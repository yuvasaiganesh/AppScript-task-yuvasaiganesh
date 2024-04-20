
    import React from 'react';
    import ProductsGrid from './components/ProductGrid';
    import Navbar from './components/Navbar';
    import "./App.css"
    import Footer from './components/Footer';
    
    
    
    
    
    const App = () => (
      <div className='app'><Navbar />
      <ProductsGrid />
      <Footer/>
      </div>
    )
    
    export default App;
  
    
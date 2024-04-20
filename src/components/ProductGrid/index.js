
    import Products from "../Products"
    
    import "./index.css"
    import { useState } from "react";
    
    
    
    
    const ProductsGrid =()=>{
    
        
    const [filters,setFilters]=useState(false)

    const [men, setMens] = useState(false);
    const [women, setWomen] = useState(false);
    const [jewellery, setJewellery] = useState(false);
    const [electronics, setElectronics] = useState(false);
    const [all, setAll] = useState(true);

        const toShowfilters=()=>{
            setFilters(prev=>(!prev))
            
            
        }
        const toMens = () => {
            setMens((prev) => !prev);
            setAll(false)
        };
    
        const toJewellery = () => {
            setJewellery((prev) => !prev);
            setAll(false)
        };
    
        const toWomens = () => {
            setWomen((prev) => !prev);
            setAll(false)
        };
    
        const toElectronics = () => {
            setElectronics((prev) => !prev);
            setAll(false)
        };
        const toAll = () => {
            setAll((prev) => !prev);
            setElectronics(false)
            setJewellery(false)
            setMens(false)
            setWomen(false)
        };
        console.log(all)
   
    return (
        
    
    
    <div className="PrductGrid">
        <div className="PrductGridDesc">
            <h1>DISCOVER OUR PRODUCTS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    
        <div className="filterSortSection">
    
            <div className="filterSection">{filters ?
                
              <button onClick={toShowfilters}>Hide Filters</button> :
              <button onClick={toShowfilters}>Show Filters</button>
            }
            </div>
    
            <select className="SortSection">
                    <option>Recommended</option>
                    <option>Newest First</option>
                    <option>Popular</option>
                    <option>Price: High to Low</option>
                    <option>Price: Low to High</option>
    
            </select>
    
        </div>

        <div className="productsDetails">
            {filters && <aside>
                <div className="labelSection">
            <label htmlFor="mens" >Mens Clothing</label>
            <input id="mens" type="checkbox" checked={men}
                                onChange={toMens}/>
            </div>

            <div className="labelSection">
            <label htmlFor="Womens">Womens Clothing</label>
            <input id="Womens" type="checkbox" checked={women}
                                onChange={toWomens}/>
            </div>
             
            <div className="labelSection">
            <label htmlFor="electro">Electronics</label>
            <input id="electro" type="checkbox" checked={electronics}
                                onChange={toElectronics}/>
            </div>
 
            <div className="labelSection">
            <label htmlFor="jewel">Jewels</label>
            <input id="jewel" type="checkbox" checked={jewellery} onChange={toJewellery}/>
            </div>
             
            <div className="labelSection">
            <label htmlFor="all">All</label>
            <input id="all" type="checkbox" checked={all} onChange={toAll}/>
            </div>

        </aside> }

        
            <Products menData={men} womensData={women} electroData={electronics} jewellData={jewellery} allData={all}/> 
           
                
               
              
        </div>

       
        
        
    </div>
    
    
    )
    }
    export default ProductsGrid
    
    
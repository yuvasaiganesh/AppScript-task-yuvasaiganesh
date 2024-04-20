import { useState, useEffect } from "react";
import axios from "axios";
import { FcLike } from "react-icons/fc";
import "./index.css"

const Products = (props) => {
    const [menproducts, setMensProducts] = useState([]);
    const [womenproducts, setWomenProducts] = useState([]);
    const [electronicsproducts, setElectronicsProducts] = useState([]);
    const [jewelleryproducts, setJewelleryProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState([]);
    const [finalData, setFinalData] = useState([]);

    const { menData, womensData, jewellData, electroData, allData } = props;

    const getProducts = async () => {
        const promises = [];

        if (jewellData) {
            promises.push(
                axios.get(`https://fakestoreapi.com/products/category/jewelery`)
                    .then(response => setJewelleryProducts(response.data))
                    .catch(error => console.error('Error fetching products:', error))
            );
        } else {
            setJewelleryProducts([]); 
        }

        if (allData) {
            promises.push(
                axios.get(`https://fakestoreapi.com/products/`)
                    .then(response => setTotalProducts(response.data))
                    .catch(error => console.error('Error fetching products:', error))
            );
        } else {
            setJewelleryProducts([]); 
        }


        if (menData) {
            promises.push(
                axios.get(`https://fakestoreapi.com/products/category/men's clothing`)
                    .then(response => {setMensProducts(response.data); console.log(response.data)})
                    .catch(error => console.error('Error fetching products:', error))
            );
        } else {
            setMensProducts([]); 
        }

        if (womensData) {
            promises.push(
                axios.get(`https://fakestoreapi.com/products/category/women's clothing`)
                    .then(response => setWomenProducts(response.data))
                    .catch(error => console.error('Error fetching products:', error))
            );
        } else {
            setWomenProducts([]); 
        }

        if (electroData) {
            promises.push(
                axios.get(`https://fakestoreapi.com/products/category/electronics`)
                    .then(response => setElectronicsProducts(response.data))
                    .catch(error => console.error('Error fetching products:', error))
            );
        } else {
            setElectronicsProducts([]); 
        }

        await Promise.all(promises);
    };

    useEffect(() => {
        getProducts();
    }, [ menData, womensData, jewellData, electroData, allData ]);

    useEffect(() => {
        const newData = [];
        if (allData) newData.push(...totalProducts);
        if (menData) newData.push(...menproducts);
        if (womensData) newData.push(...womenproducts);
        if (jewellData) newData.push(...jewelleryproducts);
        if (electroData) newData.push(...electronicsproducts);
        setFinalData(newData);
        console.log(newData)
    }, [menproducts, womenproducts, jewelleryproducts, electronicsproducts, totalProducts]);

    return (
    
       <div className="productsSection">
           {finalData ? finalData.map(product => (
             <div key={product.id}  className="product-card">
              
                 <img src={product.image} alt={product.title} />
                 <p className="productTitle">{product.title}</p>
                 <div className="acoountSection">
                 <p>Signin or create account to see pricing</p>
                 <FcLike/>
                 </div>
                     
                     </div>
                     )) : <h1 className="loading">Loading....</h1>}
                 
               
             </div>
             )
           
};

export default Products;

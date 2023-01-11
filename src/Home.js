import{useState}from "react";
import {data}from "./data";
import Cosmetics from "./Cosmetics";
import Buttons from "./Buttons";
import Slider from "./Slider";
import Basket from "./Basket";
import './App.css';

function Home() {
  const [product,setProduct] = useState(data);
  const searchCosmetics = (searchTerm) =>{
  const allCosmetics = data.filter(element => element.searchTerm === searchTerm);
  setProduct(allCosmetics);
  }
  return(
    <div>
      <div className="main-container">
        <h2 className="title">
          Free Standart Shipping </h2>
      </div>
          <div >
          <Basket/>
          </div>
      <Buttons  filteredCosmetics = {searchCosmetics}/>
      <Cosmetics allCosmetics = {product}/>
      <div className="container">
    <Slider />
    
 </div>
    </div>
  )
}

export default Home;

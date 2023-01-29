import {useState} from 'react';
import './App.css';
import {data} from './data';


function Basket(){
    const [item,setItem] = useState(data);
    
    
    return(
        <div>
        <div className='title-basket'>
            <h5> Basket Subtotal :  {item.length}</h5>
            <button onClick ={() =>setItem([])}>Delete All</button> 
        </div>
        
        </div>

    )
}
export default Basket;
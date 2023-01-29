import {useState} from "react";


function Cosmetics({allCosmetics}){

   

     const [showMore,setShowMore] = useState(false);
     const showMoreClick =(element) =>{
        element.showMore =!element.showMore
        setShowMore(!showMore)
     }


    return(
        <div className="product">
            {allCosmetics.map((element => {
                const {id,productName,description,price,image,showMore} = element;
                
                return(
                   <div className="product-card" key={id}>
                        <img src={image} width="400px" height="500px" alt="cosmetics"/>
                        <div className="card-info" >
                            <h3>{productName}</h3>
                            <h4>${price}</h4>
                            <p>{showMore ? description : description.substring(0,100)  +"...."}
                            <button className="btn-show" onClick = {()=> showMoreClick(element)}>  {showMore ? "Show less":"Show more"} </button>                             
                            </p> 
                                                   
                        </div>
                    </div>
                )
            }))}
        </div>
    )
    
}
export default Cosmetics;
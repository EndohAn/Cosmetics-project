function Buttons({filteredCosmetics}){
    return(
         <div className="main-container">
            <button onClick ={()=> filteredCosmetics("mascara")} className="change">Mascara</button>
            <button onClick ={()=> filteredCosmetics("powder")} className="change">Powder</button>
            <button onClick ={()=> filteredCosmetics("lipstick")} className="change">Lipstick</button>
            <button onClick ={()=> filteredCosmetics("eyeshadow")} className="change">Eyeshadow</button>
            
        </div>
    )
}
export default Buttons;
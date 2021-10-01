import React from 'react'
import '../Styling/index2.css'

const ITEMS=(props)=> {
    
    const {Title,img,Phone,Price,Qty}=props.item

        
        return (
            <div className="body">
                <div  className="cart-item" >
                    <img className="pic" src={img}/>
                </div>

                <div className="cart-item-middle" >
                    <h3>{Title}</h3>
                    <div>Phone number:{Phone}</div>
                    <div>Price:{Price}</div>
                    <div>Qty:{Qty}</div>

                </div>
                <div className="cart-item-actions">
                <img onClick={()=>props.Increament(props.item)} className="img" src="https://img.icons8.com/ios/2x/plus--v2.gif"/>
                <img  onClick={()=>props.Decreament(props.item)} className="img" src="https://img.icons8.com/pastel-glyph/2x/minus--v2.gif"/>
                <img  onClick={()=>props.Delete(props.item)} className="img" src="https://img.icons8.com/ios/2x/delete--v3.gif"/>
                    
                </div>
            </div>
        )
    
}
export default ITEMS

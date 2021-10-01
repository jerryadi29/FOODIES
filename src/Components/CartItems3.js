import React from 'react'
import '../Styling/index2.css'
const CartItems3=(props)=>{
    
      
        const {Price,title,img,Phone,Qty}=props.item;
      
        return (
            
            <div  className="body">
                <div className="cart-item">
               
                    <img className="pic" src={img}/>
                </div>
                <div className='cart-item-middle' >
                    <h3>{title}</h3>
                    <div>Phone:{Phone}</div>
                    <div>Price:{Price}</div>
                    <div>Qty:{Qty}</div>

                    <div className="cart-item-actions">
                    <img onClick={()=>props.Increament(props.item)} className="img"  src="https://img.icons8.com/ios/2x/plus--v2.gif"/>
                    <img onClick={()=>props.Decreament(props.item)} className="img"  src="https://img.icons8.com/pastel-glyph/2x/minus--v2.gif"/>
                    <img onClick={()=>props.delete(props.item,props.item.id)} className="img"  src="https://img.icons8.com/ios/2x/delete--v3.gif"/>
                    </div>
                </div>
            </div>
        )
    }

export default CartItems3


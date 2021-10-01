import React from 'react'
import CartItems3 from './CartItems3'


 const Wrapper=(props)=> {
    const {Products}=props
    
  return(
      <div className="cart">
                {
                    Products.map( (item)=>{
                        console.log(item)
                        return <CartItems3   
                        item={item}
                        key={Products.id} 
                        Increament={props.Increament} 
                        Decreament={props.Decreament} 
                        delete={props.delete}
                        />
                    } )
                }
            </div>
        )
}

export default  Wrapper




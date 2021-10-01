import React from 'react';
import ITEMS from './ITEMS';


const Cart=(props)=>{

        const{Products}=props
       
        return (
            <div>
               {

            Products.map( (item)=>{

            return < ITEMS 
            item={item} 
            key={Products.id} 
            Increament={props.Increament}  
            Decreament={props.Decreament} 
            Delete={props.Delete} 
         />} )

                                    }
            </div>
        )
    
}
export default Cart


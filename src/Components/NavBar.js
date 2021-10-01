import React from 'react'
import '../Styling/Nav.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const NavBar = (props)=> {
    return ( 
        <div>
              <div >
                <ul className="Nav-bar">
                <li><span className="item-count">{props.total}</span><AddShoppingCartIcon  style={{fontSize:80}}className="icon"></AddShoppingCartIcon>
                
                </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar



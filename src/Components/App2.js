import React, { Component } from 'react'
import Navbar2 from './Navbar2'
import Cart from './Cart.js'


export default class App2 extends Component {
    constructor(){
        super()
        this.state={Products:
            [   {Title:"Thali",img:"https://image.shutterstock.com/image-photo/indian-food-thali-north-600w-694601056.jpg",Phone:898223221,Price:100,Qty:0,id:0},
                {Title:"jeera rice",img:"https://image.shutterstock.com/image-photo/cumin-rice-jeera-popular-indian-600w-1785410987.jpg",Phone:898223221,Price:200,Qty:0,id:1},
                {Title:"pullao",img:"https://image.shutterstock.com/image-photo/vegetable-pulao-pilaf-yellow-white-600w-401693401.jpg",Phone:898223221,Price:300,Qty:0,id:2},
                {Title:"biryani",img:"https://image.shutterstock.com/image-photo/biryani-indian-asian-rice-meal-600w-1386851531.jpg",Phone:898223221,Price:200,Qty:0,id:3},
                {Title:"halwa",img:"https://image.shutterstock.com/image-photo/gajar-ka-halwa-carrotbased-sweet-600w-759925777.jpg",Phone:898223221,Price:160,Qty:0,id:4},
                {Title:"veg-biryani",img:"https://image.shutterstock.com/image-photo/indian-vegetable-pulav-biryani-made-600w-1067975957.jpg",Phone:898223221,Price:500,Qty:0,id:5}
            ]

        }
    }
    inc=(props)=>{
        const {Products}=this.state
        console.log(props)
        const id=props.id
        Products.map( (item)=>{

            if(item.id===id){
                item.Qty+=1
                
            }
        } )

        this.setState({
            Products:Products
        })
        
       
        
     }

    dec=(props)=>{
     
        const {Products}=this.state
        if( props.Qty>0){
        const id=props.id 
        Products.map( (item)=>{
            if(item.id===id){
                item.Qty-=1        
            }
        } )

         this.setState({
             Products:Products
         })
        }
     }
     reset=(props)=>{
        

        const {Products}=this.state

       
        const id=props.id 
      

        Products.map( (item)=>{
            if(item.id===id){
                item.Qty=0
            }
        } )

        this.setState({
            Products:Products
        })

     }
     
   count=()=>{

    const {Products}=this.state

    let c=0;

   Products.forEach( (x)=>{
      c=c+x.Qty;
   } )

   return c;

  }
    render() {
        const{Products}=this.state
        return (
            <div className="App2">
                <Navbar2 
                total={this.count()}/>

                <Cart 
            Products={Products} 
            Increament={this.inc}  
            Decreament={this.dec} 
            Delete={this.reset} 
            key={Products.id}/>
                 
            </div>
        )
    }
}

import Wrapper from "./Wrapper"
import NavBar from "./NavBar";
import '../Styling/Nav.css'


import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
  super()
  this.state={
    Products:[
        {Phone:7987806008,
        title:"dosa",
        Price:120,
        Qty:0,
        img:"https://static.toiimg.com/thumb/63841432.cms?width=1200&height=900",
    id:1}
        ,
        {Phone:7987806008,
            title:"Pav bhaji",
            Price:90,
            Qty:0,
            img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2014/10/pav-bhaji-recipe.jpg",
        id:2},
        {Phone:7987806008,
            title:"burger",
            Price:100,
            Qty:0,
           img:"https://www.thespruceeats.com/thmb/vJUFf6L4p8y9Cn_1pE9Z7Ua9uok=/3000x2001/filters:fill(auto,1)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg",
        id:3},
        {Phone:7987806008,
            title:"panner-tikka",
            Price:140,
            Qty:0,
           img:"https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG",
        id:4},
        {Phone:7987806008,
            title:"chowmin",
            Price:70,
            Qty:0,
           img:"https://greenbowl2soul.com/wp-content/uploads/2019/11/veg-chowmein.jpg",
        id:5},

      //   {Phone:7987806008,
      //       title:"pizza",
      //       Price:200,
      //       Qty:0,
      //      img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg?crop=0.668xw:1.00xh;0.233xw,0.00255xh&resize=980:*",
      //   id:6},
      //   {Phone:7987806008,
      //     title:"pulao",
      //     Price:200,
      //     Qty:0,
      //    img:"https://i2.wp.com/vegecravings.com/wp-content/uploads/2016/07/veg-pulao-recipe-step-by-step-instructions.jpg?fit=3840%2C2992&quality=65&strip=all&ssl=1",
      // id:7}

    
    ]
    
}
  }


Inc=(item)=>{

  
  const news=this.state;
  console.log("news:",news)
  const index=news.Products.indexOf(item)
  news.Products[index].Qty+=1
  this.setState({
      Products:news.Products
  })
}

Dec=(item)=>{

  
  const news=this.state;
  const index=news.Products.indexOf(item)
  if (news.Products[index].Qty>0){
      news.Products[index].Qty-=1
      this.setState({
          Products:news.Products
      })

  }
 
}
reset=(item,id)=>{
  const {Products}=this.state;
  const index=Products.indexOf(item)



     if(Products[index].Qty>0){
         Products[index].Qty=0
         this.setState( {

             Products:Products
            } )

     }

     else if (Products[index].Qty<=0){
         const A=Products.filter( (x) => (x.id)!==id );
        this.setState( {

         Products:A
        } )

                             }

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
      
      <div className="App">
      <NavBar
      total={this.count()}
      ></NavBar>
      <Wrapper 
      Products={Products} 
      key={Products.id} 
      Increament={this.Inc} 
      Decreament={this.Dec} 
      delete={this.reset}
      />
    </div>
    )
  }
}




  




  
 

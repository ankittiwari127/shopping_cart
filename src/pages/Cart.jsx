import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const {cart}=useSelector((state)=>state);
  const [totalAmount,setTotalAmount]=useState(0);
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart]); 
  return (
    <div>
      {
        cart.length>0?
        (
          <div className="flex flex-row p-2 mx-auto space-y-18 space-x-5 min-h-[18vh] ">
            <div className="flex flex-col ">
              {
                cart.map((item,index)=>{
                  return <CartItem key={item.id} item={item} itemIndex={index}/>
                })
              }
            </div>
            <div className= "flex flex-col my-8" >
              <div>
                <div>Your cart </div>
                <div> Summary </div>
                <p>
                  <span>Total items:{cart.length}</span>
                </p>
              </div>
              <div>
                <p>Total amount : ${totalAmount}</p>
                <Link to ="/">
                <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in">
                  CheckOut Now
                </button>
                </Link>
               
              </div>
            </div>
          </div>):(
            <div className="flex flex-col text-center items-center">
              <h1>Cart is empty</h1>
              <Link to ={"/"}>
                <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in">Shop Now</button>
              </Link>
            </div>
          )
        
      }
    </div>
  )
};

export default Cart;

import React, { useEffect, useState } from 'react';
import "./Bag.css";
import { FaAnglesLeft } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { closeBagAction } from '../../redux/bagReducer';
import { RiDeleteBin6Line } from "react-icons/ri";
import { clearProductsAction, decreaseProductCountAction, deletProductAction, increaseProductCountAction } from '../../redux/shopingCartReducer';
import bagImage from "./../../images/emptybag.png";
import { GoArrowLeft } from "react-icons/go";
import toast from 'react-hot-toast';

const BagItem = (props) => {
  
  return (
    <>
    <div className="bag-item">
      <div className="bag-item-left">
        <div className={`bag-item-image ${props.bg}`}>
          <img src={props.image} alt="" />
          <span className='bag-image-price'>${props.price}</span>
        </div>
        <div className="bag-item-counter">
          <h3>{props.name}</h3>
          <p>MEN Running Shoes</p>
          <div className='bag-item-counter-inner'>
          <button onClick={props.decfunc}>-</button>
          <span>{props.count}</span>
          <button onClick={props.incFunc}>+</button>
          </div>
        </div>
      </div>
      <div className="bag-item-right">
        <span>${props.price * props.count}</span>
        <RiDeleteBin6Line onClick={props.func} />
      </div>
    </div>
    </>
  )
}




const Bag = () => {
  const [allProductPrice,setAllProductPrice] = useState(0)
  
  let shopingCart = useSelector(state => {
    return state.cart
  })

  let bag = useSelector(state => {
    return state.bag
  })

  let dispatch = useDispatch();

  let bagCloseHandler = () => {
    dispatch(closeBagAction())
  }

  let deletProductHandler = (id) => {
    toast.success("item deleted from Shoping Cart")
    dispatch(deletProductAction(id))
  }

  let increaseProductCountHandler = (id) =>{ 
    toast.success("item Count Increased")
    dispatch(increaseProductCountAction(id))
  }
  let decreaseProductCounterHandler = (id) => {
    toast.success("item Count Decreased")
    dispatch(decreaseProductCountAction(id))
  }

  
  useEffect(() => {
    let currentPrice = 0
    shopingCart.map( item => {
      currentPrice = currentPrice + (item.count * item.price)
      setAllProductPrice(currentPrice)
    } )
    console.log(currentPrice)
  },[shopingCart])
  
  
  let clearBagHandler = () => {
    dispatch(clearProductsAction())
    toast.success("Shoping Cart Cleared Successfuly")
  }
  
  return (
    <>
    <div className={`bag ${bag ? "" : "closed"}`}>
        <div className="bag-inner">
        <div className="bag-header">
        <div className="bag-header-left">
        <FaAnglesLeft onClick={bagCloseHandler} />
        <span>Your shopingCart<span className='bag-item-counter'>{shopingCart.length} Items</span></span>
        </div>
        <div className="bag-header-right">
        <IoCloseSharp onClick={clearBagHandler} />
        </div>
        </div>
        <div className="bag-items">
        {shopingCart.length > 0 ? 
        <>
        {shopingCart.map( item => {
          return <BagItem 
          name={item.name}
          image={item.image} 
          price={item.price} 
          key={item.id} 
          count={item.count} 
          func={() => deletProductHandler(item.id)} 
          incFunc={() => increaseProductCountHandler(item.id)}
          decfunc = {() => decreaseProductCounterHandler(item.id)}
          bg={item.bg}
          />
        })} 
        </>
        
        : 
        <>
          <div className="bag-empty">
            <img src={bagImage} alt="" />
            <button onClick={bagCloseHandler}><GoArrowLeft /> Back To Nike Store</button>
          </div> 
        </>}
        
        </div>

        {shopingCart.length > 0 && 
        <div className="bag-cash-out">
        <div className="bag-cash-out-header">
          <span>SUBTOTAL</span>
          <span>${allProductPrice}</span>
        </div>
        <div className='bag-cash-now'>
          <span>Taxes and Shipping Will Calculate At Shipping</span>
          <button>Check Out</button>
        </div>
        
      </div>}

        </div>
        
    </div>
    </>
  )
}

export default Bag


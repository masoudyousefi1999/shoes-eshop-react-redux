import React, { useEffect,useState  } from 'react';
import "./TopBar.css";
import { useDispatch,useSelector } from 'react-redux';
import logo from "./../../images/logo.png";
import { CiSearch, CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { openBagAction } from '../../redux/bagReducer';

const TopBar = () => {
  const [scroll,setScroll] = useState(false)
  const dispatch = useDispatch()
  const bagHandler = () => dispatch(openBagAction())
  
  const counter = useSelector( state => state.cart)
  
  const scrollHandler = () => {
    if(window.scrollY > 10){
      setScroll(true)
    }else{
      setScroll(false)
    }
  }
  
  useEffect( () => {
    window.addEventListener("scroll", scrollHandler)
    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  },[])
  
  return (
    <>
    <div className={`topbar ${scroll ? "sticky" : ""}`}>
        <div className={`topbar-right ${scroll ? "black" : ""}`}>
            <img src={logo} alt="Nike Logo" />
        </div>
        <div className={`topbar-left ${scroll ? "m-10" : ""}`}>
        <CiSearch className={`topbar-icon ${scroll ? "black-icon" : ""}`}/>
        <CiHeart className={`topbar-icon ${scroll ? "black-icon" : ""}`} />
        <HiOutlineShoppingBag className={`topbar-icon ${scroll ? "black-icon" : ""}`} onClick={bagHandler} />
        {counter.length >0 ? <span className={`shop-counter ${scroll ? "black-counter" : ""}`} onClick={bagHandler}>{counter.length}</span> : false }
        </div>
    </div>
    </>
  )
}


export default TopBar;
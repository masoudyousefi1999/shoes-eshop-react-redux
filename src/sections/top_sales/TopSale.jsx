import React from 'react';
import "./TopSale.css";
import StarIcon from '@mui/icons-material/Star';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAction } from '../../redux/shopingCartReducer';
import toast from 'react-hot-toast';
import { openBagAction } from '../../redux/bagReducer';

const TopSaleBox = props => {
    return(
        <div className={`topsale-box-item ${props.bg}`}>
            <h1 className='topsale-h1'>{props.title}</h1>
            <h2 className='topsale-h2'>MEN Running Shoes</h2>
            <span className='topsale-rating'>
            <span className='topsale-price'>${props.price}</span>
           <div className='topsale-rating-rate'> 
            <StarIcon />
            <span>{props.rating}+</span>
            </div>
            </span>
            <div className='topsale-buy'>
            <LocalMallIcon className='top-sale-bag' onClick={() => props.func(props.id)} />
            <button className='tops-sale-btn' onClick={() => props.funcBuy(props.id)}>Buy Now</button>
            </div>
            <div className='topsale-image'>
                <img src={props.image} alt="" />
            </div>
        </div>
    )
}


const TopSale = () => {
    const allShoes = useSelector(state => state.shoes);
    let filtredShoes = allShoes.filter( shoe => shoe.topSale !== true)
    let dispatch = useDispatch()
    let addProductToCart = id => {
        let findedProduct = allShoes.filter( shoe => shoe.id == id)
        toast.success(`${findedProduct[0].name} add successfuly`)
        dispatch(addProductAction(findedProduct))
    }
    let buyProductHandler = (id) => {
        addProductToCart(id)
        dispatch(openBagAction())
    }
  
    return (
    <>
    <h1 className="topsale-intro">Top Rated Sales</h1>
    <div className="topsale-box">
        
        {filtredShoes.map( shoe => {
            return <TopSaleBox title={shoe.name} price={shoe.price} image={shoe.image} bg={shoe.bg} rating={shoe.rating} key={shoe.id} id={shoe.id} func={addProductToCart} funcBuy={buyProductHandler} />
        })}
    </div>
    </>
  )
}

export default TopSale
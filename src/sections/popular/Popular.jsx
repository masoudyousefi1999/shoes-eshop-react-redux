import React from 'react';
import "./Popular.css";
import StarIcon from '@mui/icons-material/Star';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { addProductAction } from '../../redux/shopingCartReducer';
import { openBagAction } from '../../redux/bagReducer';




const Box = (props) => {
    return (
        <div className="popular-box-item">
        <div className="popular-box-item-left">
            <h1 className='popular-shoes-title'>{props.title}</h1>
            <h2 className='popular-shoes-sub-title'>MEN Running Shoes</h2>
            <div className='popular-price-rating'>
                <span className='popular-price'>${props.price}</span>
                <span className='popular-star'><StarIcon /> <span>{props.rating}</span></span>
            </div>
            <div className="popular-buy">
            <LocalMallOutlinedIcon className='popular-buy-bag' color='action' onClick={() =>  props.func(props.id)} />
            <button className='popular-buy-btn' onClick={() =>  props.funcBuy(props.id)}>Buy Now</button>
            </div>
            <div></div>
        </div>
        <div className="popular-box-item-right">
            <div className="popular-shoes-image">
                <img src={props.image} alt="" />
            </div>
        </div>
    </div>
    )
}




const Popular = () => {
  
    let popularShoes = useSelector(state => state.shoes)
    let filtred = popularShoes.filter(shoe => shoe.topSale == true)
    let dispatch = useDispatch()
    let addProductToCart = (id) => {
        let findedProduct = popularShoes.filter( shoe => shoe.id == id)
        toast.success(`${findedProduct[0].name} add successfuly`)
        dispatch(addProductAction(findedProduct))
    }

    let buyProductHandler = (id) => {
        addProductToCart(id)
        dispatch(openBagAction())
    }

    return (
    <div className="popular">
        <h1 className='popular-intro'>Popular Sales</h1>
        <div className="popular-box">
            {filtred.map( item => {
                return (
                    <Box 
                    title={item.name} 
                    price={item.price} 
                    rating={item.rating} 
                    image={item.image} 
                    key={item.id} 
                    id={item.id} 
                    func={addProductToCart}
                    funcBuy={buyProductHandler}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Popular
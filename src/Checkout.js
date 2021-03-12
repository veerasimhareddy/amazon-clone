import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';

function Checkout() {

    const [ {basket} ] = useStateValue();

    return (
        <div className='checkout'>
           <div className='checkout__left'>
                <img className='checkout_ad' src='https://images-na.ssl-images-amazon.com/images/G/01/img17/prime/other/1053033_us_prime_dex_vxd-1060_DEX_LP_Banner_DT_v1.png' alt='Checkout Ad' />
                <div>
                    <h2 className='checkout__title' > Your Shopping Basket
                    </h2>

                    {
                        basket.map( ( item ) => <CheckoutProduct 
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            /> )
                    }
                </div>
           </div>
           <div className='checkout__right'>
               <Subtotal />
           </div>
        </div>
    )
}

export default Checkout
